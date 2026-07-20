import { Accordion } from '@/components/ui/Accordion'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'
import { FAQ_ITEMS } from '@/data/faq'

export function FAQ() {
  return (
    <Section id="faq" tone="gray">
      <Container size="narrow">
        <div className="text-center">
          <p className="text-caption font-medium uppercase tracking-[0.2em] text-accent">FAQ</p>
          <Heading size="h2" className="mt-4">
            Questions? We&apos;ve got answers.
          </Heading>
        </div>

        <div className="mt-14">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </Container>
    </Section>
  )
}
