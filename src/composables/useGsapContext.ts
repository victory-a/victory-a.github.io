import { onMounted, onUnmounted, type Ref } from 'vue'
import gsap from 'gsap'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * Creates a scoped GSAP context that cleans up on unmount.
 * Skips the setup callback when the user prefers reduced motion
 * (unless `runWhenReduced` is true — use that to set final states).
 */
export function useGsapContext(
  scope: Ref<HTMLElement | null> | (() => HTMLElement | null | undefined),
  setup: (ctx: gsap.Context) => void,
  options?: { runWhenReduced?: boolean },
) {
  const prefersReduced = usePrefersReducedMotion()
  let ctx: gsap.Context | null = null

  onMounted(() => {
    const el = typeof scope === 'function' ? scope() : scope.value
    if (!el) return

    if (prefersReduced.value && !options?.runWhenReduced) {
      gsap.set(
        el.querySelectorAll('[data-reveal], [data-hero], [data-hero-media]'),
        {
          clearProps: 'all',
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
        },
      )
      return
    }

    ctx = gsap.context(() => {
      setup(ctx!)
    }, el)
  })

  onUnmounted(() => {
    ctx?.revert()
    ctx = null
  })

  return { prefersReduced }
}
