import { Link } from 'react-router-dom'
import ourPortfolio1 from '@/assets/images/ourPortfolio1.png'
import ourPortfolio2 from '@/assets/images/ourPortfolio2.png'
import ourPortfolio3 from '@/assets/images/ourPortfolio3.png'
import ourPortfolio4 from '@/assets/images/ourPortfolio4.png'
import ourPortfolio5 from '@/assets/images/ourPortfolio5.png'
import ourPortfolio6 from '@/assets/images/ourPortfolio6.png'

const portfolioItems = [
  { image: ourPortfolio1, alt: 'Front view of a modern residential house' },
  { image: ourPortfolio2, alt: 'Minimal white facade residential project' },
  { image: ourPortfolio3, alt: 'Contemporary house with wood and metal facade' },
  { image: ourPortfolio4, alt: 'Bedroom interior with modern architecture details' },
  { image: ourPortfolio5, alt: 'Luxury kitchen interior with warm wood finishes' },
  { image: ourPortfolio6, alt: 'Evening exterior shot of a modern villa' },
]

function PortfoliosSection() {
  return (
    <section className="py-5 md:py-20 lg:py-24">
      <div className="home-shell">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.08em] text-secondary-light md:text-[18px]">
            WE HELP FOR YOU
          </p>
          <h2 className="mt-3 text-[34px] font-bold leading-[1.2] text-[#18181B] md:text-[40px]">
            Our Portfolio
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {portfolioItems.map((item) => (
            <Link
              to={`/portfolios/${item.id ?? item.image}`}
              key={item.image}
              className="overflow-hidden rounded-[12px]"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-[220px] w-full object-cover sm:h-[260px] md:h-[300px] lg:h-[340px]"
              />
            </Link>
          ))}
        </div>

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
