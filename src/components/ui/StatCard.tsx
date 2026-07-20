import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { CountUp } from '@/lib/react-countup'
import { cn } from '@/lib/utils'

const COUNTUP_DURATION = 2.4
const INVIEW_THRESHOLD = 0.4

interface StatCardProps {
  icon: LucideIcon
  value: number
  label: string
  suffix?: string
  prefix?: string
  decimals?: number
  delay?: number
  className?: string
}

export function StatCard({
  icon: Icon,
  value,
  label,
  suffix = '',
  prefix = '',
  decimals = 0,
  delay = 0,
  className,
}: StatCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: INVIEW_THRESHOLD })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={cn(
        'rounded-3xl border border-gray-200 bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-soft-lg',
        className,
      )}
    >
      <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
      <p className="mt-6 text-h1 font-semibold tabular-nums text-black">
        {prefix}
        {inView ? <CountUp end={value} duration={COUNTUP_DURATION} decimals={decimals} separator="," /> : 0}
        {suffix}
      </p>
      <p className="mt-2 text-caption font-medium uppercase tracking-[0.14em] text-gray-600">{label}</p>
    </motion.div>
  )
}
