import homePageTwoImage from '@/assets/images/homepage2.png'
import { useTranslation } from 'react-i18next'

function LegacySection() {
  const { t } = useTranslation()
  const paragraphs = t('home.legacy.paragraphs', { returnObjects: true })

  return (
    <section className="py-5 md:py-20 lg:py-24">
      <div className="home-shell flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-16">
        <div
          className="mx-auto w-full max-w-[500px] overflow-hidden rounded-[22px] lg:mx-0"
          data-page-reveal-item
        >
          <img
            src={homePageTwoImage}
            alt={t('home.legacy.imageAlt')}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full max-w-[980px] space-y-8 pt-2 lg:pt-0">
          <h2
            className="max-w-[760px] text-[30px] font-semibold leading-[1.25] text-[#38343D] lg:text-[40px]"
            data-page-reveal-item
          >
            {t('home.legacy.title')}
          </h2>

          <div
            className="max-w-[930px] space-y-4 text-[16px] font-normal leading-[1.6] text-[#818181] lg:space-y-7"
            data-page-reveal-item
          >
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegacySection
