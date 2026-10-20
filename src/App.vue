<script setup>
import { ref } from 'vue'
import SnowCanvas from './components/SnowCanvas.vue'
import NavigationBar from './components/NavigationBar.vue'
import HeroInvitation from './components/HeroInvitation.vue'
import EventDetails from './components/EventDetails.vue'
import GiftExchange from './components/GiftExchange.vue'
import FooterSection from './components/FooterSection.vue'

const snowEnabled = ref(true)

function toggleSnow() {
  snowEnabled.value = !snowEnabled.value
}
</script>

<template>
  <div class="min-h-screen bg-festive-cream text-festive-espresso font-sans selection:bg-festive-crimson selection:text-white relative overflow-x-hidden">
    <!-- Gentle snowfall canvas overlay -->
    <SnowCanvas :enabled="snowEnabled" />

    <!-- Header & Navigation -->
    <NavigationBar
      :snow-enabled="snowEnabled"
      @toggle-snow="toggleSnow"
    />

    <!-- Main Content Sections -->
    <main class="relative z-10">
      <!-- Section 1: The Invitation & Hero (from page-1.txt) -->
      <HeroInvitation />

      <!-- Section 2: Event Details & Dress Code (from page-2.txt) -->
      <EventDetails />

      <!-- Section 3: Secret Santa & Gift Exchange (from page-3.txt) -->
      <GiftExchange />
    </main>

    <!-- Footer & Sign-off -->
    <FooterSection />
  </div>
</template>
