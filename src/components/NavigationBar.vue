<script setup>
import { ref } from 'vue'
import { Snowflake, Menu, X, Sparkles } from 'lucide-vue-next'

const props = defineProps({
  snowEnabled: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['toggle-snow'])
const mobileMenuOpen = ref(false)


function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-30 w-full border-b border-festive-sand/80 bg-festive-cream/90 backdrop-blur-md transition-all duration-300">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
      
      <!-- Brand Logo (Editorial Monogram) -->
      <a href="#invitation" class="group flex items-center gap-3">
        <div class="flex h-9 w-9 items-center justify-center rounded-lg border border-festive-crimson/30 bg-festive-crimson text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
          <span class="font-serif font-bold text-xs tracking-wider">DB13</span>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-1.5">
            <span class="font-serif text-sm font-semibold tracking-wider text-festive-espresso group-hover:text-festive-crimson transition-colors">
              DATE BEKASI 13
            </span>
            <img src="/images/figma/christmas-bell.svg" alt="Bell" class="w-3.5 h-3.5 inline-block opacity-80" />
          </div>
          <span class="font-sans text-[10px] tracking-widest text-festive-crimson/80 uppercase font-medium">
            Christmas Getaway
          </span>
        </div>
      </a>

      <!-- Desktop Nav Links (Editorial Style with separators) -->
      <nav class="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-festive-espresso/80 font-serif">
        <a
          href="#invitation"
          class="transition-colors hover:text-festive-crimson font-medium py-1"
        >
          Invitation
        </a>
        <span class="text-festive-sand">|</span>
        <a
          href="#event-details"
          class="transition-colors hover:text-festive-crimson font-medium py-1"
        >
          Itinerary
        </a>
        <span class="text-festive-sand">|</span>
        <a
          href="#gift-exchange"
          class="transition-colors hover:text-festive-crimson font-medium py-1"
        >
          Secret Santa
        </a>
      </nav>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Snow Toggle Button -->
        <button
          @click="emit('toggle-snow')"
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-festive-sand bg-white/80 text-festive-espresso shadow-sm transition hover:bg-festive-sand hover:text-festive-crimson"
          :title="snowEnabled ? 'Turn Off Snow Effect' : 'Turn On Snow Effect'"
        >
          <Snowflake class="h-4 w-4" :class="{ 'text-festive-crimson animate-spin-slow': snowEnabled, 'text-festive-espresso/40': !snowEnabled }" />
        </button>

        <!-- Mobile Menu Toggle Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          type="button"
          class="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-festive-sand bg-white/80 text-festive-espresso"
          aria-label="Toggle navigation menu"
        >
          <Menu v-if="!mobileMenuOpen" class="h-4 w-4" />
          <X v-else class="h-4 w-4" />
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-festive-sand bg-festive-cream/95 px-5 py-4 backdrop-blur-xl shadow-lg"
      >
        <nav class="flex flex-col gap-3 text-xs uppercase tracking-widest text-festive-espresso font-serif">
          <a
            href="#invitation"
            @click="closeMobileMenu"
            class="py-2 transition hover:text-festive-crimson"
          >
            Invitation
          </a>
          <a
            href="#event-details"
            @click="closeMobileMenu"
            class="py-2 transition hover:text-festive-crimson"
          >
            Schedule & Dress Code
          </a>
          <a
            href="#gift-exchange"
            @click="closeMobileMenu"
            class="py-2 transition hover:text-festive-crimson"
          >
            Gift Exchange
          </a>
        </nav>
      </div>
    </transition>
  </header>
</template>
