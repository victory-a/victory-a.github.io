<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { navContent, sectionIds } from '../constants/nav'
import { useScrollSpy } from '../composables/useScrollSpy'
import { useSmoothScroll } from '../composables/useSmoothScroll'

/** Reveal after a short scroll — same idea as joinzap.com */
const SHOW_AFTER = 80

const menuOpen = ref(false)
const navVisible = ref(false)
const root = ref<HTMLElement | null>(null)
const { activeId } = useScrollSpy(sectionIds)
const { handleClick: onSmoothScrollClick } = useSmoothScroll(() => {
  menuOpen.value = false
  document.body.classList.remove('menu-is-open')
})

const handleClick = (event: MouseEvent) => {
  const link = (event.target as HTMLElement | null)?.closest('a.smoothscroll')
  if (!link) return
  onSmoothScrollClick(event)
  event.stopPropagation()
}

const brand = computed(() => navContent.brand)
const links = computed(() => navContent.links)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.classList.toggle('menu-is-open', menuOpen.value)
}

const updateVisibility = () => {
  const shouldShow = window.scrollY > SHOW_AFTER
  if (shouldShow !== navVisible.value) {
    navVisible.value = shouldShow
  }
  // Close mobile menu when nav hides again
  if (!shouldShow && menuOpen.value) {
    menuOpen.value = false
    document.body.classList.remove('menu-is-open')
  }
}

const onResize = () => {
  if (window.innerWidth >= 801 && menuOpen.value) {
    menuOpen.value = false
    document.body.classList.remove('menu-is-open')
  }
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateVisibility)
  window.removeEventListener('resize', onResize)
  document.body.classList.remove('menu-is-open')
})
</script>

<template>
  <header
    ref="root"
    class="s-header"
    :class="{ 'is-visible': navVisible }"
    @click="handleClick"
  >
    <div class="nav-shell" :class="{ 'is-open': menuOpen }">
      <div class="nav-shell__frost" aria-hidden="true" />
      <a class="home-link smoothscroll" href="#top">{{ brand }}</a>

      <nav class="main-nav" aria-label="Primary">
        <ul>
          <li
            v-for="link in links"
            :key="link.href"
            :class="{ current: activeId === link.href.slice(1) }"
          >
            <a class="smoothscroll" :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <button
        class="mobile-menu-toggle"
        type="button"
        :class="{ 'is-clicked': menuOpen }"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <span /><span /><span />
      </button>
    </div>

    <div class="mobile-drawer" :class="{ 'is-open': menuOpen }">
      <nav aria-label="Mobile">
        <a
          v-for="link in links"
          :key="link.href"
          class="smoothscroll"
          :class="{ current: activeId === link.href.slice(1) }"
          :href="link.href"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.s-header {
  /*
    Animate with `top` (not transform/opacity) so backdrop-filter
    can still sample the page behind the pill.
  */
  position: fixed;
  top: -8rem;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1.6rem clamp(1.6rem, 4vw, 4.8rem) 0;
  pointer-events: none;
  transition: top 0.3s ease-in-out;
}

.s-header.is-visible {
  top: 0;
}

.nav-shell {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0.7rem 1.2rem 0.7rem 1.8rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  background: transparent;
  pointer-events: none;
  isolation: isolate;
}

.s-header.is-visible .nav-shell {
  pointer-events: auto;
}

/* Frost lives on its own layer so it isn't blocked by flex children */
.nav-shell__frost {
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.14);
  pointer-events: none;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
}

.nav-shell > :not(.nav-shell__frost) {
  position: relative;
  z-index: 1;
}

.home-link {
  font-family: var(--font-2);
  font-size: 3rem;
  color: var(--color-1);
  flex-shrink: 0;
  line-height: 1;
  padding: 0.4rem 0.6rem;
}

.home-link:hover {
  color: var(--color-white);
}

.main-nav {
  display: flex;
  align-items: center;
}

.main-nav ul {
  display: flex;
  align-items: center;
  gap: 0.1rem;
}

.main-nav a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.1rem;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: none;
  color: rgba(255, 255, 255, 0.88);
  border-radius: 9999px;
  transition: color 0.25s ease, opacity 0.25s ease;
}

.main-nav a:hover {
  color: var(--color-white);
  opacity: 0.9;
}

.main-nav .current a {
  color: var(--color-1);
}

.mobile-menu-toggle {
  display: none;
  position: relative;
  width: 2.8rem;
  height: 2.8rem;
  flex-shrink: 0;
}

.mobile-menu-toggle span {
  position: absolute;
  left: 0.4rem;
  width: 2rem;
  height: 2px;
  background: var(--color-white);
  border-radius: 2px;
  transition: transform 0.3s ease, top 0.3s ease, opacity 0.3s ease;
}

.mobile-menu-toggle span:nth-child(1) {
  top: 0.8rem;
}
.mobile-menu-toggle span:nth-child(2) {
  top: 1.3rem;
}
.mobile-menu-toggle span:nth-child(3) {
  top: 1.8rem;
}

.mobile-menu-toggle.is-clicked span:nth-child(1) {
  top: 1.3rem;
  transform: rotate(45deg);
}
.mobile-menu-toggle.is-clicked span:nth-child(2) {
  opacity: 0;
}
.mobile-menu-toggle.is-clicked span:nth-child(3) {
  top: 1.3rem;
  transform: rotate(-45deg);
}

.mobile-drawer {
  display: none;
}

@media (max-width: 800px) {
  .s-header {
    padding: 1.2rem 1.6rem 0;
  }

  .nav-shell {
    padding: 0.7rem 0.8rem 0.7rem 1.4rem;
  }

  .main-nav {
    display: none;
  }

  .mobile-menu-toggle {
    display: block;
  }

  .mobile-drawer {
    display: block;
    width: 100%;
    max-width: 1152px;
    margin: 0.8rem auto 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transform: translateY(-0.8rem);
    border-radius: 1.6rem;
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
    transition:
      max-height 0.35s ease,
      opacity 0.3s ease,
      transform 0.3s ease;
    pointer-events: none;
  }

  .s-header.is-visible .mobile-drawer.is-open {
    max-height: 28rem;
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .mobile-drawer nav {
    display: flex;
    flex-direction: column;
    padding: 0.8rem 1.6rem 1.4rem;
  }

  .mobile-drawer a {
    padding: 1.2rem 0;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .mobile-drawer a:last-child {
    border-bottom: none;
  }

  .mobile-drawer a:hover,
  .mobile-drawer a.current {
    color: var(--color-1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .s-header,
  .mobile-drawer {
    transition: none;
  }
}

@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .nav-shell__frost,
  .mobile-drawer {
    background: rgba(28, 29, 30, 0.92);
  }
}
</style>

<!-- Unscoped: some builds were dropping vendor-prefixed backdrop-filter -->
<style>
.nav-shell__frost {
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
}
</style>
