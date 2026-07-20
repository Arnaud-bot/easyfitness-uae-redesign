export interface FaqItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is the free trial really free?',
    answer:
      'Yes. Your trial includes full access to the gym floor and one group class — no card required, no hidden fees.',
  },
  {
    question: 'Can I cancel my membership anytime?',
    answer: 'Absolutely. All plans are flexible with a 30-day notice period — no long-term lock-in contracts.',
  },
  {
    question: 'Do I need gym experience to join?',
    answer:
      'Not at all. Every new member gets a free fitness assessment so our coaches can build a plan around your current level and goals.',
  },
  {
    question: 'Is the recovery suite included in my plan?',
    answer:
      'Ice bath and hydro massage are included in Premium and Elite. Essential members can add recovery access at any time.',
  },
  {
    question: 'What are your opening hours?',
    answer:
      'Premium and Elite members get 24/7 access. Essential members can train during off-peak hours, 6am-4pm and 9pm-midnight daily.',
  },
  {
    question: 'Can I bring a guest?',
    answer: 'Yes — Premium includes 2 guest passes a month, and Elite members enjoy unlimited guest visits.',
  },
]
