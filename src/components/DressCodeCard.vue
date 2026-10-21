<script setup>
import { ref } from 'vue'
import { Expand } from 'lucide-vue-next'
import LookbookModal from './LookbookModal.vue'

const props = defineProps({
  day: {
    type: Object,
    required: true
  }
})

const dates = { 1: 'Saturday, 7 November', 2: 'Sunday, 8 November' }
const isModalOpen = ref(false)
</script>

<template>
  <article class="flex flex-col overflow-hidden rounded-xl bg-ticket-50 text-ink-900 shadow-[0_30px_60px_-30px_rgba(40,0,8,0.8)]">
    <!-- Lookbook photo -->
    <button
      type="button"
      @click="isModalOpen = true"
      class="group relative block aspect-[4/3] w-full overflow-hidden bg-ticket-200"
      :aria-label="`View the full ${day.dayLabel.toLowerCase()} lookbook`"
    >
      <img
        :src="day.imageSrc"
        :alt="`${day.themeName} outfit inspiration`"
        class="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        loading="lazy"
      />
      <span class="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink-900/80 px-4 py-2 font-display text-sm font-bold tracking-wide text-ticket-50 backdrop-blur-sm">
        <Expand class="h-4 w-4" />
        Full lookbook
      </span>
    </button>

    <div class="relative flex flex-1 flex-col p-6 sm:p-8">
      <!-- Postmark-style day badge, stamped over the photo edge -->
      <span class="absolute -top-10 right-6 flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-dashed border-ticket-50 bg-cherry-700 text-ticket-50 shadow-lg" aria-hidden="true">
        <span class="font-serif text-xs italic leading-none">Day</span>
        <span class="font-display text-4xl font-black leading-none">{{ day.dayNumber }}</span>
      </span>
      <p class="pr-24 font-serif text-sm italic text-ink-500">{{ dates[day.dayNumber] }}</p>
      <h3 class="mt-1 font-display text-4xl font-black uppercase leading-none text-cherry-700 sm:text-5xl">
        {{ day.themeName }}
      </h3>
      <p class="mt-3 font-serif text-base font-medium text-ink-900">{{ day.colorInstruction }}</p>

      <!-- Palette -->
      <ul class="mt-5 flex flex-wrap gap-x-4 gap-y-3" aria-label="Colour palette">
        <li v-for="color in day.palette" :key="color.name" class="flex flex-col items-center gap-1.5">
          <span
            class="block h-11 w-11 rounded-full ring-1 ring-inset ring-ink-900/15"
            :class="color.isMain ? 'outline outline-2 outline-offset-2 outline-cherry-700' : ''"
            :style="{ backgroundColor: color.hex }"
          ></span>
          <span class="font-serif text-xs text-ink-700">{{ color.name }}{{ color.isMain ? ' (main)' : '' }}</span>
        </li>
      </ul>

      <p class="mt-6 font-serif text-base italic leading-relaxed text-ink-700">{{ day.vibe }}</p>

      <ul class="mt-6 space-y-2 border-t border-ticket-300 pt-5">
        <li v-for="note in day.styleNotes" :key="note" class="flex gap-3 font-serif text-[15px] leading-snug text-ink-700">
          <span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-cherry-600" aria-hidden="true"></span>
          <span>{{ note }}</span>
        </li>
      </ul>

      <p class="mt-auto pt-6 font-display text-xl font-bold tracking-wide text-pine-700">{{ day.tagline }}</p>
    </div>

    <LookbookModal
      :is-open="isModalOpen"
      :image-src="day.imageSrc"
      :title="`Day ${day.dayNumber} lookbook`"
      @close="isModalOpen = false"
    />
  </article>
</template>
