<script setup>
import { ref } from 'vue'
import { Sparkles, Check, ZoomIn } from 'lucide-vue-next'
import LookbookModal from './LookbookModal.vue'

const props = defineProps({
  day: {
    type: Object,
    required: true
  }
})

const isModalOpen = ref(false)
</script>

<template>
  <div
    class="relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-xl border border-gold-400/40 bg-gradient-to-b from-maroon-900/90 via-maroon-950/95 to-maroon-900/90 text-cream-50"
  >
    <!-- Top Ribbon / Day Indicator -->
    <div>
      <div class="flex items-center justify-between mb-4">
        <span
          class="rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-widest shadow-sm"
          :class="day.dayNumber === 1 ? 'bg-gold-400 text-maroon-950 font-bold' : 'bg-red-800 text-cream-50 font-bold border border-gold-400/30'"
        >
          {{ day.dayLabel }}
        </span>

        <span class="text-xs uppercase tracking-widest text-gold-400/90 font-serif">
          {{ day.dayNumber === 1 ? 'Staycation & Explore' : 'Celebration & Fun' }}
        </span>
      </div>

      <!-- Theme Name in Editorial Serif -->
      <h3 class="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-cream-50 mb-1">
        {{ day.themeName }}
      </h3>

      <!-- Color Instruction -->
      <p class="text-xs sm:text-sm font-medium text-gold-300 mb-4">
        {{ day.colorInstruction }}
      </p>

      <!-- Lookbook Image Preview Card (Click to Zoom) -->
      <div
        @click="isModalOpen = true"
        class="group relative my-4 overflow-hidden rounded-2xl border border-gold-400/30 bg-maroon-950 cursor-pointer shadow-lg"
      >
        <img
          :src="day.imageSrc"
          :alt="day.themeName"
          class="w-full h-64 sm:h-72 object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 opacity-95 group-hover:opacity-100"
          loading="lazy"
        />

        <!-- Hover Overlay Pill -->
        <div class="absolute inset-0 bg-maroon-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span class="inline-flex items-center gap-2 rounded-full bg-maroon-950/90 border border-gold-400/50 px-4 py-2 text-xs font-bold text-gold-300 shadow-xl backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <ZoomIn class="h-3.5 w-3.5 text-gold-400" />
            <span>View Full Lookbook</span>
          </span>
        </div>

        <div class="absolute bottom-2.5 right-2.5 rounded-lg bg-maroon-950/80 px-2.5 py-1 text-[10px] font-semibold text-gold-300/90 border border-gold-400/30 backdrop-blur-sm sm:hidden">
          Tap to view
        </div>
      </div>

      <!-- Color Palette Swatches -->
      <div class="my-4 rounded-2xl border border-gold-400/20 bg-maroon-950/60 p-3.5">
        <span class="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gold-400/90 mb-2.5">
          Color Palette:
        </span>
        <div class="flex flex-wrap items-center gap-2 sm:gap-3">
          <div
            v-for="(color, idx) in day.palette"
            :key="idx"
            class="flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-maroon-900/60 px-2.5 py-1 text-xs"
          >
            <span
              class="h-4 w-4 rounded-full shadow-inner border"
              :class="color.border"
              :style="{ backgroundColor: color.hex }"
            ></span>
            <span class="text-[11px] font-medium text-cream-200">
              {{ color.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- The Vibe Description -->
      <p class="text-xs sm:text-sm text-cream-200/90 leading-relaxed my-4 italic">
        “{{ day.vibe }}”
      </p>
    </div>

    <!-- Recommendations Checklist & Tagline -->
    <div>
      <div class="rounded-2xl p-4 border bg-maroon-950/70 border-gold-400/20">
        <span class="block text-[11px] font-bold uppercase tracking-wider text-gold-400/90 mb-2.5">
          Style Notes:
        </span>
        <ul class="space-y-2">
          <li
            v-for="(item, idx) in day.styleNotes"
            :key="idx"
            class="flex items-start gap-2 text-xs text-cream-200"
          >
            <span class="flex-shrink-0 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[10px] bg-gold-400/20 text-gold-300">
              ✓
            </span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="mt-4 text-center">
        <span class="font-script text-lg sm:text-xl text-gold-300">
          {{ day.tagline }}
        </span>
      </div>
    </div>

    <!-- Lookbook Modal -->
    <LookbookModal
      :is-open="isModalOpen"
      :image-src="day.imageSrc"
      :title="`${day.dayLabel} Lookbook — ${day.themeName}`"
      @close="isModalOpen = false"
    />
  </div>
</template>
