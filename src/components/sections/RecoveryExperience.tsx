import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import {
  RECOVERY_EYEBROW,
  RECOVERY_HEADLINE,
  RECOVERY_PARAGRAPH,
  RECOVERY_PILLARS,
} from '@/data/recovery'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { RecoveryBackground } from './recovery/RecoveryBackground'

const PARALLAX_RANGE = 60

export function RecoveryExperience() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollToSection = useScrollToSection()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-PARALLAX_RANGE, PARALLAX_RANGE])

  return (
    <section
      ref={sectionRef}
      id="recovery"
      className="relative overflow-hidden bg-black py-20 text-white md:py-28 lg:py-32"
    >
      <motion.div style={{ y }} className="absolute -inset-20">
        <RecoveryBackground />
      </motion.div>

      <Container size="wide" className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="flex items-center gap-2 text-caption font-medium uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {RECOVERY_EYEBROW}
          </p>
          <Heading as="h2" size="h1" className="mt-6 max-w-xl">
            {RECOVERY_HEADLINE}
          </Heading>
          <p className="mt-6 max-w-md text-body-lg text-white/70">{RECOVERY_PARAGRAPH}</p>
          <div className="mt-10">
            <Button variant="outline" size="lg" onClick={(event) => scrollToSection(event, '#membership')}>
              Explore Memberships
            </Button>
          </div>
        </div>

        <div className="divide-y divide-white/10 border-t border-white/10 lg:border-l lg:border-t-0 lg:pl-12">
          {RECOVERY_PILLARS.map((pillar) => (
            <div key={pillar.title} className="flex gap-5 py-6">
              <pillar.icon className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="text-h3 font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
