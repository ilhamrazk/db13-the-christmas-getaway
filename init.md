# 🎄 Project Specification & Blueprint: Date Bekasi 13 — The Christmas Getaway

> **Document Type:** Low-Level Technical Specification & Implementation Guide (`init.md`)  
> **Target Audience:** Frontend Developers & Autonomous AI Coding Models (GPT-4o-mini, Gemini Flash, Claude Haiku, etc.)  
> **Status:** Ready for Implementation  
> **Version:** 1.0.0  

---

## 1. Project Overview & Context

### 1.1 Project Identity
- **Event Name:** DATE BEKASI 13: THE CHRISTMAS GETAWAY
- **Sub-theme:** Anniversary & Christmas Celebration
- **Community:** Date Bekasi 13 (a youth/young adults spiritual community / "DATE fam")
- **Event Schedule:** Saturday–Sunday, November 7–8, 2026 (Gathering at 06:30 AM)
- **Venue:** Villa Nirmala Hills, Ciawi, Bogor
- **Location Link:** [Google Maps](https://maps.app.goo.gl/SPWzPxfBonoh9Rin9)

### 1.2 Purpose of the Website
A high-converting, deeply memorable, and warm digital invitation website designed specifically for the members of **Date Bekasi 13**. The website serves as:
1. **The Official Digital Invitation:** Welcoming members warmly with anniversary and Christmas joy.
2. **Event Information Hub:** Providing itinerary timing, venue details, Google Maps navigation, calendar integration, and dress codes for Day 1 & Day 2.
3. **Gift Exchange Guide (Secret Santa):** Clear, elegant instructions on gift budgeting, brown paper wrapping rules, unisex restrictions, and thoughtful gifting tips.
4. **Community Engagement:** Interactive countdown timer, audio ambiance, snowfall animation, and one-click WhatsApp share.

---

## 2. Creative & Visual Design System (Extracted from References)

The aesthetic draws directly from the luxury editorial Christmas styles found in `reference/website 1.jpeg` and `reference/website 2.jpeg`:

### 2.1 Color Palette & Design Tokens
```css
/* Custom Palette Definition */
:root {
  /* Deep Burgundy / Maroon (from Reference 1 & 2) */
  --color-maroon-950: #1A0508; /* Darkest backdrop */
  --color-maroon-900: #2E0A0F; /* Deep wine background */
  --color-maroon-800: #4A0E17; /* Primary rich maroon (Reference 1) */
  --color-maroon-700: #6B131D; /* Crimson maroon (Reference 2 card) */
  --color-maroon-600: #881B27; /* Accent maroon / button hover */

  /* Pine / Emerald Forest Green (from Reference 1 Quote & Category) */
  --color-pine-900: #0C1E16; /* Deepest pine */
  --color-pine-800: #16382B; /* Signature forest green section */
  --color-pine-700: #1E4D3B; /* Forest green hover/card */
  --color-pine-500: #2D7257; /* Vibrant emerald highlight */

  /* Warm Gold / Champagne / Ochre (from Reference 1 Buttons & Borders) */
  --color-gold-500: #D4AF37; /* Metallic gold */
  --color-gold-400: #E5B869; /* Warm ochre gold (Reference 1 CTA button) */
  --color-gold-300: #F3C77C; /* Champagne gold highlight */
  --color-gold-200: #F9E2B5; /* Soft glowing border */
  --color-gold-100: #FDF6E9; /* Pale champagne tint */

  /* Warm Cream / Ivory Paper (from Reference 2 Cards & Text) */
  --color-cream-50: #FFFDF9;  /* Purest warm highlight */
  --color-cream-100: #FAF4EB; /* Warm paper card background */
  --color-cream-200: #F3EBDD; /* Border cream */
  --color-cream-300: #E5DAC8; /* Muted subtitle */

  /* Dress Code Colors */
  --dress-day1: #FFFFFF;      /* Day 1: Pure White */
  --dress-day2: #6B131D;      /* Day 2: Deep Maroon */
}
```

### 2.2 Typography
We use Google Fonts loaded via `index.html`:
1. **Editorial Serif (Headings & Luxury Titles):** `Playfair Display` or `Cinzel` (font-serif). High contrast, elegant, majestic festive feel.
2. **Cursive / Script Accent (Subheadings & Romantic Flourishes):** `Great Vibes` or `Pinyon Script`. Used for *"The Christmas Getaway"*, *"A little getaway"*, and quotes.
3. **Clean Modern Sans (Body & UI Elements):** `Plus Jakarta Sans` or `Outfit` (font-sans). Highly legible on mobile screens, clean metadata chips, buttons, and rules.

### 2.3 Visual Motifs & Micro-Interactions
- **Gold Hairline Borders:** Double-line thin gold borders (`border border-gold-400/40`) with corner ornaments or rounded luxury pill borders.
- **Glassmorphism & Paper Texture:** Semi-translucent dark maroon blur cards (`bg-maroon-900/80 backdrop-blur-md`) and warm cream cutout cards (`bg-cream-100 text-maroon-950`).
- **Interactive Snowfall:** A lightweight, non-blocking HTML5 canvas snow particles overlay with toggle button (on/off).
- **Background Music (BGM):** Floating audio toggle (play/pause) playing a cozy instrumental Christmas chime / acoustic lofi carol.
- **Mobile First:** Designed with a bottom navigation bar or smooth sticky header with quick jump links for mobile users.

---

## 3. Technology Stack & Dependencies

| Layer | Technology | Version / Choice | Reason |
| :--- | :--- | :--- | :--- |
| **Framework** | Vue 3 | `^3.4.0` (Composition API, `<script setup>`) | User requested Vue; modern reactivity |
| **Bundler** | Vite | `^5.0.0` | Ultra-fast HMR and lightweight bundle |
| **Styling** | Tailwind CSS | `^3.4.0` + `@tailwindcss/typography` | User requested Tailwind; rapid utility styling |
| **Icons** | Lucide Vue Next | `^0.350.0` | Clean, crisp modern festive and UI icons |
| **Audio** | HTML5 Audio API | Native Browser API | Zero external library needed |
| **Confetti / FX** | Canvas Confetti | `canvas-confetti` (or inline canvas) | Festive celebration moment for RSVP / gift countdown |

---

## 4. File Structure & Project Architecture

```
db13-the-christmas-getaway/
├── index.html                   # HTML entry with Google Fonts & SEO meta tags
├── package.json                 # Project dependencies & build scripts
├── postcss.config.js            # PostCSS configuration for Tailwind
├── tailwind.config.js           # Custom Tailwind theme (maroon, pine, gold, cream)
├── vite.config.js               # Vite build configuration
├── public/
│   ├── audio/
│   │   └── christmas-bgm.mp3    # Festive royalty-free background instrumental (or fallback chime)
│   └── favicon.svg              # Festive tree icon favicon
├── src/
│   ├── main.js                  # App bootstrap
│   ├── App.vue                  # Main application layout & audio controller
│   ├── assets/
│   │   └── main.css             # Tailwind base imports + custom font utilities
│   ├── data/
│   │   └── eventData.js         # Single Source of Truth for all event copy and details
│   └── components/
│       ├── SnowCanvas.vue       # Lightweight falling snow particle canvas
│       ├── MusicPlayer.vue      # Floating luxury audio play/pause pill
│       ├── NavigationBar.vue    # Top / Bottom navigation for quick page hopping
│       ├── HeroInvitation.vue   # Section 1: Page 1 content (Invitation, Countdown, Quote)
│       ├── EventDetails.vue     # Section 2: Page 2 content (Schedule, Map, Dresscode, Accessories)
│       ├── GiftExchange.vue     # Section 3: Page 3 content (Budget, Wrapping, Rules, Gift Ideas)
│       ├── CountdownTimer.vue   # Reusable countdown timer to Nov 7, 2026, 06:30 WIB
│       ├── DressCodeCard.vue    # Visual day-by-day dress code card
│       ├── GiftIdeasModal.vue   # Interactive popup with ideas under Rp 100k
│       └── FooterSection.vue    # Community sign-off, WhatsApp share button, credits
├── page-1.txt                   # Original prompt source
├── page-2.txt                   # Original prompt source
├── page-3.txt                   # Original prompt source
└── reference/                   # Reference UI mockups
```

---

## 5. Detailed Component Specifications (Low-Level)

### 5.1 Data Model: `src/data/eventData.js`
The model must strictly implement this data dictionary to ensure content fidelity with `page-1.txt`, `page-2.txt`, and `page-3.txt`:

```javascript
export const eventData = {
  community: {
    name: "DATE BEKASI 13",
    shortName: "DB13",
    tagline: "Anniversary & Christmas Celebration",
    description: "Celebrating how far we’ve come, the joy of Christmas, and the beautiful family God has brought together. ❤️",
    footerTribute: "Can’t wait to celebrate with you, DATE fam! 🎄✨"
  },
  schedule: {
    eventTitle: "THE CHRISTMAS GETAWAY",
    startDate: "2026-11-07T06:30:00+07:00", // Nov 7, 2026 06:30 WIB
    endDate: "2026-11-08T15:00:00+07:00",
    displayDate: "November 7–8, 2026",
    gatheringTime: "6:30 AM",
    timeReminder: "A little reminder: please arrive on time so we can make the most of every moment together! ❤️",
    venue: {
      name: "Villa Nirmala Hills, Ciawi",
      city: "Ciawi, Bogor",
      mapsUrl: "https://maps.app.goo.gl/SPWzPxfBonoh9Rin9",
      embedSearchQuery: "Villa Nirmala Hills Ciawi"
    }
  },
  dressCode: {
    title: "DRESS CODE",
    days: [
      {
        dayNumber: 1,
        dayLabel: "DAY 1",
        colorName: "WHITE",
        colorHex: "#FFFFFF",
        textColor: "text-slate-800",
        bgClass: "bg-white",
        borderClass: "border-slate-200",
        description: "Fresh, clean, and celestial aesthetic to start our getaway.",
        recommendations: ["White polo / casual shirt", "White summer dress", "White trousers / linen pants"]
      },
      {
        dayNumber: 2,
        dayLabel: "DAY 2",
        colorName: "MAROON",
        colorHex: "#6B131D",
        textColor: "text-white",
        bgClass: "bg-[#6B131D]",
        borderClass: "border-red-900",
        description: "Warm, festive holiday vibe representing Christmas warmth & love.",
        recommendations: ["Maroon knit / sweater", "Deep red flannel / shirt", "Maroon dress or accents"]
      }
    ],
    accessories: {
      title: "CHRISTMAS ACCESSORIES",
      badge: "🎅 Festive Fun",
      text: "If you have any, bring along your favorite Christmas-themed accessories, such as Santa hats, Christmas headbands, reindeer antlers, or other festive goodies! ✨",
      items: [
        { label: "Santa Hat", icon: "🎅" },
        { label: "Reindeer Antlers", icon: "🦌" },
        { label: "Christmas Headband", icon: "🎄" },
        { label: "Festive Brooch / Glasses", icon: "⭐" }
      ]
    }
  },
  giftExchange: {
    title: "A LITTLE GIFT, A LOT OF LOVE ❤️",
    subtitle: "It’s time for our Christmas Gift Exchange!",
    philosophy: "Let’s make this moment thoughtful, joyful, and full of love. It’s not about how much the gift costs, but the heart and thought behind it! ✨",
    rules: [
      {
        id: "budget",
        icon: "Gift",
        label: "Gift Budget",
        value: "Rp 100.000",
        detail: "Affordable, thoughtful, and fair for every member."
      },
      {
        id: "wrapping",
        icon: "Package",
        label: "Wrapping Rule",
        value: "Wrapped in Brown Paper",
        detail: "Rustic vintage Christmas aesthetic! Use craft brown paper & festive twine or ribbon."
      },
      {
        id: "guidelines",
        icon: "HeartHandshake",
        label: "Gift Rules",
        value: "Unisex & Not Food",
        detail: "Must be suitable for anyone (boys or girls) and durable (no consumable food/snacks)."
      }
    ],
    ideaSuggestions: [
      { category: "Cozy Living", items: ["Scented Candle / Diffuser", "Stainless Insulated Tumbler", "Desk Humidifier"] },
      { category: "Productivity & Hobby", items: ["Undated Minimalist Planner / Journal", "Quality Metal Ballpoint Pen", "Card / Board Game (Uno Flip, Exploding Kittens)"] },
      { category: "Everyday Carry", items: ["Compact UV Pocket Umbrella", "Aesthetic Canvas Tote Bag", "Multi-cable Charging Hub"] }
    ]
  },
  quotes: [
    {
      text: "Christmas isn’t a season. It’s a feeling.",
      author: "Edna Ferber",
      theme: "pine" // from reference 1 green quote banner
    }
  ]
};
```

---

### 5.2 Section 1: Hero & Invitation (`HeroInvitation.vue`)
- **Visual Design:** Deep Maroon background (`#2E0A0F` to `#4A0E17`) with subtle radial gold glow and luxury gold double-border framing (matching `website 1.jpeg`).
- **Elements:**
  1. **Top Badge:** Pill-shaped glowing badge: `🎄 YOU’RE INVITED!` with `bg-gold-400/20 text-gold-300 border border-gold-400/40`.
  2. **Community Title:** `"DATE BEKASI 13"` in majestic Serif font (`Playfair Display`, tracking-wider).
  3. **Main Event Banner:** `"THE CHRISTMAS GETAWAY"` in high-contrast champagne gold with cursive subtitle `"Anniversary & Christmas Celebration"`.
  4. **Heartfelt Community Note:**
     > *"Celebrating how far we’ve come, the joy of Christmas, and the beautiful family God has brought together. ❤️"*
  5. **Live Countdown Component:** Displays Days, Hours, Minutes, Seconds until November 7, 2026, 06:30 AM WIB.
  6. **Key Info Highlights (Pill Badges):**
     - 📅 `November 7–8, 2026`
     - 📍 `Villa Nirmala Hills, Ciawi`
  7. **Quote Section:** Directly inspired by `website 1.jpeg`: Deep emerald forest green banner (`bg-[#16382B]`), gold quote marks, typography: *"Christmas isn't a season. It's a feeling."* — Edna Ferber.
  8. **Call-To-Action:** Gold filled button `"View Schedule & Details"` that smoothly scrolls down to Section 2.

---

### 5.3 Section 2: Event Details & Dress Code (`EventDetails.vue`)
- **Visual Design:** Blends warm cream cards (`#FAF4EB`) inspired by `website 2.jpeg` set over a deep burgundy canvas.
- **Header:** `"SAVE THE DATE! 🎄"`
- **Venue & Schedule Card:**
  - Gathering Time: `🕒 6:30 AM` (Large, highlighted callout with an alert: *"A little reminder: please arrive on time so we can make the most of every moment together! ❤️"*).
  - Location: `🏡 Villa Nirmala Hills, Ciawi`.
  - Google Maps Card:
    - Direct link button: `"Open in Google Maps 📍"` pointing to `https://maps.app.goo.gl/SPWzPxfBonoh9Rin9`.
    - Integrated Google Maps Embed iframe or interactive preview card with copy-address button.
    - "Add to Calendar" button (generates `.ics` download or direct Google Calendar URL).
- **Dress Code Section:**
  - Section Header: `"👗 DRESS CODE"` with subtitle indicating why we coordinate colors.
  - Two high-contrast interactive cards side by side (or stacked on mobile):
    - **Card 1: DAY 1 — WHITE (🤍)**: Pure white card with subtle silver border, showcasing Day 1 styling tips.
    - **Card 2: DAY 2 — MAROON (❤️)**: Meraki crimson maroon card (`#6B131D`) with gold lettering, showcasing Day 2 styling tips.
- **Christmas Accessories Callout:**
  - Pill badge: `🎅 CHRISTMAS ACCESSORIES`.
  - Body text: *"If you have any, bring along your favorite Christmas-themed accessories, such as Santa hats, Christmas headbands, reindeer antlers, or other festive goodies! ✨"*
  - Interactive accessory checklist: Visitors can tap on Santa Hat 🎅, Reindeer Antlers 🦌, or Christmas Headband 🎄 to simulate packing their bags!

---

### 5.4 Section 3: Christmas Gift Exchange (`GiftExchange.vue`)
- **Visual Design:** Editorial warm luxury aesthetic matching `website 2.jpeg` ("The Secret to Great Gifts" card layout).
- **Header:** `"A LITTLE GIFT, A LOT OF LOVE ❤️"`
- **Subheading:** `"It’s time for our Christmas Gift Exchange! Here’s the plan:"`
- **The 3 Golden Rule Cards:**
  1. 🎁 **Gift Budget: Rp 100.000**
     - Description: Balanced, inclusive budget so everyone can participate comfortably without pressure.
  2. 🎀 **Wrapping: Wrapped in Brown Paper**
     - Description: Vintage rustic Christmas charm! Use plain brown kraft paper. Add red twine, ribbon, or pine sprigs for extra love.
  3. 💌 **Gift Rules: Unisex and Not Food**
     - Description: Can be received with delight by any brother or sister. Non-perishable so the memory lasts!
- **Closing Heartfelt Message:**
  > *"Let’s make this moment thoughtful, joyful, and full of love. It’s not about how much the gift costs, but the heart and thought behind it! ✨"*
- **Interactive Gift Ideas Drawer/Modal:**
  - Button: `"Need Gift Ideas under 100k? Tap Here 💡"`
  - Opens curated suggestions matching the Unisex & Non-Food criteria (e.g. Scented Candle, Insulated Tumbler, Desk Light, Board Games, Minimalist Notebook).

---

### 5.5 Atmosphere & Polish Components
1. **`SnowCanvas.vue`:**
   - Pure HTML5 2D canvas running in `requestAnimationFrame`.
   - Generates ~40-60 delicate white particles with varying sizes (1px–3px) drifting gently down and swaying horizontally.
   - Low CPU utilization; auto-pauses when user switches tabs (`document.hidden`).
   - Includes a floating toggle icon in the top header (Snowflake icon: on/off).
2. **`MusicPlayer.vue`:**
   - Floating audio pill in top-right or bottom-right corner.
   - Elegant gold border, speaker icon with pulse animation when playing.
   - Clean handling of browser autoplay restrictions (starts muted or prompts user to tap "Play Music 🎵" to play festive ambience).
3. **`FooterSection.vue`:**
   - Closing greeting: *"Can’t wait to celebrate with you, DATE fam! 🎄✨"*
   - Quick WhatsApp Share Button: Pre-filled message with website URL so members can easily share the link to their DATE 13 WhatsApp Group.
   - Copyright: *"DATE BEKASI 13 • The Christmas Getaway 2026"*.

---

## 6. Complete Configuration Files (Ready to Copy)

### 6.1 `package.json`
```json
{
  "name": "db13-the-christmas-getaway",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.21",
    "lucide-vue-next": "^0.359.0",
    "canvas-confetti": "^1.9.2"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.4",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "vite": "^5.1.6"
  }
}
```

### 6.2 `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: '#1A0508',
          900: '#2E0A0F',
          800: '#4A0E17',
          700: '#6B131D',
          600: '#881B27',
          500: '#A42231',
        },
        pine: {
          900: '#0C1E16',
          800: '#16382B',
          700: '#1E4D3B',
          600: '#26624B',
          500: '#2D7257',
        },
        gold: {
          500: '#D4AF37',
          400: '#E5B869',
          300: '#F3C77C',
          200: '#F9E2B5',
          100: '#FDF6E9',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FAF4EB',
          200: '#F3EBDD',
          300: '#E5DAC8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(229, 184, 105, 0.25)',
        'maroon-deep': '0 15px 35px rgba(26, 5, 8, 0.6)',
      }
    },
  },
  plugins: [],
}
```

### 6.3 `postcss.config.js`
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 6.4 `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true
  }
})
```

### 6.5 `index.html`
```html
<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23D4AF37'><path d='M12 2L15 8H9L12 2ZM12 8L16 14H8L12 8ZM12 14L18 20H6L12 14ZM11 20H13V22H11V20Z'/></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Date Bekasi 13: The Christmas Getaway 🎄</title>
    <meta name="description" content="Anniversary & Christmas Celebration of Date Bekasi 13. November 7–8, 2026 at Villa Nirmala Hills, Ciawi." />
    
    <!-- Google Fonts Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-maroon-950 text-cream-100 font-sans antialiased selection:bg-gold-400 selection:text-maroon-950">
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

