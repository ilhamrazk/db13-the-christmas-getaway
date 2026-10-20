<script setup>
import { ref } from 'vue'
import { Gift, Package, HeartHandshake, Sparkles, Lightbulb, Heart, CircleDollarSign } from 'lucide-vue-next'
import GiftIdeasModal from './GiftIdeasModal.vue'
import { eventData } from '../data/eventData.js'

const modalOpen = ref(false)
</script>

<template>
  <section id="gift-exchange" class="py-16 px-4 sm:px-6 relative">
    <div class="max-w-4xl mx-auto space-y-12">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto">
        <!-- Figma Gifts Stack Vector Illustration Centerpiece -->
        <div class="flex justify-center mb-4">
          <img
            src="/images/figma/gifts-stack.svg"
            alt="Christmas Gifts Stack"
            class="h-24 sm:h-28 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
          />
        </div>

        <span class="inline-block text-xs font-serif font-bold uppercase tracking-[0.25em] text-festive-crimson mb-2">
          Secret Santa Tradition
        </span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-festive-espresso leading-tight">
          🎁 {{ eventData.giftExchange.title }}
        </h2>
        <p class="font-script text-2xl sm:text-3xl text-festive-crimson mt-2">
          {{ eventData.giftExchange.subtitle }}
        </p>
        <p class="text-xs sm:text-sm uppercase tracking-widest text-festive-espresso/70 mt-2 font-serif">
          {{ eventData.giftExchange.headline }}
        </p>
      </div>

      <!-- 3 Arched Rule Cards (Inspired by Reference Arched Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Rule 1: Budget -->
        <div class="group relative rounded-t-[90px] rounded-b-3xl border border-festive-sand bg-white p-6 sm:p-7 text-festive-espresso shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between pt-8">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="rounded-full bg-festive-sand/50 px-3 py-1 text-[11px] font-serif font-bold uppercase tracking-wider text-festive-crimson">
                Rule 01
              </span>
              <img src="/images/figma/christmas-ornament.svg" alt="Ornament" class="w-7 h-7" />
            </div>

            <h3 class="text-sm font-serif font-bold uppercase tracking-wider text-festive-crimson">
              Gift Budget
            </h3>
            <div class="text-2xl sm:text-3xl font-serif font-bold text-festive-espresso my-2">
              Rp 100,000
            </div>
            <p class="text-xs text-festive-espresso/80 leading-relaxed font-serif">
              A fair and thoughtful budget for everyone. Please aim as close to Rp 100,000 as possible so each member receives something equally special.
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-festive-sand text-[11px] font-semibold text-festive-crimson flex items-center gap-1.5 font-serif">
            <Sparkles class="h-3 w-3 text-festive-crimson" />
            <span>Fair & Inclusive</span>
          </div>
        </div>

        <!-- Rule 2: Wrapping -->
        <div class="group relative rounded-t-[90px] rounded-b-3xl border border-festive-sand bg-festive-cream p-6 sm:p-7 text-festive-espresso shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between pt-8">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="rounded-full bg-festive-crimson/15 px-3 py-1 text-[11px] font-serif font-bold uppercase tracking-wider text-festive-crimson border border-festive-crimson/20">
                Rule 02
              </span>
              <img src="/images/figma/christmas-sock.svg" alt="Sock" class="w-7 h-7" />
            </div>

            <h3 class="text-sm font-serif font-bold uppercase tracking-wider text-festive-crimson">
              Wrapping Style
            </h3>
            <div class="text-xl sm:text-2xl font-serif font-bold text-festive-espresso my-2 leading-snug">
              Brown paper wrapping
            </div>
            <p class="text-xs text-festive-espresso/80 leading-relaxed font-serif">
              Wrap your present using plain <strong>brown craft paper</strong>. A rustic vintage aesthetic that looks cozy and unified under the Christmas tree.
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-festive-sand text-[11px] font-semibold text-festive-crimson flex items-center gap-1.5 font-serif">
            <Sparkles class="h-3 w-3 text-festive-crimson" />
            <span>Rustic Christmas Aesthetic</span>
          </div>
        </div>

        <!-- Rule 3: Guidelines -->
        <div class="group relative rounded-t-[90px] rounded-b-3xl border border-festive-sand bg-white p-6 sm:p-7 text-festive-espresso shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between pt-8">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="rounded-full bg-festive-sand/50 px-3 py-1 text-[11px] font-serif font-bold uppercase tracking-wider text-festive-crimson">
                Rule 03
              </span>
              <img src="/images/figma/gingerbread-man.svg" alt="Gingerbread" class="w-7 h-7" />
            </div>

            <h3 class="text-sm font-serif font-bold uppercase tracking-wider text-festive-crimson">
              Gift Rules
            </h3>
            <div class="text-xl sm:text-2xl font-serif font-bold text-festive-espresso my-2 leading-snug">
              Unisex gifts only
            </div>
            <p class="text-xs text-festive-espresso/80 leading-relaxed font-serif">
              Unisex gifts only — <strong>no food items, please!</strong> Must be enjoyable for anyone (brother or sister) and non-perishable.
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-festive-sand text-[11px] font-semibold text-festive-crimson flex items-center gap-1.5 font-serif">
            <Sparkles class="h-3 w-3 text-festive-crimson" />
            <span>Lasting & Universal</span>
          </div>
        </div>

      </div>

      <!-- Thoughtful Philosophy Card -->
      <div class="relative rounded-3xl border border-festive-pine/40 bg-festive-pine p-8 sm:p-12 text-center shadow-lg text-white">
        
        <div class="max-w-2xl mx-auto space-y-4">
          <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 text-festive-sand mb-1">
            <Heart class="h-5 w-5 fill-festive-sand text-festive-sand" />
          </div>

          <p class="font-serif text-lg sm:text-2xl text-festive-sand leading-relaxed italic">
            “{{ eventData.giftExchange.philosophy }}”
          </p>

          <p class="font-sans text-xs sm:text-sm font-medium text-white/90 mt-2 font-serif">
            {{ eventData.giftExchange.callToAction }}
          </p>

          <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              @click="modalOpen = true"
              type="button"
              class="inline-flex items-center gap-2 rounded-full bg-festive-sand px-6 py-3 text-xs font-serif font-bold uppercase tracking-wider text-festive-espresso shadow-md hover:bg-[#dfc4a5] transition duration-300 hover:scale-105"
            >
              <Lightbulb class="h-4 w-4 text-festive-crimson" />
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
