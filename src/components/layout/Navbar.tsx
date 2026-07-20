import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { useEffect, useState, type MouseEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { NAV_LINKS } from '@/data/navigation'
import { useLenisInstance } from '@/lib/lenis'
import { cn } from '@/lib/utils'
import { useScrolled } from '@/hooks/useScrolled'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const scrolled = useScrolled()
  const lenis = useLenisInstance()
  const scrollToSection = useScrollToSection()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!lenis) return
    if (isMobileMenuOpen) {
      lenis.stop()
    } else {
      lenis.start()
    }
  }, [isMobileMenuOpen, lenis])

  function handleNavClick(event: MouseEvent<HTMLElement>, href: string) {
    setIsMobileMenuOpen(false)
    scrollToSection(event, href)
  }

  function handleLogoClick(event: MouseEvent<HTMLElement>) {
    setIsMobileMenuOpen(false)
    scrollToSection(event, 0)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'bg-white/90 text-black shadow-soft backdrop-blur-md' : 'bg-transparent text-white',
        )}
      >
        <Container size="wide" className={cn('flex items-center justify-between transition-all duration-300', scrolled ? 'py-3' : 'py-6')}>
          <a href="#" onClick={handleLogoClick} className="shrink-0">
            <Logo />
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="text-sm font-medium tracking-tight opacity-90 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              variant={scrolled ? 'primary' : 'outline'}
              size="md"
              onClick={(event) => handleNavClick(event, '#membership')}
            >
              Start Free Trial
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </Container>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} onNavigate={handleNavClick} />
        )}
      </AnimatePresence>
    </>
  )
}
