import { useRef, useState } from 'react'
import videoThumbnail from '@/assets/images/video-thumbnail-homepage.png'

const TEST_VIDEO_URL =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

function VideoTestimonialSection() {
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
    <section className="bg-[#F8F8F8] py-5 md:py-20 lg:py-24">
      <div className="home-shell">
        <div className="mx-auto max-w-[1150px] text-center">
          <h2 className="text-[34px] font-bold leading-[1.22] text-[#18181B] md:text-[48px]">
            Your dream house is no longer a dream.
          </h2>
          <p className="mx-auto mt-6 max-w-[1296px] text-base font-semibold leading-[1.55] text-[#616161] md:text-[20px]">
            Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae fringilla
            tempor. Non in in sodales suspendisse egestas integer iaculis semper ultrices. Lectus
            dui in pulvinar orci ut fermentum tortor mi, at.
          </p>
        </div>

        <div className="relative mt-5 overflow-hidden rounded-[24px] md:mt-14 lg:mt-16">
          <video
            ref={videoRef}
            src={TEST_VIDEO_URL}
            poster={videoThumbnail}
            className="h-[280px] w-full object-cover sm:h-[380px] md:h-[470px] lg:h-[732px]"
            controls={isPlaying}
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <button
              type="button"
              aria-label="Play video"
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
      </div>
    </section>
  )
}

export default VideoTestimonialSection
