<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  enabled: {
    type: Boolean,
    default: true
  }
})

const canvasRef = ref(null)
let animationId = null
let flakes = []

function initFlakes(width, height) {
  // Density tailored for performance & subtle festive feel
  const count = Math.min(Math.floor((width * height) / 14000), 70)
  flakes = []
  for (let i = 0; i < count; i++) {
    flakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.2 + 0.6,
      speed: Math.random() * 0.9 + 0.3,
      drift: Math.random() * 0.6 - 0.3,
      opacity: Math.random() * 0.6 + 0.3,
      pulse: Math.random() * 0.02
    })
  }
}

function animate() {
  if (!props.enabled) return
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (const f of flakes) {
    ctx.beginPath()
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(180, 150, 120, ${f.opacity * 0.45})`
    ctx.shadowBlur = 3
    ctx.shadowColor = 'rgba(212, 175, 55, 0.3)'
    ctx.fill()

    f.y += f.speed
    f.x += f.drift

    if (f.y > canvas.height) {
      f.y = -6
      f.x = Math.random() * canvas.width
    }
    if (f.x > canvas.width) f.x = 0
    else if (f.x < 0) f.x = canvas.width
  }

  animationId = requestAnimationFrame(animate)
}

function handleResize() {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  initFlakes(canvas.width, canvas.height)
}

watch(() => props.enabled, (val) => {
  if (val) {
    animate()
  } else {
    if (animationId) cancelAnimationFrame(animationId)
    const canvas = canvasRef.value
    if (canvas) {
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }
})

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  if (props.enabled) animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animationId) cancelAnimationFrame(animationId)
})
</script>

<template>
  <canvas
    ref="canvasRef"
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 z-20 h-full w-full transition-opacity duration-700"
    :class="enabled ? 'opacity-80' : 'opacity-0'"
  ></canvas>
</template>
