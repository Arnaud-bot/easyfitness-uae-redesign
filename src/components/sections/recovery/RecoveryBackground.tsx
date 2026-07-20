const GRAIN_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

/**
 * Cool, icy-toned counterpart to the Hero's warm backdrop — signals water
 * and cold-therapy without needing real photography yet. Swap for a real
 * image/video later; this div is the parallax target in RecoveryExperience.
 */
export function RecoveryBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(110% 80% at 80% 100%, rgba(56,132,255,0.18) 0%, rgba(5,5,5,0) 55%),' +
            'radial-gradient(90% 70% at 15% 0%, rgba(154,27,47,0.14) 0%, rgba(5,5,5,0) 60%),' +
            'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: GRAIN_TEXTURE }}
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}
