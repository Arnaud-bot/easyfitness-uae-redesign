import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-accent-fill px-4 py-1.5 text-caption font-medium uppercase tracking-[0.1em] text-black',
        className,
      )}
    >
      {children}
    </span>
  )
}
