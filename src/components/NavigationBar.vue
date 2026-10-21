<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Snowflake, Menu, X } from 'lucide-vue-next'

const props = defineProps({
  snowEnabled: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['toggle-snow'])
const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const links = [
  { href: '#ticket', label: 'Ticket' },
  { href: '#route', label: 'Route' },
  { href: '#dress-code', label: 'Dress code' },
  { href: '#packing', label: 'Packing list' },
  { href: '#gift-exchange', label: 'Gift exchange' }
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-30 transition-colors duration-300"
    :class="scrolled || mobileMenuOpen ? 'bg-pine-950/95 shadow-[0_1px_0_rgba(217,164,65,0.25)] backdrop-blur' : 'bg-transparent'"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">

      <!-- Monogram -->
      <a href="#invitation" class="group flex items-center gap-3" @click="closeMobileMenu">
        <span class="flex h-10 w-10 items-center justify-center rounded-full border border-brass-400/70 font-display text-sm font-extrabold tracking-wide text-brass-300 transition group-hover:bg-brass-400 group-hover:text-pine-950">
          DB13
        </span>
        <span class="hidden font-display text-lg font-bold leading-none tracking-wide text-ticket-100 sm:block">
          Date Bekasi 13
        </span>
      </a>

      <nav class="hidden items-center gap-7 font-display text-[15px] font-semibold tracking-wide text-ticket-100/80 lg:flex" aria-label="Sections">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="py-1 transition-colors hover:text-brass-300"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <button
          @click="emit('toggle-snow')"
          type="button"
          class="flex h-10 items-center gap-2 rounded-full border border-ticket-100/25 px-3.5 text-ticket-100 transition hover:border-brass-400 hover:text-brass-300"
          :aria-pressed="snowEnabled"
          :aria-label="snowEnabled ? 'Turn snowfall off' : 'Turn snowfall on'"
        >
          <Snowflake class="h-4 w-4" :class="snowEnabled ? 'text-brass-300' : 'text-ticket-100/50'" />
          <span class="hidden font-display text-sm font-semibold tracking-wide sm:inline">
            {{ snowEnabled ? 'Snow on' : 'Snow off' }}
          </span>
        </button>

        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-ticket-100/25 text-ticket-100 lg:hidden"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <Menu v-if="!mobileMenuOpen" class="h-4 w-4" />
          <X v-else class="h-4 w-4" />
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="mobileMenuOpen"
        class="border-t border-brass-400/20 bg-pine-950/95 px-5 pb-5 pt-2 lg:hidden"
        aria-label="Sections"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click="closeMobileMenu"
          class="block border-b border-ticket-100/10 py-3 font-display text-2xl font-bold tracking-wide text-ticket-100 transition last:border-0 hover:text-brass-300"
        >
          {{ link.label }}
        </a>
      </nav>
    </transition>
  </header>
</template>
