import { Dumbbell, Maximize2, Star, Users, type LucideIcon } from 'lucide-react'

export const HERO_EYEBROW = "UAE's Premium Fitness Destination"

export const HERO_HEADLINE_LINES = ['Strength.', 'Recovery.', 'Transformed.']

export const HERO_SUBHEADLINE =
  'A premium fitness and wellness destination in the UAE — engineered for performance, built for recovery.'

export interface HeroStat {
  icon: LucideIcon
  value: string
  label: string
}

// Placeholder figures — replace with verified live studio data before launch.
export const HERO_STATS: HeroStat[] = [
  { icon: Star, value: '4.8', label: 'Google Rating' },
  { icon: Users, value: '5,000+', label: 'Members' },
  { icon: Dumbbell, value: '40+', label: 'Expert Coaches' },
  { icon: Maximize2, value: '30,000 sq ft', label: 'Facility Size' },
]
