// app/providers.tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';

declare global {
  interface Window {
    __POSTHOG_INITIALIZED__?: boolean;
  }
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize PostHog on client mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.__POSTHOG_INITIALIZED__) return;

    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (!posthogKey) {
      console.error('❌ PostHog API key not found. Set NEXT_PUBLIC_POSTHOG_KEY');
      return;
    }

    if (!posthogHost) {
      console.error('❌ PostHog API host not found. Set NEXT_PUBLIC_POSTHOG_HOST');
      return;
    }

    try {
      console.log('🔄 Initializing PostHog...');
      posthog.init(posthogKey, {
        api_host: posthogHost,
        person_profiles: 'always',
        persistence: 'localStorage+cookie',
        disable_session_recording: false,
        autocapture: true,
        capture_pageview: true, // We'll capture manually
      });

      // Mark as initialized
      window.__POSTHOG_INITIALIZED__ = true;

      // Send initial verification event
      posthog.capture('website_visit', {
        url: window.location.href,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
      });

      console.log('✅ PostHog initialized successfully');
    } catch (error) {
      console.error('❌ PostHog initialization failed:', error);
    }
  }, []);

  // Capture pageviews on route changes
  useEffect(() => {
    if (!pathname || !window.__POSTHOG_INITIALIZED__) return;

    try {
      posthog.capture('$pageview', {
        $current_url: pathname,
        pathname,
        search: searchParams.toString(),
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error('❌ Failed to capture pageview:', error);
    }
  }, [pathname, searchParams]);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
