<script setup>
import { ref, onMounted } from 'vue'
import { Volume2, VolumeX, Music2, Sparkles } from 'lucide-vue-next'

const isPlaying = ref(false)
const audioRef = ref(null)
const errorNotice = ref('')

// Festive holiday instrumental BGM
const audioSrc = "https://cdn.pixabay.com/download/audio/2022/11/26/audio_03d9737f5d.mp3?filename=christmas-background-music-126290.mp3"

function toggleAudio() {
  if (!audioRef.value) return
  errorNotice.value = ''

  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.play().then(() => {
      isPlaying.value = true
    }).catch((err) => {
      console.warn("Audio autoplay blocked by browser policy:", err)
      errorNotice.value = "Ketuk sekali lagi untuk memutar musik!"
      setTimeout(() => { errorNotice.value = '' }, 3000)
    })
  }
}

onMounted(() => {
  if (audioRef.value) {
    audioRef.value.volume = 0.4
  }
})
</script>

<template>
  <div class="fixed bottom-5 right-5 z-40 flex flex-col items-end">
    <!-- Helper tooltip message if user needs a nudge -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div
        v-if="errorNotice"
        class="mb-2 rounded-lg bg-gold-400 px-3 py-1.5 text-xs font-semibold text-maroon-950 shadow-md"
      >
        {{ errorNotice }}
      </div>
    </transition>

    <audio
      ref="audioRef"
      :src="audioSrc"
      loop
      preload="none"
    ></audio>

    <button
      @click="toggleAudio"
      type="button"
      class="group flex items-center gap-2.5 rounded-full border border-gold-400/50 bg-maroon-900/90 px-4 py-2.5 text-xs font-medium text-gold-300 shadow-gold-glow backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-gold-300 hover:bg-maroon-800 focus:outline-none focus:ring-2 focus:ring-gold-400/50"
      :class="{ 'ring-2 ring-gold-400/50 bg-maroon-800': isPlaying }"
      aria-label="Toggle festive background music"
    >
      <!-- Dynamic audio visualizer dots or icon -->
      <div v-if="isPlaying" class="flex items-end gap-0.5 h-3.5">
        <span class="w-1 bg-gold-400 rounded-full animate-pulse h-3"></span>
        <span class="w-1 bg-gold-300 rounded-full animate-bounce h-2"></span>
        <span class="w-1 bg-gold-200 rounded-full animate-pulse h-3.5"></span>
      </div>
      <Music2 v-else class="h-4 w-4 text-gold-400 transition-transform group-hover:rotate-12" />

      <span class="font-serif tracking-wider text-[11px] sm:text-xs">
        {{ isPlaying ? 'Holiday Melody' : 'Play Music 🎄' }}
      </span>

      <span class="flex h-5 w-5 items-center justify-center rounded-full bg-maroon-950/60 border border-gold-400/30">
        <Volume2 v-if="isPlaying" class="h-3 w-3 text-gold-300" />
        <VolumeX v-else class="h-3 w-3 text-cream-300/60" />
      </span>
    </button>
  </div>
</template>
