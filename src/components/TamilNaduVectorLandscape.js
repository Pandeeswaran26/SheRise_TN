/**
 * TamilNaduVectorLandscape.js
 * 
 * 100% Code-based, original SVG vector landscape of Tamil Nadu:
 * - Distant misty mountain silhouettes with layered depth
 * - Warm rising sun with radiant pulsing atmospheric aura
 * - Authentic Dravidian temple gopurams on left and right banks (traditional tiered towers with kalasam spires)
 * - Native Palmyra & coconut palm groves with swaying fronds
 * - Gliding birds in the horizon with flapping wings
 * - Flowing royal violet and magenta decorative foreground curves with shimmering gold borders
 * - Botanical leaf flourishes in the bottom corners with gentle breeze sway
 */

export function getTamilNaduVectorLandscapeSVG() {
  return `
    <div class="tn-vector-landscape-container" aria-hidden="true">
      <svg class="tn-vector-landscape-svg" viewBox="0 0 420 860" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Sky Gradient: Soft Lavender to Pale Pink to Warm White -->
          <linearGradient id="vectorSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#E5D3F7"/>
            <stop offset="22%" stop-color="#F2E3FA"/>
            <stop offset="48%" stop-color="#FAF1FD"/>
            <stop offset="75%" stop-color="#F5E4F8"/>
            <stop offset="100%" stop-color="#E8D2F5"/>
          </linearGradient>

          <!-- Sun Aura Radial Gradient -->
          <radialGradient id="sunAuraGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFF3D6" stop-opacity="1"/>
            <stop offset="35%" stop-color="#FED7AA" stop-opacity="0.75"/>
            <stop offset="65%" stop-color="#F472B6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#FAF1FD" stop-opacity="0"/>
          </radialGradient>

          <!-- Distant Mountains Layer 1 (Farthest - Soft Lilac) -->
          <linearGradient id="mountainsFarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#D8B4FE" stop-opacity="0.55"/>
            <stop offset="100%" stop-color="#F3E8FF" stop-opacity="0.2"/>
          </linearGradient>

          <!-- Mid Mountains Layer 2 (Soft Purple/Violet) -->
          <linearGradient id="mountainsMidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#C084FC" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#E9D5FF" stop-opacity="0.35"/>
          </linearGradient>

          <!-- Close Ridge Layer 3 -->
          <linearGradient id="mountainsCloseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#A855F7" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#D8B4FE" stop-opacity="0.25"/>
          </linearGradient>

          <!-- Dravidian Temple Gopuram Silhouettes (Royal Purple) -->
          <linearGradient id="templeGopuramGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#581C87" stop-opacity="0.82"/>
            <stop offset="60%" stop-color="#7E22CE" stop-opacity="0.75"/>
            <stop offset="100%" stop-color="#A855F7" stop-opacity="0.5"/>
          </linearGradient>

          <!-- Palm Trees Gradient -->
          <linearGradient id="palmSilhouetteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#3B0764" stop-opacity="0.88"/>
            <stop offset="100%" stop-color="#6B21A8" stop-opacity="0.65"/>
          </linearGradient>

          <!-- Flowing Base Waves Gradients -->
          <linearGradient id="baseWaveVioletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#7027D9" stop-opacity="0.22"/>
            <stop offset="50%" stop-color="#9333EA" stop-opacity="0.16"/>
            <stop offset="100%" stop-color="#E72DA7" stop-opacity="0.25"/>
          </linearGradient>

          <linearGradient id="baseWaveMagentaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#E72DA7" stop-opacity="0.25"/>
            <stop offset="60%" stop-color="#C026D3" stop-opacity="0.18"/>
            <stop offset="100%" stop-color="#7027D9" stop-opacity="0.28"/>
          </linearGradient>

          <!-- Shimmering Golden Border Gradient -->
          <linearGradient id="landscapeGoldZari" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FBBF24" stop-opacity="0.85"/>
            <stop offset="50%" stop-color="#FDE68A" stop-opacity="1"/>
            <stop offset="100%" stop-color="#F59E0B" stop-opacity="0.85"/>
          </linearGradient>

          <!-- Botanical Leaves Gradient -->
          <linearGradient id="botanicalLeafGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#581C87" stop-opacity="0.75"/>
            <stop offset="50%" stop-color="#7C3AED" stop-opacity="0.65"/>
            <stop offset="100%" stop-color="#A855F7" stop-opacity="0.45"/>
          </linearGradient>
        </defs>

        <!-- 1. FULL BACKGROUND SKY CANVAS -->
        <rect width="420" height="860" fill="url(#vectorSkyGrad)" />

        <!-- 2. RADIANT RISING SUN & ATMOSPHERIC AURA (Positioned in Mid-Upper Horizon) -->
        <g class="tn-vector-sun-group">
          <!-- Outer Pulsing Glow Aura -->
          <circle class="sun-pulsing-aura" cx="210" cy="330" r="130" fill="url(#sunAuraGrad)" />
          <!-- Mid Sun Halo -->
          <circle cx="210" cy="330" r="75" fill="#FED7AA" opacity="0.5" filter="blur(10px)" />
          <!-- Sun Core Disc -->
          <circle class="sun-core-disc" cx="210" cy="330" r="38" fill="#FFFBEB" />
          <circle cx="210" cy="330" r="32" fill="#FEF08A" opacity="0.8" />
        </g>

        <!-- 3. DISTANT TAMIL NADU MOUNTAIN RIDGES (Western Ghats Inspiration) -->
        <!-- Ridge Layer 1 (Farthest) -->
        <path class="tn-mountain-far" 
              d="M0 350 Q60 305 125 328 T260 315 T360 332 T420 320 L420 450 L0 450 Z" 
              fill="url(#mountainsFarGrad)" />

        <!-- Ridge Layer 2 (Mid-distance peaks) -->
        <path class="tn-mountain-mid" 
              d="M0 368 Q75 330 155 352 T295 338 T420 358 L420 460 L0 460 Z" 
              fill="url(#mountainsMidGrad)" />

        <!-- Ridge Layer 3 (Foreground undulating hills) -->
        <path class="tn-mountain-close" 
              d="M0 385 Q90 355 180 374 T330 362 T420 380 L420 480 L0 480 Z" 
              fill="url(#mountainsCloseGrad)" />

        <!-- 4. ANIMATED GLIDING BIRDS IN HORIZON -->
        <g class="tn-gliding-birds-layer">
          <!-- Bird 1 (Center-Left) -->
          <path class="bird-path bird-fly-1" 
                d="M100 240 Q106 234 112 240 Q118 234 124 240" 
                stroke="#581C87" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.75" />
          <!-- Bird 2 (Upper-Right) -->
          <path class="bird-path bird-fly-2" 
                d="M310 215 Q315 210 320 215 Q325 210 330 215" 
                stroke="#4C1D95" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.7" />
          <!-- Bird 3 (Small Distant) -->
          <path class="bird-path bird-fly-3" 
                d="M260 250 Q264 246 268 250 Q272 246 276 250" 
                stroke="#6B21A8" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.6" />
        </g>

        <!-- 5. TRADITIONAL DRAVIDIAN TEMPLE GOPURAMS (Authentic stepped pyramids with Kalasams) -->
        <!-- LEFT BANK TEMPLE GOPURAM -->
        <g class="tn-temple-left" transform="translate(18, 280)">
          <!-- Base Mandapam Sanctuary -->
          <rect x="12" y="90" width="46" height="30" rx="3" fill="url(#templeGopuramGrad)"/>
          <!-- Gate Portal Entrance Arch -->
          <path d="M28 120 L28 102 Q35 96 42 102 L42 120 Z" fill="#E9D5FF" opacity="0.8"/>
          <!-- Tier 1 -->
          <rect x="15" y="75" width="40" height="15" rx="2" fill="url(#templeGopuramGrad)"/>
          <!-- Tier 2 -->
          <rect x="18" y="62" width="34" height="13" rx="2" fill="url(#templeGopuramGrad)"/>
          <!-- Tier 3 -->
          <rect x="21" y="50" width="28" height="12" rx="2" fill="url(#templeGopuramGrad)"/>
          <!-- Tier 4 -->
          <rect x="24" y="40" width="22" height="10" rx="1.5" fill="url(#templeGopuramGrad)"/>
          <!-- Tier 5 (Top Shikhara) -->
          <path d="M26 40 L35 28 L44 40 Z" fill="url(#templeGopuramGrad)"/>
          <!-- 3 Golden Kalasam Spire Pins -->
          <line x1="31" y1="28" x2="31" y2="20" stroke="#FBBF24" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="35" y1="28" x2="35" y2="17" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
          <line x1="39" y1="28" x2="39" y2="20" stroke="#FBBF24" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="35" cy="16" r="1.5" fill="#FBBF24"/>
        </g>

        <!-- RIGHT BANK MAJESTIC 7-TIERED DRAVIDIAN TEMPLE GOPURAM -->
        <g class="tn-temple-right" transform="translate(345, 255)">
          <!-- Base Mandapam Wall -->
          <rect x="8" y="115" width="54" height="35" rx="3" fill="url(#templeGopuramGrad)"/>
          <!-- Main Temple Gateway Portal (Kopuram Vaasal) -->
          <path d="M26 150 L26 128 Q35 120 44 128 L44 150 Z" fill="#E9D5FF" opacity="0.85"/>
          <!-- Tier 1 -->
          <rect x="11" y="99" width="48" height="16" rx="2" fill="url(#templeGopuramGrad)"/>
          <!-- Tier 2 -->
          <rect x="14" y="85" width="42" height="14" rx="2" fill="url(#templeGopuramGrad)"/>
          <!-- Tier 3 -->
          <rect x="17" y="72" width="36" height="13" rx="2" fill="url(#templeGopuramGrad)"/>
          <!-- Tier 4 -->
          <rect x="20" y="60" width="30" height="12" rx="2" fill="url(#templeGopuramGrad)"/>
          <!-- Tier 5 -->
          <rect x="23" y="49" width="24" height="11" rx="1.5" fill="url(#templeGopuramGrad)"/>
          <!-- Tier 6 -->
          <rect x="26" y="39" width="18" height="10" rx="1.5" fill="url(#templeGopuramGrad)"/>
          <!-- Tier 7 Top Vault Barrel (Shikhara) -->
          <path d="M27 39 C27 28 43 28 43 39 Z" fill="url(#templeGopuramGrad)"/>
          <!-- 5 Golden Kalasam Spires (Traditional Gopuram Finials) -->
          <line x1="29" y1="29" x2="29" y2="20" stroke="#FBBF24" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="32" y1="28" x2="32" y2="18" stroke="#FBBF24" stroke-width="1.6" stroke-linecap="round"/>
          <line x1="35" y1="27" x2="35" y2="15" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
          <line x1="38" y1="28" x2="38" y2="18" stroke="#FBBF24" stroke-width="1.6" stroke-linecap="round"/>
          <line x1="41" y1="29" x2="41" y2="20" stroke="#FBBF24" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="35" cy="14" r="1.6" fill="#FBBF24"/>
        </g>

        <!-- 6. NATIVE TAMIL NADU PALM TREES (Palmyra & Coconut Palms) -->
        <!-- Left Palm Group -->
        <g class="tn-palms-left" transform="translate(68, 260)">
          <!-- Tall Graceful Trunk -->
          <path d="M16 140 C18 100 22 60 20 20" stroke="url(#palmSilhouetteGrad)" stroke-width="3.5" stroke-linecap="round" fill="none"/>
          <!-- Palm Fronds Canopy -->
          <path d="M20 20 Q5 12 -12 22" stroke="url(#palmSilhouetteGrad)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <path d="M20 20 Q12 0 4 -12" stroke="url(#palmSilhouetteGrad)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <path d="M20 20 Q30 -4 42 -8" stroke="url(#palmSilhouetteGrad)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <path d="M20 20 Q38 10 52 24" stroke="url(#palmSilhouetteGrad)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <path d="M20 20 Q22 32 18 48" stroke="url(#palmSilhouetteGrad)" stroke-width="2.2" stroke-linecap="round" fill="none"/>
          <!-- Second Shorter Palm -->
          <path d="M42 140 C43 110 40 85 45 55" stroke="url(#palmSilhouetteGrad)" stroke-width="2.8" stroke-linecap="round" fill="none"/>
          <path d="M45 55 Q30 45 20 52" stroke="url(#palmSilhouetteGrad)" stroke-width="2" stroke-linecap="round" fill="none"/>
          <path d="M45 55 Q42 38 48 30" stroke="url(#palmSilhouetteGrad)" stroke-width="2" stroke-linecap="round" fill="none"/>
          <path d="M45 55 Q58 42 68 50" stroke="url(#palmSilhouetteGrad)" stroke-width="2" stroke-linecap="round" fill="none"/>
        </g>

        <!-- Right Palm Group -->
        <g class="tn-palms-right" transform="translate(305, 275)">
          <path d="M25 125 C23 90 20 55 24 20" stroke="url(#palmSilhouetteGrad)" stroke-width="3.2" stroke-linecap="round" fill="none"/>
          <path d="M24 20 Q10 8 -4 16" stroke="url(#palmSilhouetteGrad)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <path d="M24 20 Q20 -2 14 -14" stroke="url(#palmSilhouetteGrad)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <path d="M24 20 Q35 -5 48 -10" stroke="url(#palmSilhouetteGrad)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <path d="M24 20 Q44 12 56 26" stroke="url(#palmSilhouetteGrad)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        </g>

        <!-- 7. FLOWING DECORATIVE FOREGROUND WAVES (Harmonic Saree/Water Curves) -->
        <!-- Wave Layer 1 (Midground Ripple) -->
        <path class="tn-wave-mid" 
              d="M0 450 C90 435 180 460 270 445 C340 432 390 445 420 455 L420 860 L0 860 Z" 
              fill="url(#baseWaveVioletGrad)" />

        <!-- Wave Layer 2 (Flowing Royal Purple Curve with Gold Border) -->
        <path class="tn-wave-front-1" 
              d="M-20 740 C80 710 180 755 280 725 C340 705 385 715 440 735 L440 860 L-20 860 Z" 
              fill="url(#baseWaveMagentaGrad)" />
        <path d="M-20 740 C80 710 180 755 280 725 C340 705 385 715 440 735" 
              stroke="url(#landscapeGoldZari)" stroke-width="2.5" stroke-linecap="round" fill="none"/>

        <!-- Wave Layer 3 (Bottom Flourish with Second Gold Border) -->
        <path class="tn-wave-front-2" 
              d="M-20 790 C90 770 190 815 310 780 C365 765 400 775 440 795 L440 860 L-20 860 Z" 
              fill="url(#baseWaveVioletGrad)" />
        <path d="M-20 790 C90 770 190 815 310 780 C365 765 400 775 440 795" 
              stroke="url(#landscapeGoldZari)" stroke-width="1.8" stroke-dasharray="6, 3" fill="none"/>

        <!-- 8. BOTANICAL LEAF FLOURISHES (Bottom-Left and Bottom-Right Corners) -->
        <!-- Bottom-Left Decorative Leaves -->
        <g class="tn-botanical-leaves-left" transform="translate(10, 770)">
          <path d="M0 70 C15 50 25 25 15 0 C30 20 32 48 20 70 Z" fill="url(#botanicalLeafGrad)"/>
          <path d="M12 70 C30 52 48 30 45 5 C52 28 48 55 32 70 Z" fill="url(#botanicalLeafGrad)" opacity="0.85"/>
          <path d="M28 75 C45 60 62 42 68 20 C68 42 58 65 42 75 Z" fill="url(#botanicalLeafGrad)" opacity="0.7"/>
          <!-- Golden Leaf Vein Lines -->
          <path d="M0 70 Q18 35 15 0" stroke="#FBBF24" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75"/>
          <path d="M12 70 Q38 40 45 5" stroke="#FBBF24" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75"/>
        </g>

        <!-- Bottom-Right Decorative Leaves -->
        <g class="tn-botanical-leaves-right" transform="translate(340, 770)">
          <path d="M70 70 C55 50 45 25 55 0 C40 20 38 48 50 70 Z" fill="url(#botanicalLeafGrad)"/>
          <path d="M58 70 C40 52 22 30 25 5 C18 28 22 55 38 70 Z" fill="url(#botanicalLeafGrad)" opacity="0.85"/>
          <path d="M42 75 C25 60 8 42 2 20 C2 42 12 65 28 75 Z" fill="url(#botanicalLeafGrad)" opacity="0.7"/>
          <!-- Golden Leaf Vein Lines -->
          <path d="M70 70 Q52 35 55 0" stroke="#FBBF24" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75"/>
          <path d="M58 70 Q32 40 25 5" stroke="#FBBF24" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75"/>
        </g>

      </svg>
    </div>
  `;
}
