import { HeartPulse, Snowflake, Sparkles, Waves, type LucideIcon } from 'lucide-react'

export interface RecoveryPillar {
  icon: LucideIcon
  title: string
  description: string
}

export const RECOVERY_EYEBROW = 'Recovery & Wellness'

export const RECOVERY_HEADLINE = 'Recovery is not optional. It is engineered.'

export const RECOVERY_PARAGRAPH =
  'Training breaks the body down. What you do next decides whether you grow or burn out. Our recovery suite is built to close that loop — every session, every visit.'

export const RECOVERY_PILLARS: RecoveryPillar[] = [
  {
    icon: Snowflake,
    title: 'Ice Bath',
    description: 'Controlled cold immersion to cut inflammation and speed up recovery between sessions.',
  },
  {
    icon: Waves,
    title: 'Hydro Massage',
    description: 'Targeted water-jet therapy that releases muscle tension without lifting a finger.',
  },
  {
    icon: HeartPulse,
    title: 'Recovery',
    description: 'Guided mobility and stretch protocols designed by our recovery specialists.',
  },
  {
    icon: Sparkles,
    title: 'Wellness',
    description: 'A full sensory reset — sauna, steam, and calm spaces built for your mind as much as your body.',
  },
]
