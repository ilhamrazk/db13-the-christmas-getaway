<script setup>
import { ref } from 'vue'
import { Calendar, Clock, MapPin, ExternalLink, Copy, Check, Sparkles, Navigation, Heart, Glasses, Luggage } from 'lucide-vue-next'
import confetti from 'canvas-confetti'
import DressCodeCard from './DressCodeCard.vue'
import { eventData } from '../data/eventData.js'

const copied = ref(false)
const packedAccessories = ref(new Set())

function copyAddress() {
  navigator.clipboard.writeText(eventData.schedule.venue.name + ", " + eventData.schedule.venue.city)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2500)
}

function toggleAccessory(id) {
  if (packedAccessories.value.has(id)) {
    packedAccessories.value.delete(id)
  } else {
    packedAccessories.value.add(id)
    if (packedAccessories.value.size === eventData.dressCode.accessories.options.length) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#E5B869', '#6B131D', '#16382B', '#FFFFFF']
      })
    }
  }
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
  <section id="event-details" class="py-16 px-4 sm:px-6">
    <div class="max-w-5xl mx-auto space-y-16">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto">
        <span class="inline-block text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-2">
          Itinerary & Logistics
        </span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream-50">
          SAVE THE DATE! 🎄
        </h2>
        <div class="w-16 h-0.5 bg-gold-400/50 mx-auto mt-4 mb-3"></div>
        <p class="text-sm sm:text-base text-cream-200/90 font-light">
          Mark your calendars and get ready for an unforgettable two-day mountain retreat!
        </p>
      </div>

      <!-- Schedule & Venue Information Card (Paper / Cream Card layout) -->
      <div class="rounded-3xl border border-gold-400/40 bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200 text-maroon-950 p-6 sm:p-10 shadow-xl relative overflow-hidden">
        
        <!-- Subtle festive corner glow -->
        <div class="absolute -top-10 -right-10 w-32 h-32 bg-gold-400/20 rounded-full blur-2xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- Left Column: Dates, Gathering & Destination -->
          <div class="lg:col-span-7 space-y-6">
            
            <div class="space-y-4">
              <!-- Date -->
              <div class="flex items-start gap-4">
                <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-maroon-800 text-gold-300 shadow-md">
                  <Calendar class="h-5 w-5" />
                </div>
                <div>
                  <span class="block text-xs font-bold uppercase tracking-wider text-maroon-700">Date</span>
                  <span class="text-lg sm:text-xl font-serif font-bold text-maroon-950">
                    {{ eventData.schedule.displayDate }}
                  </span>
                  <span class="block text-xs text-maroon-800/80 mt-0.5">2 Days 1 Night Mountain Getaway</span>
                </div>
              </div>

              <!-- Gathering Time & Meeting Point -->
              <div class="flex items-start gap-4">
                <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-maroon-800 text-gold-300 shadow-md">
                  <Clock class="h-5 w-5" />
                </div>
                <div>
                  <span class="block text-xs font-bold uppercase tracking-wider text-maroon-700">Gathering & Meeting Point</span>
                  <span class="text-lg sm:text-xl font-serif font-bold text-maroon-950">
                    {{ eventData.schedule.gatheringTime }} WIB
                  </span>
                  <div class="flex items-center gap-1.5 text-xs font-semibold text-red-900 mt-0.5">
                    <MapPin class="h-3.5 w-3.5 text-red-700" />
                    <span>{{ eventData.schedule.meetingPoint.name }}</span>
                  </div>
                  <span class="block text-[11px] text-maroon-800/80 mt-0.5">{{ eventData.schedule.meetingPoint.note }}</span>
                </div>
              </div>

              <!-- Destination Venue -->
              <div class="flex items-start gap-4">
                <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-maroon-800 text-gold-300 shadow-md">
                  <Navigation class="h-5 w-5" />
                </div>
                <div>
                  <span class="block text-xs font-bold uppercase tracking-wider text-maroon-700">Destination</span>
                  <span class="text-lg sm:text-xl font-serif font-bold text-maroon-950">
                    {{ eventData.schedule.venue.name }}
                  </span>
                  <span class="block text-xs text-maroon-800/80 mt-0.5">Ciawi, Bogor, Jawa Barat</span>
                </div>
              </div>
            </div>

            <!-- Revised Punctuality Reminder -->
            <div class="rounded-2xl border border-maroon-900/15 bg-white/70 p-4 backdrop-blur-sm">
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-maroon-800 mb-1">
                <Heart class="h-3.5 w-3.5 text-maroon-600 fill-maroon-600" />
                <span>{{ eventData.schedule.timeReminderHeadline }}</span>
              </div>
              <p class="text-xs sm:text-sm text-maroon-900/90 leading-relaxed italic">
                “{{ eventData.schedule.timeReminder }}”
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <a
                :href="eventData.schedule.venue.mapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-xl bg-maroon-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-gold-300 shadow-md transition hover:bg-maroon-800 hover:shadow-lg"
              >
                <Navigation class="h-3.5 w-3.5 text-gold-400" />
                <span>Open Google Maps</span>
                <ExternalLink class="h-3 w-3" />
              </a>

              <button
                @click="openGoogleCalendar"
                type="button"
                class="inline-flex items-center gap-2 rounded-xl border border-maroon-900/30 bg-white/60 px-4 py-2.5 text-xs font-semibold text-maroon-950 transition hover:bg-white"
              >
                <Calendar class="h-3.5 w-3.5 text-maroon-700" />
                <span>Save to Google Calendar</span>
              </button>

              <button
                @click="copyAddress"
                type="button"
                class="inline-flex items-center gap-1.5 rounded-xl border border-maroon-900/20 bg-white/40 px-3.5 py-2.5 text-xs text-maroon-900 transition hover:bg-white/80"
                :title="copied ? 'Copied!' : 'Copy Address'"
              >
                <Check v-if="copied" class="h-3.5 w-3.5 text-emerald-700" />
                <Copy v-else class="h-3.5 w-3.5 text-maroon-700" />
                <span>{{ copied ? 'Copied!' : 'Copy Address' }}</span>
              </button>
            </div>

          </div>

          <!-- Right Column: Interactive Map Preview Card -->
          <div class="lg:col-span-5">
            <div class="rounded-2xl border border-maroon-900/20 bg-maroon-950 p-4 shadow-inner text-cream-100 flex flex-col justify-between">
              <div class="flex items-center justify-between pb-3 border-b border-maroon-900/80 mb-3">
                <span class="text-xs font-serif font-semibold text-gold-300 flex items-center gap-1.5">
                  <MapPin class="h-3.5 w-3.5 text-gold-400" />
                  Villa Nirmala Hills
                </span>
                <span class="text-[10px] uppercase tracking-wider bg-pine-800 text-pine-300 px-2 py-0.5 rounded-full">
                  Ciawi, Bogor
                </span>
              </div>

              <!-- Map Interactive Link Frame -->
              <a
                :href="eventData.schedule.venue.mapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative block w-full h-48 rounded-xl overflow-hidden border border-gold-400/20 bg-gradient-to-br from-maroon-900 to-maroon-950 hover:border-gold-300 transition-all"
              >
                <div class="absolute inset-0 opacity-40 bg-[radial-gradient(#e5b869_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div class="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
                  <div class="h-12 w-12 rounded-full bg-gold-400/20 border border-gold-400/50 flex items-center justify-center text-gold-300 mb-2 transition-transform group-hover:scale-110">
                    <Navigation class="h-6 w-6 text-gold-400" />
                  </div>
                  <span class="text-xs font-bold text-cream-50 group-hover:text-gold-300 transition-colors">
                    Click for Directions & Route
                  </span>
                  <span class="text-[10px] text-cream-300/70 mt-1">
                    Open directly in Google Maps app
                  </span>
                </div>
              </a>

              <p class="text-[11px] text-cream-300/80 text-center mt-3">
                Meeting at McDonald's Grand Kota Bintang at 6:30 AM before departure.
              </p>
            </div>
          </div>

        </div>

      </div>

      <!-- Dress Code Section -->
      <div class="space-y-8">
        <div class="text-center max-w-xl mx-auto">
          <span class="text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            Outfit Lookbook & Guidelines
          </span>
          <h3 class="text-2xl sm:text-4xl font-serif font-bold text-cream-50 mt-1">
            👗 DRESS CODE
          </h3>
          <p class="text-xs sm:text-sm text-cream-300/80 mt-2">
            {{ eventData.dressCode.subtitle }}
          </p>
        </div>

        <!-- Dress Code Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <DressCodeCard
            v-for="day in eventData.dressCode.days"
            :key="day.dayNumber"
            :day="day"
          />
        </div>
      </div>

      <!-- Christmas Accessories Interactive Callout -->
      <div class="rounded-3xl border border-gold-400/40 bg-gradient-to-b from-maroon-900/90 to-maroon-950/90 p-6 sm:p-10 shadow-maroon-deep backdrop-blur-md">
        <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between">
          
          <div class="space-y-3 max-w-xl text-center md:text-left">
            <div class="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-3.5 py-1 text-xs font-bold text-gold-300">
              <span>{{ eventData.dressCode.accessories.badge }}</span>
            </div>

            <h4 class="text-xl sm:text-2xl font-serif font-bold text-cream-50">
              {{ eventData.dressCode.accessories.title }}
            </h4>

            <p class="text-xs sm:text-sm text-cream-200/90 leading-relaxed">
              {{ eventData.dressCode.accessories.text }}
            </p>
          </div>

          <!-- Interactive Accessory Packing Selector -->
          <div class="w-full md:w-auto flex-shrink-0">
            <span class="block text-[11px] font-semibold uppercase tracking-wider text-gold-400 text-center md:text-right mb-3">
              Your Accessories Checklist:
            </span>
            <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
              <button
                v-for="item in eventData.dressCode.accessories.options"
                :key="item.id"
                @click="toggleAccessory(item.id)"
                type="button"
                class="flex items-center gap-2 rounded-xl border p-2.5 text-xs transition-all duration-200 text-left"
                :class="packedAccessories.has(item.id)
                  ? 'border-gold-400 bg-gold-400/20 text-gold-300 shadow-sm'
                  : 'border-maroon-800 bg-maroon-950/70 text-cream-300/80 hover:border-gold-400/40'"
              >
                <span class="text-lg">{{ item.icon }}</span>
                <div class="flex flex-col">
                  <span class="font-medium leading-none">{{ item.label }}</span>
                  <span class="text-[9px] text-cream-400/60 mt-0.5">
                    {{ packedAccessories.has(item.id) ? 'Ready! ✓' : 'Pack this' }}
                  </span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>

      <!-- NEW SECTION: Travel Essentials & Packing Tips (Sunglasses & Pack Light from page-2-rev-1.txt) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Sunglasses Card -->
        <div class="rounded-3xl border border-gold-400/35 bg-gradient-to-br from-maroon-900/90 to-maroon-950/95 p-6 shadow-xl backdrop-blur-md flex items-start gap-4 transition hover:border-gold-300">
          <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gold-400/15 border border-gold-400/40 text-2xl">
            🕶️
          </div>
          <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-gold-400">Photo Essential</span>
            <h4 class="text-base sm:text-lg font-serif font-bold text-cream-50 mt-0.5">
              DON’T FORGET YOUR SUNGLASSES!
            </h4>
            <p class="text-xs sm:text-sm text-cream-200/90 leading-relaxed mt-1">
              Bring your sunglasses for our outdoor photo session and to complete your getaway look! 😎
            </p>
          </div>
        </div>

        <!-- Pack Light Card -->
        <div class="rounded-3xl border border-gold-400/35 bg-gradient-to-br from-maroon-900/90 to-maroon-950/95 p-6 shadow-xl backdrop-blur-md flex items-start gap-4 transition hover:border-gold-300">
          <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gold-400/15 border border-gold-400/40 text-2xl">
            🧳
          </div>
          <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-gold-400">Luggage Guideline</span>
            <h4 class="text-base sm:text-lg font-serif font-bold text-cream-50 mt-0.5">
              PACK LIGHT!
            </h4>
            <p class="text-xs sm:text-sm text-cream-200/90 leading-relaxed mt-1">
              No suitcases, please! Bring a backpack or a small bag with your overnight essentials.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
