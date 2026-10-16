/**
 * EmpoweredWomanIllustration.js
 * 
 * 100% Code-based, original layered SVG vector illustration of an empowered Tamil woman:
 * - Regal side profile / three-quarters pose symbolizing dignity, courage, and sovereignty.
 * - Flowing royal purple hair with vivid magenta highlights and traditional jasmine flowers.
 * - Warm South Indian skin tone with refined facial features, kohl eye, and red bindi (pottu).
 * - Traditional Tamil Nadu golden jhumka earring that gently sways.
 * - Royal violet and vibrant magenta saree with intricate golden zari border.
 * - Right hand holding a blooming pink and golden lotus flower emitting a radiant aura.
 * - Independently animated CSS classes for breathing, hair breeze, saree flutter, and lotus pulse.
 */

export function getEmpoweredWomanSVG() {
  return `
    <div class="empowered-woman-stage" aria-label="Illustration of an Empowered Tamil Woman">
      <svg class="empowered-woman-svg" viewBox="0 0 360 270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Aura & Glow Gradients -->
          <radialGradient id="womanAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFD700" stop-opacity="0.32"/>
            <stop offset="45%" stop-color="#E72DA7" stop-opacity="0.18"/>
            <stop offset="80%" stop-color="#7027D9" stop-opacity="0.08"/>
            <stop offset="100%" stop-color="#FAF5FF" stop-opacity="0"/>
          </radialGradient>

          <!-- Skin Tone Gradients -->
          <linearGradient id="skinToneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F2C1A2"/>
            <stop offset="50%" stop-color="#DE9F7E"/>
            <stop offset="100%" stop-color="#C58060"/>
          </linearGradient>

          <linearGradient id="skinShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#B87352"/>
            <stop offset="100%" stop-color="#8F4B2D"/>
          </linearGradient>

          <!-- Hair Gradients: Deep Purple to Magenta -->
          <linearGradient id="hairBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1E0538"/>
            <stop offset="40%" stop-color="#3B0764"/>
            <stop offset="75%" stop-color="#581C87"/>
            <stop offset="100%" stop-color="#1E0538"/>
          </linearGradient>

          <linearGradient id="hairMagentaHighlight" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stop-color="#E72DA7"/>
            <stop offset="60%" stop-color="#A21CAF"/>
            <stop offset="100%" stop-color="#701A75"/>
          </linearGradient>

          <!-- Saree Royal Purple & Vibrant Magenta Gradients -->
          <linearGradient id="sareeBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#7027D9"/>
            <stop offset="40%" stop-color="#8B5CF6"/>
            <stop offset="70%" stop-color="#6D28D9"/>
            <stop offset="100%" stop-color="#4C1D95"/>
          </linearGradient>

          <linearGradient id="sareePalluGrad" x1="0%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stop-color="#E72DA7"/>
            <stop offset="50%" stop-color="#9333EA"/>
            <stop offset="100%" stop-color="#6B21A8"/>
          </linearGradient>

          <!-- Golden Zari Border Gradients -->
          <linearGradient id="goldZariGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="35%" stop-color="#F59E0B"/>
            <stop offset="70%" stop-color="#FEF08A"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>

          <!-- Lotus Gradients -->
          <linearGradient id="lotusPinkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#BE185D"/>
            <stop offset="50%" stop-color="#F472B6"/>
            <stop offset="100%" stop-color="#FDF2F8"/>
          </linearGradient>

          <!-- Soft Drop Shadow Filter -->
          <filter id="softShadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#351080" flood-opacity="0.16"/>
          </filter>
        </defs>

        <!-- 1. Ambient Sun-Kissed Halo Glow Behind Head -->
        <circle class="woman-aura-halo" cx="170" cy="115" r="95" fill="url(#womanAura)" />

        <!-- 2. Main Animated Group (Breathing / Floating) -->
        <g class="woman-breathe-container" filter="url(#softShadow)">

          <!-- BACK HAIR FLOW (Cascading behind shoulders) -->
          <g class="woman-hair-back">
            <!-- Long waving purple tresses -->
            <path d="M125 105 C100 130 85 165 92 205 C96 225 110 245 125 255 C115 235 110 205 118 175 C122 158 135 135 142 120 Z" 
                  fill="url(#hairBaseGrad)" />
            <path d="M110 135 C85 160 70 195 78 230 C82 245 92 258 105 265 C95 248 90 225 96 195 C100 170 115 145 125 135 Z" 
                  fill="url(#hairMagentaHighlight)" opacity="0.85" />
            <path d="M140 115 C120 145 112 185 122 225 C128 245 140 260 155 268 C142 250 136 225 138 190 C140 160 150 135 158 120 Z" 
                  fill="url(#hairBaseGrad)" />
          </g>

          <!-- BACK SHOULDER & BLOUSE (Torso Base) -->
          <path d="M190 195 C190 180 200 168 215 162 C230 158 248 165 258 178 L265 230 C240 245 190 245 175 240 Z" 
                fill="url(#sareeBodyGrad)" />

          <!-- NECK & DECOLLETAGE -->
          <path d="M185 120 C182 135 182 152 186 168 C192 172 202 174 214 172 C220 155 220 138 218 122 Z" 
                fill="url(#skinToneGrad)" />
          <!-- Neck shadow under jawline -->
          <path d="M185 122 C190 134 205 138 218 128 C215 138 202 144 188 138 C185 132 184 126 185 122 Z" 
                fill="url(#skinShadowGrad)" opacity="0.35" />

          <!-- GOLDEN NECKLACE (Traditional Haaram) -->
          <path d="M186 156 C195 164 208 165 216 158" stroke="url(#goldZariGrad)" stroke-width="3" stroke-linecap="round" fill="none"/>
          <path d="M189 164 C198 171 206 172 214 166" stroke="url(#goldZariGrad)" stroke-width="1.8" stroke-linecap="round" fill="none"/>
          <circle cx="202" cy="172" r="3" fill="url(#goldZariGrad)" />

          <!-- HEAD & FACIAL PROFILE -->
          <!-- Crown, Ear, Jaw, Chin, Lips, Nose, Brow -->
          <path d="M190 68 
                   C168 70 155 88 158 108 
                   C160 120 168 130 180 134 
                   C192 138 205 138 214 132 
                   C222 126 226 116 227 105 
                   C228 100 234 98 238 95 
                   C242 92 245 88 240 85 
                   C234 82 230 84 227 82 
                   C228 72 222 66 210 65 
                   C202 65 195 66 190 68 Z" 
                fill="url(#skinToneGrad)" />

          <!-- Facial Contour (Right-Facing Confident Profile) -->
          <path d="M225 78 
                   C228 82 232 86 235 88 
                   C237 89 238 91 235 93 
                   C230 94 228 95 229 98 
                   C231 100 234 100 232 102 
                   C229 104 226 104 227 107 
                   C228 111 229 114 224 117 
                   C218 122 210 125 204 125" 
                stroke="#C58060" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.6"/>

          <!-- KOHL-LINED ALMOND EYE & EYEBROW -->
          <!-- Slender arched eyebrow -->
          <path d="M214 83 C219 80 226 81 230 84" 
                stroke="#1E0538" stroke-width="2.2" stroke-linecap="round" fill="none"/>
          <!-- Almond eye with kohl flick -->
          <path d="M216 88 C220 86 226 87 230 90 C226 93 220 93 216 88 Z" 
                fill="#FFFFFF" />
          <path d="M222 87 C224 87 226 88 226 90 C226 91 224 92 222 92 C220 92 219 91 219 90 C219 88 220 87 222 87 Z" 
                fill="#351080" />
          <circle cx="224" cy="89" r="0.9" fill="#FFFFFF" />
          <!-- Eyelash extension -->
          <path d="M215 88 C220 85 228 86 232 89" 
                stroke="#1E0538" stroke-width="1.6" stroke-linecap="round" fill="none"/>

          <!-- TRADITIONAL RED BINDI (Pottu) -->
          <circle cx="230" cy="84" r="2.2" fill="#E11D48" />
          <circle cx="230" cy="84" r="1" fill="#FFD700" opacity="0.7"/>

          <!-- SUBTLE ROSY CHEEK & LIP GLOW -->
          <ellipse cx="218" cy="98" rx="7" ry="4" fill="#F43F5E" opacity="0.22" filter="blur(2px)"/>
          <!-- Lips -->
          <path d="M228 102 C231 100 234 102 232 104 C229 105 228 104 228 102 Z" 
                fill="#BE123C" />
          <path d="M227 104 C230 106 233 105 231 107 C228 108 226 106 227 104 Z" 
                fill="#E11D48" />

          <!-- EAR & SWAYING GOLDEN JHUMKA -->
          <g class="woman-jhumka-earring">
            <ellipse cx="185" cy="102" rx="4.5" ry="6.5" fill="#DE9F7E" />
            <!-- Golden stud -->
            <circle cx="186" cy="104" r="2.8" fill="url(#goldZariGrad)" />
            <!-- Jhumka bell hanging -->
            <path d="M183 111 C183 108 189 108 189 111 L191 118 C191 120 181 120 181 118 Z" 
                  fill="url(#goldZariGrad)" />
            <!-- Tiny hanging pearls -->
            <circle cx="182" cy="122" r="1.2" fill="#FFFFFF" />
            <circle cx="186" cy="123" r="1.3" fill="#FFFFFF" />
            <circle cx="190" cy="122" r="1.2" fill="#FFFFFF" />
          </g>

          <!-- FRONT HAIR (Stylized regal waves covering ear top & framing temple) -->
          <g class="woman-hair-front">
            <!-- Sleek parted crown -->
            <path d="M188 66 
                     C172 68 160 80 162 98 
                     C165 115 178 122 188 116 
                     C182 102 182 86 195 76 
                     C206 68 220 70 228 78 
                     C226 70 216 65 204 64 Z" 
                  fill="url(#hairBaseGrad)" />

            <!-- Magenta highlight ribbon sweeping along hair -->
            <path d="M192 68 C178 74 168 86 168 102 C168 114 175 120 182 118 C176 106 178 92 188 82 C198 72 212 71 222 76 Z" 
                  fill="url(#hairMagentaHighlight)" opacity="0.9" />

            <!-- Elegant hair strand contour lines -->
            <path d="M174 88 C176 104 182 115 186 118" stroke="#E72DA7" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.7"/>
            <path d="M184 76 C178 88 180 102 185 110" stroke="#F472B6" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6"/>

            <!-- TRADITIONAL MALLIGAI POO (Jasmine Flower Garland Accent) -->
            <g class="woman-jasmine-flowers">
              <ellipse cx="166" cy="85" rx="3.5" ry="5" fill="#FFFFFF" transform="rotate(-25 166 85)" />
              <ellipse cx="161" cy="94" rx="3.5" ry="5" fill="#FFFFFF" transform="rotate(-15 161 94)" />
              <ellipse cx="158" cy="104" rx="3.5" ry="5" fill="#FFFBEB" transform="rotate(-5 158 104)" />
              <ellipse cx="157" cy="115" rx="3.5" ry="5" fill="#FFFFFF" transform="rotate(10 157 115)" />
              <ellipse cx="159" cy="126" rx="3.2" ry="4.5" fill="#FEF3C7" transform="rotate(25 159 126)" />
              <!-- Delicate orange bud tips (Kambu) -->
              <circle cx="164" cy="81" r="1.2" fill="#F59E0B" />
              <circle cx="159" cy="90" r="1.2" fill="#F59E0B" />
              <circle cx="156" cy="100" r="1.2" fill="#F59E0B" />
              <circle cx="155" cy="111" r="1.2" fill="#F59E0B" />
            </g>
          </g>

          <!-- FLOWING SAREE DRAPE & EMBROIDERED PALLU -->
          <g class="woman-saree-pallu">
            <!-- Saree bodice / pleats crossing chest -->
            <path d="M186 170 
                     C198 178 214 184 235 180 
                     C250 178 268 185 278 198 
                     L285 260 
                     C250 265 195 262 165 250 
                     C170 220 178 190 186 170 Z" 
                  fill="url(#sareeBodyGrad)" />

            <!-- Diagonal Saree Pallu Fold (Rich Magenta & Violet Waves) -->
            <path d="M190 175 
                     C210 185 235 200 255 225 
                     C268 242 278 255 292 265 
                     L255 265 
                     C235 245 210 220 185 198 Z" 
                  fill="url(#sareePalluGrad)" />

            <!-- Golden Zari Saree Borders (Shimmering Gold Curves) -->
            <path d="M186 172 C204 182 225 192 248 218 C262 235 274 250 288 262" 
                  stroke="url(#goldZariGrad)" stroke-width="3.5" stroke-linecap="round" fill="none"/>
            <path d="M188 175 C206 185 227 195 250 221 C264 238 276 253 290 265" 
                  stroke="#FFD700" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3, 2" fill="none"/>

            <path d="M172 230 C205 242 240 240 278 228" 
                  stroke="url(#goldZariGrad)" stroke-width="2.5" stroke-linecap="round" fill="none"/>

            <!-- Saree Pallu Fringe / Golden Tassels -->
            <path d="M265 262 L267 268 M272 263 L274 269 M279 264 L281 270 M286 265 L288 271" 
                  stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round"/>
          </g>

          <!-- GRACEFUL ARM & HAND HOLDING BLOOMING LOTUS -->
          <g class="woman-arm-lotus">
            <!-- Slender arm reaching forward -->
            <path d="M228 185 
                     C245 195 262 205 278 214 
                     C288 210 298 202 305 192 
                     C300 186 292 188 284 194 
                     C272 185 255 178 240 172 Z" 
                  fill="url(#skinToneGrad)" />

            <!-- Golden Vanki (Armlet) on upper arm -->
            <path d="M242 178 C246 182 250 184 254 186" 
                  stroke="url(#goldZariGrad)" stroke-width="2.5" stroke-linecap="round" fill="none"/>

            <!-- Gold Glass Bangles (Valayal) on wrist -->
            <line x1="292" y1="202" x2="295" y2="196" stroke="url(#goldZariGrad)" stroke-width="2" stroke-linecap="round"/>
            <line x1="294" y1="204" x2="297" y2="198" stroke="#E72DA7" stroke-width="2" stroke-linecap="round"/>
            <line x1="296" y1="206" x2="299" y2="200" stroke="url(#goldZariGrad)" stroke-width="2" stroke-linecap="round"/>

            <!-- Elegant Hand Fingers holding lotus stem -->
            <path d="M304 192 C308 188 312 188 316 190 C314 195 308 198 302 198 Z" fill="#DE9F7E"/>
            <path d="M302 195 C308 192 314 192 318 196 C314 200 307 202 301 200 Z" fill="#C58060"/>

            <!-- Thin green lotus stem -->
            <path d="M308 220 C310 205 312 195 315 180" 
                  stroke="#15803D" stroke-width="2.5" stroke-linecap="round" fill="none"/>

            <!-- BLOOMING PINK & GOLD LOTUS FLOWER (Sen-Thamarai) -->
            <g class="woman-lotus-flower" transform="translate(305, 142)">
              <!-- Outer glowing aura -->
              <circle cx="16" cy="18" r="28" fill="#FDF2F8" opacity="0.6" filter="blur(6px)"/>

              <!-- Bottom lotus calyx leaves -->
              <path d="M8 26 C12 30 20 30 24 26 C18 28 14 28 8 26 Z" fill="#15803D"/>

              <!-- Outer Layer Lotus Petals -->
              <path d="M4 22 C-4 14 2 2 12 10 C8 15 6 19 4 22 Z" fill="url(#lotusPinkGrad)"/>
              <path d="M28 22 C36 14 30 2 20 10 C24 15 26 19 28 22 Z" fill="url(#lotusPinkGrad)"/>

              <!-- Mid Layer Petals -->
              <path d="M8 24 C4 10 10 -2 16 6 C14 12 11 18 8 24 Z" fill="#EC4899"/>
              <path d="M24 24 C28 10 22 -2 16 6 C18 12 21 18 24 24 Z" fill="#F472B6"/>

              <!-- Center Royal Bud Petal -->
              <path d="M16 26 C10 12 12 -4 16 -6 C20 -4 22 12 16 26 Z" fill="url(#lotusPinkGrad)"/>
              <!-- Golden Stamen core -->
              <circle cx="16" cy="6" r="3.2" fill="url(#goldZariGrad)"/>
              <!-- Shimmering Sparkle on Lotus Tip -->
              <path d="M16 -10 L17 -6 L21 -5 L17 -4 L16 0 L15 -4 L11 -5 L15 -6 Z" fill="#FFD700" opacity="0.9"/>
            </g>
          </g>

        </g>
      </svg>
    </div>
  `;
}
