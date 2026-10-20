<script setup>
import { Heart, ArrowUp, Calendar, MapPin } from 'lucide-vue-next'
import { eventData } from '../data/eventData.js'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>

<template>
  <footer class="relative border-t border-festive-pine/30 bg-festive-pine pt-16 pb-20 px-4 sm:px-6 text-white">
    <div class="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
      
      <!-- Big Closing Greeting -->
      <div class="space-y-3">
        <div class="flex items-center justify-center gap-3">
          <img src="/images/figma/snowman.svg" alt="Snowman" class="w-10 h-10 object-contain drop-shadow-sm" />
          <img src="/images/figma/christmas-wreath.svg" alt="Wreath" class="w-12 h-12 object-contain drop-shadow-sm" />
          <img src="/images/figma/reindeer.svg" alt="Reindeer" class="w-10 h-10 object-contain drop-shadow-sm" />
        </div>
        <h3 class="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-festive-sand">
          {{ eventData.community.footerTribute }}
        </h3>
        <p class="font-script text-xl sm:text-2xl text-festive-sand/90">
          See you at Villa Nirmala Hills!
        </p>
      </div>

      <!-- Quick Summary Pills -->
      <div class="flex flex-wrap items-center justify-center gap-3 text-xs text-white/80 font-serif">
        <span class="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 flex items-center gap-1.5">
          <Calendar class="h-3.5 w-3.5 text-festive-sand" />
          {{ eventData.schedule.displayDate }}
        </span>
        <span class="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 flex items-center gap-1.5">
          <MapPin class="h-3.5 w-3.5 text-festive-sand" />
          {{ eventData.schedule.venue.name }}
        </span>
      </div>


      <!-- Divider with Back to Top -->
      <div class="w-full pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70 font-serif">
        <div class="flex items-center gap-1.5">
          <span>Crafted with</span>
          <Heart class="h-3.5 w-3.5 text-festive-crimson fill-festive-crimson" />
          <span>for <strong>DATE Bekasi 13 Family</strong></span>
        </div>

        <button
          @click="scrollToTop"
          type="button"
          class="flex items-center gap-1.5 text-festive-sand hover:text-white transition"
        >
          <span>Back to Top</span>
          <ArrowUp class="h-3.5 w-3.5" />
        </button>
      </div>

    </div>
  </footer>
</template>
