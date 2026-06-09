'use client';

import { useEffect } from 'react';
import { captureParams } from '@/app/_lib/trackingParams';
import { preloadScripts } from '@/app/_lib/scriptCache';

export default function ScriptPreloader() {
  useEffect(() => {
    captureParams();   // capture s1/s2 before building URLs
    preloadScripts();  // then preload with the correct params
  }, []);
  return null;
}
