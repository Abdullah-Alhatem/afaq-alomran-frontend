import videoThumbnail from '@/assets/images/video-thumbnail-homepage.png'
import VideoPlayer from '@/components/VideoPlayer'
import { useSiteSettingsQuery } from '@/lib/fake-api/hooks'
import { useTranslation } from 'react-i18next'
import HomeSectionIntro from './HomeSectionIntro'
import { HOME_SECTION_PADDING_CLASSNAME } from './homeSectionStyles'

function VideoTestimonialSection() {
  const { t } = useTranslation()
  const { data: siteSettings } = useSiteSettingsQuery()

  return (
    <section className={`bg-[#F8F8F8] ${HOME_SECTION_PADDING_CLASSNAME}`}>
      <div className="home-shell">
        <HomeSectionIntro
          align="center"
          title={t('home.videoTestimonial.title')}
          description={t('home.videoTestimonial.description')}
          className="mx-auto max-w-[1150px]"
          titleClassName="text-[34px] leading-[1.22] md:text-[48px]"
          descriptionClassName="mt-6 max-w-[1296px] font-semibold leading-[1.55] text-[#616161] md:text-[20px]"
        />

        <VideoPlayer
          src={siteSettings.homeTestimonialVideoUrl}
          poster={videoThumbnail}
          containerClassName="mt-5 md:mt-14 lg:mt-16"
          videoClassName="h-[280px] sm:h-[380px] md:h-[470px] lg:h-[732px]"
        />
      </div>
    </section>
  )
}

export default VideoTestimonialSection
