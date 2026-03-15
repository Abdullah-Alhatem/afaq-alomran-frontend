import homePageImage from '@/assets/images/homePage.png'
import orangeLine from '@/assets/icons/arrow in hero.svg'
import { Link } from 'react-router-dom'

const stats = [
  { value: '1500', label: 'Premium Products' },
  { value: '324k', label: 'Happy Customers' },
  { value: '1200', label: 'Award Winning' },
]

function HeroSection() {
  return (
    <section className="overflow-hidden bg-primary-mid">
      <div className="home-shell relative pt-5 text-white lg:min-h-[720px] lg:pt-20">
        <div className="max-w-[768px] space-y-6 lg:max-w-[calc(100%-520px)] lg:space-y-10 xl:max-w-[calc(100%-620px)] 2xl:max-w-[786px]">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[58px] lg:leading-[170%]">
              Find The Perfect Place to Live With your{' '}
              <span className="text-secondary-light relative">
                Family
                <img
                  src={orangeLine}
                  alt=""
                  aria-hidden="true"
                  className="object-contain absolute bottom-0 -left-2 min-w-[125%]"
                />
              </span>
            </h1>
          </div>

          <p className="text-base text-white/90 sm:text-[18px] leading-7">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veni.
          </p>

          <div className="flex flex-wrap items-center gap-4 py-6">
            <Link
              to="/properties"
              className={
                'h-12 px-5 rounded-lg bg-secondary-light text-white font-bold text-body inline-flex items-center justify-center hover:bg-secondary-lighter transition-all duration-200'
              }
            >
              Explore Properties
            </Link>
            <Link
              className={
                'h-12 px-6 rounded-lg border-2 border-white text-white font-bold text-body inline-flex items-center justify-center hover:bg-white hover:text-primary-mid transition-all duration-200'
              }
            >
              Learn More
            </Link>
          </div>

          <div className="grid max-w-[560px] grid-cols-1 gap-6 lg:pt-4 sm:grid-cols-3 sm:gap-5">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-3xl sm:text-[40px] font-bold leading-none">
                  {item.value}
                  <span className="text-secondary-light">+</span>
                </p>
                <p className="mt-2 text-lg font-medium leading-8">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 lg:pl-16 lg:absolute lg:bottom-0 lg:right-[calc((100vw-100%)/-2)] lg:w-[min(52vw,892px)] lg:pt-0">
          <div className="mx-auto w-full lg:mt-auto lg:min-w-[500px] lg:max-w-[892px] lg:mx-0 lg:flex-1">
            <img
              src={homePageImage}
              alt="Modern family house exterior"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
