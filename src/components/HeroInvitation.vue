<script setup>
import { Calendar, MapPin, Sparkles, ChevronDown, Heart } from 'lucide-vue-next'
import CountdownTimer from './CountdownTimer.vue'
import { eventData } from '../data/eventData.js'

function scrollToDetails() {
  const el = document.getElementById('event-details')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="invitation" class="relative pt-10 pb-16 px-4 sm:px-6 overflow-hidden">
    <!-- Subtle radial glow background -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-maroon-700/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-4xl mx-auto">
      
      <!-- Luxury Gold Double-Border Frame (Inspired by reference/website 1.jpeg) -->
      <div class="relative rounded-3xl border border-gold-400/40 p-6 sm:p-12 md:p-16 bg-gradient-to-b from-maroon-900/90 via-maroon-950/95 to-maroon-900/90 shadow-maroon-deep backdrop-blur-xl">
        
        <!-- Inner decorative hairline frame -->
        <div class="pointer-events-none absolute inset-3 sm:inset-5 rounded-2xl border border-gold-400/20"></div>

        <!-- Corner decorative ornaments -->
        <div class="pointer-events-none absolute top-4 left-4 text-gold-400/50 text-xs">✦</div>
        <div class="pointer-events-none absolute top-4 right-4 text-gold-400/50 text-xs">✦</div>
        <div class="pointer-events-none absolute bottom-4 left-4 text-gold-400/50 text-xs">✦</div>
        <div class="pointer-events-none absolute bottom-4 right-4 text-gold-400/50 text-xs">✦</div>

        <!-- Content Container -->
        <div class="relative z-10 flex flex-col items-center text-center">
          
          <!-- Top Badge: YOU'RE INVITED -->
          <div class="inline-flex items-center gap-2 rounded-full border border-gold-400/50 bg-gold-400/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-widest text-gold-300 shadow-sm mb-6">
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

          <!-- Countdown Timer Component -->
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
