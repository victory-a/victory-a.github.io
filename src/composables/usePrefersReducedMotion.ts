import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export function usePrefersReducedMotion(): Ref<boolean> {
  const prefersReduced = ref(false)
  let media: MediaQueryList | null = null

  const onChange = (event: MediaQueryListEvent) => {
    prefersReduced.value = event.matches
  }

  onMounted(() => {
    media = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReduced.value = media.matches
    media.addEventListener('change', onChange)
  })

  onUnmounted(() => {
    media?.removeEventListener('change', onChange)
  })

  return prefersReduced
}
