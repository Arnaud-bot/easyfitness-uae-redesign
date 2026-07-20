import { HERO_STATS } from '@/data/hero'

export function HeroStats() {
  return (
    <div className="hero-stats grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4 sm:gap-x-10">
      {HERO_STATS.map((stat) => (
        <div key={stat.label} className="flex items-center gap-3">
          <stat.icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          <div>
            <p className="text-lg font-semibold leading-tight text-white sm:text-xl">{stat.value}</p>
            <p className="text-caption text-white/60">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
