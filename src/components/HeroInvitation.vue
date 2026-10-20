<script setup>
import { Calendar, MapPin, Sparkles, ChevronDown, Heart } from 'lucide-vue-next'
import CountdownTimer from './CountdownTimer.vue'
import ChristmasTreeFlatlay from './ChristmasTreeFlatlay.vue'
import { eventData } from '../data/eventData.js'

function scrollToDetails() {
  const el = document.getElementById('event-details')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="invitation" class="relative pt-8 pb-16 px-4 sm:px-6 overflow-hidden">
    <!-- Subtle radial glow background -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-maroon-700/25 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-4xl mx-auto">
      
      <!-- Luxury Gold Double-Border Frame with Festive Holiday Details -->
      <div class="relative rounded-3xl border border-gold-400/40 p-6 sm:p-12 md:p-16 bg-gradient-to-b from-maroon-900/90 via-maroon-950/95 to-maroon-900/90 shadow-maroon-deep backdrop-blur-xl overflow-hidden">
        
        <!-- Inner decorative hairline frame -->
        <div class="pointer-events-none absolute inset-3 sm:inset-5 rounded-2xl border border-gold-400/20"></div>

        <!-- Hanging Pine Garland Swag across Top Border -->
        <div class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-8 z-10 opacity-70">
          <svg viewBox="0 0 320 28" fill="none" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <!-- Swag string with pine sprigs and warm fairy lights -->
            <path d="M10,2 Q160,26 310,2" stroke="#D4AF37" stroke-width="0.75" stroke-dasharray="3,3" opacity="0.6" />
            <!-- Little hanging lights -->
            <circle cx="50" cy="8" r="2.5" fill="#F3C77C" class="animate-pulse" />
            <circle cx="100" cy="13" r="2.5" fill="#FF6B7A" class="animate-pulse" />
            <circle cx="160" cy="15" r="3" fill="#FFFDF9" class="animate-pulse" />
            <circle cx="220" cy="13" r="2.5" fill="#F3C77C" class="animate-pulse" />
            <circle cx="270" cy="8" r="2.5" fill="#FF6B7A" class="animate-pulse" />
          </svg>
        </div>

        <!-- Top-Left Corner Garland & Red Ribbon Wreath Ornament -->
        <div class="pointer-events-none absolute top-2 left-2 sm:top-4 sm:left-4 z-20 w-16 sm:w-22 h-16 sm:h-22 drop-shadow-md">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
            <!-- Pine needles fanning from corner -->
            <path d="M4,4 Q18,12 28,8 M4,4 Q12,18 8,28 M4,4 Q24,20 34,18 M4,4 Q20,24 18,34 M4,4 L36,12 M4,4 L12,36" stroke="#2D7257" stroke-width="2.5" stroke-linecap="round" />
            <path d="M4,4 Q15,10 24,7 M4,4 Q10,15 7,24 M4,4 L28,10 M4,4 L10,28" stroke="#68B696" stroke-width="1.4" stroke-linecap="round" />
            <!-- Holly berries -->
            <circle cx="16" cy="16" r="3.5" fill="#D63031" />
            <circle cx="21" cy="13" r="3" fill="#FF4757" />
            <circle cx="13" cy="21" r="3" fill="#B33939" />
            <!-- Red Satin Ribbon Knot -->
            <path d="M6,6 C1,-1 12,-4 8,8 C6,14 2,12 6,6 Z" fill="#D63031" />
            <path d="M6,6 C-1,1 -4,12 8,8 C14,6 12,2 6,6 Z" fill="#D63031" />
            <circle cx="6" cy="6" r="2.8" fill="#8B0000" />
            <path d="M6,6 C10,14 14,24 15,30" stroke="#D63031" stroke-width="2.2" stroke-linecap="round" />
            <path d="M6,6 C14,10 24,14 30,15" stroke="#D63031" stroke-width="2.2" stroke-linecap="round" />
          </svg>
        </div>

        <!-- Top-Right Corner Garland & Red Ribbon Wreath Ornament -->
        <div class="pointer-events-none absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-16 sm:w-22 h-16 sm:h-22 drop-shadow-md">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full -scale-x-100">
            <!-- Pine needles fanning from corner -->
            <path d="M4,4 Q18,12 28,8 M4,4 Q12,18 8,28 M4,4 Q24,20 34,18 M4,4 Q20,24 18,34 M4,4 L36,12 M4,4 L12,36" stroke="#2D7257" stroke-width="2.5" stroke-linecap="round" />
            <path d="M4,4 Q15,10 24,7 M4,4 Q10,15 7,24 M4,4 L28,10 M4,4 L10,28" stroke="#68B696" stroke-width="1.4" stroke-linecap="round" />
            <!-- Holly berries -->
            <circle cx="16" cy="16" r="3.5" fill="#D63031" />
            <circle cx="21" cy="13" r="3" fill="#FF4757" />
            <circle cx="13" cy="21" r="3" fill="#B33939" />
            <!-- Red Satin Ribbon Knot -->
            <path d="M6,6 C1,-1 12,-4 8,8 C6,14 2,12 6,6 Z" fill="#D63031" />
            <path d="M6,6 C-1,1 -4,12 8,8 C14,6 12,2 6,6 Z" fill="#D63031" />
            <circle cx="6" cy="6" r="2.8" fill="#8B0000" />
            <path d="M6,6 C10,14 14,24 15,30" stroke="#D63031" stroke-width="2.2" stroke-linecap="round" />
            <path d="M6,6 C14,10 24,14 30,15" stroke="#D63031" stroke-width="2.2" stroke-linecap="round" />
          </svg>
        </div>

        <!-- Bottom-Left Decorative Pine & Gold Bauble Sprig -->
        <div class="pointer-events-none absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-20 w-12 sm:w-16 h-12 sm:h-16 opacity-75">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full -scale-y-100">
            <path d="M4,4 Q14,8 22,6 M4,4 Q8,14 6,22 M4,4 L24,10 M4,4 L10,24" stroke="#2D7257" stroke-width="2" stroke-linecap="round" />
            <circle cx="12" cy="12" r="3" fill="#F3C77C" />
            <circle cx="16" cy="8" r="2.2" fill="#D63031" />
          </svg>
        </div>

        <!-- Bottom-Right Decorative Pine & Gold Bauble Sprig -->
        <div class="pointer-events-none absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 w-12 sm:w-16 h-12 sm:h-16 opacity-75">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full -scale-x-100 -scale-y-100">
            <path d="M4,4 Q14,8 22,6 M4,4 Q8,14 6,22 M4,4 L24,10 M4,4 L10,24" stroke="#2D7257" stroke-width="2" stroke-linecap="round" />
            <circle cx="12" cy="12" r="3" fill="#F3C77C" />
            <circle cx="16" cy="8" r="2.2" fill="#D63031" />
          </svg>
        </div>

        <!-- Content Container -->
        <div class="relative z-10 flex flex-col items-center text-center">
          
          <!-- TASK 1: KNOLLED CHRISTMAS TREE FLATLAY (Centerpiece Anchor from reference/web design.jfif) -->
          <ChristmasTreeFlatlay class="mb-2 sm:mb-4" />

          <!-- Top Badge: YOU'RE INVITED -->
          <div class="inline-flex items-center gap-2 rounded-full border border-gold-400/50 bg-gold-400/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-widest text-gold-300 shadow-sm mb-5">
            <span>🎄</span>
            <span class="uppercase">{{ eventData.community.invitationBadge }}</span>
            <span>✨</span>
          </div>

          <!-- Community Tag -->
          <h2 class="text-xs sm:text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-gold-400/90 mb-2">
            {{ eventData.community.name }}
          </h2>

          <!-- Main Title -->
          <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-cream-50 tracking-tight leading-tight mb-2">
            {{ eventData.schedule.eventTitle }}
          </h1>

          <!-- Script Subtitle -->
          <p class="font-script text-2xl sm:text-4xl text-gold-300 mb-6 drop-shadow-sm">
            {{ eventData.community.tagline }}
          </p>

          <!-- Heartfelt Description Box -->
          <div class="max-w-xl mx-auto my-3 p-4 sm:p-5 rounded-2xl bg-maroon-950/60 border border-gold-400/20 backdrop-blur-sm">
            <p class="text-sm sm:text-base text-cream-200/95 leading-relaxed font-light italic">
              “{{ eventData.community.description }}”
            </p>
          </div>

          <!-- Date & Venue Preview Chips -->
          <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-6">
            <div class="flex items-center gap-2 rounded-xl border border-gold-400/30 bg-maroon-900/60 px-4 py-2 text-xs sm:text-sm text-cream-100 shadow-sm">
              <Calendar class="h-4 w-4 text-gold-400" />
              <span class="font-medium">{{ eventData.schedule.displayDate }}</span>
            </div>

            <div class="flex items-center gap-2 rounded-xl border border-gold-400/30 bg-maroon-900/60 px-4 py-2 text-xs sm:text-sm text-cream-100 shadow-sm">
              <MapPin class="h-4 w-4 text-gold-400" />
              <span class="font-medium">{{ eventData.schedule.venue.name }}</span>
            </div>
          </div>

          <!-- TASK 3: Countdown Timer Component with Snow Caps & Holly Accents -->
          <CountdownTimer :target-date="eventData.schedule.startDate" />

          <!-- Prompt Question & Warm Sign-off -->
          <div class="mt-4 mb-8">
            <p class="font-serif text-lg sm:text-xl text-cream-100 font-medium">
              {{ eventData.community.subDescription }}
            </p>
            <p class="font-script text-xl sm:text-2xl text-gold-300 mt-1">
              {{ eventData.community.footerTribute }}
            </p>
          </div>

          <!-- CTA Button -->
          <div class="flex flex-col sm:flex-row items-center gap-4">
            <button
              @click="scrollToDetails"
              type="button"
              class="group flex items-center gap-2.5 rounded-full bg-gold-400 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-maroon-950 shadow-gold-glow transition-all duration-300 hover:bg-gold-300 hover:scale-105"
            >
              <span>Explore Getaway Details</span>
              <ChevronDown class="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>

        </div>
      </div>

      <!-- Emerald Green Quote Ribbon (Directly inspired by reference/website 1.jpeg) -->
      <div class="mt-12 overflow-hidden rounded-2xl border border-gold-400/30 bg-pine-800 shadow-maroon-deep">
        <div class="relative px-6 py-8 sm:py-10 text-center">
          <div class="pointer-events-none absolute -top-8 -left-8 text-pine-700/40 text-7xl font-serif">“</div>
          <div class="pointer-events-none absolute -bottom-8 -right-8 text-pine-700/40 text-7xl font-serif">”</div>
          
          <p class="font-serif text-xl sm:text-3xl text-gold-300 tracking-wide">
            “Christmas isn’t a season. It’s a feeling.”
          </p>
          <p class="text-xs uppercase tracking-[0.25em] text-pine-300/90 mt-3 font-semibold">
            — EDNA FERBER
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
