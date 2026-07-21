import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { GALLERY_PHOTOS } from '@/data/gallery'
import { useEmblaControls } from '@/hooks/useEmblaControls'

export function PhotoGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', dragFree: true })
  const { scrollPrev, scrollNext } = useEmblaControls(emblaApi)

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between">
        <p className="text-caption font-medium uppercase tracking-[0.14em] text-gray-500">A closer look</p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous photo"
            onClick={scrollPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-black transition-colors hover:border-black"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={scrollNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-black transition-colors hover:border-black"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {GALLERY_PHOTOS.map((photo) => (
            <div key={photo.alt} className="min-w-0 shrink-0 basis-[70%] pl-4 sm:basis-[42%] lg:basis-[27%]">
              <div className="group aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
