<script setup>
import { X, ZoomIn } from 'lucide-vue-next'

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
    default: 'Dress Code Lookbook'
  }
})

const emit = defineEmits(['close'])
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
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-maroon-950/85 backdrop-blur-md"
        @click.self="emit('close')"
      >
        <div class="relative w-full max-w-2xl rounded-3xl border border-gold-400/40 bg-maroon-900 p-4 sm:p-6 text-cream-100 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
          
          <!-- Modal Top Bar -->
          <div class="flex items-center justify-between pb-3 border-b border-gold-400/20 mb-3">
            <div class="flex items-center gap-2">
              <span class="text-xs font-serif font-bold uppercase tracking-wider text-gold-300">
                {{ title }}
              </span>
            </div>
            
            <button
              @click="emit('close')"
              type="button"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-maroon-950/80 text-cream-300 hover:text-white border border-gold-400/30 transition"
              aria-label="Close Lookbook"
            >
              <X class="h-4 w-4" />
            </button>
          </div>

          <!-- Image Container (Scrollable) -->
          <div class="overflow-y-auto rounded-2xl border border-maroon-950/60 bg-maroon-950 flex items-center justify-center p-1 sm:p-2">
            <img
              :src="imageSrc"
              :alt="title"
              class="w-full h-auto max-h-[75vh] object-contain rounded-xl"
            />
          </div>

          <!-- Bottom Footer -->
          <div class="mt-3 flex items-center justify-between text-xs text-cream-300/70 pt-2 border-t border-maroon-800">
            <span>Tap outside or close to return</span>
            <button
              @click="emit('close')"
              type="button"
              class="rounded-lg bg-gold-400 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-maroon-950 hover:bg-gold-300 transition"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </transition>
  </teleport>
</template>
