import type { MouseEvent } from 'react'
import { NAVBAR_OFFSET } from '@/lib/constants'
import { useLenisInstance } from '@/lib/lenis'

export function useScrollToSection() {
  const lenis = useLenisInstance()

  return function scrollToSection(event: MouseEvent<HTMLElement>, target: string | number) {
    event.preventDefault()

    if (lenis) {
      lenis.scrollTo(target, typeof target === 'string' ? { offset: NAVBAR_OFFSET } : undefined)
      return
    }

    if (typeof target === 'string') {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: target, behavior: 'smooth' })
    }
  }
}
