import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { Section } from '@/components/ui/Section'
import { TESTIMONIALS } from '@/data/testimonials'
import { useEmblaControls } from '@/hooks/useEmblaControls'
import { cn } from '@/lib/utils'
import { VideoTeaser } from './testimonials/VideoTeaser'

const AGGREGATE_RATING = 4.8
const AGGREGATE_REVIEW_COUNT = '1,200+'
const RATING_MAX = 5

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const { selectedIndex, scrollSnaps, scrollTo, scrollPrev, scrollNext } = useEmblaControls(emblaApi)

  return (
    <Section id="testimonials" tone="white">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-caption font-medium uppercase tracking-[0.2em] text-accent">Testimonials</p>
            <Heading size="h2" className="mt-4">
              Trusted by thousands of members.
            </Heading>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-soft">
            <div className="flex items-center gap-1">
              {Array.from({ length: RATING_MAX }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
              ))}
            </div>
            <span className="text-sm font-semibold text-black">{AGGREGATE_RATING}</span>
            <span className="text-sm text-gray-500">· {AGGREGATE_REVIEW_COUNT} Google reviews</span>
          </div>
        </div>

        <div className="mt-14">
          <VideoTeaser />
        </div>

        <div className="mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-6 flex">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.name} className="min-w-0 shrink-0 basis-full pl-6 sm:basis-1/2 lg:basis-1/3">
                  <ReviewCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to review ${index + 1}`}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    index === selectedIndex ? 'w-6 bg-black' : 'w-2 bg-gray-300',
                  )}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous review"
                onClick={scrollPrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-black transition-colors hover:border-black"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={scrollNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-black transition-colors hover:border-black"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
