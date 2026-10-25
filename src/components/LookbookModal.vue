<script setup>
import { watch, onUnmounted, ref, nextTick } from 'vue'
import { X } from 'lucide-vue-next'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  imageSrc: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: 'Dress code lookbook'
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
        class="fixed inset-0 z-50 flex items-center justify-center bg-pine-950/90 p-3 backdrop-blur-sm sm:p-6"
        @click.self="emit('close')"
      >
        <div
          class="relative flex max-h-[94vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-ticket-50 text-ink-900 shadow-2xl"
          role="dialog"
          aria-modal="true"
          :aria-label="title"
        >
          <div class="flex items-center justify-between gap-4 border-b border-ticket-300 px-5 py-4">
            <h3 class="font-display text-2xl font-extrabold leading-none text-cherry-700">{{ title }}</h3>
            <button
              ref="closeButton"
              @click="emit('close')"
              type="button"
              class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-ink-900/15 transition hover:border-cherry-600 hover:text-cherry-600"
              aria-label="Close"
            >
              <X class="h-5 w-5" />
            </button>
          </div>

          <div class="overflow-y-auto bg-ticket-200 p-2 sm:p-3">
            <img :src="imageSrc" :alt="title" class="mx-auto h-auto max-h-[80vh] w-full rounded-lg object-contain" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
