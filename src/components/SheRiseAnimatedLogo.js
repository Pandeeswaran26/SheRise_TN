/**
 * SheRiseAnimatedLogo.js
 * 
 * Reusable Live Animated Logo Component for SheRise TN
 * Uses the newly added transparent PNG logo as the primary asset.
 * 
 * Animations implemented in code:
 * 1. Independent blooming and closing motion on lotus petals and leaves
 * 2. Moving light shimmer along purple and magenta hair highlights
 * 3. Soft golden light passing along the golden curves
 * 4. Subtle purple glow aura and slow-moving floating particles
 * 5. Smooth logo entrance on initial launch
 * 6. Crisp, undistorted brand text and tagline
 */

export function getSheRiseAnimatedLogo(width = 460, className = 'sherise-live-animated-logo') {
  return `
    <div 
      class="${className} sherise-animated-logo-stage" 
      style="max-width: ${width}px; width: 100%; aspect-ratio: 1011 / 576; position: relative; display: flex; justify-content: center; align-items: center; user-select: none;"
    >
      <!-- 1. Ambient Purple Glow Aura -->
      <div class="logo-ambient-aura-glow"></div>
      
      <!-- 2. Slow-Moving Floating Stardust Particles -->
      <div class="logo-stardust-particles">
        <span class="stardust-dot dot-1"></span>
        <span class="stardust-dot dot-2"></span>
        <span class="stardust-dot dot-3"></span>
        <span class="stardust-dot dot-4"></span>
        <span class="stardust-dot dot-5"></span>
      </div>

      <!-- 3. Primary Logo Master Layer (Your uploaded transparent PNG) -->
      <div class="logo-layer-master">
        <img 
          src="/sherise_official_logo.png" 
          alt="SheRise TN — Your safety. Your skills. Your sovereignty." 
          class="official-master-logo-img"
          loading="eager"
          decoding="sync"
        />
      </div>

      <!-- 4. Independently Animated Blooming Lotus Petals & Leaves Layer -->
      <div class="logo-layer-lotus-bloom" title="Blooming Lotus Petals">
        <img 
          src="/sherise_layer_lotus_petals.png" 
          alt="Blooming Lotus Petals" 
          class="lotus-bloom-img"
        />
      </div>

      <!-- 5. Shimmer Highlights Layer (Hair Highlights & Golden Ribbon Curves) -->
      <div class="logo-layer-shimmers">
        <div class="shimmer-hair-highlight"></div>
        <div class="shimmer-gold-curve"></div>
      </div>

    </div>
  `;
}

// Retain compatibility
export function getSheRiseExactLogo(width = 460) {
  return getSheRiseAnimatedLogo(width);
}

export function getSheRiseLogoSVG(width = 460) {
  return getSheRiseAnimatedLogo(width);
}
