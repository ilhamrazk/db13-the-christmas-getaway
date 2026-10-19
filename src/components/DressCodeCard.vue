<script setup>
import { Sparkles, Check } from 'lucide-vue-next'

const props = defineProps({
  day: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg"
    :class="[
      day.dayNumber === 1
        ? 'bg-cream-100 text-maroon-950 border border-gold-400/40 shadow-gold-glow/20'
        : 'bg-gradient-to-br from-maroon-800 to-maroon-900 text-cream-50 border border-gold-400/40 shadow-maroon-deep'
    ]"
  >
    <!-- Top Ribbon / Day Indicator -->
    <div>
      <div class="flex items-center justify-between mb-4">
        <span
          class="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-sm"
          :class="day.dayNumber === 1 ? 'bg-maroon-950 text-gold-300' : 'bg-gold-400 text-maroon-950'"
        >
          {{ day.dayLabel }}
        </span>

        <span class="text-2xl" :title="day.colorName">{{ day.icon }}</span>
      </div>

      <!-- Color Name in Editorial Serif -->
      <h3
        class="text-2xl sm:text-3xl font-serif font-bold tracking-tight mb-1"
        :class="day.dayNumber === 1 ? 'text-maroon-900' : 'text-cream-50'"
      >
        {{ day.colorName }}
      </h3>

      <!-- Theme Tagline -->
      <p
        class="font-script text-lg sm:text-xl mb-4"
        :class="day.dayNumber === 1 ? 'text-maroon-700' : 'text-gold-300'"
      >
        {{ day.themeName }}
      </p>

      <!-- Description -->
      <p
        class="text-xs sm:text-sm leading-relaxed mb-6"
        :class="day.dayNumber === 1 ? 'text-maroon-900/80' : 'text-cream-200/90'"
      >
        {{ day.description }}
      </p>
    </div>

    <!-- Recommendations Checklist -->
    <div
      class="rounded-2xl p-4 border"
      :class="day.dayNumber === 1 ? 'bg-white/80 border-maroon-900/10' : 'bg-maroon-950/60 border-gold-400/20'"
    >
      <span
        class="block text-[11px] font-bold uppercase tracking-wider mb-2.5"
        :class="day.dayNumber === 1 ? 'text-maroon-900/70' : 'text-gold-400/90'"
      >
        Styling Inspiration:
      </span>
      <ul class="space-y-2">
        <li
          v-for="(item, idx) in day.recommendations"
          :key="idx"
          class="flex items-start gap-2 text-xs"
          :class="day.dayNumber === 1 ? 'text-maroon-950/90' : 'text-cream-200'"
        >
          <span
            class="flex-shrink-0 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[10px]"
            :class="day.dayNumber === 1 ? 'bg-maroon-900/10 text-maroon-800' : 'bg-gold-400/20 text-gold-300'"
          >
            ✓
          </span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
