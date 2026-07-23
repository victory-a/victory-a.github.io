<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { heroContent } from '../constants/hero'
import { usePrefersReducedMotion } from '../composables/usePrefersReducedMotion'

const content = heroContent
const shown = ref(false)
const muted = ref(false)
const prefersReduced = usePrefersReducedMotion()

const toggleMuted = () => {
  muted.value = !muted.value
}

onMounted(() => {
  if (prefersReduced.value) {
    shown.value = true
    return
  }
  requestAnimationFrame(() => {
    shown.value = true
  })
})
</script>

<template>
  <section
    id="intro"
    class="s-intro target-section"
    :class="{ 'is-shown': shown }"
  >
    <div class="container intro-inner">
      <div class="intro-text">
        <h1 class="intro-title">{{ content.title }}</h1>
        <div class="intro-role text-pretitle">{{ content.role }}</div>
        <p class="intro-summary">{{ content.summary }}</p>
        <a
          class="btn btn--medium"
          :href="content.cvHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ content.cvLabel }}
        </a>
      </div>

      <div
        class="intro-media"
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
  opacity: 0;
}

.intro-role {
  display: inline-block;
  color: var(--color-1);
  opacity: 0;
  margin: 0 0 var(--vspace-1_5);
  text-transform: capitalize;
}

.intro-summary {
  margin: 0 0 var(--vspace-2);
  font-size: calc(2.1rem * var(--multiplier));
  line-height: 1.55;
  color: var(--color-text);
  opacity: 0;
}

.intro-text .btn {
  opacity: 0;
}

.intro-media {
  justify-self: end;
  width: min(100%, 44rem);
  opacity: 0;
  cursor: pointer;
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

.is-shown .intro-role,
.is-shown .intro-title,
.is-shown .intro-summary,
.is-shown .intro-text .btn,
.is-shown .intro-media {
  animation: rise-in 0.9s cubic-bezier(0.28, 0.12, 0.22, 1) forwards;
}

.is-shown .intro-media {
  animation-name: fade-in;
  animation-delay: 1.1s;
}

.is-shown .intro-title {
  animation-delay: 0.5s;
}

.is-shown .intro-role {
  animation-delay: 0.65s;
}

.is-shown .intro-summary {
  animation-delay: 0.8s;
}

.is-shown .intro-text .btn {
  animation-delay: 0.95s;
}

@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
