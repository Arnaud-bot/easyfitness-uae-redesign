import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { MouseEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { NAV_LINKS } from '@/data/navigation'

const menuVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
}

const linkVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

interface MobileMenuProps {
  onClose: () => void
  onNavigate: (event: MouseEvent<HTMLElement>, href: string) => void
}

export function MobileMenu({ onClose, onNavigate }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed inset-0 z-[60] bg-black lg:hidden"
    >
      <div className="flex items-center justify-between px-6 py-6">
        <Logo />
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center text-white"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <motion.nav
        initial="hidden"
        animate="visible"
        variants={menuVariants}
        className="mt-8 flex flex-col gap-1 px-6"
      >
        {NAV_LINKS.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(event) => onNavigate(event, link.href)}
            variants={linkVariants}
            className="border-b border-white/10 py-4 text-2xl font-medium text-white"
          >
            {link.label}
          </motion.a>
        ))}
      </motion.nav>

      <div className="mt-10 px-6">
        <Button
          variant="accent"
          size="lg"
          className="w-full"
          onClick={(event) => onNavigate(event, '#membership')}
        >
          Start Free Trial
        </Button>
      </div>
    </motion.div>
  )
}
