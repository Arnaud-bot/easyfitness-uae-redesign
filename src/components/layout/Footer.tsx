import { ArrowRight, Clock, Mail, MapPin } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { NAV_LINKS } from '@/data/navigation'
import { OPENING_HOURS, SOCIAL_LINKS, STUDIO_ADDRESS } from '@/data/footer'
import { useScrollToSection } from '@/hooks/useScrollToSection'

export function Footer() {
  const scrollToSection = useScrollToSection()
  const [isSubscribed, setIsSubscribed] = useState(false)

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubscribed(true)
  }

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <Container size="wide" className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              A premium fitness and wellness destination in the UAE — engineered for performance, built for
              recovery.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-200 hover:border-white hover:text-white"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-caption font-medium uppercase tracking-[0.14em] text-white/50">Quick Links</p>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => scrollToSection(event, link.href)}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-caption font-medium uppercase tracking-[0.14em] text-white/50">Visit Us</p>
            <div className="mt-5 flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <p className="text-sm text-white/70">{STUDIO_ADDRESS}</p>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <ul className="space-y-1 text-sm text-white/70">
                {OPENING_HOURS.map((entry) => (
                  <li key={entry.day} className="flex gap-2">
                    <span className="text-white/50">{entry.day}</span>
                    <span>{entry.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-caption font-medium uppercase tracking-[0.14em] text-white/50">Newsletter</p>
            <p className="mt-5 text-sm text-white/70">
              Training tips, recovery science, and studio updates — once a month, no spam.
            </p>
            {isSubscribed ? (
              <p className="mt-4 text-sm text-accent">You&apos;re subscribed. Welcome to the club.</p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mt-4 flex items-center gap-2">
                <div className="flex h-12 flex-1 items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4">
                  <Mail className="h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    aria-label="Email address"
                    className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                  />
                </div>
                <Button type="submit" variant="accent" size="md" className="shrink-0 px-4" aria-label="Subscribe">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} EasyFitness. All rights reserved.</p>
          <p>Designed for a premium fitness experience in the UAE.</p>
        </div>
      </Container>
    </footer>
  )
}
