'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { captureParams, getParams } from '@/app/_lib/trackingParams';

export default function TrackingPersistor() {
  const pathname = usePathname();
  const router = useRouter();

  // Capture params from URL on very first load
  useEffect(() => { captureParams(); }, []);

  // Re-inject stored params into URL on every route change
  useEffect(() => {
    const { s1, s2 } = getParams();
    if (!s1 && !s2) return;

    const current = new URLSearchParams(window.location.search);
    let changed = false;

    if (s1 && !current.has('s1')) { current.set('s1', s1); changed = true; }
    if (s2 && !current.has('s2')) { current.set('s2', s2); changed = true; }

    if (changed) {
      router.replace(`${pathname}?${current.toString()}`, { scroll: false });
    }
  }, [pathname, router]);

  return null;
}
