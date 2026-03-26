import React from 'react'
import { useTranslation } from 'react-i18next'
import bgImage from '@/assets/images/bg-image.jpg'

function CoverSection({ title, currentPage, parentPage }) {
  const { t } = useTranslation()

  return (
    <div
      data-page-reveal-section
      className="w-full bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(6, 48, 83, 0.7), rgba(6, 48, 83, 0.7)), url(${bgImage})`,
        backgroundPosition: '25% 70%',
      }}
    >
      <div className="home-shell flex min-h-[142px] flex-col justify-center gap-2 py-6 md:min-h-[176px] md:gap-2 md:py-8">
        <h1
          className="text-white text-[24px] font-bold leading-[31px] md:text-[32px] md:leading-[42px]"
          data-page-reveal-item
        >
          {title}
        </h1>

        <p
          className="flex flex-wrap items-center gap-1 font-jakarta text-[12px] leading-[17px] text-white md:text-[13px]"
          data-page-reveal-item
        >
          <span>
            {parentPage ?? t('common.home')} {t('cover.breadcrumbSeparator')}
          </span>
          <span className="text-secondary-light">{currentPage}</span>
        </p>
      </div>
    </div>
  )
}

export default CoverSection
