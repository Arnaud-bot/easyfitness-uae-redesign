import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'
import { TrialForm } from './final-cta/TrialForm'

export function FinalCTA() {
  return (
    <Section id="book-trial" tone="black">
      <Container size="default" className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 text-caption font-medium uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Get Started
          </p>
          <Heading as="h2" size="hero" className="mt-6 max-w-lg">
            Your transformation starts today.
          </Heading>
          <p className="mt-6 max-w-md text-body-lg text-white/70">
            Book a free trial and experience premium training, expert coaching, and full recovery — no
            commitment required.
          </p>
        </div>

        <TrialForm />
      </Container>
    </Section>
  )
}
