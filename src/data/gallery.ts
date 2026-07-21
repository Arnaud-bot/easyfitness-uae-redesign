import { BLOB_BASE_URL } from '@/lib/media'

export interface GalleryPhoto {
  src: string
  alt: string
}

const GALLERY_PHOTO_COUNT = 16

export const GALLERY_PHOTOS: GalleryPhoto[] = Array.from({ length: GALLERY_PHOTO_COUNT }, (_, index) => {
  const number = String(index + 1).padStart(2, '0')
  return {
    src: `${BLOB_BASE_URL}/gallery-${number}.jpeg`,
    alt: `Life at EasyFitness — photo ${index + 1}`,
  }
})
