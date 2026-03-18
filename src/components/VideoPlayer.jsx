import { useRef, useState } from 'react'

import { cn } from '@/lib/utils'

function VideoPlayer({
  src,
  poster,
  containerClassName,
  videoClassName,
  playButtonLabel = 'Play video',
}) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      await video.play()
    } catch {
      // Ignore play promise rejection; browser may block in edge cases.
    }
  }

  return (
    <div className={cn('relative overflow-hidden rounded-[24px]', containerClassName)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={cn('w-full object-cover', videoClassName)}
        controls={isPlaying}
        preload="metadata"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <button
          type="button"
          aria-label={playButtonLabel}
          onClick={handlePlayVideo}
          className="absolute left-1/2 top-1/2 inline-flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#d9d9d9] p-[6px] shadow-xl transition-transform duration-200 hover:scale-105 md:h-[75px] md:w-[75px] md:p-[8px]"
        >
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-secondary-light text-white">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="ml-[2px] h-5 w-5 md:h-9 md:w-9"
              fill="currentColor"
            >
              <path d="M8 6.82v10.36c0 .78.85 1.26 1.52.86l8.13-5.18a1 1 0 0 0 0-1.72L9.52 5.96A1 1 0 0 0 8 6.82Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}

export default VideoPlayer
