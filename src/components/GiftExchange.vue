<script setup>
import { ref } from 'vue'
import { Lightbulb } from 'lucide-vue-next'
import GiftIdeasModal from './GiftIdeasModal.vue'
import { eventData } from '../data/eventData.js'

const { giftExchange } = eventData
const modalOpen = ref(false)

// Three gift tags hanging from one length of twine
const tags = [
  {
    label: 'Budget',
    value: 'Rp 100.000',
    detail: 'A fair and thoughtful budget for everyone. Please aim as close to Rp 100,000 as possible so each member receives something equally special.',
    tilt: 'md:-rotate-2'
  },
  {
    label: 'Wrapping',
    value: 'Brown paper',
    detail: 'Wrap your present using plain brown craft paper.',
    tilt: 'md:rotate-1'
  },
  {
    label: 'The gift',
    value: 'Unisex, no food',
    detail: 'Must be enjoyable for anyone (brother or sister) and non-perishable. No food items, please!',
    tilt: 'md:-rotate-1'
  }
]
</script>

<template>
  <section id="gift-exchange" class="kraft-paper relative px-4 py-24 text-ink-900 sm:px-6 sm:py-28" style="--page: #B98B5E">
    <div class="mx-auto max-w-5xl">
      <div class="max-w-2xl px-2">
        <h2 class="font-display text-6xl font-black uppercase leading-[0.9] sm:text-7xl">Christmas gift exchange</h2>
        <p class="mt-5 font-serif text-lg leading-relaxed text-ink-900/85">
          {{ giftExchange.subtitle }} {{ giftExchange.headline }}
        </p>
      </div>

      <!-- Twine + tags -->
      <div class="relative mt-14">
        <svg class="absolute inset-x-0 top-0 hidden h-10 w-full md:block" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,6 C160,34 330,34 500,14 C670,-4 840,30 1000,8" fill="none" stroke="#F2E6CF" stroke-width="2.5" stroke-linecap="round" />
          <path d="M0,6 C160,34 330,34 500,14 C670,-4 840,30 1000,8" fill="none" stroke="#6E4E31" stroke-width="2.5" stroke-dasharray="2 5" stroke-linecap="round" />
        </svg>

        <ul class="grid gap-10 md:grid-cols-3 md:gap-8 md:pt-6">
          <li v-for="tag in tags" :key="tag.label" class="relative flex flex-col items-center">
            <span class="hidden h-10 w-0.5 bg-ticket-100/80 md:block" aria-hidden="true"></span>
            <div class="gift-tag relative w-full bg-ticket-50 px-6 pb-8 pt-12 shadow-xl transition-transform duration-300" :class="tag.tilt">
              <span class="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full bg-kraft-500 ring-[3px] ring-ticket-300" aria-hidden="true"></span>
              <p class="font-serif text-base italic text-ink-500">{{ tag.label }}</p>
              <p class="mt-1 font-display text-4xl font-black leading-none text-cherry-700">{{ tag.value }}</p>
              <p class="mt-4 font-serif text-[15px] leading-relaxed text-ink-700">{{ tag.detail }}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Why it matters -->
      <div class="mx-auto mt-20 max-w-3xl text-center">
        <p class="font-serif text-2xl italic leading-relaxed sm:text-3xl sm:leading-relaxed">
          {{ giftExchange.philosophy }}
        </p>
        <p class="mt-6 font-serif text-lg text-ink-900/85">{{ giftExchange.callToAction }}</p>
        <button
          @click="modalOpen = true"
          type="button"
          class="mt-8 inline-flex items-center gap-2 rounded-full bg-pine-900 px-7 py-3.5 font-display text-lg font-bold tracking-wide text-ticket-50 shadow-lg transition hover:bg-pine-700"
        >
          <Lightbulb class="h-5 w-5 text-brass-300" />
          See gift ideas
        </button>
      </div>
    </div>

    <GiftIdeasModal
      :is-open="modalOpen"
      @close="modalOpen = false"
    />
  </section>
</template>
