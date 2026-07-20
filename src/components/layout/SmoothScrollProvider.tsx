import type { ReactNode } from 'react'
import { useLenis } from '@/hooks/useLenis'
import { LenisContext } from '@/lib/lenis'

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenis = useLenis()

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
