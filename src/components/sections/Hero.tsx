import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { HERO_EYEBROW, HERO_HEADLINE_LINES, HERO_SUBHEADLINE } from '@/data/hero'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { HeroBackground } from './hero/HeroBackground'
import { HeroStats } from './hero/HeroStats'
import { ScrollIndicator } from './hero/ScrollIndicator'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollToSection = useScrollToSection()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo('.hero-bg', { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1.6 })
        .fromTo('.hero-eyebrow', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, '-=1.1')
        .fromTo(
          '.hero-line',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'expo.out' },
          '-=0.3',
        )
        .fromTo('.hero-subheadline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.3',
        )
        .fromTo('.hero-stats', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.1')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-black text-white"
    >
      <HeroBackground />

      <Container size="wide" className="relative z-10 pb-16 pt-28 sm:pb-20 sm:pt-32">
        <p className="hero-eyebrow flex items-center gap-2 text-caption font-medium uppercase tracking-[0.2em] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {HERO_EYEBROW}
        </p>

        <Heading as="h1" size="display" className="mt-6 max-w-4xl">
          {HERO_HEADLINE_LINES.map((line) => (
            <span key={line} className="hero-line block overflow-hidden">
              {line}
            </span>
          ))}
        </Heading>

        <p className="hero-subheadline mt-8 max-w-lg text-body-lg text-white/70">{HERO_SUBHEADLINE}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            variant="accent"
            size="lg"
            className="hero-cta"
            onClick={(event) => scrollToSection(event, '#book-trial')}
          >
            Start Your Free Trial
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hero-cta"
            onClick={(event) => scrollToSection(event, '#membership')}
          >
            Explore Memberships
          </Button>
        </div>

        <div className="mt-10 sm:mt-16">
          <HeroStats />
        </div>

        <ScrollIndicator onClick={(event) => scrollToSection(event, '#why-easyfitness')} />
      </Container>
    </section>
  )
}