### 6.6 `src/assets/main.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom luxury scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #1A0508;
}
::-webkit-scrollbar-thumb {
  background: #4A0E17;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #E5B869;
}

/* Gold double line luxury border utility */
.border-gold-double {
  border: 1px solid rgba(229, 184, 105, 0.4);
  outline: 1px solid rgba(229, 184, 105, 0.2);
  outline-offset: 4px;
}
```

---

## 7. Component Implementation Blueprints

### 7.1 `src/components/CountdownTimer.vue`
```vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  targetDate: {
    type: String,
    required: true
  }
})

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const isPassed = ref(false)
let timer = null

function updateCountdown() {
  const target = new Date(props.targetDate).getTime()
  const now = new Date().getTime()
  const distance = target - now

  if (distance <= 0) {
    isPassed.value = true
    clearInterval(timer)
    return
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="w-full max-w-xl mx-auto my-6">
    <div class="grid grid-cols-4 gap-2 sm:gap-4 text-center">
      <div class="bg-maroon-900/80 border border-gold-400/30 rounded-xl p-3 shadow-lg backdrop-blur-sm">
        <span class="block text-2xl sm:text-4xl font-bold font-serif text-gold-300">{{ days }}</span>
        <span class="text-[10px] sm:text-xs uppercase tracking-widest text-cream-300">Days</span>
      </div>
      <div class="bg-maroon-900/80 border border-gold-400/30 rounded-xl p-3 shadow-lg backdrop-blur-sm">
        <span class="block text-2xl sm:text-4xl font-bold font-serif text-gold-300">{{ hours }}</span>
        <span class="text-[10px] sm:text-xs uppercase tracking-widest text-cream-300">Hours</span>
      </div>
      <div class="bg-maroon-900/80 border border-gold-400/30 rounded-xl p-3 shadow-lg backdrop-blur-sm">
        <span class="block text-2xl sm:text-4xl font-bold font-serif text-gold-300">{{ minutes }}</span>
        <span class="text-[10px] sm:text-xs uppercase tracking-widest text-cream-300">Mins</span>
      </div>
      <div class="bg-maroon-900/80 border border-gold-400/30 rounded-xl p-3 shadow-lg backdrop-blur-sm">
        <span class="block text-2xl sm:text-4xl font-bold font-serif text-gold-300">{{ seconds }}</span>
        <span class="text-[10px] sm:text-xs uppercase tracking-widest text-cream-300">Secs</span>
      </div>
    </div>
  </div>
</template>
```

---

### 7.2 `src/components/SnowCanvas.vue`
```vue
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref(null)
let animationId = null
let flakes = []

function initFlakes(width, height) {
  const count = Math.floor((width * height) / 12000)
  flakes = []
  for (let i = 0; i < count; i++) {
    flakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 0.8,
      speed: Math.random() * 0.8 + 0.4,
      drift: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.6 + 0.3
    })
  }
}

