import { Dumbbell, HeartPulse, Snowflake, UserCheck, Users, Waves, type LucideIcon } from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    icon: Dumbbell,
    title: 'Premium Equipment',
    description: 'World-class strength and cardio machines, curated for performance and precision.',
  },
  {
    icon: UserCheck,
    title: 'Expert Coaches',
    description: 'Certified trainers who design every session around your goals, not a generic plan.',
  },
  {
    icon: HeartPulse,
    title: 'Recovery',
    description: 'Dedicated recovery protocols that keep your body performing at its peak.',
  },
  {
    icon: Snowflake,
    title: 'Ice Bath',
    description: 'Cold immersion therapy to reduce inflammation and accelerate muscle repair.',
  },
  {
    icon: Waves,
    title: 'Hydro Massage',
    description: 'Water-powered massage beds that release tension without lifting a finger.',
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'High-energy sessions led by top coaches, built for motivation and momentum.',
  },
]
