import { MEDIA } from '@/lib/media'

export interface RealResultVideo {
  video: string
  title: string
  description: string
}

export const REAL_RESULT_VIDEOS: RealResultVideo[] = [
  {
    video: MEDIA.transformationVideo,
    title: 'Real Transformations',
    description: 'Members who put in the work — and the results to show for it.',
  },
  {
    video: MEDIA.gymTourVideo,
    title: 'Our Facility',
    description: 'A full tour of the equipment, studios, and recovery suite.',
  },
  {
    video: MEDIA.communityVideo,
    title: 'The Community',
    description: 'High energy, zero judgment — see what training here feels like.',
  },
]