function animate() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (const f of flakes) {
    ctx.beginPath()
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`
    ctx.fill()

    f.y += f.speed
    f.x += f.drift

    if (f.y > canvas.height) {
      f.y = -5
      f.x = Math.random() * canvas.width
    }
    if (f.x > canvas.width) f.x = 0
    else if (f.x < 0) f.x = canvas.width
  }

  animationId = requestAnimationFrame(animate)
}

function handleResize() {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  initFlakes(canvas.width, canvas.height)
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animationId) cancelAnimationFrame(animationId)
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="pointer-events-none fixed inset-0 z-20 h-full w-full opacity-70"
  ></canvas>
</template>
```

---

### 7.3 `src/components/MusicPlayer.vue`
```vue
<script setup>
import { ref } from 'vue'
import { Volume2, VolumeX, Music } from 'lucide-vue-next'

const isPlaying = ref(false)
const audioRef = ref(null)

// Public domain festive synth/chime audio or acoustic stream
const audioSrc = "https://cdn.pixabay.com/download/audio/2022/11/26/audio_03d9737f5d.mp3?filename=christmas-background-music-126290.mp3"

function toggleAudio() {
  if (!audioRef.value) return
  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.play().then(() => {
      isPlaying.value = true
    }).catch(err => {
      console.warn("Audio autoplay blocked by browser policy:", err)
    })
  }
}
</script>

<template>
  <div class="fixed bottom-5 right-5 z-40">
    <audio ref="audioRef" :src="audioSrc" loop preload="none"></audio>
    <button
      @click="toggleAudio"
      class="flex items-center gap-2 rounded-full border border-gold-400/50 bg-maroon-900/90 px-4 py-2.5 text-xs font-medium text-gold-300 shadow-gold-glow backdrop-blur-md transition-all hover:scale-105 hover:bg-maroon-800"
      :title="isPlaying ? 'Pause Christmas Music' : 'Play Christmas Music'"
    >
      <Music v-if="isPlaying" class="h-4 w-4 animate-spin text-gold-400" />
      <Volume2 v-if="isPlaying" class="h-4 w-4 text-gold-300" />
      <VolumeX v-else class="h-4 w-4 text-cream-300" />
      <span class="hidden sm:inline">{{ isPlaying ? 'Holiday BGM: Playing' : 'Play Music 🎵' }}</span>
    </button>
  </div>
</template>
```

---

### 7.4 Navigation Bar (`NavigationBar.vue`)
- **Logo:** `DB13` monogram badge in gold with serif text `"DATE BEKASI 13"`.
- **Navigation Links:**
  - `The Invitation` (Jump to `#invitation`)
  - `Event & Dress Code` (Jump to `#details`)
  - `Gift Exchange` (Jump to `#gift-exchange`)
- **Action Button:** "RSVP / Share" opening WhatsApp with prefilled message.
- **Mobile Menu:** Clean slide-down or bottom bar layout for thumb-friendly navigation.

---

### 7.5 Section Implementation Details

#### Page 1: Invitation (`HeroInvitation.vue`)
- Header badge: `🎄 YOU’RE INVITED!`
- Main Headline:
  ```html
  <h2 class="text-xs sm:text-sm tracking-[0.25em] text-gold-400 uppercase font-semibold">
    Date Bekasi 13
  </h2>
  <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-cream-50 leading-tight">
    The Christmas Getaway
  </h1>
  <p class="font-script text-2xl sm:text-4xl text-gold-300 mt-1">
    Anniversary & Christmas Celebration
  </p>
  ```
- Emotional Quote Box:
  > "Celebrating how far we’ve come, the joy of Christmas, and the beautiful family God has brought together. ❤️"
- Visual Frame (inspired by `website 1.jpeg`): Double thin gold outline framing with corner leaf/ornament detail.
- Target date for countdown: `2026-11-07T06:30:00+07:00`.
- Emerald Green Quote Ribbon (inspired by `website 1.jpeg`):
  ```html
  <div class="bg-pine-800 border-y border-gold-400/30 py-8 px-6 text-center my-12">
    <p class="font-serif text-xl sm:text-2xl text-gold-300 italic">
      “Christmas isn’t a season. It’s a feeling.”
    </p>
    <p class="text-xs uppercase tracking-widest text-pine-300 mt-2">
      — Edna Ferber
    </p>
  </div>
  ```

#### Page 2: Details & Dress Code (`EventDetails.vue`)
- **Event Highlights:**
  - Date: `November 7–8, 2026`
  - Gathering Time: `6:30 AM` (Highlight: Arrive on time!)
  - Location: `Villa Nirmala Hills, Ciawi`
  - Maps URL: `https://maps.app.goo.gl/SPWzPxfBonoh9Rin9`
  - Add to Calendar button generator (generates `webcal` or `.ics` event: Date Bekasi 13 Getaway, Villa Nirmala Hills).
- **Dress Code Section:**
  - Grid of two cards:
    - **Day 1 Card:** Pure white background, dark maroon text, styled like an editorial lookbook. Badge: `DAY 1 — WHITE (🤍)`.
    - **Day 2 Card:** Rich maroon background (`#6B131D`), cream text, gold accents. Badge: `DAY 2 — MAROON (❤️)`.
- **Festive Accessories Card:**
  - Light cream background card (`#FAF4EB`) with deep maroon typography (inspired by `website 2.jpeg` card format).
  - List of suggested accessories with festive emojis: 🎅 Santa hats, 🦌 reindeer antlers, 🎄 Christmas headbands.
  - Interactive "Pack Your Accessories" toggle checklist with confetti celebration when all items are checked.

#### Page 3: Gift Exchange (`GiftExchange.vue`)
- Header: `A LITTLE GIFT, A LOT OF LOVE ❤️`
- Subtitle: `It’s time for our Christmas Gift Exchange!`
- 3 Clear Rule Cards:
  1. `🎁 Gift budget: Rp100.000`
  2. `🎀 Wrapping: Wrapped in brown paper`
  3. `💌 Gift rules: Unisex and not food`
- Philosophy highlight:
  > *"Let’s make this moment thoughtful, joyful, and full of love. It’s not about how much the gift costs, but the heart and thought behind it! ✨"*
- Interactive Idea Picker:
  - Collapsible accordion or modal with practical unisex gifts under Rp 100k (e.g. Scented Candle, Insulated Tumbler, Desk Light, Board Games, Minimalist Notebook).

---

## 8. Step-by-Step Execution Plan for Implementers

Follow these exact terminal commands and steps in order:

### Step 1: Install Dependencies
```bash
npm install
```
*(If starting in a fresh environment, verify `vue`, `vite`, `tailwindcss`, `postcss`, `autoprefixer`, `lucide-vue-next`, and `canvas-confetti` are listed in `package.json`).*

### Step 2: Configure Build & Theme
1. Verify `vite.config.js` has `@vitejs/plugin-vue`.
2. Verify `tailwind.config.js` contains the custom `maroon`, `pine`, `gold`, and `cream` palettes and font families.
3. Verify `index.html` loads the Google Fonts (`Playfair Display`, `Great Vibes`, `Plus Jakarta Sans`).

### Step 3: Implement Code Files
1. Create `src/data/eventData.js` with the full content dictionary.
2. Create `src/components/SnowCanvas.vue` for ambient snowfall.
3. Create `src/components/MusicPlayer.vue` for festive audio.
4. Create `src/components/CountdownTimer.vue` for the event countdown.
5. Create `src/components/HeroInvitation.vue` (Page 1).
6. Create `src/components/EventDetails.vue` (Page 2).
7. Create `src/components/GiftExchange.vue` (Page 3).
8. Create `src/components/NavigationBar.vue` & `src/components/FooterSection.vue`.
9. Wire all components together in `src/App.vue`.

### Step 4: Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` to verify:
- Responsive mobile & desktop rendering
- Color contrast matching the reference images
- Working countdown timer
- Functional Google Maps navigation link
- Smooth scrolling between sections
- Audio and snowfall toggles

### Step 5: Production Verification
```bash
npm run build
```
Verify zero lint or build errors and that bundle output in `dist/` is clean and optimized.

---

## 9. Quality Checklist for AI Models
Before marking implementation complete, verify:
- [ ] Are all texts from `page-1.txt`, `page-2.txt`, and `page-3.txt` included without omission?
- [ ] Is the community name correctly spelled as **"Date Bekasi 13"**?
- [ ] Is the Google Maps link pointing to `https://maps.app.goo.gl/SPWzPxfBonoh9Rin9`?
- [ ] Are the dress codes clearly distinguished as **Day 1: White** and **Day 2: Maroon**?
- [ ] Are the gift exchange rules exact: **Budget Rp100.000**, **Brown paper wrapping**, **Unisex & not food**?
- [ ] Does the color scheme faithfully reflect the luxury maroon, pine green, gold, and cream from the reference images?
- [ ] Is the page responsive on mobile viewports (375px - 430px wide)?
