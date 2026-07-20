import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { MembershipCard } from '@/components/ui/MembershipCard'
import { Section } from '@/components/ui/Section'
import { MEMBERSHIP_PLANS } from '@/data/membership'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { ComparisonTable } from './membership/ComparisonTable'

const PLAN_STAGGER_DELAY = 0.1

export function MembershipPlans() {
  const scrollToSection = useScrollToSection()

  return (
    <Section id="membership" tone="gray">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-caption font-medium uppercase tracking-[0.2em] text-accent">Membership</p>
          <Heading size="h2" className="mt-4">
            Choose the plan that fits your goals.
          </Heading>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {MEMBERSHIP_PLANS.map((plan, index) => (
            <MembershipCard
              key={plan.name}
              {...plan}
              ctaLabel="Start Your Free Trial"
              onCtaClick={(event) => scrollToSection(event, '#book-trial')}
              delay={index * PLAN_STAGGER_DELAY}
            />
          ))}
        </div>

        <div className="mt-24">
          <Heading size="h3" className="text-center">
            Compare plans in detail
          </Heading>
          <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-soft sm:p-8">
            <ComparisonTable />
          </div>
        </div>
      </Container>
    </Section>
  )
}
