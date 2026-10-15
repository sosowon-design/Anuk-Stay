/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { images } from '../assets/images';

export const PRELOAD_IMAGE_URLS = Array.from(new Set(Object.values(images)));

// In-memory cache set to avoid duplicate loads
const preloadedCache = new Set<string>();

/**
 * Preload critical images into browser memory cache.
 */
export function preloadAllImages(): void {
  if (typeof window === 'undefined') return;

  PRELOAD_IMAGE_URLS.forEach((url, idx) => {
    if (preloadedCache.has(url)) return;
    preloadedCache.add(url);

    // Stagger slightly or load immediately
    const img = new Image();
    img.decoding = 'async';
    // First 5 images (Hero) are eager/high priority
    if (idx < 5 && 'fetchPriority' in img) {
      (img as HTMLImageElement & { fetchPriority?: string }).fetchPriority = 'high';
    }
    img.src = url;
  });
}
