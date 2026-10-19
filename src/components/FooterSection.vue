<script setup>
import { Heart, ArrowUp, Calendar, MapPin } from 'lucide-vue-next'
import { eventData } from '../data/eventData.js'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>

<template>
  <footer class="relative border-t border-gold-400/20 bg-maroon-950 pt-16 pb-20 px-4 sm:px-6 text-cream-100">
    <div class="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
      
      <!-- Big Closing Greeting -->
      <div class="space-y-2">
        <span class="text-3xl sm:text-4xl">🎄✨</span>
        <h3 class="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-cream-50">
          {{ eventData.community.footerTribute }}
        </h3>
        <p class="font-script text-xl sm:text-2xl text-gold-300">
          See you at Villa Nirmala Hills!
        </p>
      </div>

      <!-- Quick Summary Pills -->
      <div class="flex flex-wrap items-center justify-center gap-3 text-xs text-cream-300/80">
        <span class="rounded-full border border-gold-400/30 bg-maroon-900/60 px-3.5 py-1.5 flex items-center gap-1.5">
          <Calendar class="h-3.5 w-3.5 text-gold-400" />
          {{ eventData.schedule.displayDate }}
        </span>
        <span class="rounded-full border border-gold-400/30 bg-maroon-900/60 px-3.5 py-1.5 flex items-center gap-1.5">
          <MapPin class="h-3.5 w-3.5 text-gold-400" />
          {{ eventData.schedule.venue.name }}
        </span>
      </div>


      <!-- Divider with Back to Top -->
      <div class="w-full pt-8 border-t border-maroon-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400/70">
        <div class="flex items-center gap-1.5">
          <span>Crafted with</span>
          <Heart class="h-3.5 w-3.5 text-red-500 fill-red-500" />
          <span>for <strong>DATE Bekasi 13 Family</strong></span>
        </div>

        <button
          @click="scrollToTop"
          type="button"
          class="flex items-center gap-1.5 text-gold-400/80 hover:text-gold-300 transition"
        >
          <span>Back to Top</span>
          <ArrowUp class="h-3.5 w-3.5" />
        </button>
      </div>

    </div>
  </footer>
</template>
