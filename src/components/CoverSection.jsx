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
      <div className="home-shell flex min-h-[180px] flex-col justify-center gap-3 py-10 md:min-h-[248px] md:gap-4 md:py-14">
        <h1
          className="text-white text-[28px] font-bold leading-[36px] md:text-[40px] md:leading-[56px]"
          data-page-reveal-item
        >
          {title}
        </h1>

        <p
          className="flex flex-wrap items-center gap-1 font-jakarta text-[14px] leading-[20px] text-white md:text-[16px]"
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
