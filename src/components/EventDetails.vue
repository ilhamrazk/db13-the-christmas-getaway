<script setup>
import { ref, computed, watch } from 'vue'
import { Check } from 'lucide-vue-next'
import confetti from 'canvas-confetti'
import DressCodeCard from './DressCodeCard.vue'
import { eventData } from '../data/eventData.js'

const { schedule, dressCode, travelTips } = eventData

const route = [
  {
    when: '06:30 WIB',
    day: 'Saturday, 7 November',
    title: `Gather at ${schedule.meetingPoint.name}`,
    note: `${schedule.meetingPoint.city}. ${schedule.meetingPoint.note}.`
  },
  {
    when: 'After roll call',
    day: 'Saturday, 7 November',
    title: 'Convoy up to Ciawi',
    note: 'We drive together, so nobody gets lost on the way up.'
  },
  {
    when: '2 days, 1 night',
    day: 'Saturday to Sunday',
    title: schedule.venue.name,
    note: schedule.venue.addressNote
  },
  {
    when: '15:00 WIB',
    day: 'Sunday, 8 November',
    title: 'The getaway wraps up',
    note: 'Head home with new stories and a lighter backpack.'
  }
]

// Packing list: the two travel essentials, plus any festive accessory
const essentials = [
  { id: travelTips[0].id, icon: travelTips[0].emoji, label: 'Sunglasses', desc: travelTips[0].text },
  { id: travelTips[1].id, icon: travelTips[1].emoji, label: 'A backpack or small bag', desc: travelTips[1].text }
]
const accessories = dressCode.accessories.options

const STORAGE_KEY = 'db13-packing-list'

function loadPacked() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
  } catch {
    return new Set()
  }
}

const packed = ref(loadPacked())
const essentialsPacked = computed(() => essentials.every(item => packed.value.has(item.id)))
const hasAccessory = computed(() => accessories.some(item => packed.value.has(item.id)))
const allSet = computed(() => essentialsPacked.value && hasAccessory.value)

function toggle(id) {
  const next = new Set(packed.value)
  next.has(id) ? next.delete(id) : next.add(id)
  packed.value = next
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]))
  } catch {
    // Private mode or blocked storage: the list still works for this visit
  }
}

watch(allSet, (ready, wasReady) => {
  if (!ready || wasReady) return
  confetti({
    particleCount: 90,
    spread: 70,
    origin: { y: 0.7 },
    colors: ['#D9A441', '#B3122E', '#245847', '#FBF6EC'],
    disableForReducedMotion: true
  })
})
</script>

