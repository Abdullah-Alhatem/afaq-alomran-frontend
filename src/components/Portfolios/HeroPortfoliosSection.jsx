import { Link } from 'react-router-dom'

import ourPortfolioHeader from '@/assets/images/ourPortfolioHeader.png'

export default function HeroPortfoliosSection() {
  return (
    <section className="overflow-hidden bg-primary-mid">
      <div className="home-shell relative py-8 text-white sm:py-10 lg:min-h-[457px] lg:py-0">
        <div className="max-w-[720px] space-y-6 lg:max-w-[calc(100%-560px)] lg:space-y-8 lg:py-[34px] xl:max-w-[calc(100%-650px)]">
          <div className="space-y-4 lg:space-y-5">
            <p className="font-jakarta text-[17px] font-medium tracking-[0.01em] text-secondary-light sm:text-[18px]">
              Our Portfolio
            </p>

            <h1 className="max-w-[700px] font-jakarta text-[clamp(2.45rem,4.2vw,4rem)] font-bold leading-[1.28] tracking-[-0.04em] text-white">
              <span className="block">Where Comfortable Living Meets</span>
              <span className="mt-2 block lg:mt-4">Smart Investment</span>
            </h1>
          </div>

          <p className="max-w-[720px] font-jakarta text-[17px] leading-[1.72] text-white/90 sm:text-[18px]">
            Discover modern apartments in prime locations, built with quality craftsmanship and
            designed for everyday comfort.
            <br className="hidden lg:block" /> Whether you&apos;re looking for a new home or a
            valuable investment, we offer options that last.
          </p>

          <div className="pt-1 lg:pt-2">
            <Link
              to="/properties"
              className="inline-flex min-h-[52px] min-w-[206px] items-center justify-center rounded-[10px] bg-secondary-light px-7 font-jakarta text-[18px] font-bold text-white transition-colors duration-200 hover:bg-secondary"
            >
              Explore Properties
            </Link>
          </div>
        </div>

        <div className="pt-8 lg:absolute lg:right-[calc((100vw-100%)/-2)] lg:bottom-0 lg:w-[min(46vw,640px)] lg:pt-0">
          <div className="mx-auto w-full max-w-[760px] overflow-hidden rounded-[18px] sm:rounded-[20px] lg:mx-0 lg:h-[457px] lg:max-w-[640px] lg:rounded-b-none lg:rounded-tl-[12px] lg:rounded-tr-[12px]">
            <img
              src={ourPortfolioHeader}
              alt="Modern portfolio house exterior with large glass windows"
              className="h-[300px] w-full object-cover object-center sm:h-[360px] lg:h-full"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
