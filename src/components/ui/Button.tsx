import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'outline'
type ButtonSize = 'md' | 'lg'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-black text-white hover:bg-gray-800',
  accent: 'bg-accent-fill text-black hover:bg-accent-fill-dark',
  secondary: 'bg-white text-black hover:bg-gray-100',
  outline: 'border border-white/40 bg-transparent text-white hover:border-white',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-2xl font-medium tracking-tight transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50',
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </motion.button>
    )
  },
)

Button.displayName = 'Button'
