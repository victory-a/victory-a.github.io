<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { usePrefersReducedMotion } from '../composables/usePrefersReducedMotion'

const ready = ref(false)
const prefersReduced = usePrefersReducedMotion()

onMounted(() => {
  if (prefersReduced.value) {
    ready.value = true
    return
  }
  requestAnimationFrame(() => {
    ready.value = true
  })
})
</script>

<template>
  <div class="circles" :class="{ 'is-ready': ready }" aria-hidden="true">
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
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
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

.circles.is-ready span {
  animation: circle-in 0.9s cubic-bezier(0.28, 0.12, 0.22, 1) forwards;
}

.circles.is-ready span:nth-child(1) {
  animation-delay: 0.4s;
}
.circles.is-ready span:nth-child(2) {
  animation-delay: 0.3s;
}
.circles.is-ready span:nth-child(3) {
  animation-delay: 0.2s;
}
.circles.is-ready span:nth-child(4) {
  animation-delay: 0.1s;
}
.circles.is-ready span:nth-child(5) {
  animation-delay: 0s;
}

@keyframes circle-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.1;
  }
}

@media (max-width: 800px) {
  .circles {
    top: calc(var(--header-height) + 5vh);
  }
}
</style>
