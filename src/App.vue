<script setup>
import { ref } from 'vue'
import SnowCanvas from './components/SnowCanvas.vue'
import NavigationBar from './components/NavigationBar.vue'
import HeroInvitation from './components/HeroInvitation.vue'
import MemoriesSection from './components/MemoriesSection.vue'
import EventDetails from './components/EventDetails.vue'
import GiftExchange from './components/GiftExchange.vue'
import FooterSection from './components/FooterSection.vue'

// Snow starts off for people who asked their OS for less motion
const prefersReducedMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const snowEnabled = ref(!prefersReducedMotion)

function toggleSnow() {
  snowEnabled.value = !snowEnabled.value
}
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-pine-900 font-serif text-ticket-100">
    <SnowCanvas :enabled="snowEnabled" />

    <NavigationBar
      :snow-enabled="snowEnabled"
      @toggle-snow="toggleSnow"
    />

    <main class="relative z-10">
      <!-- Poster + boarding ticket -->
      <HeroInvitation />

      <!-- Photos from past Christmases -->
      <MemoriesSection />

      <!-- Route, dress code and packing list -->
      <EventDetails />

      <!-- Gift exchange on kraft paper -->
      <GiftExchange />
    </main>

    <FooterSection />
  </div>
</template>
