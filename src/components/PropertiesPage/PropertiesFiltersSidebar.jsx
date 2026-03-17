import React from 'react'
import { ChevronDown, Search, Star } from 'lucide-react'

import CheckItem from './CheckItem'
import RadioItem from './RadioItem'
import SectionDivider from './SectionDivider'
import SectionTitle from './SectionTitle'

function PropertiesFiltersSidebar({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  onClearFilters,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  selectedPropertyTypes,
  onTogglePropertyType,
  selectedAmenities,
  onToggleAmenity,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedSpace,
  setSelectedSpace,
  selectedBedBath,
  setSelectedBedBath,
  selectedCategory,
  setSelectedCategory,
  selectedRating,
  setSelectedRating,
}) {
  return (
    <aside className="w-full lg:w-[343px] rounded-2xl bg-muted border-r border-[#FFF8F1] px-6 py-[72px] flex flex-col gap-8">
      <h2 className="text-[32px] leading-10 font-[700] text-primary-mid">Advanced Search</h2>

      <div className="w-full flex flex-col gap-6">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-primary-mid" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="h-16 w-full rounded-lg border-2 border-grey-stroke bg-white pl-12 pr-4 text-[16px] font-[500] text-grey-text-primary placeholder:text-grey-text-primary/50 outline-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <div className="relative w-full sm:w-[260px]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-[42px] w-full rounded-lg border border-grey-stroke bg-white px-4 pr-10 text-[16px] font-[500] text-grey-text-primary/70 outline-none appearance-none"
            >
              <option value="default">Sort By</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Rating: High to Low</option>
              <option value="size-desc">Size: Large to Small</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9EA3AE]" />
          </div>

          <button
            type="button"
            onClick={onClearFilters}
            className="h-[42px] w-full sm:w-[160px] rounded-lg border-2 border-primary-mid px-2 text-[16px] font-[500] text-primary-mid transition-colors hover:bg-primary-mid hover:text-white active:scale-[0.99]"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-[16px] leading-6 font-[500] text-grey-text-primary">Price</div>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            placeholder="Min"
            className="h-[42px] w-full rounded-lg border border-grey-stroke bg-white px-4 text-[16px] font-[500] text-grey-text-primary placeholder:text-grey-text-primary/50 outline-none"
          />
          <input
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            placeholder="Max"
            className="h-[42px] w-full rounded-lg border border-grey-stroke bg-white px-4 text-[16px] font-[500] text-grey-text-primary placeholder:text-grey-text-primary/50 outline-none"
          />
          <button
            type="button"
            className="h-[42px] w-full sm:w-[110px] rounded-lg border-2 border-primary-mid px-6 text-[16px] font-[500] text-primary-mid transition-colors hover:bg-primary-mid hover:text-white active:scale-[0.99]"
          >
            Go
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <SectionTitle>Property Type</SectionTitle>
          <SectionDivider />
          <div className="flex flex-col gap-4">
            <CheckItem
              checked={selectedPropertyTypes.has('house')}
              label="House"
              rightText="2,124"
              onToggle={() => onTogglePropertyType('house')}
            />
            <CheckItem
              checked={selectedPropertyTypes.has('apartment')}
              label="Apartment"
              rightText="1,765"
              onToggle={() => onTogglePropertyType('apartment')}
            />
            <CheckItem
              checked={selectedPropertyTypes.has('single-family')}
              label="Single Family"
              rightText="231"
              onToggle={() => onTogglePropertyType('single-family')}
            />
            <CheckItem
              checked={selectedPropertyTypes.has('studio')}
              label="Studio"
              rightText="21"
              onToggle={() => onTogglePropertyType('studio')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle>Amenities</SectionTitle>
          <SectionDivider />
          <div className="flex flex-col gap-4">
            <CheckItem
              checked={selectedAmenities.has('dishwasher')}
              label="Dishwasher"
              rightText="2,124"
              onToggle={() => onToggleAmenity('dishwasher')}
            />
            <CheckItem
              checked={selectedAmenities.has('floor-coverings')}
              label="Floor Coverings"
              rightText="1,765"
              onToggle={() => onToggleAmenity('floor-coverings')}
            />
            <CheckItem
              checked={selectedAmenities.has('internet')}
              label="Internet"
              rightText="231"
              onToggle={() => onToggleAmenity('internet')}
            />
            <CheckItem
              checked={selectedAmenities.has('supermarket')}
              label="Supermarket"
              rightText="231"
              onToggle={() => onToggleAmenity('supermarket')}
            />
            <CheckItem
              checked={selectedAmenities.has('built-wardrobes')}
              label="Built Wardrobes"
              rightText="21"
              onToggle={() => onToggleAmenity('built-wardrobes')}
            />
            <CheckItem
              checked={selectedAmenities.has('kids-zone')}
              label="Kids Zone"
              rightText="21"
              onToggle={() => onToggleAmenity('kids-zone')}
            />

            <button
              type="button"
              className="w-fit text-[14px] leading-5 font-[600] text-grey-text-tertiary hover:text-primary-mid"
            >
              Hide Zone
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle>Price Range</SectionTitle>
          <SectionDivider />
          <div className="flex flex-col gap-4">
            <RadioItem
              checked={selectedPriceRange === 'low'}
              label="Low Budget"
              rightText="$5,000 - $10,000"
              onSelect={() => setSelectedPriceRange('low')}
            />
            <RadioItem
              checked={selectedPriceRange === 'medium'}
              label="Medium"
              rightText="$10,000 - $50,000"
              onSelect={() => setSelectedPriceRange('medium')}
            />
            <RadioItem
              checked={selectedPriceRange === 'high'}
              label="High Budget"
              rightText="$50,000 Up"
              onSelect={() => setSelectedPriceRange('high')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle>Choose Your Space</SectionTitle>
          <SectionDivider />
          <div className="flex flex-col gap-4">
            <RadioItem
              checked={selectedSpace === 'smart'}
              label="Smart Living"
              rightText="80-120 m2"
              onSelect={() => setSelectedSpace('smart')}
            />
            <RadioItem
              checked={selectedSpace === 'comfort'}
              label="Comfort Living"
              rightText="120-200 m2"
              onSelect={() => setSelectedSpace('comfort')}
            />
            <RadioItem
              checked={selectedSpace === 'premium'}
              label="Premium Living"
              rightText="200 m2+"
              onSelect={() => setSelectedSpace('premium')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle>Bed / Bath</SectionTitle>
          <SectionDivider />
          <div className="flex flex-col gap-4">
            <RadioItem
              checked={selectedBedBath === 'single'}
              label="Single"
              rightText="2,124"
              onSelect={() => setSelectedBedBath('single')}
            />
            <RadioItem
              checked={selectedBedBath === 'double'}
              label="Double"
              rightText="1,765"
              onSelect={() => setSelectedBedBath('double')}
            />
            <RadioItem
              checked={selectedBedBath === 'up-to-3'}
              label="Up to 3"
              rightText="231"
              onSelect={() => setSelectedBedBath('up-to-3')}
            />
            <RadioItem
              checked={selectedBedBath === 'up-to-5'}
              label="Up to 5"
              rightText="21"
              onSelect={() => setSelectedBedBath('up-to-5')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle>Category</SectionTitle>
          <SectionDivider />
          <div className="flex flex-col gap-4">
            <RadioItem
              checked={selectedCategory === 'buying'}
              label="Buying"
              rightText="2,124"
              onSelect={() => setSelectedCategory('buying')}
            />
            <RadioItem
              checked={selectedCategory === 'renting'}
              label="Renting"
              rightText="1,765"
              onSelect={() => setSelectedCategory('renting')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle>Reviews</SectionTitle>
          <SectionDivider />
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setSelectedRating(value)}
                className="p-0.5"
                aria-label={`Filter by ${value} star rating`}
              >
                <Star
                  className="h-5 w-5"
                  strokeWidth={1.6}
                  fill={value <= selectedRating ? '#FFC107' : 'transparent'}
                  color={value <= selectedRating ? '#FFC107' : '#7C7B7B'}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default PropertiesFiltersSidebar
