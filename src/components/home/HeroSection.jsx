import homePageImage from '@/assets/images/homePage.png'
import orangeLine from '@/assets/icons/arrow in hero.svg'
import { useSiteSettingsQuery } from '@/lib/fake-api/hooks'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function HeroSection() {
  const { i18n, t } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'
  const { data: siteSettings } = useSiteSettingsQuery()
  const translatedStats = t('home.hero.stats', { returnObjects: true })
  const stats = siteSettings.homeHeroStats.map((item, index) => ({
    ...item,
    label: translatedStats[index]?.label ?? '',
  }))

  return (
    <section className="overflow-hidden bg-primary-mid">
      <div className="home-shell relative pt-5 text-white lg:min-h-[720px] lg:pt-20">
        <div
          data-page-reveal-lock
          className={cn(
            'max-w-[768px] space-y-6 lg:max-w-[calc(100%-520px)] lg:space-y-10 xl:max-w-[calc(100%-620px)] 2xl:max-w-[786px]',
            isRtl && 'lg:ml-auto',
          )}
        >
          <div className="space-y-4" data-page-reveal-item>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[58px] lg:leading-[170%]">
              {t('home.hero.titlePrefix')}{' '}
              <span className="text-secondary-light relative">
                {t('home.hero.titleHighlight')}
                <img
                  src={orangeLine}
                  alt=""
                  aria-hidden="true"
                  className="absolute -bottom-1 sm:bottom-0 -left-0 w-[110%] object-contain sm:w-[125%]"
                />
              </span>
            </h1>
          </div>

          <p className="text-base leading-7 text-white/90 sm:text-[18px]" data-page-reveal-item>
            {t('home.hero.description')}
          </p>

          <div className="flex flex-wrap items-center gap-4 py-6" data-page-reveal-item>
            <Link
              to="/properties"
              className={
                'h-12 px-5 rounded-lg bg-secondary-light text-white font-bold text-body inline-flex items-center justify-center hover:bg-secondary-lighter transition-all duration-200'
              }
            >
              {t('common.buttons.exploreProperties')}
            </Link>
            <Link
              className={
                'h-12 px-6 rounded-lg border-2 border-white text-white font-bold text-body inline-flex items-center justify-center hover:bg-white hover:text-primary-mid transition-all duration-200'
              }
            >
              {t('common.buttons.learnMore')}
            </Link>
          </div>

          <div
            className="grid max-w-[560px] grid-cols-1 gap-6 lg:pt-4 sm:grid-cols-3 sm:gap-5"
            data-page-reveal-item
          >
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-3xl sm:text-[40px] font-bold leading-none">
                  {item.value}
                  <span className="text-secondary-light">+</span>
                </p>
                <p className="mt-2 text-lg font-medium leading-8">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-page-reveal-item
          className={cn(
            'pt-6 lg:absolute lg:bottom-0 lg:w-[min(52vw,892px)] lg:pt-0',
            isRtl
              ? 'lg:left-[calc((100vw-100%)/-2)] lg:pr-16'
              : 'lg:right-[calc((100vw-100%)/-2)] lg:pl-16',
          )}
        >
          <div className="mx-auto w-full lg:mt-auto lg:min-w-[500px] lg:max-w-[892px] lg:mx-0 lg:flex-1">
            <img
              src={homePageImage}
              alt={t('home.hero.imageAlt')}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
