/**
 * TamilNaduLandscape.js
 * 
 * Exact Tamil Nadu Heritage Landscape Background component for SheRise TN.
 * Utilizes the exact high-definition painterly artwork from the reference design:
 * - Distant misty mountain ridges
 * - Warm rising sun with radiant atmospheric glow
 * - Calm reflective lake with specular sunbeam and water ripple reflections
 * - Left bank: Dravidian temple gopuram & native Palmyra / coconut palm groves
 * - Right bank: Majestic 7-tiered grand Dravidian temple gopuram & stately palms
 * - Flowing royal violet and vibrant magenta foreground waves with thin golden borders
 * - Botanical leaf sprigs in bottom-left and bottom-right corners
 */

export function getTamilNaduLandscapeSVG() {
  return `
    <div class="tn-exact-landscape-wrapper" aria-hidden="true">
      <img 
        src="/sherise_exact_landscape_hd.png" 
        alt="Tamil Nadu Heritage Landscape" 
        class="tn-exact-landscape-img"
        loading="eager"
        decoding="sync"
      />
    </div>
  `;
}
