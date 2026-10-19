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
  <header class="sticky top-0 z-30 w-full border-b border-gold-400/20 bg-maroon-950/85 backdrop-blur-md transition-all duration-300">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
      
      <!-- Brand Logo -->
      <a href="#invitation" class="group flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-lg border border-gold-400/50 bg-gradient-to-br from-maroon-800 to-maroon-900 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-gold-300">
          <span class="font-serif font-bold text-xs tracking-wider text-gold-300">DB13</span>
        </div>
        <div class="flex flex-col">
          <span class="font-serif text-sm font-semibold tracking-wider text-cream-100 group-hover:text-gold-300 transition-colors">
            DATE BEKASI 13
          </span>
          <span class="font-sans text-[10px] tracking-widest text-gold-400/80 uppercase">
            Christmas Getaway
          </span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-cream-200">
        <a
          href="#invitation"
          class="transition-colors hover:text-gold-300 font-medium py-1"
        >
          Invitation
        </a>
        <a
          href="#event-details"
          class="transition-colors hover:text-gold-300 font-medium py-1"
        >
          Schedule & Dress Code
        </a>
        <a
          href="#gift-exchange"
          class="transition-colors hover:text-gold-300 font-medium py-1"
        >
          Gift Exchange
        </a>
      </nav>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Snow Toggle Button -->
        <button
          @click="emit('toggle-snow')"
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/30 bg-maroon-900/60 text-gold-300 transition hover:bg-maroon-800 hover:border-gold-400"
          :title="snowEnabled ? 'Turn Off Snow Effect' : 'Turn On Snow Effect'"
        >
          <Snowflake class="h-4 w-4" :class="{ 'text-gold-400 animate-spin-slow': snowEnabled, 'text-cream-300/40': !snowEnabled }" />
        </button>


        <!-- Mobile Menu Toggle Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          type="button"
          class="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-gold-400/30 bg-maroon-900/60 text-cream-100"
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
        class="md:hidden border-t border-gold-400/20 bg-maroon-950/95 px-5 py-4 backdrop-blur-xl"
      >
        <div class="flex flex-col gap-3 text-sm tracking-wider uppercase text-cream-100">
          <a
            href="#invitation"
            @click="closeMobileMenu"
            class="py-2 border-b border-maroon-900/80 hover:text-gold-300 flex items-center justify-between"
          >
            <span>The Invitation</span>
            <span class="text-xs text-gold-400">01</span>
          </a>
          <a
            href="#event-details"
            @click="closeMobileMenu"
            class="py-2 border-b border-maroon-900/80 hover:text-gold-300 flex items-center justify-between"
          >
            <span>Schedule & Dress Code</span>
            <span class="text-xs text-gold-400">02</span>
          </a>
          <a
            href="#gift-exchange"
            @click="closeMobileMenu"
            class="py-2 hover:text-gold-300 flex items-center justify-between"
          >
            <span>Gift Exchange Guide</span>
            <span class="text-xs text-gold-400">03</span>
          </a>

        </div>
      </div>
    </transition>
  </header>
</template>
