import { X, type LucideIcon } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { FacebookIcon, InstagramIcon } from '@/components/ui/icons/SocialIcons'

export interface SocialLink {
  label: string
  href: string
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>
}

// Placeholder links — swap for the real profile URLs before launch.
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'Facebook', href: '#', icon: FacebookIcon },
  { label: 'X (Twitter)', href: '#', icon: X },
]

export interface OpeningHour {
  day: string
  hours: string
}

export const OPENING_HOURS: OpeningHour[] = [
  { day: 'Mon – Fri', hours: '6:00 AM – 11:00 PM' },
  { day: 'Saturday', hours: '7:00 AM – 10:00 PM' },
  { day: 'Sunday', hours: '8:00 AM – 9:00 PM' },
]

// Placeholder address — replace with the confirmed studio location.
export const STUDIO_ADDRESS = 'Sheikh Zayed Road, Dubai, United Arab Emirates'
