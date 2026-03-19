import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import gallery2Image from '@/assets/PropertyDetails/gallery2.png'
import apartmentCardImage from '@/assets/images/apartmentCard.png'
import roomCardImage from '@/assets/images/roomCard.png'
import PropertyCard from '@/components/cards/PropertyCard'

const FAVORITE_PROPERTIES = [
  {
    id: 101,
    image: roomCardImage,
    title: 'Warm and Cozy Apartment',
    location: 'Belia Gargen, California',
    beds: '1',
    baths: '1',
    sqft: '732 sq ft',
    price: 4321,
    status: 'For Sale',
  },
  {
    id: 102,
    image: gallery2Image,
    title: 'Warm and Cozy Apartment',
    location: 'Belia Gargen, California',
    beds: '1',
    baths: '1',
    sqft: '732 sq ft',
    price: 4321,
    status: 'For Sale',
  },
  {
    id: 103,
    image: roomCardImage,
    title: 'Warm and Cozy Apartment',
    location: 'Belia Gargen, California',
    beds: '1',
    baths: '1',
    sqft: '732 sq ft',
    price: 4321,
    status: 'For Sale',
  },
  {
    id: 104,
    image: apartmentCardImage,
    title: 'Warm and Cozy Apartment',
    location: 'Belia Gargen, California',
    beds: '1',
    baths: '1',
    sqft: '732 sq ft',
    price: 4321,
    status: 'For Sale',
  },
  {
    id: 105,
    image: roomCardImage,
    title: 'Warm and Cozy Apartment',
    location: 'Belia Gargen, California',
    beds: '1',
    baths: '1',
    sqft: '732 sq ft',
    price: 4321,
    status: 'For Sale',
  },
  {
    id: 106,
    image: gallery2Image,
    title: 'Warm and Cozy Apartment',
    location: 'Belia Gargen, California',
    beds: '1',
    baths: '1',
    sqft: '732 sq ft',
    price: 4321,
    status: 'For Sale',
  },
  {
    id: 107,
    image: roomCardImage,
    title: 'Warm and Cozy Apartment',
    location: 'Belia Gargen, California',
    beds: '1',
    baths: '1',
    sqft: '732 sq ft',
    price: 4321,
    status: 'For Sale',
  },
  {
    id: 108,
    image: apartmentCardImage,
    title: 'Warm and Cozy Apartment',
    location: 'Belia Gargen, California',
    beds: '1',
    baths: '1',
    sqft: '732 sq ft',
    price: 4321,
    status: 'For Sale',
  },
]

function FavoriteProperties() {
  const navigate = useNavigate()
  const [favoriteProperties, setFavoriteProperties] = useState(FAVORITE_PROPERTIES)

  function handleFavoriteToggle(propertyId, isFavorite) {
    if (!isFavorite) {
      setFavoriteProperties((currentProperties) =>
        currentProperties.filter((property) => property.id !== propertyId),
      )
    }
  }

  if (favoriteProperties.length === 0) {
    return (
      <section className="rounded-[24px] border border-[#E8EEF3] bg-[#ECF1F6] px-6 py-12 text-center sm:px-8">
        <h2 className="text-[24px] font-bold text-grey-text-primary">No favorite properties yet</h2>
        <p className="mt-3 text-[16px] leading-7 text-grey-text-secondary">
          Tap the heart on any property card to save it here for quick access later.
        </p>
      </section>
    )
  }

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {favoriteProperties.map((property) => (
        <PropertyCard
          key={property.id}
          id={property.id}
          image={property.image}
          title={property.title}
          location={property.location}
          beds={property.beds}
          baths={property.baths}
          sqft={property.sqft}
          price={property.price}
          status={property.status}
          isFavorite
          onFavoriteClick={(isFavorite) => handleFavoriteToggle(property.id, isFavorite)}
          onViewDetails={() => navigate(`/properties/${property.id}`)}
        />
      ))}
    </section>
  )
}

export default FavoriteProperties
