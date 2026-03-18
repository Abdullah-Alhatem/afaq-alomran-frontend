import { Link } from 'react-router-dom'

import PortfolioGrid from '@/components/Portfolios/PortfolioGrid'
import PortfolioSectionHeading from '@/components/Portfolios/PortfolioSectionHeading'
import { homePortfolioItems } from '@/components/Portfolios/portfolioItems'

function PortfoliosSection() {
  return (
    <section className="py-5 md:py-20 lg:py-24">
      <div className="home-shell">
        <PortfolioSectionHeading />

        <PortfolioGrid items={homePortfolioItems} />

        <div className="mt-8 flex justify-center md:mt-10">
          <Link
            to="/portfolios"
            className="inline-flex h-[52px] min-w-[138px] items-center justify-center gap-3 rounded-[10px] border border-secondary-light px-7 text-base font-semibold text-secondary-light transition-colors duration-200 hover:bg-secondary-light hover:text-white"
          >
            See All
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none">
              <path
                d="M5 12h14m-5-5 5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfoliosSection
