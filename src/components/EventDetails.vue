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
        <div class="flex items-center justify-center gap-2 mb-2">
          <img src="/images/figma/calendar-icon.svg" alt="Calendar" class="w-5 h-5" />
          <span class="inline-block text-xs font-bold uppercase tracking-[0.25em] text-festive-crimson font-serif">
            Itinerary & Logistics
          </span>
          <img src="/images/figma/christmas-star.svg" alt="Star" class="w-4 h-4" />
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-festive-espresso">
          SAVE THE DATE! 🎄
        </h2>
        <div class="w-16 h-0.5 bg-festive-sand mx-auto mt-4 mb-3"></div>
        <p class="text-sm sm:text-base text-festive-espresso/80 font-light font-serif">
          Mark your calendars and get ready for an unforgettable two-day mountain retreat!
        </p>
      </div>

      <!-- Schedule & Venue Information Card (Paper / Cream Card layout) -->
      <div class="rounded-3xl border border-festive-sand bg-white text-festive-espresso p-6 sm:p-10 shadow-lg relative overflow-hidden">
        
        <!-- Subtle festive corner glow -->
        <div class="absolute -top-10 -right-10 w-32 h-32 bg-festive-sand/30 rounded-full blur-2xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- Left Column: Dates, Gathering & Destination -->
          <div class="lg:col-span-7 space-y-6">
            
            <div class="space-y-4">
              <!-- Date -->
              <div class="flex items-start gap-4">
                <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-festive-crimson text-white shadow-md">
                  <Calendar class="h-5 w-5" />
                </div>
                <div>
                  <span class="block text-xs font-bold uppercase tracking-wider text-festive-crimson">Date</span>
                  <span class="text-lg sm:text-xl font-serif font-bold text-festive-espresso">
                    {{ eventData.schedule.displayDate }}
                  </span>
                  <span class="block text-xs text-festive-espresso/70 mt-0.5">2 Days 1 Night Mountain Getaway</span>
                </div>
              </div>

              <!-- Gathering Time & Meeting Point -->
              <div class="flex items-start gap-4">
                <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-festive-crimson text-white shadow-md">
                  <Clock class="h-5 w-5" />
                </div>
                <div>
                  <span class="block text-xs font-bold uppercase tracking-wider text-festive-crimson">Gathering & Meeting Point</span>
                  <span class="text-lg sm:text-xl font-serif font-bold text-festive-espresso">
                    {{ eventData.schedule.gatheringTime }} WIB
                  </span>
                  <div class="flex items-center gap-1.5 text-xs font-semibold text-festive-crimson mt-0.5">
                    <MapPin class="h-3.5 w-3.5" />
                    <span>{{ eventData.schedule.meetingPoint.name }}</span>
                  </div>
                  <span class="block text-[11px] text-festive-espresso/70 mt-0.5">{{ eventData.schedule.meetingPoint.note }}</span>
                </div>
              </div>

              <!-- Destination Venue -->
              <div class="flex items-start gap-4">
                <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-festive-crimson text-white shadow-md">
                  <Navigation class="h-5 w-5" />
                </div>
                <div>
                  <span class="block text-xs font-bold uppercase tracking-wider text-festive-crimson">Destination</span>
                  <span class="text-lg sm:text-xl font-serif font-bold text-festive-espresso">
                    {{ eventData.schedule.venue.name }}
                  </span>
                  <span class="block text-xs text-festive-espresso/80 mt-0.5">Ciawi, Bogor, Jawa Barat</span>
                </div>
              </div>
            </div>

            <!-- Revised Punctuality Reminder -->
            <div class="rounded-2xl border border-festive-sand bg-festive-cream p-4">
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-festive-crimson mb-1 font-serif">
                <Heart class="h-3.5 w-3.5 text-festive-crimson fill-festive-crimson" />
                <span>{{ eventData.schedule.timeReminderHeadline }}</span>
              </div>
              <p class="text-xs sm:text-sm text-festive-espresso/80 leading-relaxed italic font-serif">
                “{{ eventData.schedule.timeReminder }}”
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <a
                :href="eventData.schedule.venue.mapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-xl bg-festive-crimson px-5 py-2.5 text-xs font-serif font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#851621] hover:shadow-lg"
              >
                <Navigation class="h-3.5 w-3.5" />
                <span>Open Google Maps</span>
                <ExternalLink class="h-3 w-3" />
              </a>

              <button
                @click="openGoogleCalendar"
                type="button"
                class="inline-flex items-center gap-2 rounded-xl border border-festive-sand bg-festive-cream px-4 py-2.5 text-xs font-serif font-semibold text-festive-espresso transition hover:bg-festive-sand"
              >
                <Calendar class="h-3.5 w-3.5 text-festive-crimson" />
                <span>Save to Google Calendar</span>
              </button>

              <button
                @click="copyAddress"
                type="button"
                class="inline-flex items-center gap-1.5 rounded-xl border border-festive-sand bg-festive-cream px-3.5 py-2.5 text-xs text-festive-espresso transition hover:bg-festive-sand"
                :title="copied ? 'Copied!' : 'Copy Address'"
              >
                <Check v-if="copied" class="h-3.5 w-3.5 text-festive-pine font-bold" />
                <Copy v-else class="h-3.5 w-3.5 text-festive-crimson" />
                <span>{{ copied ? 'Copied!' : 'Copy Address' }}</span>
              </button>
            </div>

          </div>

          <!-- Right Column: Interactive Map Preview Card -->
          <div class="lg:col-span-5">
            <div class="rounded-2xl border border-festive-sand bg-festive-cream p-4 shadow-sm text-festive-espresso flex flex-col justify-between">
              <div class="flex items-center justify-between pb-3 border-b border-festive-sand mb-3">
                <span class="text-xs font-serif font-semibold text-festive-crimson flex items-center gap-1.5">
                  <MapPin class="h-3.5 w-3.5 text-festive-crimson" />
                  Villa Nirmala Hills
                </span>
                <span class="text-[10px] uppercase tracking-wider bg-festive-pine text-white px-2 py-0.5 rounded-full font-serif font-medium">
                  Ciawi, Bogor
                </span>
              </div>

              <!-- Map Interactive Link Frame -->
              <a
                :href="eventData.schedule.venue.mapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative block w-full h-48 rounded-xl overflow-hidden border border-festive-sand bg-white hover:border-festive-crimson transition-all"
              >
                <div class="absolute inset-0 opacity-40 bg-[radial-gradient(#9B1B28_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div class="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
                  <div class="h-12 w-12 rounded-full bg-festive-sand/50 border border-festive-crimson/30 flex items-center justify-center text-festive-crimson mb-2 transition-transform group-hover:scale-110">
                    <Navigation class="h-6 w-6 text-festive-crimson" />
                  </div>
                  <span class="text-xs font-bold font-serif text-festive-espresso group-hover:text-festive-crimson transition-colors">
                    Click for Directions & Route
                  </span>
                  <span class="text-[10px] text-festive-espresso/70 mt-1">
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
          <span class="text-xs font-serif font-bold uppercase tracking-[0.25em] text-festive-crimson">
            Outfit Lookbook & Guidelines
          </span>
          <h3 class="text-2xl sm:text-4xl font-serif font-bold text-festive-espresso mt-1">
            👗 DRESS CODE
          </h3>
          <p class="text-xs sm:text-sm text-festive-espresso/70 mt-2 font-serif">
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
      <div class="rounded-3xl border border-festive-sand bg-white p-6 sm:p-10 shadow-lg">
        <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between">
          
          <div class="space-y-3 max-w-xl text-center md:text-left">
            <div class="inline-flex items-center gap-2 rounded-full border border-festive-crimson/30 bg-festive-sand/30 px-3.5 py-1 text-xs font-serif font-bold text-festive-crimson">
              <span>{{ eventData.dressCode.accessories.badge }}</span>
            </div>

            <h4 class="text-xl sm:text-2xl font-serif font-bold text-festive-espresso">
              {{ eventData.dressCode.accessories.title }}
            </h4>

            <p class="text-xs sm:text-sm text-festive-espresso/80 leading-relaxed font-serif">
              {{ eventData.dressCode.accessories.text }}
            </p>
          </div>

          <!-- Interactive Accessory Packing Selector -->
          <div class="w-full md:w-auto flex-shrink-0">
            <span class="block text-[11px] font-semibold uppercase tracking-wider text-festive-crimson text-center md:text-right mb-3 font-serif">
              Your Accessories Checklist:
            </span>
            <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
              <button
                v-for="item in eventData.dressCode.accessories.options"
                :key="item.id"
                @click="toggleAccessory(item.id)"
                type="button"
                class="flex items-center gap-2 rounded-xl border p-2.5 text-xs transition-all duration-200 text-left shadow-sm"
                :class="packedAccessories.has(item.id)
                  ? 'border-festive-crimson bg-festive-crimson text-white shadow-sm'
                  : 'border-festive-sand bg-festive-cream text-festive-espresso hover:border-festive-crimson/50'"
              >
                <span class="text-lg">{{ item.icon }}</span>
                <div class="flex flex-col">
                  <span class="font-medium leading-none">{{ item.label }}</span>
                  <span class="text-[9px] mt-0.5" :class="packedAccessories.has(item.id) ? 'text-white/80' : 'text-festive-espresso/60'">
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
