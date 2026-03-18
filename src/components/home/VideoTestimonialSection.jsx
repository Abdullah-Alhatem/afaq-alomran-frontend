import videoThumbnail from '@/assets/images/video-thumbnail-homepage.png'
import VideoPlayer from '@/components/VideoPlayer'

const TEST_VIDEO_URL =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

function VideoTestimonialSection() {
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

        <VideoPlayer
          src={TEST_VIDEO_URL}
          poster={videoThumbnail}
          containerClassName="mt-5 md:mt-14 lg:mt-16"
          videoClassName="h-[280px] sm:h-[380px] md:h-[470px] lg:h-[732px]"
        />
      </div>
    </section>
  )
}

export default VideoTestimonialSection
