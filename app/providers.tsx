// app/providers.tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!posthogKey) {
      console.warn('PostHog key not found. Analytics disabled.');
      return;
    }

    if (!posthog.__loaded) {
      posthog.init(posthogKey, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '',
        person_profiles: 'always', // Create profiles for all users, including anonymous
        persistence: 'cookie',
        loaded: (ph) => {
          // Send verification event
          ph.capture('my event', { property: 'value' });
          if (process.env.NODE_ENV === 'development') {
            ph.debug();
          }
        },
      });
    }
  }, []);

  useEffect(() => {
    if (pathname && posthog.__loaded) {
      posthog.capture('$pageview', {
        pathname,
        search: searchParams.toString(),
      });
    }
  }, [pathname, searchParams]);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
