import communityVideo from '@/assets/community.mp4'
import gymTourVideo from '@/assets/gym-tour.mp4'
import transformationVideo from '@/assets/transformation.mp4'

export interface RealResultVideo {
  video: string
  title: string
  description: string
}

export const REAL_RESULT_VIDEOS: RealResultVideo[] = [
  {
    video: transformationVideo,
    title: 'Real Transformations',
    description: 'Members who put in the work — and the results to show for it.',
  },
  {
    video: gymTourVideo,
    title: 'Our Facility',
    description: 'A full tour of the equipment, studios, and recovery suite.',
  },
  {
    video: communityVideo,
    title: 'The Community',
    description: 'High energy, zero judgment — see what training here feels like.',
  },
]
