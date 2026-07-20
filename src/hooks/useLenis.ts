import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'

const LENIS_DURATION = 1.2

function lenisEasing(t: number) {
  return Math.min(1, 1.001 - 2 ** (-10 * t))
}

export function useLenis() {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const instance = new Lenis({
      duration: LENIS_DURATION,
      easing: lenisEasing,
      smoothWheel: true,
    })
    setLenis(instance)

    let rafId: number

    function raf(time: number) {
      instance.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return lenis
}
