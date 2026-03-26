import CoverSection from '@/components/CoverSection'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import PropertyCard from '@/components/cards/PropertyCard'
import PropertiesFiltersSidebar from '@/components/PropertiesPage/PropertiesFiltersSidebar'
import PropertiesResultsHeader from '@/components/PropertiesPage/PropertiesResultsHeader'
import { filterAndSortProperties } from '@/components/PropertiesPage/filterAndSortProperties'
import { usePropertiesQuery } from '@/lib/fake-api/hooks'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Properties() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { data: properties = [] } = usePropertiesQuery()

  const [searchQuery, setSearchQuery] = useState('')
  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')
  const [selectedRating, setSelectedRating] = useState(0)
  const [sortBy, setSortBy] = useState('default')

  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState(() => new Set())
  const [selectedAmenities, setSelectedAmenities] = useState(() => new Set())
  const [selectedPriceRange, setSelectedPriceRange] = useState('')
  const [selectedSpace, setSelectedSpace] = useState('')
  const [selectedBedBath, setSelectedBedBath] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  const toggleInSet = (setValue, item) => {
    const next = new Set(setValue)
    if (next.has(item)) next.delete(item)
    else next.add(item)
    return next
  }

  const onTogglePropertyType = (type) => {
    setSelectedPropertyTypes((prev) => toggleInSet(prev, type))
  }

  const onToggleAmenity = (amenity) => {
    setSelectedAmenities((prev) => toggleInSet(prev, amenity))
  }

  const clearFilters = () => {
    setSearchQuery('')
    setPriceMin('')
    setPriceMax('')
    setSelectedRating(0)
    setSortBy('default')
    setSelectedPropertyTypes(new Set())
    setSelectedAmenities(new Set())
    setSelectedPriceRange('')
    setSelectedSpace('')
    setSelectedBedBath('')
    setSelectedCategory('')
  }

  const filteredProperties = useMemo(() => {
    return filterAndSortProperties({
      properties,
      searchQuery,
      priceMin,
      priceMax,
      selectedRating,
      sortBy,
      selectedPropertyTypes,
      selectedAmenities,
      selectedPriceRange,
      selectedSpace,
      selectedBedBath,
      selectedCategory,
    })
  }, [
    properties,
    searchQuery,
    priceMin,
    priceMax,
    selectedRating,
    sortBy,
    selectedPropertyTypes,
    selectedAmenities,
    selectedPriceRange,
    selectedSpace,
    selectedBedBath,
    selectedCategory,
  ])

  return (
    <div className="overflow-hidden">
      <CoverSection
        title={t('properties.list.coverTitle')}
        currentPage={t('properties.list.currentPage')}
      />

      <section className="-mx-8 bg-[#F8F8F8] py-7 lg:py-12">
        <div className="home-shell">
          <div className="flex flex-col items-start justify-center gap-5 lg:flex-row">
            <div className="w-full lg:w-[300px] lg:shrink-0">
              <button
                type="button"
                onClick={() => setIsMobileFiltersOpen((prev) => !prev)}
                className="flex home-shell items-center justify-between gap-3 rounded-2xl border-2 border-primary-mid bg-white px-5 py-4 text-primary-mid shadow-sm transition-colors hover:bg-primary-mid hover:text-white lg:hidden mx-auto"
                aria-expanded={isMobileFiltersOpen}
                aria-controls="properties-filters"
              >
                <span className="inline-flex items-center gap-3 text-[16px] font-[700] leading-6">
                  <SlidersHorizontal className="h-5 w-5" />
                  {t('properties.list.filters.title')}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    isMobileFiltersOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                id="properties-filters"
                className={`${isMobileFiltersOpen ? 'block' : 'hidden'} mt-4 lg:mt-0 lg:block`}
              >
                <PropertiesFiltersSidebar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  onClearFilters={clearFilters}
                  priceMin={priceMin}
                  setPriceMin={setPriceMin}
                  priceMax={priceMax}
                  setPriceMax={setPriceMax}
                  selectedPropertyTypes={selectedPropertyTypes}
                  onTogglePropertyType={onTogglePropertyType}
                  selectedAmenities={selectedAmenities}
                  onToggleAmenity={onToggleAmenity}
                  selectedPriceRange={selectedPriceRange}
                  setSelectedPriceRange={setSelectedPriceRange}
                  selectedSpace={selectedSpace}
                  setSelectedSpace={setSelectedSpace}
                  selectedBedBath={selectedBedBath}
                  setSelectedBedBath={setSelectedBedBath}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedRating={selectedRating}
                  setSelectedRating={setSelectedRating}
                />
              </div>
            </div>

            <div className="flex w-full flex-1 flex-col gap-8">
              <PropertiesResultsHeader
                title={t('properties.list.heading')}
                description={t('properties.list.description')}
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-[18px] xl:grid-cols-3">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    id={property.id}
                    image={property.image}
                    title={property.title}
                    location={property.location}
                    beds={String(property.beds)}
                    baths={String(property.baths)}
                    sqft={`${property.sqft} ${t('common.propertyMeta.areaSuffix')}`}
                    price={property.price}
                    status={property.status}
                    onViewDetails={() => navigate(`/properties/${property.id}`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LookingForADreamBox background="bg-white" />
    </div>
  )
}

export default Properties
