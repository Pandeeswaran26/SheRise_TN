/**
 * AnimatedSheRiseLogo.js
 * 
 * Premium Live Animated Vector Logo Component for SheRise TN
 * 100% Code-based SVG & CSS animation — no GIF, video, or static raster image.
 * 
 * Features:
 * 1. Symmetrical blooming lotus with independently animated petals that breathe and sway.
 * 2. Gradient shimmer light pass across the petals.
 * 3. Ambient glowing aura and subtle floating stardust particles.
 * 4. Bold SheRise (Deep Purple) TN (Vibrant Magenta) typography & tagline.
 */

export function getAnimatedSheRiseLogo(size = 320, className = 'animated-sherise-logo') {
  return `
    <div class="${className}" style="width: ${size}px; max-width: 100%; aspect-ratio: 1 / 1; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      
      <!-- Ambient Pulsing Aura & Particle Glow Layer -->
      <div class="logo-ambient-aura"></div>
      
      <!-- Master SVG Drawing Layer -->
      <svg 
        class="live-logo-svg" 
        viewBox="0 0 400 420" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="SheRise TN Animated Logo"
      >
        <defs>
          <!-- 1. Royal Gold Crown Gradients -->
          <linearGradient id="crownGoldGrad" x1="160" y1="40" x2="240" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFF3D6" />
            <stop offset="35%" stop-color="#FFD47A" />
            <stop offset="70%" stop-color="#F59E0B" />
            <stop offset="100%" stop-color="#D97706" />
          </linearGradient>

          <linearGradient id="crownPurpleGrad" x1="180" y1="60" x2="220" y2="130" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#7027D9" />
            <stop offset="100%" stop-color="#351080" />
          </linearGradient>

          <radialGradient id="jewelGlow" cx="200" cy="50" r="16" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFFFFF" />
            <stop offset="40%" stop-color="#E72DA7" />
            <stop offset="100%" stop-color="#7027D9" />
          </radialGradient>

          <!-- 2. Lotus Petals Sovereign Gradients -->
          <!-- Central Petal -->
          <linearGradient id="centralPetalGrad" x1="200" y1="120" x2="200" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#E72DA7" />
            <stop offset="40%" stop-color="#C026D3" />
            <stop offset="75%" stop-color="#7027D9" />
            <stop offset="100%" stop-color="#351080" />
          </linearGradient>

          <!-- Inner Left Petal -->
          <linearGradient id="innerLeftPetalGrad" x1="150" y1="140" x2="200" y2="290" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#F472B6" />
            <stop offset="35%" stop-color="#E72DA7" />
            <stop offset="75%" stop-color="#8B2FC9" />
            <stop offset="100%" stop-color="#4A154B" />
          </linearGradient>

          <!-- Inner Right Petal -->
          <linearGradient id="innerRightPetalGrad" x1="250" y1="140" x2="200" y2="290" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#F472B6" />
            <stop offset="35%" stop-color="#E72DA7" />
            <stop offset="75%" stop-color="#8B2FC9" />
            <stop offset="100%" stop-color="#4A154B" />
          </linearGradient>

          <!-- Outer Left Petal (Flaring Wing) -->
          <linearGradient id="outerLeftPetalGrad" x1="90" y1="180" x2="190" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFD47A" stop-opacity="0.9" />
            <stop offset="15%" stop-color="#E72DA7" />
            <stop offset="60%" stop-color="#7027D9" />
            <stop offset="100%" stop-color="#351080" />
          </linearGradient>

          <!-- Outer Right Petal (Flaring Wing) -->
          <linearGradient id="outerRightPetalGrad" x1="310" y1="180" x2="210" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFD47A" stop-opacity="0.9" />
            <stop offset="15%" stop-color="#E72DA7" />
            <stop offset="60%" stop-color="#7027D9" />
            <stop offset="100%" stop-color="#351080" />
          </linearGradient>

          <!-- Base Cradling Leaves -->
          <linearGradient id="baseLeavesGrad" x1="120" y1="280" x2="280" y2="330" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#7027D9" />
            <stop offset="50%" stop-color="#581C87" />
            <stop offset="100%" stop-color="#351080" />
          </linearGradient>

          <!-- Soft Drop Shadow Filter -->
          <filter id="royalGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#7027D9" flood-opacity="0.32" />
          </filter>

          <filter id="crownSparkle" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- 3. AMBIENT GLOW BACKDROP CIRCLE (Rotating/Pulsing) -->
        <g class="ambient-halo-group">
          <circle cx="200" cy="210" r="130" stroke="url(#centralPetalGrad)" stroke-width="1.5" stroke-dasharray="8 12" opacity="0.45" class="halo-ring" />
          <circle cx="200" cy="210" r="145" stroke="#FFD47A" stroke-width="1" stroke-dasharray="4 16" opacity="0.3" class="halo-ring-outer" />
        </g>


        <!-- 5. SYMMETRICAL BLOOMING LOTUS (Independently animated vector petals) -->
        <g class="animated-lotus-flower" filter="url(#royalGlow)">
          
          <!-- Layer A: Outer Left Flaring Petal -->
          <path 
            class="lotus-petal petal-outer-left"
            d="M 200 290 
               C 170 295, 120 270, 92 230 
               C 74 204, 78 174, 98 160 
               C 114 148, 142 165, 160 196 
               C 174 220, 190 265, 200 290 Z" 
            fill="url(#outerLeftPetalGrad)" 
            stroke="#FFD47A" 
            stroke-width="1.2"
          />

          <!-- Layer A: Outer Right Flaring Petal -->
          <path 
            class="lotus-petal petal-outer-right"
            d="M 200 290 
               C 230 295, 280 270, 308 230 
               C 326 204, 322 174, 302 160 
               C 286 148, 258 165, 240 196 
               C 226 220, 210 265, 200 290 Z" 
            fill="url(#outerRightPetalGrad)" 
            stroke="#FFD47A" 
            stroke-width="1.2"
          />

          <!-- Layer B: Mid-Outer Left Petal -->
          <path 
            class="lotus-petal petal-mid-left"
            d="M 200 290 
               C 175 285, 138 250, 126 208 
               C 118 178, 130 152, 148 144 
               C 166 136, 185 160, 192 195 
               C 196 220, 198 265, 200 290 Z" 
            fill="url(#innerLeftPetalGrad)" 
          />

          <!-- Layer B: Mid-Outer Right Petal -->
          <path 
            class="lotus-petal petal-mid-right"
            d="M 200 290 
               C 225 285, 262 250, 274 208 
               C 282 178, 270 152, 252 144 
               C 234 136, 215 160, 208 195 
               C 204 220, 202 265, 200 290 Z" 
            fill="url(#innerRightPetalGrad)" 
          />

          <!-- Layer C: Inner Left Petal (Breathes gently) -->
          <path 
            class="lotus-petal petal-inner-left"
            d="M 200 290 
               C 185 275, 158 236, 156 195 
               C 154 165, 172 144, 185 140 
               C 195 138, 200 162, 200 200 
               C 200 235, 200 270, 200 290 Z" 
            fill="url(#innerLeftPetalGrad)" 
            opacity="0.95"
          />

          <!-- Layer C: Inner Right Petal (Breathes gently) -->
          <path 
            class="lotus-petal petal-inner-right"
            d="M 200 290 
               C 215 275, 242 236, 244 195 
               C 246 165, 228 144, 215 140 
               C 205 138, 200 162, 200 200 
               C 200 235, 200 270, 200 290 Z" 
            fill="url(#innerRightPetalGrad)" 
            opacity="0.95"
          />

          <!-- Layer D: Majestic Central Lotus Spine & Bud (The Sovereign Core) -->
          <path 
            class="lotus-petal petal-center-core"
            d="M 200 290 
               C 188 260, 180 215, 182 175 
               C 184 140, 194 116, 200 114 
               C 206 116, 216 140, 218 175 
               C 220 215, 212 260, 200 290 Z" 
            fill="url(#centralPetalGrad)" 
            stroke="#FFF3D6" 
            stroke-width="1.4"
          />

          <!-- Shimmering Light Sweep Highlight along Central Petal Spine -->
          <path 
            class="petal-shimmer-highlight"
            d="M 200 120 L 200 280" 
            stroke="url(#crownGoldGrad)" 
            stroke-width="2.5" 
            stroke-linecap="round" 
            opacity="0.8"
          />

          <!-- Base Cradling Foundation Ribbon (Leaves supporting the lotus) -->
          <path 
            class="lotus-base-leaves"
            d="M 120 286 
               C 148 316, 175 324, 200 324 
               C 225 324, 252 316, 280 286 
               C 260 304, 232 312, 200 312 
               C 168 312, 140 304, 120 286 Z" 
            fill="url(#baseLeavesGrad)" 
            stroke="#FFD47A" 
            stroke-width="1.2"
          />
        </g>

        <!-- 6. BRAND TYPOGRAPHY: SHERISE TN -->
        <g class="animated-brand-typography">
          <!-- Text: SheRise (Deep Purple) and TN (Vibrant Magenta) rendered as SVG text with crisp metrics -->
          <text x="200" y="375" text-anchor="middle" class="svg-brand-text">
            <tspan fill="#351080" font-family="'Outfit', sans-serif" font-weight="900" font-size="34" letter-spacing="-0.01em">SheRise</tspan>
            <tspan fill="#E72DA7" font-family="'Outfit', sans-serif" font-weight="900" font-size="34" letter-spacing="-0.01em" dx="6">TN</tspan>
          </text>

          <!-- Dividing Lotus Line -->
          <path d="M 110 392 L 186 392" stroke="#E72DA7" stroke-width="1.2" stroke-linecap="round" opacity="0.65" />
          <!-- Mini Central Lotus Glyphs -->
          <path d="M 200 387 C 196 391, 192 393, 188 395 C 194 395, 198 393, 200 391 C 202 393, 206 395, 212 395 C 208 393, 204 391, 200 387 Z" fill="#E72DA7" />
          <path d="M 214 392 L 290 392" stroke="#E72DA7" stroke-width="1.2" stroke-linecap="round" opacity="0.65" />

          <!-- Tagline: "Your safety. Your skills. Your sovereignty." -->
          <text x="200" y="412" text-anchor="middle" fill="#5B21B6" font-family="'Inter', sans-serif" font-weight="600" font-size="11.5" letter-spacing="0.03em" class="svg-tagline-text">
            Your safety. Your skills. Your sovereignty.
          </text>
        </g>

      </svg>
    </div>
  `;
}

// Retain compatibility with older imports
export function getSheRiseExactLogo(size = 320) {
  return getAnimatedSheRiseLogo(size);
}

export function getSheRiseLogoSVG(size = 180) {
  return getAnimatedSheRiseLogo(size);
}
