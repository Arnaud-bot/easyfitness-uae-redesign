import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ContainerSize = 'narrow' | 'default' | 'wide'

interface ContainerProps {
  as?: ElementType
  size?: ContainerSize
  className?: string
  children: ReactNode
}

const sizeClasses: Record<ContainerSize, string> = {
  narrow: 'max-w-[860px]',
  default: 'max-w-[1280px]',
  wide: 'max-w-[1440px]',
}

export function Container({ as: Tag = 'div', size = 'default', className, children }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full px-6 md:px-10 lg:px-16', sizeClasses[size], className)}>
      {children}
    </Tag>
  )
}
