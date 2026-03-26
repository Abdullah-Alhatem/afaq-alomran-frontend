import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import PropertyCard from '../cards/PropertyCard'
import HomeSectionIntro from './HomeSectionIntro'
import {
  getHomePropertyFilterButtonClasses,
  HOME_SECTION_PADDING_CLASSNAME,
} from './homeSectionStyles'

function PropertySection({
  badgeText,
  title,
  description,
  properties = [],
  cardKeyPrefix = '',
  footer,
}) {
  const { i18n, t } = useTranslation()
  const [filter, setFilter] = useState('all')

  return (
    <section className={HOME_SECTION_PADDING_CLASSNAME} dir={i18n.dir()}>
      <div className="home-shell flex flex-col items-center gap-4">
        <div className="w-full mx-auto flex flex-col items-start 2xl:flex-row 2xl:justify-between 2xl:items-center gap-8 2xl:gap-32">
          <HomeSectionIntro
            eyebrow={badgeText}
            title={title}
            description={description}
            className="w-full md:w-auto"
          />

          <div className="flex flex-wrap items-center gap-4 sm:gap-6" data-page-reveal-item>
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

        <div className="flex flex-col items-center gap-12 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full">
            {properties.map((property) => (
              <PropertyCard
                key={`${cardKeyPrefix}${property.id}`}
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
            ))}
          </div>

          {footer ? <div data-page-reveal-item>{footer}</div> : null}
        </div>
      </div>
    </section>
  )
}

export default PropertySection
