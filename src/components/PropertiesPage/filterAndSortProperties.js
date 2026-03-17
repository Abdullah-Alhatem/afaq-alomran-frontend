export function filterAndSortProperties({
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
}) {
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const min = Number(priceMin.replace(/,/g, ''))
  const max = Number(priceMax.replace(/,/g, ''))
  const hasMin = Number.isFinite(min) && priceMin.trim() !== ''
  const hasMax = Number.isFinite(max) && priceMax.trim() !== ''

  const hasTypeFilter = selectedPropertyTypes.size > 0
  const hasAmenitiesFilter = selectedAmenities.size > 0

  const priceRangeBounds = (() => {
    if (selectedPriceRange === 'low') return { min: 0, max: 10000 }
    if (selectedPriceRange === 'medium') return { min: 10000, max: 50000 }
    if (selectedPriceRange === 'high') return { min: 50000, max: Number.POSITIVE_INFINITY }
    return null
  })()

  const spaceSqftBounds = (() => {
    // Sidebar shows m2; we approximate with sqft thresholds.
    if (selectedSpace === 'smart') return { min: 861, max: 1292 } // ~80-120 m2
    if (selectedSpace === 'comfort') return { min: 1292, max: 2153 } // ~120-200 m2
    if (selectedSpace === 'premium') return { min: 2153, max: Number.POSITIVE_INFINITY } // ~200 m2+
    return null
  })()

  const filtered = properties.filter((property) => {
    if (normalizedQuery) {
      const haystack = `${property.title} ${property.location}`.toLowerCase()
      if (!haystack.includes(normalizedQuery)) return false
    }

    const priceValue = typeof property.price === 'number' ? property.price : Number(property.price)
    if (hasMin && priceValue < min) return false
    if (hasMax && priceValue > max) return false

    if (priceRangeBounds) {
      if (priceValue < priceRangeBounds.min || priceValue > priceRangeBounds.max) return false
    }

    if (selectedCategory && property.category !== selectedCategory) return false

    if (hasTypeFilter && !selectedPropertyTypes.has(property.type)) return false

    if (hasAmenitiesFilter) {
      for (const amenity of selectedAmenities) {
        if (!property.amenities.includes(amenity)) return false
      }
    }

    if (spaceSqftBounds) {
      if (property.sqft < spaceSqftBounds.min || property.sqft > spaceSqftBounds.max) return false
    }

    if (selectedBedBath) {
      if (selectedBedBath === 'single' && property.beds !== 1) return false
      if (selectedBedBath === 'double' && property.beds !== 2) return false
      if (selectedBedBath === 'up-to-3' && property.beds > 3) return false
      if (selectedBedBath === 'up-to-5' && property.beds > 5) return false
    }

    if (selectedRating > 0 && property.rating < selectedRating) return false

    return true
  })

  const sorted = [...filtered]
  if (sortBy === 'price-asc') sorted.sort((a, b) => a.price - b.price)
  if (sortBy === 'price-desc') sorted.sort((a, b) => b.price - a.price)
  if (sortBy === 'rating-desc') sorted.sort((a, b) => b.rating - a.rating)
  if (sortBy === 'size-desc') sorted.sort((a, b) => b.sqft - a.sqft)

  return sorted
}
