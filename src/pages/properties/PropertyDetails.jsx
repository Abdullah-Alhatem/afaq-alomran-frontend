import CoverSection from '@/components/CoverSection'
import VideoPlayer from '@/components/VideoPlayer'
import PropertyDetailsContent from '@/components/properties/PropertyDetailsContent'
import videoThumbnail from '@/assets/images/video-thumbnail-homepage.png'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import { usePropertyDetailsQuery } from '@/lib/fake-api/hooks'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound'

function PropertyDetails() {
  const { t } = useTranslation()
  const { propertyId } = useParams()
  const { data: property } = usePropertyDetailsQuery(propertyId)

  if (!property) {
    return <NotFound />
  }

  return (
    <div>
      <CoverSection
        title={t('properties.detail.coverTitle')}
        currentPage={t('properties.detail.currentPage')}
      />
      <div className="home-shell">
        <VideoPlayer
          src={property.videoUrl}
          poster={videoThumbnail}
          containerClassName="mt-5 md:mt-14 lg:mt-16"
          videoClassName="h-[280px] sm:h-[380px] md:h-[470px] lg:h-[732px]"
        />

        <PropertyDetailsContent property={property} />
      </div>
      <LookingForADreamBox />
    </div>
  )
}

export default PropertyDetails
