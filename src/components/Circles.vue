<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import { useGsapContext } from '../composables/useGsapContext'
import { motion } from '../motion/tokens'

const root = ref<HTMLElement | null>(null)

useGsapContext(root, () => {
  const rings = gsap.utils.toArray<HTMLElement>('.circles span')

  // Center via xPercent/yPercent so GSAP scale doesn't fight CSS translate
  gsap.set(rings, {
    xPercent: -50,
    yPercent: -50,
    left: '50%',
    top: '50%',
    opacity: 0,
    scale: 0.72,
  })

  gsap.to(rings, {
    opacity: 0.12,
    scale: 1,
    duration: motion.duration.slow,
    ease: motion.ease.emphasis,
    stagger: {
      each: motion.stagger.tight,
      from: 'end',
    },
    delay: 0.35,
    onComplete: () => {
      rings.forEach((ring, i) => {
        gsap.to(ring, {
          opacity: 0.06 + (i % 2) * 0.04,
          scale: 1 + 0.018 * (5 - i),
          duration: motion.duration.ambient + i * 0.35,
          ease: motion.ease.soft,
          yoyo: true,
          repeat: -1,
          delay: i * 0.2,
        })
      })
    },
  })
})
</script>

<template>
  <div ref="root" class="circles" aria-hidden="true">
    <span /><span /><span /><span /><span />
  </div>
</template>

<style scoped>
.circles {
  --circle-width: 70vw;
  width: var(--circle-width);
  height: var(--circle-width);
  position: absolute;
  top: calc(100vh - var(--circle-width));
  left: calc(100% - 33vw);
  pointer-events: none;
  z-index: 0;
}

.circles span {
  position: absolute;
  display: block;
  border: 1px solid var(--color-1);
  border-radius: 50%;
  opacity: 0;
  will-change: transform, opacity;
}

.circles span:nth-child(1) {
  width: 100%;
  height: 100%;
}
.circles span:nth-child(2) {
  width: 80%;
  height: 80%;
}
.circles span:nth-child(3) {
  width: 60%;
  height: 60%;
}
.circles span:nth-child(4) {
  width: 40%;
  height: 40%;
}
.circles span:nth-child(5) {
  width: 20%;
  height: 20%;
}

@media (max-width: 800px) {
  .circles {
    top: calc(var(--header-height) + 5vh);
  }
}
</style>
