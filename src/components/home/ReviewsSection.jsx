import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import quoteIcon from "@/assets/Review Section/''Icon.svg"
import buttonLeftIcon from '@/assets/Review Section copy/ButtonLeft.svg'
import buttonRightIcon from '@/assets/Review Section copy/ButtonRigth.svg'
import emptyStarIcon from '@/assets/Review Section copy/emptyStar.svg'
import goldenStarIcon from '@/assets/Review Section copy/goldenStar.svg'
import patternIcon from '@/assets/Review Section copy/Pattern.svg'
import { useHomeReviewsQuery } from '@/lib/fake-api/hooks'

function ReviewsSection() {
  const { t, i18n } = useTranslation()
  const { data: reviews = [] } = useHomeReviewsQuery()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeReview = reviews[activeIndex]
  const isRtl = i18n.dir() === 'rtl'

  if (!activeReview) {
    return null
  }

  const handlePrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? reviews.length - 1 : currentIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex((currentIndex) => (currentIndex === reviews.length - 1 ? 0 : currentIndex + 1))
  }

  return (
    <section className="relative overflow-hidden bg-primary-light py-5 md:py-20 lg:py-28">
      <img
        src={patternIcon}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-[-120px] hidden w-[280px] opacity-90 sm:block lg:w-[360px]"
      />
      <img
        src={patternIcon}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-[-84px] w-[220px] rotate-180 opacity-90 sm:w-[280px] lg:w-[360px]"
      />
      <img
        src={patternIcon}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 w-[180px] -rotate-90 opacity-80 sm:hidden"
      />

      <div className="home-shell relative grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
        <div className="max-w-[640px] text-white" data-page-reveal-lock>
          <div data-page-reveal-item>
            <p className="text-[16px] font-medium uppercase tracking-[0.08em] text-secondary-light md:text-[18px]">
              {t('home.reviews.eyebrow')}
            </p>

            <h2 className="mt-4 text-[38px] font-bold leading-[1.08] sm:text-[48px] lg:text-[64px]">
              {t('home.reviews.title')}
              <span className="text-secondary-light">!</span>
            </h2>

            <p className="mt-5 max-w-[620px] text-[18px] leading-[1.55] text-white/90 md:text-[22px]">
              {t('home.reviews.description')}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-5 md:mt-12" data-page-reveal-item>
            <button
              type="button"
              onClick={handlePrevious}
              aria-label={t('home.reviews.previous')}
              className="rounded-full transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-light"
            >
              <img src={buttonLeftIcon} alt="" aria-hidden="true" className="h-12 w-12" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label={t('home.reviews.next')}
              className="rounded-full transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-light"
            >
              <img src={buttonRightIcon} alt="" aria-hidden="true" className="h-12 w-12" />
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[760px]" data-page-reveal-item>
          <div className="relative overflow-hidden rounded-[28px] bg-white px-6 py-7 shadow-[0_24px_60px_rgba(7,46,69,0.24)] sm:px-8 sm:py-9 md:px-10 md:py-10 lg:min-h-[446px] lg:px-12 lg:py-12">
            <div className="flex flex-col gap-6 lg:gap-8">
              <img
                src={quoteIcon}
                alt=""
                aria-hidden="true"
                className="h-10 w-fit md:h-12 lg:h-[40px]"
              />

              <p className="max-w-[520px] text-[24px] font-medium leading-[1.45] text-grey-text-primary md:text-[28px] lg:text-[31px]">
                {activeReview.review}
              </p>

              <div className="h-px w-full bg-[#D8D8D8]" />

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={activeReview.image}
                    alt={activeReview.name}
                    loading="lazy"
                    className="h-[58px] w-[58px] rounded-full object-cover"
                  />

                  <p className="text-[22px] font-semibold leading-none text-grey-text-secondary md:text-[28px]">
                    {activeReview.name}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, index) => {
                    const isFilled = index < activeReview.rating

                    return (
                      <img
                        key={`${activeReview.id}-${index}`}
                        src={isFilled ? goldenStarIcon : emptyStarIcon}
                        alt=""
                        aria-hidden="true"
                        className="h-5 w-5 md:h-6 md:w-6"
                      />
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-center gap-3 lg:hidden">
              {reviews.map((review, index) => {
                const isActive = index === activeIndex

                return (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={t('home.reviews.showReview', { index: index + 1 })}
                    aria-pressed={isActive}
                    className={`h-2.5 rounded-full transition-all duration-200 ${
                      isActive ? 'w-10 bg-secondary-light' : 'w-2.5 bg-[#D0D0D0]'
                    }`}
                  />
                )
              })}
            </div>

            <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
              {reviews.map((review, index) => {
                const isActive = index === activeIndex

                return (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={t('home.reviews.showReview', { index: index + 1 })}
                    aria-pressed={isActive}
                    className={`w-1 rounded-full transition-all duration-200 ${
                      isActive ? 'h-12 bg-secondary-light' : 'h-10 bg-[#D0D0D0]'
                    }`}
                  />
                )
              })}
            </div>
          </div>

          <div className="absolute bottom-10 right-[-12px] hidden h-8 w-8 rotate-45 rounded-[6px] bg-white shadow-[18px_18px_38px_rgba(7,46,69,0.12)] lg:block" />
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
