import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionTone = 'white' | 'black' | 'gray'

interface SectionProps {
  as?: ElementType
  id?: string
  tone?: SectionTone
  className?: string
  children: ReactNode
}

const toneClasses: Record<SectionTone, string> = {
  white: 'bg-white text-black',
  black: 'bg-black text-white',
  gray: 'bg-gray-50 text-black',
}

export function Section({ as: Tag = 'section', id, tone = 'white', className, children }: SectionProps) {
  return (
    <Tag id={id} className={cn('py-20 md:py-28 lg:py-32', toneClasses[tone], className)}>
      {children}
    </Tag>
  )
}
