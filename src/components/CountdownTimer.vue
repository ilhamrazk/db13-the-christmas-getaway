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
  <div class="w-full max-w-xl mx-auto my-8">
    <div v-if="!isPassed" class="grid grid-cols-4 gap-2.5 sm:gap-4 text-center">
      <!-- Days -->
      <div class="relative group bg-gradient-to-b from-maroon-900/90 to-maroon-950/90 border border-gold-400/30 rounded-2xl p-3 sm:p-4 shadow-maroon-deep backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:border-gold-300">
        <div class="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-300 tracking-tight">
          {{ String(days).padStart(2, '0') }}
        </div>
        <div class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cream-300/70 mt-1">
          Days
        </div>
        <div class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400/40"></div>
      </div>

      <!-- Hours -->
      <div class="relative group bg-gradient-to-b from-maroon-900/90 to-maroon-950/90 border border-gold-400/30 rounded-2xl p-3 sm:p-4 shadow-maroon-deep backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:border-gold-300">
        <div class="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-300 tracking-tight">
          {{ String(hours).padStart(2, '0') }}
        </div>
        <div class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cream-300/70 mt-1">
          Hours
        </div>
        <div class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400/40"></div>
      </div>

      <!-- Minutes -->
      <div class="relative group bg-gradient-to-b from-maroon-900/90 to-maroon-950/90 border border-gold-400/30 rounded-2xl p-3 sm:p-4 shadow-maroon-deep backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:border-gold-300">
        <div class="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-300 tracking-tight">
          {{ String(minutes).padStart(2, '0') }}
        </div>
        <div class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cream-300/70 mt-1">
          Mins
        </div>
        <div class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400/40"></div>
      </div>

      <!-- Seconds -->
      <div class="relative group bg-gradient-to-b from-maroon-900/90 to-maroon-950/90 border border-gold-400/30 rounded-2xl p-3 sm:p-4 shadow-maroon-deep backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:border-gold-300">
        <div class="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-300 tracking-tight">
          {{ String(seconds).padStart(2, '0') }}
        </div>
        <div class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cream-300/70 mt-1">
          Secs
        </div>
        <div class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400/40"></div>
      </div>
    </div>

    <!-- If event already started -->
    <div v-else class="text-center py-4 px-6 rounded-2xl border border-gold-400/40 bg-maroon-900/80 backdrop-blur-md">
      <p class="font-serif text-xl sm:text-2xl text-gold-300">The Christmas Getaway Has Begun! 🎄✨</p>
      <p class="text-sm text-cream-200 mt-1">Celebrating together with our beloved DATE fam!</p>
    </div>
  </div>
</template>
