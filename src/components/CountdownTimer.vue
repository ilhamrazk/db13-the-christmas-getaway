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

const pad = (n) => String(n).padStart(2, '0')

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div v-if="!isPassed">
    <p class="font-serif text-sm italic text-ticket-100/80">Departs in</p>
    <p class="mt-1 flex items-baseline gap-2 font-display leading-none text-ticket-50">
      <span class="text-7xl font-black tabular-nums sm:text-8xl">{{ days }}</span>
      <span class="text-2xl font-bold">{{ days === 1 ? 'day' : 'days' }}</span>
    </p>
    <dl class="mt-4 grid grid-cols-3 gap-2 text-center">
      <div
        v-for="unit in [{ label: 'Hours', short: 'hours', value: hours }, { label: 'Minutes', short: 'mins', value: minutes }, { label: 'Seconds', short: 'secs', value: seconds }]"
        :key="unit.label"
        class="rounded-md bg-cherry-800/70 px-2 py-2"
      >
        <dt class="sr-only">{{ unit.label }}</dt>
        <dd>
          <span class="block font-display text-3xl font-bold tabular-nums leading-none text-ticket-50">{{ pad(unit.value) }}</span>
          <span class="mt-1 block font-serif text-xs text-ticket-100/75" aria-hidden="true">{{ unit.short }}</span>
        </dd>
      </div>
    </dl>
  </div>

  <div v-else>
    <p class="font-display text-4xl font-black leading-none text-ticket-50">We're on our way</p>
    <p class="mt-2 font-serif text-sm text-ticket-100/85">The Christmas Getaway has begun. Enjoy every moment, DATE fam.</p>
  </div>
</template>
