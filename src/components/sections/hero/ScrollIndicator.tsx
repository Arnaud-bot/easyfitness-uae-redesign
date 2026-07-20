import { motion } from 'framer-motion'
import type { MouseEvent } from 'react'

interface ScrollIndicatorProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export function ScrollIndicator({ onClick }: ScrollIndicatorProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll to next section"
      className="hero-scroll z-10 mx-auto mt-10 flex w-fit flex-col items-center gap-2 text-white/70 transition-colors hover:text-white sm:absolute sm:inset-x-0 sm:bottom-8 sm:mt-0"
    >
      <span className="text-caption uppercase tracking-[0.2em]">Scroll</span>
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="flex h-9 w-6 items-start justify-center rounded-full border border-white/30 p-1.5"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      </motion.span>
    </button>
  )
}
