import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type HeadingSize = 'display' | 'hero' | 'h1' | 'h2' | 'h3'

interface HeadingProps {
  as?: ElementType
  size?: HeadingSize
  className?: string
  children: ReactNode
}

const sizeClasses: Record<HeadingSize, string> = {
  display: 'text-display font-semibold',
  hero: 'text-hero font-semibold',
  h1: 'text-h1 font-semibold',
  h2: 'text-h2 font-semibold',
  h3: 'text-h3 font-semibold',
}

const defaultTag: Record<HeadingSize, ElementType> = {
  display: 'h1',
  hero: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
}

export function Heading({ as, size = 'h2', className, children }: HeadingProps) {
  const Tag = as ?? defaultTag[size]

  return <Tag className={cn(sizeClasses[size], className)}>{children}</Tag>
}
