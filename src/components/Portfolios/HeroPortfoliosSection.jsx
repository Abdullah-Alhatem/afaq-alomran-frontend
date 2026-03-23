import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

import ourPortfolioHeader from '@/assets/images/ourPortfolioHeader.png'

export default function HeroPortfoliosSection() {
  const { i18n, t } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'

  return (
    <section className="overflow-hidden bg-primary-mid">
      <div className="home-shell relative py-8 text-white sm:py-10 lg:min-h-[457px] lg:py-0">
        <div
          className={cn(
            'max-w-[720px] space-y-6 lg:max-w-[calc(100%-560px)] lg:space-y-8 lg:py-[34px] xl:max-w-[calc(100%-650px)]',
            isRtl && 'lg:ml-auto',
          )}
        >
          <div className="space-y-4 lg:space-y-5">
            <p className="font-jakarta text-[17px] font-medium tracking-[0.01em] text-secondary-light sm:text-[18px]">
              {t('portfolios.hero.eyebrow')}
            </p>

            <h1 className="max-w-[700px] font-jakarta text-[clamp(2.45rem,4.2vw,4rem)] font-bold leading-[1.28] tracking-[-0.04em] text-white">
              <span className="block">{t('portfolios.hero.lineOne')}</span>
              <span className="mt-2 block lg:mt-4">{t('portfolios.hero.lineTwo')}</span>
            </h1>
          </div>

          <p className="max-w-[720px] font-jakarta text-[17px] leading-[1.72] text-white/90 sm:text-[18px]">
            {t('portfolios.hero.descriptionLineOne')}
            <br className="hidden lg:block" /> {t('portfolios.hero.descriptionLineTwo')}
          </p>

          <div className="pt-1 lg:pt-2">
            <Link
              to="/properties"
              className="inline-flex min-h-[52px] min-w-[206px] items-center justify-center rounded-[10px] bg-secondary-light px-7 font-jakarta text-[18px] font-bold text-white transition-colors duration-200 hover:bg-secondary"
            >
              {t('common.buttons.exploreProperties')}
            </Link>
          </div>
        </div>

        <div
          className={cn(
            'pt-8 lg:absolute lg:bottom-0 lg:w-[min(46vw,640px)] lg:pt-0',
            isRtl ? 'lg:left-[calc((100vw-100%)/-2)]' : 'lg:right-[calc((100vw-100%)/-2)]',
          )}
        >
          <div className="mx-auto w-full max-w-[760px] overflow-hidden rounded-[18px] sm:rounded-[20px] lg:mx-0 lg:h-[457px] lg:max-w-[640px] lg:rounded-b-none lg:rounded-tl-[12px] lg:rounded-tr-[12px]">
            <img
              src={ourPortfolioHeader}
              alt={t('portfolios.hero.imageAlt')}
              className="h-[300px] w-full object-cover object-center sm:h-[360px] lg:h-full"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
