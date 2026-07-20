import logoImage from '@/assets/logo.png'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return <img src={logoImage} alt="EasyFitness" className={cn('h-7 w-auto', className)} />
}
