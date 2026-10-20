<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  targetDate: {
    type: String,
    required: true
  }
})

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const isPassed = ref(false)
let timer = null

function updateCountdown() {
  const target = new Date(props.targetDate).getTime()
  const now = new Date().getTime()
  const distance = target - now

  if (distance <= 0) {
    isPassed.value = true
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    if (timer) clearInterval(timer)
    return
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="relative w-full max-w-xl mx-auto my-8">
    
    <!-- Decorative Holly Sprig on Top-Left of Timer Container -->
    <div class="absolute -top-6 -left-4 z-20 pointer-events-none hidden sm:block drop-shadow-md">
      <img src="/images/figma/christmas-bell.svg" alt="Bell" class="w-8 h-8 -rotate-12" />
    </div>

    <!-- Decorative Holly Sprig on Top-Right of Timer Container -->
    <div class="absolute -top-6 -right-4 z-20 pointer-events-none hidden sm:block drop-shadow-md">
      <img src="/images/figma/candy-canes.svg" alt="Candy Canes" class="w-8 h-8 rotate-12" />
    </div>

    <div v-if="!isPassed" class="grid grid-cols-4 gap-2.5 sm:gap-4 text-center">
      
      <!-- Days Card -->
      <div class="relative group bg-white border border-festive-sand rounded-2xl p-3 sm:p-4 shadow-md transition-all duration-300 hover:scale-105 hover:border-festive-crimson/50 hover:shadow-lg">
        
        <!-- Snow Cap SVG Overlay on top edge -->
        <div class="absolute -top-1.5 left-1 right-1 h-3.5 pointer-events-none z-10 overflow-visible">
          <svg viewBox="0 0 100 16" preserveAspectRatio="none" class="w-full h-full drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
            <path d="M0,4 Q10,12 25,6 Q40,14 55,7 Q72,13 88,5 Q96,9 100,4 L100,0 L0,0 Z" fill="#FAF4EB" />
            <path d="M5,4 Q18,10 35,6 Q52,12 70,6 Q85,11 95,5" stroke="#E8D3B9" stroke-width="0.8" fill="none" opacity="0.9" />
          </svg>
        </div>

        <div class="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-festive-crimson tracking-tight pt-1">
          {{ String(days).padStart(2, '0') }}
        </div>
        <div class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-festive-espresso/70 mt-1">
          Days
        </div>
        <div class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-festive-crimson/40"></div>
      </div>

      <!-- Hours Card -->
      <div class="relative group bg-white border border-festive-sand rounded-2xl p-3 sm:p-4 shadow-md transition-all duration-300 hover:scale-105 hover:border-festive-crimson/50 hover:shadow-lg">
        
        <!-- Snow Cap SVG Overlay on top edge -->
        <div class="absolute -top-1.5 left-1 right-1 h-3.5 pointer-events-none z-10 overflow-visible">
          <svg viewBox="0 0 100 16" preserveAspectRatio="none" class="w-full h-full drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
            <path d="M0,5 Q14,13 28,6 Q42,15 58,8 Q74,14 90,6 Q97,10 100,5 L100,0 L0,0 Z" fill="#FAF4EB" />
            <path d="M6,5 Q20,11 38,7 Q54,13 72,7 Q86,12 96,6" stroke="#E8D3B9" stroke-width="0.8" fill="none" opacity="0.9" />
          </svg>
        </div>

        <div class="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-festive-crimson tracking-tight pt-1">
          {{ String(hours).padStart(2, '0') }}
        </div>
        <div class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-festive-espresso/70 mt-1">
          Hours
        </div>
        <div class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-festive-crimson/40"></div>
      </div>

      <!-- Minutes Card -->
      <div class="relative group bg-white border border-festive-sand rounded-2xl p-3 sm:p-4 shadow-md transition-all duration-300 hover:scale-105 hover:border-festive-crimson/50 hover:shadow-lg">
        
        <!-- Snow Cap SVG Overlay on top edge -->
        <div class="absolute -top-1.5 left-1 right-1 h-3.5 pointer-events-none z-10 overflow-visible">
          <svg viewBox="0 0 100 16" preserveAspectRatio="none" class="w-full h-full drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
            <path d="M0,4 Q12,11 26,6 Q44,14 60,7 Q76,13 90,5 Q96,9 100,4 L100,0 L0,0 Z" fill="#FAF4EB" />
            <path d="M5,4 Q18,10 35,6 Q52,12 70,6 Q85,11 95,5" stroke="#E8D3B9" stroke-width="0.8" fill="none" opacity="0.9" />
          </svg>
        </div>

        <div class="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-festive-crimson tracking-tight pt-1">
          {{ String(minutes).padStart(2, '0') }}
        </div>
        <div class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-festive-espresso/70 mt-1">
          Mins
        </div>
        <div class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-festive-crimson/40"></div>
      </div>

      <!-- Seconds Card -->
      <div class="relative group bg-white border border-festive-sand rounded-2xl p-3 sm:p-4 shadow-md transition-all duration-300 hover:scale-105 hover:border-festive-crimson/50 hover:shadow-lg">
        
        <!-- Snow Cap SVG Overlay on top edge -->
        <div class="absolute -top-1.5 left-1 right-1 h-3.5 pointer-events-none z-10 overflow-visible">
          <svg viewBox="0 0 100 16" preserveAspectRatio="none" class="w-full h-full drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
            <path d="M0,5 Q15,13 30,7 Q45,15 62,8 Q78,14 91,6 Q97,10 100,5 L100,0 L0,0 Z" fill="#FAF4EB" />
            <path d="M6,5 Q20,11 38,7 Q54,13 72,7 Q86,12 96,6" stroke="#E8D3B9" stroke-width="0.8" fill="none" opacity="0.9" />
          </svg>
        </div>

        <div class="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-festive-crimson tracking-tight pt-1">
          {{ String(seconds).padStart(2, '0') }}
        </div>
        <div class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-festive-espresso/70 mt-1">
          Secs
        </div>
        <div class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-festive-crimson/40"></div>
      </div>
    </div>

    <!-- If event already started -->
    <div v-else class="text-center py-5 px-6 rounded-2xl border border-festive-crimson/30 bg-white shadow-md">
      <p class="font-serif text-xl sm:text-2xl text-festive-crimson">The Christmas Getaway Has Begun! 🎄✨</p>
      <p class="text-sm text-festive-espresso/80 mt-1">Celebrating together with our beloved DATE fam!</p>
    </div>
  </div>
</template>
