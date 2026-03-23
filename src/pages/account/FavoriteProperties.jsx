import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import AccountEmptyState from '@/components/account/AccountEmptyState'
import PropertyCard from '@/components/cards/PropertyCard'
import { useFavoritePropertiesQuery, useRemoveFavoritePropertyMutation } from '@/lib/fake-api/hooks'

function FavoriteProperties() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { data: favoriteProperties = [] } = useFavoritePropertiesQuery()
  const removeFavoritePropertyMutation = useRemoveFavoritePropertyMutation()

  function handleFavoriteToggle(propertyId, isFavorite) {
    if (!isFavorite) {
      removeFavoritePropertyMutation.mutate(propertyId)
    }
  }

  if (favoriteProperties.length === 0) {
    return (
      <AccountEmptyState
        title={t('account.profile.emptyFavoritesTitle')}
        description={t('account.profile.emptyFavoritesDescription')}
      />
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
