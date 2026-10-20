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
    class="relative flex flex-col justify-between overflow-hidden rounded-t-[100px] rounded-b-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg border border-festive-sand bg-white text-festive-espresso"
  >
    <!-- Top Ribbon / Day Indicator -->
    <div>
      <div class="flex items-center justify-between mb-4 pt-4 sm:pt-6">
        <span
          class="rounded-full px-3.5 py-1 text-xs font-serif font-bold uppercase tracking-widest shadow-sm"
          :class="day.dayNumber === 1 ? 'bg-festive-sand text-festive-espresso' : 'bg-festive-crimson text-white'"
        >
          {{ day.dayLabel }}
        </span>

        <span class="text-xs uppercase tracking-widest text-festive-crimson font-serif font-semibold">
          {{ day.dayNumber === 1 ? 'Staycation & Explore' : 'Celebration & Fun' }}
        </span>
      </div>

      <!-- Theme Name in Editorial Serif -->
      <h3 class="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-festive-espresso mb-1">
        {{ day.themeName }}
      </h3>

      <!-- Color Instruction -->
      <p class="text-xs sm:text-sm font-medium text-festive-crimson mb-4">
        {{ day.colorInstruction }}
      </p>

      <!-- Lookbook Image Preview Card (Click to Zoom) - Arched Style -->
      <div
        @click="isModalOpen = true"
        class="group relative my-4 overflow-hidden rounded-t-[80px] rounded-b-2xl border border-festive-sand bg-festive-cream cursor-pointer shadow-md"
      >
        <img
          :src="day.imageSrc"
          :alt="day.themeName"
          class="w-full h-64 sm:h-72 object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        <!-- Hover Overlay Pill -->
        <div class="absolute inset-0 bg-festive-espresso/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span class="inline-flex items-center gap-2 rounded-full bg-white/95 border border-festive-sand px-4 py-2 text-xs font-serif font-bold text-festive-espresso shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <ZoomIn class="h-3.5 w-3.5 text-festive-crimson" />
            <span>View Full Lookbook</span>
          </span>
        </div>

        <div class="absolute bottom-2.5 right-2.5 rounded-lg bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-festive-crimson border border-festive-sand shadow-sm sm:hidden">
          Tap to view
        </div>
      </div>

      <!-- Color Palette Swatches -->
      <div class="my-4 rounded-2xl border border-festive-sand bg-festive-cream p-3.5">
        <span class="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-festive-espresso/80 mb-2.5">
          Color Palette:
        </span>
        <div class="flex flex-wrap items-center gap-2 sm:gap-3">
          <div
            v-for="(color, idx) in day.palette"
            :key="idx"
            class="flex items-center gap-1.5 rounded-full border border-festive-sand bg-white px-2.5 py-1 text-xs shadow-sm"
          >
            <span
              class="h-4 w-4 rounded-full shadow-inner border"
              :class="color.border"
              :style="{ backgroundColor: color.hex }"
            ></span>
            <span class="text-[11px] font-medium text-festive-espresso">
              {{ color.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- The Vibe Description -->
      <p class="text-xs sm:text-sm text-festive-espresso/85 leading-relaxed my-4 italic font-serif">
        “{{ day.vibe }}”
      </p>
    </div>

    <!-- Recommendations Checklist & Tagline -->
    <div>
      <div class="rounded-2xl p-4 border border-festive-sand bg-festive-cream">
        <span class="block text-[11px] font-bold uppercase tracking-wider text-festive-espresso/80 mb-2.5 font-serif">
          Style Notes:
        </span>
        <ul class="space-y-2">
          <li
            v-for="(item, idx) in day.styleNotes"
            :key="idx"
            class="flex items-start gap-2 text-xs text-festive-espresso/90"
          >
            <span class="flex-shrink-0 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[10px] bg-festive-sand text-festive-espresso font-bold">
              ✓
            </span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="mt-4 text-center">
        <span class="font-script text-lg sm:text-xl text-festive-crimson">
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
