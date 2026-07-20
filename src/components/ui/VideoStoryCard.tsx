import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

const INVIEW_THRESHOLD = 0.2

interface VideoStoryCardProps {
  video: string
  title: string
  description: string
  delay?: number
  className?: string
}

export function VideoStoryCard({ video, title, description, delay = 0, className }: VideoStoryCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: INVIEW_THRESHOLD })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay } } : undefined}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
      className={cn('overflow-hidden rounded-3xl bg-black shadow-soft', className)}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {/* Deferred until the card is in view — these clips are large, no reason to fetch them early */}
        {inView && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-h3 font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
      </div>
    </motion.div>
  )
}
