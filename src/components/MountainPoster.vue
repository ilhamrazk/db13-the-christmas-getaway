<script setup>
// Vintage travel-poster scene of the Ciawi hills at night: layered ridges, pines,
// the villa with its windows lit, and the DB13 convoy driving up the road on load.
const prefersReducedMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Deterministic pseudo-random so the sky looks the same on every visit
function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

const rand = seeded(1307)
const stars = Array.from({ length: 70 }, (_, i) => ({
  x: rand() * 1440,
  y: rand() * 430,
  r: rand() * 1.4 + 0.4,
  twinkle: i % 5 === 0,
  delay: (rand() * 3).toFixed(2)
}))

// Three-tier pine silhouette with its trunk base at (x, y)
function pine(x, y, h) {
  const w = h * 0.42
  const tier = (top, bottom, half) => `M${x},${y - h * top} L${x + w * half},${y - h * bottom} L${x - w * half},${y - h * bottom} Z`
  return [
    tier(1, 0.62, 0.62),
    tier(0.78, 0.36, 0.82),
    tier(0.54, 0.08, 1),
    `M${x - h * 0.03},${y - h * 0.1} h${h * 0.06} v${h * 0.1} h${-h * 0.06} Z`
  ].join(' ')
}

const midPines = [
  [70, 640, 44], [130, 630, 56], [190, 628, 40], [1180, 616, 48], [1240, 616, 60], [1300, 610, 42], [1380, 622, 52]
].map(([x, y, h]) => pine(x, y, h))

const nearPines = [
  [40, 770, 90], [120, 752, 120], [210, 748, 84], [300, 736, 104], [470, 716, 78], [540, 706, 96],
  [960, 668, 88], [1030, 680, 116], [1120, 694, 82], [1200, 706, 104], [1290, 716, 90], [1390, 712, 124]
].map(([x, y, h]) => pine(x, y, h))

const frontPines = [
  [-10, 900, 230], [80, 880, 170], [1350, 880, 200], [1450, 900, 250]
].map(([x, y, h]) => pine(x, y, h))

const roadPath = 'M120,905 C330,875 610,885 640,836 C668,792 470,786 560,754 C640,726 742,712 774,684 C792,668 800,660 812,652'

// Each car stops a little further down the road so the convoy queues at the gate
const convoy = [
  { end: 1, begin: 0.6 },
  { end: 0.955, begin: 1.1 },
  { end: 0.91, begin: 1.6 },
  { end: 0.865, begin: 2.1 }
]

const roofLights = Array.from({ length: 9 }, (_, i) => ({
  x: 786 + i * 13,
  y: 600 - (i <= 4 ? i : 8 - i) * 7.5,
  color: i % 2 === 0 ? '#D9A441' : '#C9304A'
}))
</script>

<template>
  <svg
    class="absolute inset-0 h-full w-full"
    viewBox="0 0 1440 900"
    preserveAspectRatio="xMidYMax slice"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="poster-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0B241D" />
        <stop offset="0.55" stop-color="#17463B" />
        <stop offset="0.82" stop-color="#4F8580" />
        <stop offset="1" stop-color="#A9C9CF" />
      </linearGradient>
      <radialGradient id="poster-moon-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="#E9C277" stop-opacity="0.55" />
        <stop offset="1" stop-color="#E9C277" stop-opacity="0" />
      </radialGradient>
      <filter id="poster-glow" x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- Sky, stars, moon -->
    <rect width="1440" height="900" fill="url(#poster-sky)" />
    <circle
      v-for="(s, i) in stars"
      :key="`star-${i}`"
      :cx="s.x"
      :cy="s.y"
      :r="s.r"
      fill="#FBF6EC"
      :class="s.twinkle ? 'animate-twinkle' : ''"
      :style="s.twinkle ? { animationDelay: `${s.delay}s` } : { opacity: 0.7 }"
    />
    <circle cx="1185" cy="150" r="130" fill="url(#poster-moon-glow)" />
    <circle cx="1185" cy="150" r="46" fill="#E9C277" />

    <!-- Far mist ridge -->
    <path
      d="M0,600 C150,540 300,580 420,548 C560,512 700,478 860,526 C1000,566 1130,510 1260,540 C1340,560 1400,566 1440,552 V900 H0 Z"
      fill="#CFE3E8"
      opacity="0.55"
    />
    <!-- Mid ridge -->
    <path
      d="M0,652 C180,596 360,624 520,600 C680,576 820,566 980,606 C1120,642 1260,592 1440,624 V900 H0 Z"
      fill="#3F6F64"
    />
    <path v-for="(d, i) in midPines" :key="`mid-${i}`" :d="d" fill="#2E5A50" />

    <!-- Near hill with the villa -->
    <path
      d="M0,772 C220,722 430,736 600,700 C700,678 760,642 822,642 C900,642 990,664 1100,690 C1230,722 1340,728 1440,710 V900 H0 Z"
      fill="#245847"
    />
    <path v-for="(d, i) in nearPines" :key="`near-${i}`" :d="d" fill="#173F33" />

    <!-- Villa Nirmala Hills -->
    <g>
      <path d="M778,606 L838,566 L898,606 Z" fill="#7E0C20" />
      <rect x="788" y="604" width="100" height="48" fill="#3A2A20" />
      <rect x="866" y="584" width="9" height="20" fill="#3A2A20" />
      <g filter="url(#poster-glow)">
        <rect x="798" y="614" width="16" height="14" fill="#F5C35B" />
        <rect x="862" y="614" width="16" height="14" fill="#F5C35B" />
        <rect x="830" y="622" width="16" height="30" fill="#F5C35B" />
        <circle
          v-for="(l, i) in roofLights"
          :key="`light-${i}`"
          :cx="l.x"
          :cy="l.y"
          r="2.4"
          :fill="l.color"
        />
      </g>
      <circle cx="838" cy="592" r="6" fill="none" stroke="#2E5A50" stroke-width="3" />
    </g>

    <!-- Front ridge (same color as the page so the poster flows into the ticket) -->
    <path
      d="M0,836 C240,792 520,826 760,800 C980,778 1180,786 1440,826 V900 H0 Z"
      fill="#12352B"
    />

    <!-- Road up to the villa -->
    <path id="poster-road" :d="roadPath" fill="none" stroke="#E6D4B2" stroke-opacity="0.28" stroke-width="7" stroke-linecap="round" />
    <path :d="roadPath" fill="none" stroke="#FBF6EC" stroke-opacity="0.45" stroke-width="1.2" stroke-dasharray="6 9" />

    <!-- The convoy: headlights driving up once, then parking at the gate -->
    <g filter="url(#poster-glow)">
      <circle v-for="(car, i) in convoy" :key="`car-${i}`" r="3" fill="#FFE9B0" opacity="0">
        <set attributeName="opacity" to="1" :begin="prefersReducedMotion ? '0s' : `${car.begin}s`" fill="freeze" />
        <animateMotion
          :keyPoints="prefersReducedMotion ? `${car.end};${car.end}` : `0;${car.end}`"
          keyTimes="0;1"
          :begin="prefersReducedMotion ? '0s' : `${car.begin}s`"
          :dur="prefersReducedMotion ? '0.01s' : '6s'"
          fill="freeze"
          calcMode="spline"
          keySplines="0.35 0 0.25 1"
        >
          <mpath href="#poster-road" />
        </animateMotion>
      </circle>
    </g>

    <path v-for="(d, i) in frontPines" :key="`front-${i}`" :d="d" fill="#0B241D" />
  </svg>
</template>
