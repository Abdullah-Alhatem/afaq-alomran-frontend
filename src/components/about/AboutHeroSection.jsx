import arrowInHero from '@/assets/icons/arrow in hero.svg'
import smartProjectExecutionIcon from '@/assets/icons/smartProjectExecutionIcon.svg'
import transparentSalesProcessIcon from '@/assets/icons/transparentSalesProcessIcon.svg'
import aboutUs1 from '@/assets/AboutUsHero/aboutus1.png'
import aboutUs2 from '@/assets/AboutUsHero/aboutus2.png'
import aboutUs3 from '@/assets/AboutUsHero/aboutus3.png'
import { useTranslation } from 'react-i18next'

import React from 'react'

const featureCardIcons = [smartProjectExecutionIcon, transparentSalesProcessIcon]

const imageFrameClass =
  "relative rounded-[32px] before:pointer-events-none before:absolute before:inset-[-14px] before:-z-10 before:rounded-[42px] before:bg-black/60 before:blur-[24px] before:content-[''] shadow-xl sm:rounded-[38px] sm:before:inset-[-16px] sm:before:rounded-[48px] sm:before:blur-[28px] xl:rounded-[56px] xl:before:inset-[-18px] xl:before:rounded-[56px] xl:before:blur-[30px]"

const imageInnerClass = 'overflow-hidden rounded-[24px] sm:rounded-[28px] xl:rounded-[40px]'

function AboutHeroSection() {
  const { t } = useTranslation()
  const featureCards = t('aboutPage.hero.featureCards', { returnObjects: true }).map(
    (card, index) => ({
      ...card,
      icon: featureCardIcons[index],
    }),
  )

  return (
    <section className="bg-[#EEF4FA] py-12 sm:py-14 md:py-16 xl:py-[6.2rem]">
      <div className="site-shell grid gap-12 xl:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] xl:items-start xl:gap-16">
        <div className="max-w-[790px] xl:pt-1">
          <div data-page-reveal-item>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-[#D76838] sm:mb-6 sm:text-base md:text-[1.05rem]">
              {t('aboutPage.hero.eyebrow')}
            </p>

            <h1 className="max-w-[768px] text-[clamp(2.35rem,6vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#123E56] sm:leading-[1.12] xl:leading-[1.18]">
              <span className="block">{t('aboutPage.hero.lineOne')}</span>
              <span className="relative mt-3 inline-block sm:mt-4">
                {t('aboutPage.hero.lineTwoPrefix')}{' '}
                <span className="relative inline-block">
                  {t('aboutPage.hero.lineTwoHighlight')}
                  <img
                    src={arrowInHero}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-full hidden w-[190px] -translate-x-1/2 sm:block lg:left-[58%] lg:w-[228px]"
                  />
                </span>
              </span>
            </h1>

            <p className="mt-5 max-w-[680px] text-base leading-8 text-[#5C5C5C] sm:text-lg sm:leading-9 lg:mt-7 lg:text-[1.35rem] lg:leading-[2.1]">
              {t('aboutPage.hero.description')}
            </p>
          </div>

          <div className="mt-8 max-w-[720px] space-y-5 sm:mt-10 sm:space-y-6 lg:mt-11 lg:space-y-7">
            {featureCards.map((card) => (
              <article
                key={card.title}
                data-page-reveal-item
                className="flex flex-col gap-4 rounded-[24px] bg-white p-5 shadow-[0_22px_65px_rgba(18,62,86,0.10)] sm:flex-row sm:items-start sm:gap-5 sm:p-6 lg:px-7 lg:py-6"
              >
                <img
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-16 w-16 shrink-0 sm:h-[74px] sm:w-[74px] md:h-[84px] md:w-[84px]"
                />

                <div className="max-w-[540px]">
                  <h2 className="text-[1.35rem] font-medium leading-tight text-[#123E56] sm:text-[1.55rem] md:text-[1.8rem]">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#5C5C5C] sm:text-base sm:leading-[1.75] md:text-[1.05rem]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,0.82fr)] lg:items-start lg:gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(305px,0.94fr)] xl:gap-8">
          <div className="lg:pt-10 xl:pt-[4.75rem]">
            <div className={imageFrameClass} data-page-reveal-item>
              <div className={imageInnerClass}>
                <img
                  src={aboutUs1}
                  alt={t('aboutPage.hero.images.primaryAlt')}
                  className="h-[360px] w-full object-cover object-center sm:h-[430px] md:h-[520px] lg:h-[620px] xl:h-[740px]"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:gap-6 xl:gap-9">
            <div className={imageFrameClass} data-page-reveal-item>
              <div className={imageInnerClass}>
                <img
                  src={aboutUs2}
                  alt={t('aboutPage.hero.images.secondaryAlt')}
                  className="h-[240px] w-full object-cover object-[center_35%] sm:h-[260px] md:h-[300px] xl:h-[420px]"
                />
              </div>
            </div>

            <div className={imageFrameClass} data-page-reveal-item>
              <div className={imageInnerClass}>
                <img
                  src={aboutUs3}
                  alt={t('aboutPage.hero.images.tertiaryAlt')}
                  className="h-[220px] w-full object-cover object-center sm:h-[240px] md:h-[280px] xl:h-[260px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHeroSection
