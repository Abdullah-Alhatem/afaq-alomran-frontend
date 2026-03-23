import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { usePortfoliosQuery } from '@/lib/fake-api/hooks'
import PortfolioGrid from '@/components/Portfolios/PortfolioGrid'
import PortfolioSectionHeading from '@/components/Portfolios/PortfolioSectionHeading'

const INITIAL_VISIBLE_ITEMS = 12
const ITEMS_PER_BATCH = 3

function PortfolioGallerySection() {
  const { t } = useTranslation()
  const [visibleItemsCount, setVisibleItemsCount] = useState(INITIAL_VISIBLE_ITEMS)
  const { data: allPortfolioItems = [] } = usePortfoliosQuery()

  const visibleItems = allPortfolioItems.slice(0, visibleItemsCount)
  const hasMoreItems = visibleItemsCount < allPortfolioItems.length

  const handleLoadMore = () => {
    setVisibleItemsCount((currentCount) =>
      Math.min(currentCount + ITEMS_PER_BATCH, allPortfolioItems.length),
    )
  }

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="home-shell">
        <PortfolioSectionHeading />

        <PortfolioGrid items={visibleItems} />

        {hasMoreItems ? (
          <div className="mt-8 flex justify-center md:mt-10">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex h-[52px] min-w-[118px] items-center justify-center rounded-[10px] border border-secondary-light px-7 text-base font-medium text-secondary-light transition-colors duration-200 hover:bg-secondary-light hover:text-white"
            >
              {t('common.buttons.loadMore')}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default PortfolioGallerySection
