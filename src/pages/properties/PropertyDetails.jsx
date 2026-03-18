import CoverSection from '@/components/CoverSection'
import VideoPlayer from '@/components/VideoPlayer'
import PropertyDetailsContent from '@/components/properties/PropertyDetailsContent'
import videoThumbnail from '@/assets/images/video-thumbnail-homepage.png'
import LookingForADreamBox from '@/components/LookingForADreamBox'

const TEST_VIDEO_URL =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

function PropertyDetails() {
  return (
    <div>
      <CoverSection title="Property Details" currentPage="Property Details" />
      <div className="home-shell">
        <VideoPlayer
          src={TEST_VIDEO_URL}
          poster={videoThumbnail}
          containerClassName="mt-5 md:mt-14 lg:mt-16"
          videoClassName="h-[280px] sm:h-[380px] md:h-[470px] lg:h-[732px]"
        />

        <PropertyDetailsContent />
      </div>
      <LookingForADreamBox />
    </div>
  )
}

export default PropertyDetails
