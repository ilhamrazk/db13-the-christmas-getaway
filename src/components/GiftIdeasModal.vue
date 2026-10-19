<script setup>
import { X, Lightbulb, CheckCircle2 } from 'lucide-vue-next'
import { eventData } from '../data/eventData.js'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
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
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-maroon-950/80 backdrop-blur-md"
        @click.self="emit('close')"
      >
        <div
          class="relative w-full max-w-lg rounded-3xl border border-gold-400/40 bg-maroon-900 p-6 sm:p-8 text-cream-100 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          <!-- Corner Close Button -->
          <button
            @click="emit('close')"
            type="button"
            class="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-maroon-950/70 text-cream-300 hover:text-white border border-gold-400/20"
          >
            <X class="h-4 w-4" />
          </button>

          <!-- Modal Header -->
          <div class="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Lightbulb class="h-4 w-4 text-gold-400" />
            <span>Inspirasi Kado Natal DB13</span>
          </div>

          <h3 class="text-xl sm:text-2xl font-serif font-bold text-cream-50">
            Ide Kado Unisex (< Rp100.000)
          </h3>
          <p class="text-xs text-cream-300/80 mt-1 mb-6">
            Sesuai aturan: bernilai ~Rp100.000, cocok untuk pria/wanita, dan bukan makanan.
          </p>

          <!-- Ideas List (Scrollable) -->
          <div class="overflow-y-auto space-y-5 pr-1">
            <div
              v-for="(group, idx) in eventData.giftExchange.ideaSuggestions"
              :key="idx"
              class="rounded-2xl border border-gold-400/20 bg-maroon-950/60 p-4"
            >
              <h4 class="text-xs font-bold uppercase tracking-wider text-gold-300 mb-3 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                {{ group.category }}
              </h4>
              <ul class="space-y-2">
                <li
                  v-for="(item, itemIdx) in group.items"
                  :key="itemIdx"
                  class="flex items-start gap-2 text-xs text-cream-200/90"
                >
                  <CheckCircle2 class="h-3.5 w-3.5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Brown Paper Wrapping Tip -->
            <div class="rounded-2xl border border-dashed border-gold-400/40 bg-gold-400/10 p-4 text-center">
              <span class="text-lg">🎀</span>
              <p class="text-xs font-semibold text-gold-300 mt-1">
                Jangan Lupa Aturan Pembungkusan!
              </p>
              <p class="text-[11px] text-cream-200/80 mt-0.5">
                Bungkus kado menggunakan <strong>kertas cokelat polos</strong> (brown paper) dengan pita atau tali rami untuk kesan rustic Christmas.
              </p>
            </div>
          </div>

          <!-- Bottom Close Button -->
          <div class="mt-6 pt-4 border-t border-maroon-800 flex justify-end">
            <button
              @click="emit('close')"
              type="button"
              class="rounded-xl bg-gold-400 px-5 py-2 text-xs font-bold uppercase tracking-wider text-maroon-950 hover:bg-gold-300 transition"
            >
              Mengerti & Siap Bungkus ✨
            </button>
          </div>

        </div>
      </div>
    </transition>
  </teleport>
</template>
