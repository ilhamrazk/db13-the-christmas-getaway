<script setup>
import { ref } from 'vue'
import { Gift, Package, HeartHandshake, Sparkles, Lightbulb, Heart } from 'lucide-vue-next'
import GiftIdeasModal from './GiftIdeasModal.vue'
import { eventData } from '../data/eventData.js'

const modalOpen = ref(false)
</script>

<template>
  <section id="gift-exchange" class="py-16 px-4 sm:px-6 relative">
    <div class="max-w-4xl mx-auto space-y-12">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto">
        <span class="inline-block text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-2">
          Secret Santa & Gift Exchange
        </span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream-50 leading-tight">
          A LITTLE GIFT, A LOT OF LOVE ❤️
        </h2>
        <p class="font-script text-2xl sm:text-3xl text-gold-300 mt-2">
          {{ eventData.giftExchange.subtitle }}
        </p>
        <p class="text-xs sm:text-sm uppercase tracking-widest text-cream-300/80 mt-2">
          {{ eventData.giftExchange.headline }}
        </p>
      </div>

      <!-- 3 Rule Cards (Inspired by Reference 2 layout & paper cards) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Rule 1: Budget -->
        <div class="group relative rounded-3xl border border-gold-400/30 bg-cream-100 p-6 sm:p-7 text-maroon-950 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-gold-glow/30 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="rounded-full bg-maroon-900/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-maroon-800">
                Rule 01
              </span>
              <span class="text-2xl">🎁</span>
            </div>

            <h3 class="text-sm font-bold uppercase tracking-wider text-maroon-700">
              Gift Budget
            </h3>
            <div class="text-2xl sm:text-3xl font-serif font-bold text-maroon-950 my-2">
              Rp 100.000
            </div>
            <p class="text-xs text-maroon-900/80 leading-relaxed">
              A fair and thoughtful budget for everyone. Please aim as close to Rp 100,000 as possible so each member receives something equally special.
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-maroon-900/10 text-[11px] font-semibold text-maroon-800 flex items-center gap-1.5">
            <Sparkles class="h-3 w-3 text-gold-500" />
            <span>Fair & Inclusive</span>
          </div>
        </div>

        <!-- Rule 2: Wrapping -->
        <div class="group relative rounded-3xl border border-gold-400/40 bg-gradient-to-b from-[#8C5D3A]/20 via-maroon-900/80 to-maroon-950/90 p-6 sm:p-7 text-cream-100 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-maroon-deep flex flex-col justify-between backdrop-blur-md">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="rounded-full bg-gold-400/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-300 border border-gold-400/30">
                Rule 02
              </span>
              <span class="text-2xl">🎀</span>
            </div>

            <h3 class="text-sm font-bold uppercase tracking-wider text-gold-400">
              Wrapping Style
            </h3>
            <div class="text-xl sm:text-2xl font-serif font-bold text-cream-50 my-2 leading-snug">
              Wrapped in brown paper
            </div>
            <p class="text-xs text-cream-200/80 leading-relaxed">
              Wrap your present using plain <strong>brown kraft paper</strong>. A rustic vintage aesthetic that looks cozy and unified under the Christmas tree.
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-gold-400/20 text-[11px] font-semibold text-gold-300 flex items-center gap-1.5">
            <Sparkles class="h-3 w-3 text-gold-400" />
            <span>Rustic Christmas Aesthetic</span>
          </div>
        </div>

        <!-- Rule 3: Guidelines -->
        <div class="group relative rounded-3xl border border-gold-400/30 bg-cream-100 p-6 sm:p-7 text-maroon-950 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-gold-glow/30 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="rounded-full bg-maroon-900/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-maroon-800">
                Rule 03
              </span>
              <span class="text-2xl">💌</span>
            </div>

            <h3 class="text-sm font-bold uppercase tracking-wider text-maroon-700">
              Gift Rules
            </h3>
            <div class="text-xl sm:text-2xl font-serif font-bold text-maroon-950 my-2 leading-snug">
              Unisex and not food
            </div>
            <p class="text-xs text-maroon-900/80 leading-relaxed">
              Gifts must be unisex (suitable for anyone) and non-perishable (no consumable food, snacks, or drinks).
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-maroon-900/10 text-[11px] font-semibold text-maroon-800 flex items-center gap-1.5">
            <Sparkles class="h-3 w-3 text-gold-500" />
            <span>Lasting & Universal</span>
          </div>
        </div>

      </div>

      <!-- Thoughtful Philosophy Card (Inspired by website 2.jpeg Meraki Card) -->
      <div class="relative rounded-3xl border border-gold-400/40 bg-gradient-to-r from-maroon-900/90 via-maroon-800/80 to-maroon-900/90 p-8 sm:p-12 text-center shadow-maroon-deep">
        
        <div class="max-w-2xl mx-auto space-y-4">
          <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 mb-1">
            <Heart class="h-5 w-5 fill-gold-400/40 text-gold-300" />
          </div>

          <p class="font-serif text-lg sm:text-2xl text-cream-50 leading-relaxed italic">
            “{{ eventData.giftExchange.philosophy }}”
          </p>

          <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              @click="modalOpen = true"
              type="button"
              class="inline-flex items-center gap-2 rounded-full border border-gold-400 bg-gold-400 px-6 py-3 text-xs font-bold uppercase tracking-wider text-maroon-950 shadow-gold-glow hover:bg-gold-300 transition duration-300 hover:scale-105"
            >
              <Lightbulb class="h-4 w-4" />
              <span>Need Gift Ideas? View Inspiration 💡</span>
            </button>
          </div>
        </div>

      </div>

    </div>

    <!-- Modal for Gift Ideas -->
    <GiftIdeasModal
      :is-open="modalOpen"
      @close="modalOpen = false"
    />
  </section>
</template>
