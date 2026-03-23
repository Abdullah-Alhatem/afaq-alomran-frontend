import { useTranslation } from 'react-i18next'

function PortfolioDetailsContent({ portfolio }) {
  const { t } = useTranslation()
  const openingParagraphs = t('portfolios.details.openingParagraphs', { returnObjects: true })
  const closingParagraphs = t('portfolios.details.closingParagraphs', { returnObjects: true })

  return (
    <section className="bg-[#F8F8F8] py-8 sm:py-10 md:py-14 lg:py-16">
      <div className="home-shell">
        <article className="mx-auto max-w-[920px]">
          <div className="overflow-hidden rounded-[8px]">
            <img
              src={portfolio.mainImage}
              alt={portfolio.alt ?? t('portfolios.details.mainImageAlt')}
              className="h-[260px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[530px]"
            />
          </div>

          <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-[#5C5C5C] sm:mt-10 sm:text-[16px] md:space-y-7 md:text-[17px]">
            {openingParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {portfolio.gallery.map((item) => (
              <div key={item.image} className="overflow-hidden rounded-[8px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-[200px] w-full object-cover sm:h-[180px] md:h-[220px]"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-[#5C5C5C] sm:mt-10 sm:text-[16px] md:space-y-7 md:text-[17px]">
            {closingParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default PortfolioDetailsContent
