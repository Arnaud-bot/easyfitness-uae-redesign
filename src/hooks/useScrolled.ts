import { useEffect, useState } from 'react'
import type Lenis from '@studio-freight/lenis'
import { useLenisInstance } from '@/lib/lenis'

const SCROLL_THRESHOLD = 24

export function useScrolled(threshold = SCROLL_THRESHOLD) {
  const lenis = useLenisInstance()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!lenis) return

    const handleScroll = (instance: Lenis) => {
      setScrolled(instance.scroll > threshold)
    }

    lenis.on('scroll', handleScroll)
    return () => {
      lenis.off('scroll', handleScroll)
    }
  }, [lenis, threshold])

  return scrolled
}
