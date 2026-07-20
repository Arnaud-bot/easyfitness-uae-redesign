import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'
import { StatCard } from '@/components/ui/StatCard'
import { BRAND_STATS } from '@/data/stats'

const STAT_STAGGER_DELAY = 0.08

export function BrandStatistics() {
  return (
    <Section id="stats" tone="white">
      <Container>
        <div className="max-w-2xl">
          <p className="text-caption font-medium uppercase tracking-[0.2em] text-accent">Proven Results</p>
          <Heading size="h2" className="mt-4">
            Numbers that speak for themselves.
          </Heading>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BRAND_STATS.map((stat, index) => (
            <StatCard key={stat.label} {...stat} delay={index * STAT_STAGGER_DELAY} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
