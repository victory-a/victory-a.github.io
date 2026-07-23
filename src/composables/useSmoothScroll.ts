export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function scrollToTarget(
  target: string | HTMLElement,
  duration = 1200,
): void {
  const el =
    typeof target === 'string'
      ? document.querySelector<HTMLElement>(target)
      : target

  if (!el) return

  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  const start = window.scrollY
  const end = el.getBoundingClientRect().top + window.scrollY
  const distance = end - start

  if (prefersReduced || duration <= 0) {
    window.scrollTo(0, end)
    return
  }

  let startTime: number | null = null

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, start + distance * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function useSmoothScroll(onNavigate?: () => void) {
  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null
    const link = target?.closest<HTMLAnchorElement>('a.smoothscroll')
    if (!link) return

    const href = link.getAttribute('href')
    if (!href || !href.startsWith('#')) return

    event.preventDefault()
    onNavigate?.()
    scrollToTarget(href)
  }

  return { handleClick, scrollToTarget }
}
