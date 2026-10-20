<script setup>
// Christmas Tree Flatlay (Knolling Style)
// Inspired by reference/web design.jfif
</script>

<template>
  <div class="relative mx-auto flex items-center justify-center select-none py-2">
    <!-- Ambient Festive Glow behind the tree -->
    <div class="absolute inset-0 m-auto h-48 w-48 rounded-full bg-gold-400/15 blur-2xl pointer-events-none"></div>

    <svg
      viewBox="0 0 280 320"
      class="w-48 sm:w-60 md:w-68 h-auto overflow-visible drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Festive Christmas Tree Knolling Decoration"
      role="img"
    >
      <defs>
        <!-- Gradients for realistic festive lighting -->
        <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFDF9" />
          <stop offset="45%" stop-color="#F3C77C" />
          <stop offset="100%" stop-color="#D4AF37" />
        </radialGradient>

        <radialGradient id="redBauble" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#FF6B7A" />
          <stop offset="25%" stop-color="#D63031" />
          <stop offset="70%" stop-color="#8B0000" />
          <stop offset="100%" stop-color="#4A0000" />
        </radialGradient>

        <radialGradient id="goldBauble" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#FFFDF9" />
          <stop offset="30%" stop-color="#F3C77C" />
          <stop offset="75%" stop-color="#C59B27" />
          <stop offset="100%" stop-color="#7A5809" />
        </radialGradient>

        <linearGradient id="candyStripe" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="40%" stop-color="#FFFFFF" />
          <stop offset="40.1%" stop-color="#D63031" />
          <stop offset="70%" stop-color="#D63031" />
          <stop offset="70.1%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#FFFFFF" />
        </linearGradient>

        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <!-- Pine needle cluster definition -->
        <g id="pineBranch">
          <path d="M0,0 Q-4,12 -12,22 M0,0 Q4,12 12,22 M0,0 L0,26 M-6,8 Q-14,14 -20,20 M6,8 Q14,14 20,20 M-4,15 Q-10,22 -15,28 M4,15 Q10,22 15,28" stroke="#2D7257" stroke-width="2.2" stroke-linecap="round" fill="none" />
          <path d="M0,0 Q-2,10 -8,18 M0,0 Q2,10 8,18 M-3,7 Q-10,12 -14,16 M3,7 Q10,12 14,16" stroke="#68B696" stroke-width="1.4" stroke-linecap="round" fill="none" />
        </g>

        <!-- Red Satin Bow definition -->
        <g id="redRibbonBow">
          <path d="M0,0 C-12,-10 -18,-2 -10,6 C-5,10 0,2 0,0 Z" fill="#D63031" />
          <path d="M0,0 C12,-10 18,-2 10,6 C5,10 0,2 0,0 Z" fill="#D63031" />
          <circle cx="0" cy="0" r="3" fill="#8B0000" />
          <path d="M-2,2 C-6,10 -10,18 -12,22" stroke="#D63031" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <path d="M2,2 C6,10 10,18 12,22" stroke="#D63031" stroke-width="2.5" stroke-linecap="round" fill="none" />
        </g>
      </defs>

      <!-- 1. PINE SPRIGS CONTOUR (The triangular Christmas tree frame) -->
      <g opacity="0.95">
        <!-- Top Tier -->
        <use href="#pineBranch" x="140" y="46" transform="rotate(180 140 46) scale(0.85)" />
        <use href="#pineBranch" x="124" y="66" transform="rotate(150 124 66) scale(0.8)" />
        <use href="#pineBranch" x="156" y="66" transform="rotate(-150 156 66) scale(0.8)" />

        <!-- Second Tier -->
        <use href="#pineBranch" x="110" y="95" transform="rotate(140 110 95) scale(0.9)" />
        <use href="#pineBranch" x="170" y="95" transform="rotate(-140 170 95) scale(0.9)" />
        <use href="#pineBranch" x="140" y="105" transform="rotate(180 140 105) scale(0.85)" />

        <!-- Third Tier -->
        <use href="#pineBranch" x="90" y="145" transform="rotate(135 90 145) scale(1)" />
        <use href="#pineBranch" x="190" y="145" transform="rotate(-135 190 145) scale(1)" />
        <use href="#pineBranch" x="120" y="155" transform="rotate(160 120 155) scale(0.9)" />
        <use href="#pineBranch" x="160" y="155" transform="rotate(-160 160 155) scale(0.9)" />

        <!-- Fourth Tier -->
        <use href="#pineBranch" x="72" y="200" transform="rotate(130 72 200) scale(1.1)" />
        <use href="#pineBranch" x="208" y="200" transform="rotate(-130 208 200) scale(1.1)" />
        <use href="#pineBranch" x="100" y="210" transform="rotate(155 100 210) scale(1)" />
        <use href="#pineBranch" x="180" y="210" transform="rotate(-155 180 210) scale(1)" />

        <!-- Base Tier -->
        <use href="#pineBranch" x="52" y="255" transform="rotate(125 52 255) scale(1.2)" />
        <use href="#pineBranch" x="228" y="255" transform="rotate(-125 228 255) scale(1.2)" />
        <use href="#pineBranch" x="85" y="265" transform="rotate(145 85 265) scale(1.1)" />
        <use href="#pineBranch" x="195" y="265" transform="rotate(-145 195 265) scale(1.1)" />
        <use href="#pineBranch" x="140" y="260" transform="rotate(180 140 260) scale(1)" />
      </g>

      <!-- 2. CANDY CANES (Flanking the center) -->
      <g>
        <!-- Left Candy Cane -->
        <path
          d="M 112 110 C 112 90, 88 90, 88 112 L 88 160"
          stroke="url(#candyStripe)"
          stroke-width="7"
          stroke-linecap="round"
          fill="none"
          transform="rotate(16 100 130)"
          class="drop-shadow-md"
        />
        <!-- Right Candy Cane -->
        <path
          d="M 168 110 C 168 90, 192 90, 192 112 L 192 160"
          stroke="url(#candyStripe)"
          stroke-width="7"
          stroke-linecap="round"
          fill="none"
          transform="rotate(-16 180 130)"
          class="drop-shadow-md"
        />
      </g>

      <!-- 3. GINGERBREAD MAN (In the heart of the tree) -->
      <g transform="translate(140, 172) scale(0.9)" class="drop-shadow-md">
        <!-- Head -->
        <circle cx="0" cy="-22" r="11" fill="#C18C5D" />
        <!-- Face icing -->
        <circle cx="-3.5" cy="-24" r="1.3" fill="#FAF4EB" />
        <circle cx="3.5" cy="-24" r="1.3" fill="#FAF4EB" />
        <path d="M -4 -19 Q 0 -16 4 -19" stroke="#FAF4EB" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <circle cx="0" cy="-14" r="2" fill="#D63031" /> <!-- Red bowtie -->
        <!-- Body -->
        <path d="M -8 -11 L 8 -11 Q 10 5 8 16 L -8 16 Q -10 5 -8 -11 Z" fill="#C18C5D" />
        <!-- Icing Buttons -->
        <circle cx="0" cy="-4" r="1.8" fill="#FAF4EB" />
        <circle cx="0" cy="4" r="1.8" fill="#D63031" />
        <circle cx="0" cy="12" r="1.8" fill="#FAF4EB" />
        <!-- Arms -->
        <path d="M -8 -7 Q -22 -10 -20 2 Q -12 3 -7 1" fill="#C18C5D" />
        <path d="M 8 -7 Q 22 -10 20 2 Q 12 3 7 1" fill="#C18C5D" />
        <!-- Arm Icing Squiggles -->
        <path d="M -18 -4 Q -16 -1 -14 -4" stroke="#FAF4EB" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <path d="M 18 -4 Q 16 -1 14 -4" stroke="#FAF4EB" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <!-- Legs -->
        <path d="M -7 16 L -14 34 Q -8 38 -2 33 L -1 16 Z" fill="#C18C5D" />
        <path d="M 7 16 L 14 34 Q 8 38 2 33 L 1 16 Z" fill="#C18C5D" />
        <!-- Leg Icing Squiggles -->
        <path d="M -12 28 Q -9 30 -6 28" stroke="#FAF4EB" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <path d="M 12 28 Q 9 30 6 28" stroke="#FAF4EB" stroke-width="1.2" stroke-linecap="round" fill="none" />
      </g>

      <!-- 4. RED SATIN BOWS -->
      <use href="#redRibbonBow" x="110" y="68" transform="scale(0.85)" class="drop-shadow-sm" />
      <use href="#redRibbonBow" x="170" y="68" transform="scale(0.85)" class="drop-shadow-sm" />
      <use href="#redRibbonBow" x="65" y="195" transform="rotate(-15 65 195) scale(0.9)" class="drop-shadow-sm" />
      <use href="#redRibbonBow" x="215" y="195" transform="rotate(15 215 195) scale(0.9)" class="drop-shadow-sm" />

      <!-- 5. 3D GLOSS ORNAMENTS (Baubles) -->
      <!-- Red Baubles -->
      <circle cx="140" cy="80" r="7.5" fill="url(#redBauble)" class="drop-shadow-md" />
      <circle cx="85" cy="170" r="9" fill="url(#redBauble)" class="drop-shadow-md" />
      <circle cx="195" cy="170" r="9" fill="url(#redBauble)" class="drop-shadow-md" />
      <circle cx="120" cy="235" r="10" fill="url(#redBauble)" class="drop-shadow-md" />
      <circle cx="160" cy="235" r="10" fill="url(#redBauble)" class="drop-shadow-md" />
      <circle cx="58" cy="272" r="9" fill="url(#redBauble)" class="drop-shadow-md" />
      <circle cx="222" cy="272" r="9" fill="url(#redBauble)" class="drop-shadow-md" />

      <!-- Gold Baubles & Pinecones -->
      <circle cx="125" cy="125" r="6" fill="url(#goldBauble)" class="drop-shadow-md" />
      <circle cx="155" cy="125" r="6" fill="url(#goldBauble)" class="drop-shadow-md" />
      <circle cx="140" cy="138" r="5" fill="url(#goldBauble)" class="drop-shadow-md" />
      <circle cx="95" cy="230" r="8" fill="url(#goldBauble)" class="drop-shadow-md" />
      <circle cx="185" cy="230" r="8" fill="url(#goldBauble)" class="drop-shadow-md" />
      <circle cx="140" cy="245" r="7" fill="url(#goldBauble)" class="drop-shadow-md" />

      <!-- Little Holly Berries Clusters -->
      <g>
        <!-- Cluster 1 -->
        <circle cx="132" cy="60" r="3" fill="#D63031" />
        <circle cx="136" cy="58" r="2.8" fill="#FF4757" />
        <circle cx="136" cy="63" r="2.8" fill="#B33939" />
        <!-- Cluster 2 -->
        <circle cx="148" cy="60" r="3" fill="#D63031" />
        <circle cx="144" cy="58" r="2.8" fill="#FF4757" />
        <circle cx="144" cy="63" r="2.8" fill="#B33939" />
        <!-- Cluster 3 -->
        <circle cx="78" cy="225" r="3.2" fill="#D63031" />
        <circle cx="82" cy="223" r="3" fill="#FF4757" />
        <circle cx="80" cy="229" r="3" fill="#B33939" />
        <!-- Cluster 4 -->
        <circle cx="202" cy="225" r="3.2" fill="#D63031" />
        <circle cx="198" cy="223" r="3" fill="#FF4757" />
        <circle cx="200" cy="229" r="3" fill="#B33939" />
      </g>

      <!-- 6. FESTIVE GIFT BOX AT BASE (Center of tree foundation) -->
      <g transform="translate(140, 285) scale(0.95)" class="drop-shadow-lg">
        <!-- Box Body -->
        <rect x="-18" y="-12" width="36" height="24" rx="3" fill="#D63031" />
        <!-- Box Shading -->
        <rect x="-18" y="0" width="36" height="12" rx="1" fill="#A81D24" opacity="0.4" />
        <!-- Gold Ribbon Vertical -->
        <rect x="-3.5" y="-12" width="7" height="24" fill="#F3C77C" />
        <!-- Gold Ribbon Horizontal -->
        <rect x="-18" y="-3.5" width="36" height="7" fill="#F3C77C" />
        <!-- Ribbon Knot & Bow -->
        <path d="M 0 -12 C -8 -22 -14 -16 -6 -12 Z" fill="#F3C77C" />
        <path d="M 0 -12 C 8 -22 14 -16 6 -12 Z" fill="#F3C77C" />
        <circle cx="0" cy="-12" r="3" fill="#E5B869" />
      </g>

      <!-- 7. TWINKLING FAIRY LIGHTS & GOLD STARS (Subtle magical sparkles) -->
      <g class="animate-pulse">
        <!-- Sparkle 1 -->
        <path d="M 120 75 Q 123 75 123 72 Q 123 75 126 75 Q 123 75 123 78 Q 123 75 120 75" fill="#FFFDF9" />
        <!-- Sparkle 2 -->
        <path d="M 175 105 Q 178 105 178 102 Q 178 105 181 105 Q 178 105 178 108 Q 178 105 175 105" fill="#F3C77C" />
        <!-- Sparkle 3 -->
        <path d="M 98 175 Q 101 175 101 172 Q 101 175 104 175 Q 101 175 101 178 Q 101 175 98 175" fill="#FFFDF9" />
        <!-- Sparkle 4 -->
        <path d="M 170 215 Q 173 215 173 212 Q 173 215 176 215 Q 173 215 173 218 Q 173 215 170 215" fill="#F3C77C" />
        <!-- Sparkle 5 -->
        <path d="M 135 258 Q 138 258 138 255 Q 138 258 141 258 Q 138 258 138 261 Q 138 258 135 258" fill="#FFFDF9" />
      </g>

      <!-- 8. THE APEX STAR TOPPER (Golden Glowing Star at 140, 22) -->
      <g filter="url(#softGlow)">
        <!-- Outer Star Glow -->
        <polygon
          points="140,4 146,18 160,19 149,29 153,43 140,35 127,43 131,29 120,19 134,18"
          fill="url(#starGlow)"
          class="drop-shadow-lg"
        />
        <!-- Inner Core Highlight -->
        <polygon
          points="140,9 144,20 154,21 146,28 149,38 140,32 131,38 134,28 126,21 136,20"
          fill="#FFFDF9"
          opacity="0.85"
        />
      </g>
    </svg>
  </div>
</template>
