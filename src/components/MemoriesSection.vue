<script setup>
import { ref } from 'vue'
import { Expand } from 'lucide-vue-next'
import LookbookModal from './LookbookModal.vue'

// Pages from the community's Christmas scrapbook, oldest first
const centerpiece = {
  src: '/images/memories/sentul-2024.jpg',
  alt: 'Sixteen DATE fam members smiling out of cardboard boxes framed with tinsel and red poinsettias',
  title: 'Christmas staycation',
  place: 'Sentul',
  year: '2024'
}

const postcards = [
  {
    src: '/images/memories/bsteak-group.jpg',
    alt: 'The DATE fam in maroon outfits posing in front of the decorated B\'Steak sign',
    title: 'Christmas dinner',
    place: 'B\'Steak, Sedayu City Kelapa Gading',
    tilt: '-rotate-2',
    tape: 'rotate-3'
  },
  {
    src: '/images/memories/bsteak-dinner.jpg',
    alt: 'The DATE fam in maroon gathered around a long dinner table under a Christmas garland',
    title: 'Around the table',
    place: 'B\'Steak, Sedayu City Kelapa Gading',
    tilt: 'rotate-2',
    tape: '-rotate-2'
  }
]

const viewing = ref(null)
</script>

<template>
  <section id="memories" class="bg-pine-800 px-4 py-24 sm:px-6 sm:py-28" style="--page: #1A4537">
    <div class="mx-auto max-w-6xl">
      <div class="max-w-2xl px-2">
        <h2 class="font-display text-6xl font-black uppercase leading-[0.9] text-ticket-50 sm:text-7xl">How far we've come</h2>
        <p class="mt-5 font-serif text-lg leading-relaxed text-ticket-100/85">
          Before Ciawi, there was Sentul and Kelapa Gading. A few pages from our Christmas scrapbook.
        </p>
      </div>

      <div class="mt-14 grid items-start gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">

        <!-- Centerpiece: the Sentul box wall -->
        <figure class="relative rounded-md bg-ticket-50 p-3 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)] sm:p-4">
          <button
            type="button"
            class="group block w-full text-left"
            :aria-label="`View photo: ${centerpiece.title}, ${centerpiece.place} ${centerpiece.year}`"
            @click="viewing = centerpiece"
          >
            <span class="relative block overflow-hidden rounded-sm">
              <img
                :src="centerpiece.src"
                :alt="centerpiece.alt"
                class="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
              <span class="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-ink-900/80 px-3.5 py-1.5 font-display text-sm font-bold tracking-wide text-ticket-50 backdrop-blur-sm">
                <Expand class="h-4 w-4" />
                View
              </span>
            </span>
          </button>
          <figcaption class="px-1 pb-1 pt-4 text-ink-900">
            <span class="block font-display text-3xl font-black uppercase leading-none text-cherry-700">{{ centerpiece.title }}</span>
            <span class="mt-1 block font-serif text-base italic text-ink-500">{{ centerpiece.place }}, {{ centerpiece.year }}</span>
          </figcaption>

          <!-- Postmark -->
          <span class="pointer-events-none absolute -right-3 bottom-4 flex h-20 w-20 -rotate-12 flex-col items-center justify-center rounded-full border-2 border-dashed border-brass-300 bg-pine-900 text-brass-300 shadow-lg sm:-right-6 sm:bottom-5 sm:h-24 sm:w-24" aria-hidden="true">
            <span class="font-serif text-xs italic leading-none">Christmas</span>
            <span class="font-display text-3xl font-black leading-none">{{ centerpiece.year }}</span>
          </span>
        </figure>

        <!-- Taped postcards from Kelapa Gading -->
        <div class="grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-1 lg:gap-10 lg:pt-6">
          <figure v-for="card in postcards" :key="card.src" class="relative bg-ticket-50 p-2.5 pb-4 shadow-[0_25px_50px_-25px_rgba(0,0,0,0.75)] sm:p-3 sm:pb-5" :class="card.tilt">
            <span class="absolute -top-3 left-1/2 z-10 h-7 w-20 -translate-x-1/2 bg-brass-300/80 shadow-sm sm:w-24" :class="card.tape" aria-hidden="true"></span>
            <button
              type="button"
              class="group block w-full text-left"
              :aria-label="`View photo: ${card.title}, ${card.place}`"
              @click="viewing = card"
            >
              <span class="block overflow-hidden">
                <img
                  :src="card.src"
                  :alt="card.alt"
                  class="aspect-[4/3] w-full object-cover object-[50%_60%] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </span>
            </button>
            <figcaption class="px-1 pt-3 text-ink-900">
              <span class="block font-display text-xl font-black uppercase leading-none text-cherry-700 sm:text-2xl">{{ card.title }}</span>
              <span class="mt-1 block font-serif text-xs italic leading-snug text-ink-500 sm:text-sm">{{ card.place }}</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <p class="mx-auto mt-20 max-w-2xl text-center font-serif text-2xl italic leading-relaxed text-ticket-50 sm:text-3xl sm:leading-relaxed">
        Notice all the maroon? We're bringing it back on
        <a href="#dress-code" class="text-brass-300 underline decoration-brass-300/50 underline-offset-4 transition hover:decoration-brass-300">Day 2</a>.
      </p>
    </div>

    <LookbookModal
      :is-open="viewing !== null"
      :image-src="viewing?.src ?? ''"
      :title="viewing ? viewing.title : ''"
      @close="viewing = null"
    />
  </section>
</template>
