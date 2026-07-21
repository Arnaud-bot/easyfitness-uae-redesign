import { Play } from 'lucide-react'
import { useRef, useState } from 'react'
import { MEDIA } from '@/lib/media'

export function VideoTeaser() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  function handlePlay() {
    setIsPlaying(true)
    videoRef.current?.play()
  }

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-xs overflow-hidden rounded-3xl bg-black sm:aspect-video sm:max-w-none">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={MEDIA.testimonialsVideo}
        controls={isPlaying}
        playsInline
        preload="metadata"
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Play member stories video"
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/30 text-white transition-colors duration-300 hover:bg-black/40"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            <Play className="h-6 w-6 fill-white text-white" aria-hidden="true" />
          </span>
          <p className="text-caption font-medium uppercase tracking-[0.2em] text-white/80">Member Stories</p>
        </button>
      )}
    </div>
  )
}