<template>
  <!-- The route -->
  <section id="route" class="px-6 pb-24 pt-6 sm:pb-28">
    <div class="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <div>
        <h2 class="font-display text-6xl font-black uppercase leading-[0.9] text-ticket-50 sm:text-7xl">The route</h2>
        <p class="mt-5 max-w-md font-serif text-lg leading-relaxed text-ticket-100/85">
          One meeting point, one convoy, one villa in the hills of Ciawi. Here is how the weekend runs.
        </p>

        <aside class="mt-10 rounded-lg border border-brass-400/40 p-6">
          <p class="font-display text-2xl font-extrabold tracking-wide text-brass-300">A little reminder ❤️</p>
          <p class="mt-2 font-serif text-base leading-relaxed text-ticket-100/90">
            {{ schedule.timeReminder }}
          </p>
        </aside>
      </div>

      <ol class="relative border-l-2 border-dashed border-ticket-100/25 pl-8 sm:pl-10">
        <li v-for="(stop, i) in route" :key="i" class="relative pb-10 last:pb-0">
          <span
            class="absolute -left-[calc(2rem+9px)] top-1.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-pine-900 sm:-left-[calc(2.5rem+9px)]"
            :class="i === 0 || i === route.length - 1 ? 'bg-brass-400' : 'bg-ticket-100'"
            aria-hidden="true"
          ></span>
          <p class="font-display text-3xl font-black leading-none text-brass-300">{{ stop.when }}</p>
          <p class="mt-1 font-serif text-sm italic text-frost-300">{{ stop.day }}</p>
          <h3 class="mt-3 font-display text-2xl font-bold leading-tight text-ticket-50">{{ stop.title }}</h3>
          <p class="mt-1 max-w-prose font-serif text-base leading-relaxed text-ticket-100/80">{{ stop.note }}</p>
        </li>
      </ol>
    </div>
  </section>

  <!-- Dress code -->
  <section id="dress-code" class="bg-cherry-700 px-4 py-24 sm:px-6 sm:py-28" style="--page: #9A0F27">
    <div class="mx-auto max-w-5xl">
      <div class="max-w-2xl px-2">
        <h2 class="font-display text-6xl font-black uppercase leading-[0.9] text-ticket-50 sm:text-7xl">Dress code</h2>
        <p class="mt-5 font-serif text-lg leading-relaxed text-ticket-100/90">
          {{ dressCode.subtitle }} Tap a photo to see the full lookbook.
        </p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-2">
        <DressCodeCard
          v-for="day in dressCode.days"
          :key="day.dayNumber"
          :day="day"
        />
      </div>
    </div>
  </section>

  <!-- Packing list -->
  <section id="packing" class="bg-pine-950 px-4 py-24 sm:px-6 sm:py-28" style="--page: #0B241D">
    <div class="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <div class="px-2">
        <h2 class="font-display text-6xl font-black uppercase leading-[0.9] text-ticket-50 sm:text-7xl">Packing list</h2>
        <p class="mt-5 font-serif text-lg leading-relaxed text-ticket-100/85">
          {{ dressCode.accessories.text }}
        </p>
        <p class="mt-4 font-serif text-base italic text-frost-300">
          Tick things off as you pack. Your list is saved on this device.
        </p>
      </div>

      <!-- Luggage tag -->
      <div class="relative rounded-xl bg-ticket-100 p-6 pt-12 text-ink-900 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)] sm:p-9 sm:pt-14">
        <span class="absolute left-1/2 top-4 h-5 w-5 -translate-x-1/2 rounded-full bg-pine-950 ring-4 ring-brass-400/70" aria-hidden="true"></span>

        <fieldset>
          <legend class="font-display text-2xl font-extrabold tracking-wide text-cherry-700">Must bring</legend>
          <ul class="mt-3 divide-y divide-ticket-300">
            <li v-for="item in essentials" :key="item.id">
              <label class="flex cursor-pointer items-start gap-4 py-4">
                <input
                  type="checkbox"
                  class="peer sr-only"
                  :checked="packed.has(item.id)"
                  @change="toggle(item.id)"
                />
                <span
                  class="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border-2 transition peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cherry-600"
                  :class="packed.has(item.id) ? 'border-pine-700 bg-pine-700 text-ticket-50' : 'border-ink-500/40 bg-ticket-50'"
                  aria-hidden="true"
                >
                  <Check v-if="packed.has(item.id)" class="h-4 w-4" />
                </span>
                <span class="min-w-0">
                  <span class="block font-display text-xl font-bold leading-tight" :class="packed.has(item.id) ? 'text-ink-500 line-through decoration-2' : ''">
                    {{ item.icon }} {{ item.label }}
                  </span>
                  <span class="mt-1 block font-serif text-sm leading-relaxed text-ink-700">{{ item.desc }}</span>
                </span>
              </label>
            </li>
          </ul>
        </fieldset>

        <fieldset class="mt-6">
          <legend class="font-display text-2xl font-extrabold tracking-wide text-cherry-700">Something festive</legend>
          <p class="mt-1 font-serif text-sm italic text-ink-500">Pick at least one.</p>
          <ul class="mt-3 grid gap-3 sm:grid-cols-2">
            <li v-for="item in accessories" :key="item.id">
              <label
                class="flex h-full cursor-pointer items-center gap-3 rounded-lg border-2 p-3 transition has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-cherry-600"
                :class="packed.has(item.id) ? 'border-pine-700 bg-pine-700 text-ticket-50' : 'border-ticket-300 bg-ticket-50 hover:border-pine-600'"
              >
                <input
                  type="checkbox"
                  class="peer sr-only"
                  :checked="packed.has(item.id)"
                  @change="toggle(item.id)"
                />
                <span class="text-2xl" aria-hidden="true">{{ item.icon }}</span>
                <span class="min-w-0 flex-1">
                  <span class="block font-display text-lg font-bold leading-tight">{{ item.label }}</span>
                  <span class="block font-serif text-sm" :class="packed.has(item.id) ? 'text-ticket-100/85' : 'text-ink-500'">{{ item.desc }}</span>
                </span>
                <Check v-if="packed.has(item.id)" class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              </label>
            </li>
          </ul>
        </fieldset>

        <p
          class="mt-7 rounded-lg px-4 py-3 text-center font-display text-xl font-bold tracking-wide transition-colors"
          :class="allSet ? 'bg-cherry-700 text-ticket-50' : 'bg-ticket-200 text-ink-700'"
          aria-live="polite"
        >
          {{ allSet ? 'All packed. See you at 06:30!' : `${packed.size} of ${essentials.length + accessories.length} packed` }}
        </p>
      </div>
    </div>
  </section>
</template>
