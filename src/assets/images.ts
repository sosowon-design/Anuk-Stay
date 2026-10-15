/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Auto-import all images in ./images using Vite's eager glob import
// This guarantees that Vite includes ALL images in the production build (dist/assets)
// and generates correct relative URLs for deployment on GitHub Pages or custom domains.
const imageModules = import.meta.glob<{ default: string }>(
  './images/*.{jpg,jpeg,png,webp,svg,JPG,JPEG,PNG}',
  { eager: true }
);

export const images: Record<string, string> = {};

for (const path in imageModules) {
  const filename = path.split('/').pop();
  if (filename) {
    const url = imageModules[path].default;
    images[filename] = url;
    images[`/src/assets/images/${filename}`] = url;
    images[`src/assets/images/${filename}`] = url;
    images[`./assets/images/${filename}`] = url;
    images[`/assets/images/${filename}`] = url;
  }
}

/**
 * Returns the bundled/resolved asset URL for any image filename or path.
 * If not found in bundle, returns the original input.
 */
export function getImageUrl(pathOrFilename: string): string {
  if (!pathOrFilename) return '';
  if (
    pathOrFilename.startsWith('http://') ||
    pathOrFilename.startsWith('https://') ||
    pathOrFilename.startsWith('data:') ||
    pathOrFilename.startsWith('blob:')
  ) {
    return pathOrFilename;
  }
  const filename = pathOrFilename.split('/').pop() || '';
  return images[filename] || images[pathOrFilename] || pathOrFilename;
}
