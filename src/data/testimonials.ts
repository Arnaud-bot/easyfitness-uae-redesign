export interface Testimonial {
  name: string
  initials: string
  rating: number
  quote: string
}

// Placeholder reviews — replace with real, consented Google Reviews before launch.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Amina H.',
    initials: 'AH',
    rating: 5,
    quote: 'Best fitness investment I have made. The coaches actually know your name and your goals.',
  },
  {
    name: 'Omar S.',
    initials: 'OS',
    rating: 5,
    quote: 'The recovery suite alone is worth the membership. Ice bath after leg day changed my life.',
  },
  {
    name: 'Layla M.',
    initials: 'LM',
    rating: 5,
    quote: 'Clean, modern, and never overcrowded. Feels like a private club, not a gym chain.',
  },
  {
    name: 'David R.',
    initials: 'DR',
    rating: 5,
    quote: 'Signed up for a free trial and never looked back. Six months in and still excited to train.',
  },
  {
    name: 'Noura K.',
    initials: 'NK',
    rating: 4,
    quote: 'Fantastic classes and equipment. Would love extended hours on weekends.',
  },
  {
    name: 'Yusuf T.',
    initials: 'YT',
    rating: 5,
    quote: 'The hydro massage after a heavy session is unreal. This place gets recovery right.',
  },
]
