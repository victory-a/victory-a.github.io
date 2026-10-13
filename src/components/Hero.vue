<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import { heroContent } from '../constants/hero'
import { useGsapContext } from '../composables/useGsapContext'
import { motion } from '../motion/tokens'

const content = heroContent
const muted = ref(false)
const root = ref<HTMLElement | null>(null)

const toggleMuted = () => {
  muted.value = !muted.value
}

useGsapContext(root, () => {
  const heroItems = gsap.utils.toArray<HTMLElement>('[data-hero]')
  const media = root.value?.querySelector<HTMLElement>('[data-hero-media]')

  gsap.set(heroItems, {
    opacity: 0,
    y: motion.distance.rise,
  })
  if (media) {
    gsap.set(media, { opacity: 0, scale: 0.94, y: motion.distance.riseSm })
  }

  const tl = gsap.timeline({ defaults: { ease: motion.ease.enter } })

  // TSG-style staggered text entrance
  tl.to(heroItems, {
    opacity: 1,
    y: 0,
    duration: motion.duration.base,
    stagger: motion.stagger.base,
  })

  // Zap/TSG media emphasis with expo.out settle
  if (media) {
    tl.to(
      media,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: motion.duration.slow,
        ease: motion.ease.emphasis,
      },
      '-=0.35',
    )
  }
})
</script>

<template>
  <section
    id="intro"
    ref="root"
    class="s-intro target-section"
  >
    <div class="container intro-inner">
      <div class="intro-text">
        <h1 class="intro-title" data-hero>{{ content.title }}</h1>
        <div class="intro-role text-pretitle" data-hero>{{ content.role }}</div>
        <p class="intro-summary" data-hero>{{ content.summary }}</p>
        <a
          class="btn btn--medium smoothscroll"
          data-hero
          :href="content.ctaHref"
        >
          {{ content.ctaLabel }}
        </a>
      </div>

      <div
        class="intro-media"
        data-hero-media
        :class="{ 'is-muted': muted }"
        role="button"
        tabindex="0"
        aria-label="Toggle portrait greyscale"
        @click="toggleMuted"
        @keydown.enter.prevent="toggleMuted"
        @keydown.space.prevent="toggleMuted"
      >
        <picture>
          <source
            type="image/webp"
            :srcset="content.image.webpSrcset"
            :sizes="content.image.sizes"
          />
          <img
            :src="content.image.fallbackSrc"
            :srcset="content.image.fallbackSrcset"
            :sizes="content.image.sizes"
            :width="content.image.width"
            :height="content.image.height"
            :alt="content.image.alt"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<style scoped>
.s-intro {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: calc(var(--header-height) + var(--vspace-2)) 0 var(--vspace-6);
  overflow: hidden;
}

.intro-inner {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: var(--vspace-3) calc(var(--gutter) * 2);
  align-items: center;
}

.intro-text {
  text-align: left;
  max-width: 56rem;
}

.intro-title {
  font-size: clamp(3.2rem, 4.5vw, 6.4rem);
  line-height: 1.1;
  margin: 0 0 0.2rem;
  color: var(--color-text-dark);
  text-transform: capitalize;
}

.intro-role {
  display: inline-block;
  color: var(--color-1);
  margin: 0 0 var(--vspace-1_5);
}

.intro-summary {
  margin: 0 0 var(--vspace-2);
  font-size: calc(2.1rem * var(--multiplier));
  line-height: 1.55;
  color: var(--color-text);
}

.intro-media {
  justify-self: end;
  width: min(100%, 44rem);
  cursor: pointer;
  will-change: transform, opacity;
  transform-origin: center center;
}

.intro-media picture,
.intro-media img {
  display: block;
  width: 100%;
  height: auto;
}

.intro-media img {
  aspect-ratio: 2 / 2.25;
  object-fit: cover;
  object-position: center top;
  border: none;
  outline: 0.5px solid color-mix(in srgb, var(--color-1) 55%, transparent);
  box-shadow: 0 60px 40px -40px rgba(0, 0, 0, 0.2);
  filter: grayscale(0%);
  transition: filter 0.35s ease;
}

.intro-media:hover img,
.intro-media:focus-visible img,
.intro-media.is-muted img {
  filter: grayscale(100%);
}

@media (max-width: 900px) {
  .intro-inner {
    grid-template-columns: 1fr;
  }

  .intro-media {
    justify-self: center;
    order: -1;
    width: min(70%, 36rem);
  }

  .intro-text {
    text-align: center;
    max-width: none;
  }
}

@media (max-width: 600px) {
  .intro-title {
    font-size: clamp(2.8rem, 8vw, 4.6rem);
  }
}
</style>
