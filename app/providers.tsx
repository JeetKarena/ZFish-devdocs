// app/providers.tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';

declare global {
  interface Window {
    __POSTHOG_INITIALIZED__?: boolean;
  }
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname || typeof window === 'undefined') return;

    // Wait for PostHog to be initialized
    const checkAndCapture = () => {
      if (window.__POSTHOG_INITIALIZED__ && posthog.__loaded) {
        try {
          posthog.capture('$pageview', {
            $current_url: pathname,
            pathname,
            search: searchParams.toString(),
            timestamp: new Date().toISOString(),
          });
        } catch (error) {
          // Silently fail
        }
      }
    };

    // Try immediately
    checkAndCapture();

    // If not ready, retry after a short delay
    const timeoutId = setTimeout(checkAndCapture, 100);
    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  // Initialize PostHog on client mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.__POSTHOG_INITIALIZED__) return;

    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (!posthogKey || !posthogHost) {
      return;
    }

    try {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        person_profiles: 'always',
        persistence: 'localStorage+cookie',
        disable_session_recording: false,
        autocapture: true,
        capture_pageview: false,
        loaded: (posthog) => {
          window.__POSTHOG_INITIALIZED__ = true;
          
          posthog.capture('website_visit', {
            url: window.location.href,
            referrer: document.referrer,
            timestamp: new Date().toISOString(),
          });
        },
      });
    } catch (error) {
      // Silently fail in production
      if (process.env.NODE_ENV === 'development') {
        console.error('PostHog initialization failed:', error);
      }
    }
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
