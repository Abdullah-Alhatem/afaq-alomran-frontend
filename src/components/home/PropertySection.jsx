import React, { useState } from 'react'
import PropertyCard from '../cards/PropertyCard'

function PropertySection({
  badgeText,
  title,
  description,
  properties = [],
  cardKeyPrefix = '',
  footer,
}) {
  const [filter, setFilter] = useState('all')

  const filterButtonBaseClasses =
    'px-6 py-3 rounded-full font-bold text-[16px] leading-6 transition-all duration-200 transform hover:scale-105 active:scale-95'

  const getFilterButtonClasses = (isActive) =>
    `${
      isActive
        ? 'bg-[#DE8556] text-white border-2 border-[#DE8556]'
        : 'bg-[#D9D9D9] text-[#8A8A8A] border-2 border-[#D7D7D7]'
    } ${filterButtonBaseClasses}`

  return (
    <section className="py-5 md:py-20 lg:py-24">
      <div className="home-shell flex flex-col items-center gap-4">
        <div className="w-full mx-auto flex flex-col items-start 2xl:flex-row 2xl:justify-between 2xl:items-center gap-8 2xl:gap-32">
          <div className="flex flex-col items-start gap-2 w-full md:w-auto">
            <div className="flex flex-col items-start gap-2">
              <span
                className="text-[#DE8556] font-[500] text-[18px] leading-6"
                style={{ fontFamily: 'Cairo' }}
              >
                {badgeText}
              </span>
              <h2
                className="text-[#181818] font-[700] text-[28px] md:text-[40px] leading-8 md:leading-10"
                style={{ fontFamily: 'Cairo' }}
              >
                {title}
              </h2>
            </div>
            <p
              className="text-[#5C5C5C] font-[500] text-[16px] md:text-[18px] leading-6 max-w-2xl"
              style={{ fontFamily: 'Cairo' }}
            >
              {description}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button
              className={getFilterButtonClasses(filter === 'all')}
              style={{ fontFamily: 'Cairo' }}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={getFilterButtonClasses(filter === 'sell')}
              style={{ fontFamily: 'Cairo' }}
              onClick={() => setFilter('sell')}
            >
              For Sell
            </button>
            <button
              className={getFilterButtonClasses(filter === 'buy')}
              style={{ fontFamily: 'Cairo' }}
              onClick={() => setFilter('buy')}
            >
              To Buy
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

          {footer}
        </div>
      </div>
    </section>
  )
}

export default PropertySection
