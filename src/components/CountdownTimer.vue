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
    <div class="absolute -top-4 -left-3 z-20 pointer-events-none hidden sm:block drop-shadow-md">
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Holly Leaf 1 -->
        <path d="M14 18 C10 14 6 16 2 14 C4 18 2 22 6 24 C10 26 12 22 14 18 Z" fill="#1E4D3B" stroke="#2D7257" stroke-width="0.8" />
        <!-- Holly Leaf 2 -->
        <path d="M18 14 C14 10 16 6 14 2 C18 4 22 2 24 6 C26 10 22 12 18 14 Z" fill="#2D7257" stroke="#68B696" stroke-width="0.8" />
        <!-- Red Berries -->
        <circle cx="16" cy="18" r="3.5" fill="#D63031" stroke="#8B0000" stroke-width="0.5" />
        <circle cx="16" cy="17" r="1" fill="#FFFDF9" opacity="0.8" />
        <circle cx="21" cy="17" r="3.2" fill="#FF4757" stroke="#8B0000" stroke-width="0.5" />
        <circle cx="21" cy="16" r="0.9" fill="#FFFDF9" opacity="0.8" />
        <circle cx="18" cy="22" r="3.2" fill="#B33939" stroke="#8B0000" stroke-width="0.5" />
        <circle cx="18" cy="21" r="0.9" fill="#FFFDF9" opacity="0.8" />
      </svg>
    </div>

    <!-- Decorative Holly Sprig on Top-Right of Timer Container -->
    <div class="absolute -top-4 -right-3 z-20 pointer-events-none hidden sm:block drop-shadow-md">
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="-scale-x-100">
        <!-- Holly Leaf 1 -->
        <path d="M14 18 C10 14 6 16 2 14 C4 18 2 22 6 24 C10 26 12 22 14 18 Z" fill="#1E4D3B" stroke="#2D7257" stroke-width="0.8" />
        <!-- Holly Leaf 2 -->
        <path d="M18 14 C14 10 16 6 14 2 C18 4 22 2 24 6 C26 10 22 12 18 14 Z" fill="#2D7257" stroke="#68B696" stroke-width="0.8" />
        <!-- Red Berries -->
        <circle cx="16" cy="18" r="3.5" fill="#D63031" stroke="#8B0000" stroke-width="0.5" />
        <circle cx="16" cy="17" r="1" fill="#FFFDF9" opacity="0.8" />
        <circle cx="21" cy="17" r="3.2" fill="#FF4757" stroke="#8B0000" stroke-width="0.5" />
        <circle cx="21" cy="16" r="0.9" fill="#FFFDF9" opacity="0.8" />
        <circle cx="18" cy="22" r="3.2" fill="#B33939" stroke="#8B0000" stroke-width="0.5" />
        <circle cx="18" cy="21" r="0.9" fill="#FFFDF9" opacity="0.8" />
      </svg>
    </div>

    <div v-if="!isPassed" class="grid grid-cols-4 gap-2.5 sm:gap-4 text-center">
      
      <!-- Days Card -->
      <div class="relative group bg-gradient-to-b from-maroon-900/90 via-maroon-900/95 to-maroon-950/95 border border-gold-400/35 hover:border-gold-300 rounded-2xl p-3 sm:p-4 shadow-maroon-deep backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-gold-glow">
        
        <!-- Snow Cap SVG Overlay on top edge -->
        <div class="absolute -top-1.5 left-1 right-1 h-3.5 pointer-events-none z-10 overflow-visible">
          <svg viewBox="0 0 100 16" preserveAspectRatio="none" class="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            <path d="M0,4 Q10,12 25,6 Q40,14 55,7 Q72,13 88,5 Q96,9 100,4 L100,0 L0,0 Z" fill="#FFFDF9" />
            <path d="M5,4 Q18,10 35,6 Q52,12 70,6 Q85,11 95,5" stroke="#E2E8F0" stroke-width="0.6" fill="none" opacity="0.7" />
          </svg>
        </div>

        <div class="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-300 tracking-tight pt-1">
          {{ String(days).padStart(2, '0') }}
        </div>
        <div class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cream-300/80 mt-1">
          Days
        </div>
        <div class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400/50"></div>
      </div>

      <!-- Hours Card -->
      <div class="relative group bg-gradient-to-b from-maroon-900/90 via-maroon-900/95 to-maroon-950/95 border border-gold-400/35 hover:border-gold-300 rounded-2xl p-3 sm:p-4 shadow-maroon-deep backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-gold-glow">
        
        <!-- Snow Cap SVG Overlay on top edge -->
        <div class="absolute -top-1.5 left-1 right-1 h-3.5 pointer-events-none z-10 overflow-visible">
          <svg viewBox="0 0 100 16" preserveAspectRatio="none" class="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            <path d="M0,5 Q14,13 28,6 Q42,15 58,8 Q74,14 90,6 Q97,10 100,5 L100,0 L0,0 Z" fill="#FFFDF9" />
            <path d="M6,5 Q20,11 38,7 Q54,13 72,7 Q86,12 96,6" stroke="#E2E8F0" stroke-width="0.6" fill="none" opacity="0.7" />
          </svg>
        </div>

        <div class="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-300 tracking-tight pt-1">
          {{ String(hours).padStart(2, '0') }}
        </div>
        <div class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cream-300/80 mt-1">
          Hours
        </div>
        <div class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400/50"></div>
      </div>

      <!-- Minutes Card -->
      <div class="relative group bg-gradient-to-b from-maroon-900/90 via-maroon-900/95 to-maroon-950/95 border border-gold-400/35 hover:border-gold-300 rounded-2xl p-3 sm:p-4 shadow-maroon-deep backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-gold-glow">
        
        <!-- Snow Cap SVG Overlay on top edge -->
        <div class="absolute -top-1.5 left-1 right-1 h-3.5 pointer-events-none z-10 overflow-visible">
          <svg viewBox="0 0 100 16" preserveAspectRatio="none" class="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            <path d="M0,4 Q12,11 26,6 Q44,14 60,7 Q76,13 90,5 Q96,9 100,4 L100,0 L0,0 Z" fill="#FFFDF9" />
            <path d="M5,4 Q18,10 35,6 Q52,12 70,6 Q85,11 95,5" stroke="#E2E8F0" stroke-width="0.6" fill="none" opacity="0.7" />
          </svg>
        </div>

        <div class="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-300 tracking-tight pt-1">
          {{ String(minutes).padStart(2, '0') }}
        </div>
        <div class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cream-300/80 mt-1">
          Mins
        </div>
        <div class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400/50"></div>
      </div>

      <!-- Seconds Card -->
      <div class="relative group bg-gradient-to-b from-maroon-900/90 via-maroon-900/95 to-maroon-950/95 border border-gold-400/35 hover:border-gold-300 rounded-2xl p-3 sm:p-4 shadow-maroon-deep backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-gold-glow">
        
        <!-- Snow Cap SVG Overlay on top edge -->
        <div class="absolute -top-1.5 left-1 right-1 h-3.5 pointer-events-none z-10 overflow-visible">
          <svg viewBox="0 0 100 16" preserveAspectRatio="none" class="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            <path d="M0,5 Q15,13 30,7 Q45,15 62,8 Q78,14 91,6 Q97,10 100,5 L100,0 L0,0 Z" fill="#FFFDF9" />
            <path d="M6,5 Q20,11 38,7 Q54,13 72,7 Q86,12 96,6" stroke="#E2E8F0" stroke-width="0.6" fill="none" opacity="0.7" />
          </svg>
        </div>

        <div class="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-300 tracking-tight pt-1">
          {{ String(seconds).padStart(2, '0') }}
        </div>
        <div class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cream-300/80 mt-1">
          Secs
        </div>
        <div class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400/50"></div>
      </div>
    </div>

    <!-- If event already started -->
    <div v-else class="text-center py-5 px-6 rounded-2xl border border-gold-400/40 bg-maroon-900/80 backdrop-blur-md">
      <p class="font-serif text-xl sm:text-2xl text-gold-300">The Christmas Getaway Has Begun! 🎄✨</p>
      <p class="text-sm text-cream-200 mt-1">Celebrating together with our beloved DATE fam!</p>
    </div>
  </div>
</template>
