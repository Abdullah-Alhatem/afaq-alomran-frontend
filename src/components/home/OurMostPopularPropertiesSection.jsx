import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import PropertyCard from '@/components/cards/PropertyCard'
import { useHomePopularPropertiesQuery } from '@/lib/fake-api/hooks'
import { cn } from '@/lib/utils'
import HomeSectionIntro from './HomeSectionIntro'
import {
  getHomePropertyFilterButtonClasses,
  HOME_SECTION_PADDING_CLASSNAME,
} from './homeSectionStyles'

function getCardsPerView(width) {
  if (width >= 1280) {
    return 4
  }

  if (width >= 1024) {
    return 3
  }

  if (width >= 640) {
    return 2
  }

  return 1
}

function createSlides(properties, cardsPerView) {
  const slides = []

  for (let index = 0; index < properties.length; index += cardsPerView) {
    slides.push(properties.slice(index, index + cardsPerView))
  }

  return slides
}

function OurMostPopularPropertiesSection() {
  const { i18n, t } = useTranslation()
  const [filter, setFilter] = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(() =>
    typeof window === 'undefined' ? 1 : getCardsPerView(window.innerWidth),
  )
  const touchStartXRef = useRef(null)
  const { data: popularProperties = [] } = useHomePopularPropertiesQuery()
  const isRtl = i18n.dir() === 'rtl'
  const previousButtonLabel = isRtl ? 'العقارات السابقة' : 'Previous properties'
  const nextButtonLabel = isRtl ? 'العقارات التالية' : 'Next properties'

  useEffect(() => {
    function handleResize() {
      setCardsPerView(getCardsPerView(window.innerWidth))
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const filteredProperties = popularProperties
  const slides = createSlides(filteredProperties, cardsPerView)
  const maxSlideIndex = Math.max(slides.length - 1, 0)
  const activeSlideIndex = Math.min(currentSlide, maxSlideIndex)
  const hasSliderPagination = slides.length > 1

  function goToPreviousSlide() {
    setCurrentSlide((currentValue) => Math.max(Math.min(currentValue, maxSlideIndex) - 1, 0))
  }

  function goToNextSlide() {
    setCurrentSlide((currentValue) =>
      Math.min(Math.min(currentValue, maxSlideIndex) + 1, maxSlideIndex),
    )
  }

  function handleTouchStart(event) {
    touchStartXRef.current = event.changedTouches[0]?.clientX ?? null
  }

  function handleTouchEnd(event) {
    const touchEndX = event.changedTouches[0]?.clientX ?? null

    if (touchStartXRef.current === null || touchEndX === null) {
      return
    }

    const deltaX = touchStartXRef.current - touchEndX
    touchStartXRef.current = null

    if (Math.abs(deltaX) < 50) {
      return
    }

    if (deltaX > 0) {
      goToNextSlide()
      return
    }

    goToPreviousSlide()
  }

  return (
    <section className={HOME_SECTION_PADDING_CLASSNAME} dir={i18n.dir()}>
      <div className="home-shell flex flex-col items-center gap-4">
        <div className="mx-auto flex w-full flex-col items-start gap-8 2xl:flex-row 2xl:items-center 2xl:justify-between 2xl:gap-32">
          <HomeSectionIntro
            eyebrow={t('home.popularProperties.badge')}
            title={t('home.popularProperties.title')}
            description={t('home.popularProperties.description')}
            className="w-full md:w-auto"
          />

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              className={getHomePropertyFilterButtonClasses(filter === 'all')}
              onClick={() => setFilter('all')}
            >
              {t('common.filters.all')}
            </button>
            <button
              className={getHomePropertyFilterButtonClasses(filter === 'sell')}
              onClick={() => setFilter('sell')}
            >
              {t('common.filters.forSell')}
            </button>
            <button
              className={getHomePropertyFilterButtonClasses(filter === 'buy')}
              onClick={() => setFilter('buy')}
            >
              {t('common.filters.toBuy')}
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-8 md:gap-12">
          <div
            className="w-full overflow-hidden"
            style={{ direction: 'ltr' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${activeSlideIndex * -100}%)`,
              }}
            >
              {slides.map((slideItems, slideIndex) => (
                <div key={`popular-slide-${slideIndex}`} className="w-full shrink-0">
                  <div
                    className="grid gap-6 md:gap-8"
                    dir={i18n.dir()}
                    style={{
                      gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))`,
                    }}
                  >
                    {slideItems.map((property) => (
                      <div key={`popular-${property.id}`} className="min-w-0">
                        <PropertyCard
                          id={property.id}
                          image={property.image}
                          title={property.title}
                          location={property.location}
                          beds={property.beds}
                          baths={property.baths}
                          sqft={property.sqft}
                          price={property.price}
                          status={property.status}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {hasSliderPagination ? (
            <div className="flex w-full items-center justify-center gap-5">
              <button
                type="button"
                onClick={goToPreviousSlide}
                disabled={activeSlideIndex === 0}
                aria-label={previousButtonLabel}
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full border transition-colors',
                  activeSlideIndex === 0
                    ? 'cursor-not-allowed border-grey-dividers text-grey-dividers'
                    : 'border-grey-icons text-grey-icons hover:border-secondary-light hover:text-secondary-light',
                )}
              >
                {isRtl ? <ArrowRight className="h-5 w-5" /> : <ArrowLeft className="h-5 w-5" />}
              </button>

              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={`popular-dot-${index}`}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`${isRtl ? 'الانتقال إلى الشريحة' : 'Go to slide'} ${index + 1}`}
                    className={cn(
                      'h-3 rounded-full transition-all duration-200',
                      activeSlideIndex === index
                        ? 'w-4 bg-secondary-light'
                        : 'w-3 bg-grey-dividers',
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goToNextSlide}
                disabled={activeSlideIndex === maxSlideIndex}
                aria-label={nextButtonLabel}
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full border transition-colors',
                  activeSlideIndex === maxSlideIndex
                    ? 'cursor-not-allowed border-grey-dividers text-grey-dividers'
                    : 'border-secondary-light text-secondary-light hover:bg-secondary-light hover:text-white',
                )}
              >
                {isRtl ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default OurMostPopularPropertiesSection
