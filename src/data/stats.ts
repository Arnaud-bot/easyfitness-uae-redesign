import { CalendarDays, Dumbbell, Heart, Users, type LucideIcon } from 'lucide-react'

export interface BrandStat {
  icon: LucideIcon
  value: number
  suffix?: string
  label: string
}

// Placeholder figures — replace with verified live studio data before launch.
export const BRAND_STATS: BrandStat[] = [
  { icon: Users, value: 5000, suffix: '+', label: 'Active Members' },
  { icon: Dumbbell, value: 40, suffix: '+', label: 'Certified Coaches' },
  { icon: CalendarDays, value: 120, suffix: '+', label: 'Weekly Classes' },
  { icon: Heart, value: 98, suffix: '%', label: 'Member Satisfaction' },
]
