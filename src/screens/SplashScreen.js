/**
 * SplashScreen.js - SheRise TN Live Animated Splash Screen
 * 
 * Features:
 * - 100% Code-based edge-to-edge layout with full-screen lavender-to-white gradient background.
 * - Zero phone frames, zero fake status bar (no clock, battery, or network icons).
 * - Central placement of the Live Animated SheRise TN Logo using your uploaded master artwork.
 * - Independently animated blooming lotus petals, swaying leaves, hair sheen, and ambient aura.
 * - Subtle animated loading indicator beneath the logo.
 * - Automatic smooth navigation to the next screen upon initialization.
 */

import { getSheRiseAnimatedLogo } from '../components/SheRiseAnimatedLogo.js';
import { getTamilNaduLandscapeSVG } from '../components/TamilNaduLandscape.js';

export function renderSplashScreen(container, onComplete) {
  container.innerHTML = `
    <div class="sherise-master-splash" id="splashScreen">
      
      <!-- 1. Soft Ambient Sky Aura & Gentle Drifting Mist -->
      <div class="sky-ambient-orbs">
        <div class="sky-orb top-left"></div>
        <div class="sky-orb top-right"></div>
        <div class="sky-orb center-soft"></div>
        <div class="sky-mist-overlay"></div>
      </div>

      <!-- 2. Central Logo Stage (Upper-Middle Area) with Unchanged Logo -->
      <div class="splash-center-stage">
        ${getSheRiseAnimatedLogo(410)}
        
        <!-- 3. Loading Progress Bar & “LOADING…” (Beneath Logo) -->
        <div class="splash-loader-dock">
          <div class="loader-track-pill">
            <div class="loader-fill-pill" id="splashLoaderFill"></div>
          </div>
          <span class="loader-caption-text">LOADING…</span>
        </div>
      </div>

      <!-- 4. Tamil Nadu Heritage Landscape (Lower Portion of Screen) -->
      ${getTamilNaduLandscapeSVG()}

    </div>
  `;

  const fillEl = document.getElementById('splashLoaderFill');
  const splashEl = document.getElementById('splashScreen');

  // Trigger smooth progress animation
  requestAnimationFrame(() => {
    if (fillEl) {
      fillEl.style.width = '100%';
    }
  });

  // App initialization duration (~2.5s)
  const SPLASH_DURATION_MS = 2600;

  const timer = setTimeout(() => {
    if (splashEl) {
      splashEl.classList.add('splash-exit-fade');
      setTimeout(() => {
        if (typeof onComplete === 'function') {
          onComplete();
        }
      }, 450);
    } else if (typeof onComplete === 'function') {
      onComplete();
    }
  }, SPLASH_DURATION_MS);

  return () => clearTimeout(timer);
}
