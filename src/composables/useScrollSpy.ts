import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export function useScrollSpy(
  sectionIds: string[],
  offset = 50,
): { activeId: Ref<string> } {
  const activeId = ref(sectionIds[0] ?? '')

  const update = () => {
    const scrollY = window.scrollY
    const nearBottom =
      window.innerHeight + scrollY >= document.documentElement.scrollHeight - 2

    if (nearBottom) {
      activeId.value = sectionIds[sectionIds.length - 1] ?? activeId.value
      return
    }

    for (const id of sectionIds) {
      const section = document.getElementById(id)
      if (!section) continue

      const top = section.offsetTop - offset
      const bottom = top + section.offsetHeight

      if (scrollY >= top && scrollY < bottom) {
        activeId.value = id
        return
      }
    }
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })

  return { activeId }
}
