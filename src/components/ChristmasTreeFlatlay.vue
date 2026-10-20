<script setup>
// Christmas Tree Flatlay (Knolling Style)
// Rendered from authentic studio-grade holiday photography inspired by reference/web design.jfif
</script>

<template>
  <div class="relative mx-auto flex flex-col items-center justify-center select-none py-2 max-w-xs sm:max-w-sm">
    
    <!-- Ambient Festive Golden Halo behind the Tree -->
    <div class="absolute -top-6 inset-x-0 mx-auto h-56 w-56 rounded-full bg-gold-400/20 blur-3xl pointer-events-none"></div>

    <!-- Arch Frame Container (Inspired by reference/web design.jfif arch window aesthetic) -->
    <div class="relative group overflow-hidden rounded-t-[100px] rounded-b-3xl border border-gold-400/50 bg-maroon-900 shadow-maroon-deep transition-all duration-500 hover:border-gold-300 hover:shadow-gold-glow">
      
      <!-- Inner hairline decorative outline -->
      <div class="pointer-events-none absolute inset-1.5 rounded-t-[94px] rounded-b-2xl border border-gold-400/25 z-10"></div>

      <!-- Corner/Apex Sparkle -->
      <div class="pointer-events-none absolute top-3 left-1/2 -translate-x-1/2 text-gold-300 text-xs z-20 animate-pulse">
        ✦
      </div>

      <!-- Studio Flatlay Knolling Tree Image -->
      <img
        src="/images/christmas-tree-flatlay.jpg"
        alt="Festive Knolled Christmas Tree with Ornaments"
        class="w-56 sm:w-68 md:w-72 h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="eager"
      />

      <!-- Subtle gradient vignette overlay at the bottom so it seamlessly connects to the invitation card -->
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-maroon-950/80 to-transparent"></div>
    </div>

  </div>
</template>
