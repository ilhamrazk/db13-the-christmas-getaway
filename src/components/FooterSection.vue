<script setup>
import { ArrowUp } from 'lucide-vue-next'
import { eventData } from '../data/eventData.js'

const quote = eventData.quotes[0]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="relative overflow-hidden bg-pine-900 px-6 pb-10 pt-24 text-ticket-100 sm:pt-28">
    <!-- Ridge line closing the page, mirroring the poster -->
    <svg class="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-pine-950" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0,90 C200,40 380,70 560,50 C760,28 920,80 1100,60 C1260,44 1360,70 1440,58 V160 H0 Z" fill="currentColor" />
    </svg>

    <div class="relative mx-auto max-w-4xl text-center">
      <figure>
        <blockquote class="font-display text-5xl font-black uppercase leading-[0.95] text-ticket-50 sm:text-7xl">
          “{{ quote.text }}”
        </blockquote>
        <figcaption class="mt-5 font-serif text-lg italic text-frost-300">{{ quote.author }}</figcaption>
      </figure>

      <p class="mx-auto mt-16 max-w-xl font-serif text-2xl leading-relaxed text-brass-300">
        {{ eventData.community.footerTribute }}
      </p>
      <p class="mt-2 font-serif text-lg text-ticket-100/80">
        See you at {{ eventData.schedule.venue.name.replace(', Ciawi', '') }}.
      </p>

      <div class="mt-24 flex flex-col items-center justify-between gap-4 border-t border-ticket-100/15 pt-6 font-serif text-sm text-ticket-100/70 sm:flex-row">
        <span>Made with love for the Date Bekasi 13 family</span>
        <button
          @click="scrollToTop"
          type="button"
          class="inline-flex items-center gap-1.5 font-display text-base font-bold tracking-wide text-ticket-100 transition hover:text-brass-300"
        >
          Back to top
          <ArrowUp class="h-4 w-4" />
        </button>
      </div>
    </div>
  </footer>
</template>
