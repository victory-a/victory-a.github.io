<script setup lang="ts">
import { footerContent } from '../constants/footer'
import { useSmoothScroll } from '../composables/useSmoothScroll'

const content = footerContent
const year = new Date().getFullYear()
const { handleClick } = useSmoothScroll()
</script>

<template>
  <footer class="s-footer" @click="handleClick">
    <div class="container footer-inner">
      <p class="ss-copyright">© Copyright {{ content.name }} {{ year }}</p>

      <div class="ss-go-top">
        <a class="smoothscroll" :title="content.goTopTitle" href="#top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill-rule="evenodd"
            clip-rule="evenodd"
            aria-hidden="true"
          >
            <path
              d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.s-footer {
  position: relative;
  z-index: 2;
  padding: var(--vspace-1) 0;
}

.footer-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.ss-copyright {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-text-light);
  text-align: left;
}

.ss-go-top {
  position: absolute;
  right: var(--gutter);
  top: 50%;
  transform: translateY(-50%);
}

.ss-go-top a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(1.5 * var(--space));
  height: calc(1.5 * var(--space));
  border: 1px solid var(--color-white);
  background: var(--color-body);
  color: var(--color-white);
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.ss-go-top a:hover {
  background: var(--color-white);
  border-color: var(--color-white);
  color: var(--color-black);
}

.ss-go-top svg {
  width: 1.6rem;
  height: 1.6rem;
  fill: currentColor;
}
</style>
