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
    <!-- Subtle warm glow background -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-festive-sand/40 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-4xl mx-auto">
      
      <!-- Warm Festive Editorial Frame inspired by reference/web design.jfif -->
      <div class="relative rounded-3xl border border-festive-sand bg-white/90 p-6 sm:p-12 md:p-16 shadow-xl backdrop-blur-md overflow-hidden">
        
        <!-- Inner decorative hairline frame -->
        <div class="pointer-events-none absolute inset-3 sm:inset-5 rounded-2xl border border-festive-sand/60"></div>

        <!-- Hanging Pine Garland Swag across Top Border -->
        <div class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-8 z-10 opacity-80">
          <svg viewBox="0 0 320 28" fill="none" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <!-- Swag string with pine sprigs and warm fairy lights -->
            <path d="M10,2 Q160,26 310,2" stroke="#A77B56" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.6" />
            <!-- Little hanging lights -->
            <circle cx="50" cy="8" r="2.5" fill="#D4AF37" class="animate-pulse" />
            <circle cx="100" cy="13" r="2.5" fill="#9B1B28" class="animate-pulse" />
            <circle cx="160" cy="15" r="3" fill="#1B4332" class="animate-pulse" />
            <circle cx="220" cy="13" r="2.5" fill="#D4AF37" class="animate-pulse" />
            <circle cx="270" cy="8" r="2.5" fill="#9B1B28" class="animate-pulse" />
          </svg>
        </div>

        <!-- Top-Left Corner Garland & Red Ribbon Wreath Ornament -->
        <div class="pointer-events-none absolute top-2 left-2 sm:top-4 sm:left-4 z-20 w-16 sm:w-22 h-16 sm:h-22 drop-shadow-md">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
            <!-- Pine needles fanning from corner -->
            <path d="M4,4 Q18,12 28,8 M4,4 Q12,18 8,28 M4,4 Q24,20 34,18 M4,4 Q20,24 18,34 M4,4 L36,12 M4,4 L12,36" stroke="#1B4332" stroke-width="2.5" stroke-linecap="round" />
            <path d="M4,4 Q15,10 24,7 M4,4 Q10,15 7,24 M4,4 L28,10 M4,4 L10,28" stroke="#2D7257" stroke-width="1.4" stroke-linecap="round" />
            <!-- Holly berries -->
            <circle cx="16" cy="16" r="3.5" fill="#9B1B28" />
            <circle cx="21" cy="13" r="3" fill="#D63031" />
            <circle cx="13" cy="21" r="3" fill="#6B131D" />
            <!-- Red Satin Ribbon Knot -->
            <path d="M6,6 C1,-1 12,-4 8,8 C6,14 2,12 6,6 Z" fill="#9B1B28" />
            <path d="M6,6 C-1,1 -4,12 8,8 C14,6 12,2 6,6 Z" fill="#9B1B28" />
            <circle cx="6" cy="6" r="2.8" fill="#6B131D" />
            <path d="M6,6 C10,14 14,24 15,30" stroke="#9B1B28" stroke-width="2.2" stroke-linecap="round" />
            <path d="M6,6 C14,10 24,14 30,15" stroke="#9B1B28" stroke-width="2.2" stroke-linecap="round" />
          </svg>
        </div>

        <!-- Top-Right Corner Garland & Red Ribbon Wreath Ornament -->
        <div class="pointer-events-none absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-16 sm:w-22 h-16 sm:h-22 drop-shadow-md">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full -scale-x-100">
            <!-- Pine needles fanning from corner -->
            <path d="M4,4 Q18,12 28,8 M4,4 Q12,18 8,28 M4,4 Q24,20 34,18 M4,4 Q20,24 18,34 M4,4 L36,12 M4,4 L12,36" stroke="#1B4332" stroke-width="2.5" stroke-linecap="round" />
            <path d="M4,4 Q15,10 24,7 M4,4 Q10,15 7,24 M4,4 L28,10 M4,4 L10,28" stroke="#2D7257" stroke-width="1.4" stroke-linecap="round" />
            <!-- Holly berries -->
            <circle cx="16" cy="16" r="3.5" fill="#9B1B28" />
            <circle cx="21" cy="13" r="3" fill="#D63031" />
            <circle cx="13" cy="21" r="3" fill="#6B131D" />
            <!-- Red Satin Ribbon Knot -->
            <path d="M6,6 C1,-1 12,-4 8,8 C6,14 2,12 6,6 Z" fill="#9B1B28" />
            <path d="M6,6 C-1,1 -4,12 8,8 C14,6 12,2 6,6 Z" fill="#9B1B28" />
            <circle cx="6" cy="6" r="2.8" fill="#6B131D" />
            <path d="M6,6 C10,14 14,24 15,30" stroke="#9B1B28" stroke-width="2.2" stroke-linecap="round" />
            <path d="M6,6 C14,10 24,14 30,15" stroke="#9B1B28" stroke-width="2.2" stroke-linecap="round" />
          </svg>
        </div>

        <!-- Bottom-Left Decorative Pine & Bauble Sprig -->
        <div class="pointer-events-none absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-20 w-12 sm:w-16 h-12 sm:h-16 opacity-75">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full -scale-y-100">
            <path d="M4,4 Q14,8 22,6 M4,4 Q8,14 6,22 M4,4 L24,10 M4,4 L10,24" stroke="#1B4332" stroke-width="2" stroke-linecap="round" />
            <circle cx="12" cy="12" r="3" fill="#D4AF37" />
            <circle cx="16" cy="8" r="2.2" fill="#9B1B28" />
          </svg>
        </div>

        <!-- Bottom-Right Decorative Pine & Bauble Sprig -->
        <div class="pointer-events-none absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 w-12 sm:w-16 h-12 sm:h-16 opacity-75">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full -scale-x-100 -scale-y-100">
            <path d="M4,4 Q14,8 22,6 M4,4 Q8,14 6,22 M4,4 L24,10 M4,4 L10,24" stroke="#1B4332" stroke-width="2" stroke-linecap="round" />
            <circle cx="12" cy="12" r="3" fill="#D4AF37" />
            <circle cx="16" cy="8" r="2.2" fill="#9B1B28" />
          </svg>
        </div>

        <!-- Content Container -->
        <div class="relative z-10 flex flex-col items-center text-center">
          
          <!-- KNOLLED CHRISTMAS TREE FLATLAY (Centerpiece Anchor from reference/web design.jfif) -->
          <ChristmasTreeFlatlay class="mb-3 sm:mb-5" />

          <!-- Top Badge: YOU'RE INVITED -->
          <div class="inline-flex items-center gap-2 rounded-full border border-festive-crimson/30 bg-festive-sand/30 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-widest text-festive-crimson shadow-sm mb-5">
            <span>🎄</span>
            <span class="uppercase font-serif">{{ eventData.community.invitationBadge }}</span>
            <span>✨</span>
          </div>

          <!-- Community Tag -->
          <h2 class="text-xs sm:text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-festive-espresso/70 mb-2 font-serif">
            {{ eventData.community.name }}
          </h2>

          <!-- Main Title -->
          <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-festive-espresso tracking-tight leading-tight mb-2">
            {{ eventData.schedule.eventTitle }}
          </h1>

          <!-- Script Subtitle -->
          <p class="font-script text-2xl sm:text-4xl text-festive-crimson mb-6 drop-shadow-sm">
            {{ eventData.community.tagline }}
          </p>

          <!-- Heartfelt Description Box (Warm Editorial Paper Style) -->
          <div class="max-w-xl mx-auto my-3 p-4 sm:p-6 rounded-2xl bg-festive-cream border border-festive-sand shadow-sm">
            <p class="text-sm sm:text-base text-festive-espresso/90 leading-relaxed font-serif italic">
              “{{ eventData.community.description }}”
            </p>
          </div>

          <!-- Date & Venue Preview Chips -->
          <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-6">
            <div class="flex items-center gap-2 rounded-xl border border-festive-sand bg-festive-cream px-4 py-2 text-xs sm:text-sm text-festive-espresso font-medium shadow-sm">
              <Calendar class="h-4 w-4 text-festive-crimson" />
              <span>{{ eventData.schedule.displayDate }}</span>
            </div>

            <div class="flex items-center gap-2 rounded-xl border border-festive-sand bg-festive-cream px-4 py-2 text-xs sm:text-sm text-festive-espresso font-medium shadow-sm">
              <MapPin class="h-4 w-4 text-festive-crimson" />
              <span>{{ eventData.schedule.venue.name }}</span>
            </div>
          </div>

          <!-- Countdown Timer Component -->
          <CountdownTimer :target-date="eventData.schedule.startDate" />

          <!-- Prompt Question & Warm Sign-off -->
          <div class="mt-4 mb-8">
            <p class="font-serif text-lg sm:text-xl text-festive-espresso font-medium">
              {{ eventData.community.subDescription }}
            </p>
            <p class="font-script text-xl sm:text-2xl text-festive-crimson mt-1">
              {{ eventData.community.footerTribute }}
            </p>
          </div>

          <!-- CTA Button -->
          <div class="flex flex-col sm:flex-row items-center gap-4">
            <button
              @click="scrollToDetails"
              type="button"
              class="group flex items-center gap-2.5 rounded-full bg-festive-crimson px-8 py-3.5 text-xs sm:text-sm font-serif font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#851621] hover:scale-105"
            >
              <span>Explore Getaway Details</span>
              <ChevronDown class="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>

        </div>
      </div>

      <!-- Pine Green Quote Ribbon (Editorial Banner) -->
      <div class="mt-12 overflow-hidden rounded-2xl border border-festive-pine/30 bg-festive-pine shadow-lg">
        <div class="relative px-6 py-8 sm:py-10 text-center">
          <div class="pointer-events-none absolute -top-8 -left-8 text-white/10 text-7xl font-serif">“</div>
          <div class="pointer-events-none absolute -bottom-8 -right-8 text-white/10 text-7xl font-serif">”</div>
          
          <p class="font-serif text-xl sm:text-3xl text-festive-sand tracking-wide">
            “Christmas isn’t a season. It’s a feeling.”
          </p>
          <p class="text-xs uppercase tracking-[0.25em] text-cream-200/90 mt-3 font-semibold">
            — EDNA FERBER
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
