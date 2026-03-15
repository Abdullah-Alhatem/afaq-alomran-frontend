import { useState } from 'react'
import quoteIcon from "@/assets/Review Section/''Icon.svg"
import buttonLeftIcon from '@/assets/Review Section copy/ButtonLeft.svg'
import buttonRightIcon from '@/assets/Review Section copy/ButtonRigth.svg'
import emptyStarIcon from '@/assets/Review Section copy/emptyStar.svg'
import goldenStarIcon from '@/assets/Review Section copy/goldenStar.svg'
import patternIcon from '@/assets/Review Section copy/Pattern.svg'
import agent1 from '@/assets/images/agent1.png'
import agent2 from '@/assets/images/agent2.png'
import agent3 from '@/assets/images/agent3.png'
import agent4 from '@/assets/images/agent4.png'

const reviews = [
  {
    id: 1,
    name: 'Barbara D. Smith',
    image: agent1,
    rating: 4,
    review:
      "AFAAQ made buying our first home an absolute breeze. Their team was incredibly attentive and guided us through every step. We couldn't be happier with our new home.",
  },
  {
    id: 2,
    name: 'Omar A. Kareem',
    image: agent2,
    rating: 5,
    review:
      'From the first call to the final paperwork, everything felt organized and transparent. AFAAQ helped us find a property that matched both our taste and our budget.',
  },
  {
    id: 3,
    name: 'Layla M. Hassan',
    image: agent3,
    rating: 5,
    review:
      'We were looking for a modern family home and the AFAAQ team delivered exactly that. Fast communication, honest advice, and a process that felt genuinely stress free.',
  },
  {
    id: 4,
    name: 'James R. Carter',
    image: agent4,
    rating: 4,
    review:
      'What stood out most was the care. They listened closely, narrowed the options quickly, and kept us informed all the way through closing. I would recommend them without hesitation.',
  },
]

function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeReview = reviews[activeIndex]

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
        <div className="max-w-[640px] text-white">
          <p className="text-[16px] font-medium uppercase tracking-[0.08em] text-secondary-light md:text-[18px]">
            OUR TESTIMONIALS
          </p>

          <h2 className="mt-4 text-[38px] font-bold leading-[1.08] sm:text-[48px] lg:text-[64px]">
            What People Are Saying
            <span className="text-secondary-light">!</span>
          </h2>

          <p className="mt-5 max-w-[620px] text-[18px] leading-[1.55] text-white/90 md:text-[22px]">
            Real feedback from clients who&apos;ve experienced the AFAAQ difference.
          </p>

          <div className="mt-8 flex items-center gap-5 md:mt-12">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Show previous review"
              className="rounded-full transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-light"
            >
              <img src={buttonLeftIcon} alt="" aria-hidden="true" className="h-12 w-12" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Show next review"
              className="rounded-full transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-light"
            >
              <img src={buttonRightIcon} alt="" aria-hidden="true" className="h-12 w-12" />
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[760px]">
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
                    aria-label={`Show review ${index + 1}`}
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
                    aria-label={`Show review ${index + 1}`}
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
