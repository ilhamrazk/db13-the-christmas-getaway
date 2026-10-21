<script setup>
import { ref } from 'vue'
import { Bus, CalendarPlus, Navigation, Copy, Check } from 'lucide-vue-next'
import MountainPoster from './MountainPoster.vue'
import CountdownTimer from './CountdownTimer.vue'
import { eventData } from '../data/eventData.js'

const { schedule, community } = eventData
const copied = ref(false)

function copyAddress() {
  navigator.clipboard.writeText(schedule.venue.addressNote)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2500)
}

function openGoogleCalendar() {
  const title = encodeURIComponent("DATE BEKASI 13: THE CHRISTMAS GETAWAY")
  const details = encodeURIComponent(
    "Anniversary & Christmas Celebration Date Bekasi 13!\n" +
    "Gathering Time: 6:30 AM at McDonald's Grand Kota Bintang.\n" +
    "Destination: Villa Nirmala Hills, Ciawi.\n" +
    "Dresscode Day 1: Casual & Colorful (White, Brown, Red, Green).\n" +
    "Dresscode Day 2: Casual Maroon.\n" +
    "Bring sunglasses, pack light (backpack only), and bring a Rp 100k unisex gift wrapped in brown paper!"
  )
  const location = encodeURIComponent("McDonald's Grand Kota Bintang / Villa Nirmala Hills, Ciawi")
  const start = "20261106T233000Z"
  const end = "20261108T080000Z"
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`
  window.open(url, '_blank')
}
</script>

<template>
  <section id="invitation" class="relative">

    <!-- The poster -->
    <div class="relative flex min-h-[100svh] flex-col overflow-hidden">
      <MountainPoster />

      <!-- Deco frame, echoing the gold-ruled travel posters on the reference boards -->
      <div class="pointer-events-none absolute inset-3 border border-brass-400/35 sm:inset-5" aria-hidden="true">
        <span class="absolute -left-1 -top-1 h-2 w-2 rotate-45 bg-brass-400"></span>
        <span class="absolute -right-1 -top-1 h-2 w-2 rotate-45 bg-brass-400"></span>
      </div>

      <div class="relative z-10 mx-auto w-full max-w-6xl px-6 pb-[46svh] pt-28 text-center sm:px-10 sm:pt-32">
        <p class="font-serif text-lg italic text-frost-300 sm:text-xl">
          Date Bekasi 13 presents
        </p>

        <h1 class="mt-3 font-display font-black uppercase leading-[0.86] tracking-tight text-ticket-50">
          <span class="block pb-[0.08em] text-[clamp(2.6rem,10vw,7rem)] text-brass-300">The Christmas</span>
          <span class="block text-[clamp(5.2rem,23vw,14rem)]">Getaway</span>
        </h1>

        <p class="mx-auto mt-5 max-w-xl font-serif text-xl text-ticket-100 sm:text-2xl">
          {{ community.tagline }}
        </p>
        <p class="mt-2 font-display text-lg font-semibold tracking-wide text-frost-300 sm:text-xl">
          {{ schedule.displayDate }}, {{ schedule.venue.city }}
        </p>
      </div>
    </div>

    <!-- The ticket: overlaps the poster's front ridge -->
    <div id="ticket" class="relative z-10 -mt-[16svh] px-4 pb-6 sm:px-6">
      <article
        class="mx-auto grid max-w-5xl rounded-xl drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)] text-ink-900 md:grid-cols-[1fr_300px]"
        aria-label="Your getaway ticket"
      >
        <!-- Main part -->
        <div class="ticket-main rounded-t-xl bg-ticket-100 p-6 sm:p-9 md:rounded-l-xl md:rounded-tr-none">
          <div class="flex items-baseline justify-between gap-4 border-b border-ticket-300 pb-4">
            <span class="font-display text-xl font-extrabold tracking-wide text-cherry-700">DB13 Christmas Getaway</span>
            <span class="font-serif text-sm italic text-ink-500">Admit one DATE fam member</span>
          </div>

          <!-- From → To -->
          <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-6 sm:gap-6">
            <div>
              <p class="font-serif text-sm text-ink-500">From</p>
              <p class="font-display text-4xl font-black uppercase leading-none sm:text-6xl">Bekasi</p>
              <p class="mt-2 font-serif text-sm leading-snug text-ink-700 sm:text-base">{{ schedule.meetingPoint.name }}</p>
            </div>

            <div class="flex flex-col items-center text-cherry-600" aria-hidden="true">
              <Bus class="h-6 w-6" />
              <span class="mt-2 block w-12 border-t-2 border-dashed border-cherry-600/50 sm:w-24"></span>
            </div>

            <div class="text-right">
              <p class="font-serif text-sm text-ink-500">To</p>
              <p class="font-display text-4xl font-black uppercase leading-none sm:text-6xl">Ciawi</p>
              <p class="mt-2 font-serif text-sm leading-snug text-ink-700 sm:text-base">{{ schedule.venue.name.replace(', Ciawi', '') }}</p>
            </div>
          </div>

          <!-- Ticket fields -->
          <dl class="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ticket-300 pt-5 sm:grid-cols-4">
            <div>
              <dt class="font-serif text-sm text-ink-500">Departs</dt>
              <dd class="font-display text-2xl font-bold leading-tight">Sat, 7 Nov</dd>
            </div>
            <div>
              <dt class="font-serif text-sm text-ink-500">Gathering</dt>
              <dd class="font-display text-2xl font-bold leading-tight">{{ schedule.gatheringTime.replace(' AM', '') }} WIB</dd>
            </div>
            <div>
              <dt class="font-serif text-sm text-ink-500">Returns</dt>
              <dd class="font-display text-2xl font-bold leading-tight">Sun, 8 Nov</dd>
            </div>
            <div>
              <dt class="font-serif text-sm text-ink-500">Stay</dt>
              <dd class="font-display text-2xl font-bold leading-tight">2 days, 1 night</dd>
            </div>
          </dl>

          <div class="mt-7 flex flex-wrap gap-3">
            <a
              :href="schedule.venue.mapsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-full bg-pine-900 px-5 py-3 font-display text-base font-bold tracking-wide text-ticket-50 transition hover:bg-pine-700"
            >
              <Navigation class="h-4 w-4" />
              Open in Google Maps
            </a>
            <button
              @click="copyAddress"
              type="button"
              class="inline-flex items-center gap-2 rounded-full border-2 border-ink-900/15 px-5 py-3 font-display text-base font-bold tracking-wide text-ink-900 transition hover:border-pine-700"
            >
              <Check v-if="copied" class="h-4 w-4 text-pine-700" />
              <Copy v-else class="h-4 w-4" />
              <span aria-live="polite">{{ copied ? 'Address copied' : 'Copy villa address' }}</span>
            </button>
          </div>
        </div>

        <!-- Stub -->
        <div class="ticket-stub flex flex-col justify-between gap-6 rounded-b-xl bg-cherry-700 md:rounded-r-xl md:rounded-bl-none p-6 text-ticket-50 sm:p-8">
          <CountdownTimer :target-date="schedule.startDate" />

          <button
            @click="openGoogleCalendar"
            type="button"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-ticket-50 px-5 py-3 font-display text-base font-bold tracking-wide text-cherry-700 transition hover:bg-brass-300 hover:text-ink-900"
          >
            <CalendarPlus class="h-4 w-4" />
            Add to Google Calendar
          </button>
        </div>
      </article>
    </div>

    <!-- A short letter to the members -->
    <div class="mx-auto max-w-2xl px-6 py-20 text-center sm:py-24">
      <p class="font-serif text-2xl leading-relaxed text-ticket-50 sm:text-3xl sm:leading-relaxed">
        {{ community.description }}
      </p>
      <p class="mt-8 font-display text-3xl font-extrabold tracking-wide text-brass-300 sm:text-4xl">
        {{ community.subDescription }}
      </p>
    </div>
  </section>
</template>
