import { ChevronDown, Search, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <aside className="flex w-full flex-col gap-5 rounded-2xl border-r border-[#FFF8F1] bg-muted px-4 py-5 lg:w-[300px] lg:py-10">
      <h2 className="text-[26px] font-[700] leading-8 text-primary-mid">
        {t('properties.list.filters.title')}
      </h2>

      <div className="flex w-full flex-col gap-4">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-primary-mid" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('properties.list.filters.searchPlaceholder')}
            className="h-[52px] w-full rounded-lg border-2 border-grey-stroke bg-white pl-12 pr-4 text-[14px] font-[500] text-grey-text-primary placeholder:text-grey-text-primary/50 outline-none"
          />
        </div>

        <div className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-[260px]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-10 w-full appearance-none rounded-lg border border-grey-stroke bg-white px-4 pr-10 text-[14px] font-[500] text-grey-text-primary/70 outline-none"
            >
              <option value="default">{t('properties.list.filters.sortDefault')}</option>
              <option value="price-asc">{t('properties.list.filters.sortOptions.priceAsc')}</option>
              <option value="price-desc">
                {t('properties.list.filters.sortOptions.priceDesc')}
              </option>
              <option value="rating-desc">
                {t('properties.list.filters.sortOptions.ratingDesc')}
              </option>
              <option value="size-desc">{t('properties.list.filters.sortOptions.sizeDesc')}</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9EA3AE]" />
          </div>

          <button
            type="button"
            onClick={onClearFilters}
            className="h-10 w-full rounded-lg border-2 border-primary-mid px-2 text-[14px] font-[500] text-primary-mid transition-colors hover:bg-primary-mid hover:text-white active:scale-[0.99] sm:w-[138px]"
          >
            {t('properties.list.filters.clear')}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-[16px] leading-6 font-[500] text-grey-text-primary">
          {t('properties.list.filters.price.title')}
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            placeholder={t('properties.list.filters.price.min')}
            className="h-10 w-full rounded-lg border border-grey-stroke bg-white px-4 text-[15px] font-[500] text-grey-text-primary placeholder:text-grey-text-primary/50 outline-none"
          />
          <input
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            placeholder={t('properties.list.filters.price.max')}
            className="h-10 w-full rounded-lg border border-grey-stroke bg-white px-4 text-[15px] font-[500] text-grey-text-primary placeholder:text-grey-text-primary/50 outline-none"
          />
          <button
            type="button"
            className="h-10 w-full rounded-lg border-2 border-primary-mid px-6 text-[15px] font-[500] text-primary-mid transition-colors hover:bg-primary-mid hover:text-white active:scale-[0.99] sm:w-[104px]"
          >
            {t('properties.list.filters.price.apply')}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <SectionTitle>{t('properties.list.filters.propertyType.title')}</SectionTitle>
          <SectionDivider />
          <div className="flex flex-col gap-3">
            <CheckItem
              checked={selectedPropertyTypes.has('house')}
              label={t('properties.list.filters.propertyType.house')}
              rightText="2,124"
              onToggle={() => onTogglePropertyType('house')}
            />
            <CheckItem
              checked={selectedPropertyTypes.has('apartment')}
              label={t('properties.list.filters.propertyType.apartment')}
              rightText="1,765"
              onToggle={() => onTogglePropertyType('apartment')}
            />
            <CheckItem
              checked={selectedPropertyTypes.has('single-family')}
              label={t('properties.list.filters.propertyType.singleFamily')}
              rightText="231"
              onToggle={() => onTogglePropertyType('single-family')}
            />
            <CheckItem
              checked={selectedPropertyTypes.has('studio')}
              label={t('properties.list.filters.propertyType.studio')}
              rightText="21"
              onToggle={() => onTogglePropertyType('studio')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <SectionTitle>{t('properties.list.filters.amenities.title')}</SectionTitle>
          <SectionDivider />
          <div className="flex flex-col gap-3">
            <CheckItem
              checked={selectedAmenities.has('dishwasher')}
              label={t('properties.list.filters.amenities.dishwasher')}
              rightText="2,124"
              onToggle={() => onToggleAmenity('dishwasher')}
            />
            <CheckItem
              checked={selectedAmenities.has('floor-coverings')}
              label={t('properties.list.filters.amenities.floorCoverings')}
              rightText="1,765"
              onToggle={() => onToggleAmenity('floor-coverings')}
            />
            <CheckItem
              checked={selectedAmenities.has('internet')}
              label={t('properties.list.filters.amenities.internet')}
              rightText="231"
              onToggle={() => onToggleAmenity('internet')}
            />
            <CheckItem
              checked={selectedAmenities.has('supermarket')}
              label={t('properties.list.filters.amenities.supermarket')}
              rightText="231"
              onToggle={() => onToggleAmenity('supermarket')}
            />
            <CheckItem
              checked={selectedAmenities.has('built-wardrobes')}
              label={t('properties.list.filters.amenities.builtWardrobes')}
              rightText="21"
              onToggle={() => onToggleAmenity('built-wardrobes')}
            />
            <CheckItem
              checked={selectedAmenities.has('kids-zone')}
              label={t('properties.list.filters.amenities.kidsZone')}
              rightText="21"
              onToggle={() => onToggleAmenity('kids-zone')}
            />

            <button
              type="button"
              className="w-fit text-[14px] leading-5 font-[600] text-grey-text-tertiary hover:text-primary-mid"
            >
              {t('properties.list.filters.amenities.collapse')}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <SectionTitle>{t('properties.list.filters.priceRange.title')}</SectionTitle>
          <SectionDivider />
          <div className="flex flex-col gap-3">
            <RadioItem
              checked={selectedPriceRange === 'low'}
              label={t('properties.list.filters.priceRange.low')}
              rightText="$5,000 - $10,000"
              onSelect={() => setSelectedPriceRange('low')}
            />
            <RadioItem
              checked={selectedPriceRange === 'medium'}
              label={t('properties.list.filters.priceRange.medium')}
              rightText="$10,000 - $50,000"
              onSelect={() => setSelectedPriceRange('medium')}
            />
            <RadioItem
              checked={selectedPriceRange === 'high'}
              label={t('properties.list.filters.priceRange.high')}
              rightText="$50,000 Up"
              onSelect={() => setSelectedPriceRange('high')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <SectionTitle>{t('properties.list.filters.space.title')}</SectionTitle>
          <SectionDivider />
          <div className="flex flex-col gap-3">
            <RadioItem
              checked={selectedSpace === 'smart'}
              label={t('properties.list.filters.space.smart')}
              rightText="80-120 m2"
              onSelect={() => setSelectedSpace('smart')}
            />
            <RadioItem
              checked={selectedSpace === 'comfort'}
              label={t('properties.list.filters.space.comfort')}
              rightText="120-200 m2"
              onSelect={() => setSelectedSpace('comfort')}
            />
            <RadioItem
              checked={selectedSpace === 'premium'}
              label={t('properties.list.filters.space.premium')}
              rightText="200 m2+"
              onSelect={() => setSelectedSpace('premium')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <SectionTitle>{t('properties.list.filters.bedBath.title')}</SectionTitle>
          <SectionDivider />
          <div className="flex flex-col gap-3">
            <RadioItem
              checked={selectedBedBath === 'single'}
              label={t('properties.list.filters.bedBath.single')}
              rightText="2,124"
              onSelect={() => setSelectedBedBath('single')}
            />
            <RadioItem
              checked={selectedBedBath === 'double'}
              label={t('properties.list.filters.bedBath.double')}
              rightText="1,765"
              onSelect={() => setSelectedBedBath('double')}
            />
            <RadioItem
              checked={selectedBedBath === 'up-to-3'}
              label={t('properties.list.filters.bedBath.upTo3')}
              rightText="231"
              onSelect={() => setSelectedBedBath('up-to-3')}
            />
            <RadioItem
              checked={selectedBedBath === 'up-to-5'}
              label={t('properties.list.filters.bedBath.upTo5')}
              rightText="21"
              onSelect={() => setSelectedBedBath('up-to-5')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <SectionTitle>{t('properties.list.filters.category.title')}</SectionTitle>
          <SectionDivider />
          <div className="flex flex-col gap-3">
            <RadioItem
              checked={selectedCategory === 'buying'}
              label={t('properties.list.filters.category.buying')}
              rightText="2,124"
              onSelect={() => setSelectedCategory('buying')}
            />
            <RadioItem
              checked={selectedCategory === 'renting'}
              label={t('properties.list.filters.category.renting')}
              rightText="1,765"
              onSelect={() => setSelectedCategory('renting')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <SectionTitle>{t('properties.list.filters.reviews.title')}</SectionTitle>
          <SectionDivider />
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setSelectedRating(value)}
                className="p-0.5"
                aria-label={t('properties.list.filters.reviews.ariaLabel', { value })}
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
