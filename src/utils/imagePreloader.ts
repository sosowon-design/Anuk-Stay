/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PRELOAD_IMAGE_URLS = [
  // Hero Images (Highest Priority)
  "/src/assets/images/cequi_pool_villa_1_1783442590314.jpg",
  "/src/assets/images/cequi_pool_villa_2_1783442617946.jpg",
  "/src/assets/images/cequi_pool_villa_3_1783442630167.jpg",
  "/src/assets/images/anuk_bedroom_hero_1783706667607.jpg",
  "/src/assets/images/anuk_hero_sunset_villa_1786457631691.jpg",

  // Story Images
  "/src/assets/images/anuk_filmic_wine_1786379703140.jpg",
  "/src/assets/images/anuk_terrace_ocean_1786703028591.jpg",
  "/src/assets/images/anuk_hinoki_spa_1786703040764.jpg",
  "/src/assets/images/cequi_pool_villa_4_1783442647864.jpg",
  "/src/assets/images/cequi_pool_villa_5_1783442661152.jpg",

  // Room Stays & Galleries
  "/src/assets/images/anuk_stay_goyo_1783608444060.jpg",
  "/src/assets/images/anuk_stay_heureum_1783608456955.jpg",
  "/src/assets/images/anuk_stay_yeobaek_1783608471205.jpg",
  "/src/assets/images/anuk_heureum_main_1783706680494.jpg",
  "/src/assets/images/anuk_yeobaek_main_1783706695225.jpg",

  // Experiences & Special Amenities
  "/src/assets/images/anuk_exp_pool_1786458966739.jpg",
  "/src/assets/images/anuk_exp_picnic_1786458977876.jpg",
  "/src/assets/images/anuk_exp_hinoki_1786458989499.jpg",
  "/src/assets/images/anuk_exp_wine_1786459002778.jpg",
  "/src/assets/images/anuk_ocean_terrace_view_1786650921027.jpg",
  "/src/assets/images/anuk_acoustic_sunset_1786650266221.jpg",
  "/src/assets/images/anuk_architecture_1785690567512.jpg",
  "/src/assets/images/anuk_architectural_full_1786379742023.jpg",
  "/src/assets/images/anuk_organic_breakfast_basket_1786644457950.jpg",
  "/src/assets/images/anuk_organic_breakfast_new_1786647691176.jpg",
  "/src/assets/images/anuk_privacy_villa_1786379715232.jpg",
  "/src/assets/images/anuk_sensory_spa_1786379726630.jpg"
];

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
