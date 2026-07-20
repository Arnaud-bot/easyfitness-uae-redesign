import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const RATING_MAX = 5

interface ReviewCardProps {
  name: string
  initials: string
  rating: number
  quote: string
  className?: string
}

export function ReviewCard({ name, initials, rating, quote, className }: ReviewCardProps) {
  return (
    <div
      className={cn(
        'flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-soft',
        className,
      )}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: RATING_MAX }).map((_, index) => (
          <Star
            key={index}
            className={cn('h-4 w-4', index < rating ? 'fill-accent text-accent' : 'fill-gray-200 text-gray-200')}
            aria-hidden="true"
          />
        ))}
      </div>

      <p className="mt-5 flex-1 text-base leading-relaxed text-gray-700">&ldquo;{quote}&rdquo;</p>

      <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-6">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-black text-base font-semibold text-white">
          {initials}
        </span>
        <div>
          <p className="font-semibold text-black">{name}</p>
          <p className="text-xs text-gray-500">Verified Google Review</p>
        </div>
      </div>
    </div>
  )
}
