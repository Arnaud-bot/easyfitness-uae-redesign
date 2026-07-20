import { Container } from '@/components/ui/Container'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'
import { FEATURES } from '@/data/features'

const FEATURE_COLUMNS = 3
const FEATURE_STAGGER_DELAY = 0.08

export function WhyEasyFitness() {
  return (
    <Section id="why-easyfitness" tone="gray">
      <Container>
        <div className="max-w-2xl">
          <p className="text-caption font-medium uppercase tracking-[0.2em] text-accent">Why EasyFitness</p>
          <Heading size="h2" className="mt-4">
            Everything you need, nothing you don&apos;t.
          </Heading>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={(index % FEATURE_COLUMNS) * FEATURE_STAGGER_DELAY}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
