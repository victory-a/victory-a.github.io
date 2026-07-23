<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { navContent, sectionIds } from '../constants/nav'
import { useScrollSpy } from '../composables/useScrollSpy'
import { useSmoothScroll } from '../composables/useSmoothScroll'

const menuOpen = ref(false)
const { activeId } = useScrollSpy(sectionIds)
const { handleClick } = useSmoothScroll(() => {
  menuOpen.value = false
  document.body.classList.remove('menu-is-open')
})

const brand = computed(() => navContent.brand)
const links = computed(() => navContent.links)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.classList.toggle('menu-is-open', menuOpen.value)
}

const onResize = () => {
  if (window.innerWidth >= 801 && menuOpen.value) {
    menuOpen.value = false
    document.body.classList.remove('menu-is-open')
  }
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  document.body.classList.remove('menu-is-open')
})
</script>

<template>
  <header class="s-header" @click="handleClick">
    <div class="header-mobile">
      <a class="mobile-home-link smoothscroll" href="#top">{{ brand }}</a>
      <button
        class="mobile-menu-toggle"
        type="button"
        :class="{ 'is-clicked': menuOpen }"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <span>Menu</span>
      </button>
    </div>

    <nav class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Primary">
      <ul>
        <li>
          <a class="home-link smoothscroll" href="#top">{{ brand }}</a>
        </li>
        <li
          v-for="link in links"
          :key="link.href"
          :class="{ current: activeId === link.href.slice(1) }"
        >
          <a class="smoothscroll" :href="link.href">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.s-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height);
  background: var(--color-body);
  border-bottom: 1px solid var(--color-border);
}

.header-mobile {
  display: none;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  padding: 0 var(--gutter);
}

.mobile-home-link {
  font-family: var(--font-2);
  font-size: var(--text-md);
  color: var(--color-text-dark);
}

.mobile-home-link:hover {
  color: var(--color-1);
}

.mobile-menu-toggle {
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  color: transparent;
}

.mobile-menu-toggle span,
.mobile-menu-toggle::before,
.mobile-menu-toggle::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color-text-dark);
  transition: transform 0.3s ease, top 0.3s ease, opacity 0.3s ease;
}

.mobile-menu-toggle span {
  top: 50%;
  transform: translateY(-50%);
  font-size: 0;
}

.mobile-menu-toggle::before {
  top: 0.6rem;
}

.mobile-menu-toggle::after {
  bottom: 0.6rem;
}

.mobile-menu-toggle.is-clicked span {
  opacity: 0;
}

.mobile-menu-toggle.is-clicked::before {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.mobile-menu-toggle.is-clicked::after {
  bottom: auto;
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

.main-nav {
  height: 100%;
}

.main-nav ul {
  display: flex;
  align-items: stretch;
  height: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--gutter);
}

.main-nav li {
  flex: 1;
  display: flex;
}

.main-nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.35em;
  color: var(--color-text-dark);
}

.main-nav a:hover {
  color: var(--color-1);
}

.main-nav .home-link {
  font-family: var(--font-2);
  font-size: var(--text-md);
  text-transform: none;
  letter-spacing: 0;
  justify-content: flex-start;
}

.main-nav .current a {
  color: var(--color-1);
  background-color: transparent;
}

@media (max-width: 800px) {
  .header-mobile {
    display: flex;
  }

  .main-nav {
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    height: auto;
    background: var(--color-body);
    border-bottom: 1px solid var(--color-border);
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    pointer-events: none;
    transition: transform 0.35s ease, opacity 0.35s ease;
  }

  .main-nav.is-open {
    transform: scaleY(1);
    opacity: 1;
    pointer-events: auto;
  }

  .main-nav ul {
    flex-direction: column;
    padding: var(--vspace-1) var(--gutter) var(--vspace-2);
  }

  .main-nav li:first-child {
    display: none;
  }

  .main-nav a {
    justify-content: flex-start;
    padding: 1.2rem 0;
  }

  .main-nav .current a {
    background: transparent;
    color: var(--color-1);
  }
}
</style>
