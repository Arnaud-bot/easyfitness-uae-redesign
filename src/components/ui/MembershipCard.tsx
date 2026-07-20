import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { MouseEvent } from 'react'
import { useInView } from 'react-intersection-observer'
import { Badge } from './Badge'
import { Button } from './Button'
import { cn } from '@/lib/utils'

const INVIEW_THRESHOLD = 0.2

interface MembershipCardProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaLabel: string
  onCtaClick: (event: MouseEvent<HTMLButtonElement>) => void
  delay?: number
}

export function MembershipCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  ctaLabel,
  onCtaClick,
  delay = 0,
}: MembershipCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: INVIEW_THRESHOLD })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay } } : undefined}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
      className={cn(
        'relative flex h-full flex-col rounded-3xl p-8 shadow-soft transition-shadow duration-300 hover:shadow-soft-lg',
        highlighted
          ? 'bg-black text-white shadow-soft-lg lg:p-10'
          : 'border border-gray-200 bg-white text-black',
      )}
    >
      {highlighted && <Badge className="absolute -top-4 left-1/2 -translate-x-1/2">Most Popular</Badge>}

      <h3 className="text-h3 font-semibold">{name}</h3>
      <p className={cn('mt-2 text-sm', highlighted ? 'text-white/60' : 'text-gray-600')}>{description}</p>

      <div className="mt-8 flex items-baseline gap-1">
        <span className="text-h1 font-semibold">{price}</span>
        <span className={cn('text-sm', highlighted ? 'text-white/50' : 'text-gray-500')}>/{period}</span>
      </div>

      <ul className="mt-8 flex-1 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span className={highlighted ? 'text-white/80' : 'text-gray-700'}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button variant={highlighted ? 'accent' : 'primary'} size="lg" className="mt-10 w-full" onClick={onCtaClick}>
        {ctaLabel}
      </Button>
    </motion.div>
  )
}
