import { motion } from 'framer-motion'
import { ArrowUpRight, type LucideIcon } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

const INVIEW_THRESHOLD = 0.2

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  className?: string
}

export function FeatureCard({ icon: Icon, title, description, delay = 0, className }: FeatureCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: INVIEW_THRESHOLD })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } } : undefined}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-soft-lg',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white transition-colors duration-300 group-hover:bg-accent">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <ArrowUpRight
          className="h-5 w-5 -translate-x-1 translate-y-1 text-gray-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-accent"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-6 text-h3 font-semibold text-black">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
    </motion.div>
  )
}
