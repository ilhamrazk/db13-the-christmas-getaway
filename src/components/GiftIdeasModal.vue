<script setup>
import { watch, onUnmounted, ref, nextTick } from 'vue'
import { X } from 'lucide-vue-next'
import { eventData } from '../data/eventData.js'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
const closeButton = ref(null)

function onKeydown(e) {
  if (e.key === 'Escape') emit('close')
}

watch(() => props.isOpen, async (open) => {
  if (open) {
    window.addEventListener('keydown', onKeydown)
    await nextTick()
    closeButton.value?.focus()
  } else {
    window.removeEventListener('keydown', onKeydown)
  }
})

onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <teleport to="body">
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-pine-950/90 p-4 backdrop-blur-sm"
        @click.self="emit('close')"
      >
        <div
          class="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-xl bg-ticket-50 text-ink-900 shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gift-ideas-title"
        >
          <div class="flex items-start justify-between gap-4 border-b border-ticket-300 px-6 pb-5 pt-6">
            <div>
              <h3 id="gift-ideas-title" class="font-display text-3xl font-black uppercase leading-none text-cherry-700">Gift ideas</h3>
              <p class="mt-2 font-serif text-sm text-ink-700">
                All around Rp 100,000, enjoyable for anyone, and none of them food.
              </p>
            </div>
            <button
              ref="closeButton"
              @click="emit('close')"
              type="button"
              class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-ink-900/15 transition hover:border-cherry-600 hover:text-cherry-600"
              aria-label="Close gift ideas"
            >
              <X class="h-5 w-5" />
            </button>
          </div>

          <div class="space-y-6 overflow-y-auto px-6 py-6">
            <section v-for="group in eventData.giftExchange.ideaSuggestions" :key="group.category">
              <h4 class="font-display text-xl font-extrabold tracking-wide text-pine-700">{{ group.category }}</h4>
              <ul class="mt-2 space-y-2">
                <li v-for="item in group.items" :key="item" class="flex gap-3 font-serif text-[15px] leading-snug text-ink-700">
                  <span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-cherry-600" aria-hidden="true"></span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </section>

            <p class="kraft-paper rounded-lg px-5 py-4 font-serif text-[15px] leading-relaxed text-ink-900">
              <strong class="font-display text-lg font-bold tracking-wide">Wrapping reminder:</strong>
              plain brown craft paper, with twine or a festive ribbon if you like.
            </p>
          </div>

          <div class="border-t border-ticket-300 px-6 py-4 text-right">
            <button
              @click="emit('close')"
              type="button"
              class="rounded-full bg-cherry-700 px-6 py-2.5 font-display text-base font-bold tracking-wide text-ticket-50 transition hover:bg-cherry-600"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
