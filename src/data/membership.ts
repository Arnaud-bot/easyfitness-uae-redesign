export interface MembershipPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
}

// Placeholder pricing — confirm against the live AED rate card before launch.
export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    name: 'Essential',
    price: 'AED 299',
    period: 'month',
    description: 'Full gym access for members who train on their own terms.',
    features: ['Off-peak gym access', '4 group classes / month', 'Locker room access', 'Free fitness assessment'],
  },
  {
    name: 'Premium',
    price: 'AED 499',
    period: 'month',
    description: 'Unlimited training plus the full recovery suite.',
    features: [
      '24/7 gym access',
      'Unlimited group classes',
      'Ice bath & hydro massage',
      '1 personal training session / month',
      '2 guest passes / month',
    ],
    highlighted: true,
  },
  {
    name: 'Elite',
    price: 'AED 799',
    period: 'month',
    description: 'The complete experience, with a dedicated coach by your side.',
    features: [
      'Everything in Premium',
      '4 personal training sessions / month',
      'Priority class booking',
      'Dedicated coach',
      'Unlimited guest passes',
    ],
  },
]

export interface ComparisonRow {
  feature: string
  essential: boolean | string
  premium: boolean | string
  elite: boolean | string
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: 'Gym access', essential: 'Off-peak', premium: '24/7', elite: '24/7' },
  { feature: 'Group classes', essential: '4 / month', premium: 'Unlimited', elite: 'Unlimited' },
  { feature: 'Ice bath & hydro massage', essential: false, premium: true, elite: true },
  { feature: 'Personal training', essential: false, premium: '1 / month', elite: '4 / month' },
  { feature: 'Guest passes', essential: false, premium: '2 / month', elite: 'Unlimited' },
  { feature: 'Priority booking', essential: false, premium: false, elite: true },
  { feature: 'Dedicated coach', essential: false, premium: false, elite: true },
]
