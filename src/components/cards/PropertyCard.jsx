import { MapPin, Bath, BedDouble, Expand } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { HeartIcon } from './HeartIcon'
import { usePropertyCardStore } from '@/stores/usePropertyCardStore'
import defaultRoomCardImg from '@/assets/images/roomCard.png'
import { Link } from 'react-router-dom'

export function PropertyCard({
  id,
  image = defaultRoomCardImg,
  title = 'Warm and Cozy Apartment',
  location = 'Belia Gargen, California',
  beds = '1 bed',
  baths = '1 bath',
  sqft = '732 sq ft',
  price = '400,000',
  status = 'For Sale',
  isFavorite = false,
  onFavoriteClick,
  onViewDetails,
}) {
  const { t } = useTranslation()
  const toggleFavorite = usePropertyCardStore((state) => state.toggleFavorite)
  const storedFavorite = usePropertyCardStore((state) => state.favorites[id] ?? isFavorite)

  const handleFavorite = () => {
    console.log('PropertyCard - ID:', id, 'Type:', typeof id, 'Current favorite:', storedFavorite)
    const newFavoriteState = !storedFavorite
    toggleFavorite(id, newFavoriteState)
    onFavoriteClick?.(newFavoriteState)
  }

  const formattedPrice = price?.toLocaleString() || '0'
  const statusLabel =
    status === 'For Sale'
      ? t('common.status.forSale')
      : status === 'For Rent'
        ? t('common.status.forRent')
        : status

  const badgeStyles = {
    'For Sale': 'bg-[#E7F3E8] text-success',
    'For Rent': 'bg-blue-100 text-blue-600',
    [t('common.status.forSale')]: 'bg-[#E7F3E8] text-success',
    [t('common.status.forRent')]: 'bg-blue-100 text-blue-600',
  }

  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-[364px] flex-col rounded-[22px] bg-white sm:mx-0',
        'border border-grey-stroke shadow-[0_6px_18px_rgba(24,24,24,0.04)]',
        'hover:shadow-[0_14px_32px_rgba(24,24,24,0.08)] transition-shadow duration-300',
        'p-[10px] gap-3',
        'relative',
      )}
    >
      <div className="relative">
        <div className="w-full h-[216px] md:h-[255px] rounded-[18px] overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <button
          onClick={handleFavorite}
          className={cn(
            'absolute top-3 right-3',
            'w-10 h-10',
            'flex items-center justify-center',
            'transition-all duration-200',
            'hover:scale-105 active:scale-95',
            'p-0 border-0 bg-transparent',
          )}
        >
          <HeartIcon active={storedFavorite} />
        </button>
      </div>

      <div className="flex gap-3 flex-col px-4 pt-1 pb-4 md:px-5 md:pb-5">
        <div
          className={cn(
            'flex items-center gap-1.5',
            'w-fit rounded-[4px] px-4 py-2 text-sm',
            badgeStyles[statusLabel] || badgeStyles['For Sale'],
          )}
        >
          <span className="font-bold text-[12px] md:text-[14px]">{statusLabel}</span>
        </div>

        <h2
          className={cn(
            'text-[21px] md:text-[22px] font-medium leading-[1.25]',
            'text-grey-text-primary',
            'line-clamp-2',
          )}
        >
          {title}
        </h2>

        <div className="flex items-center gap-2 pb-1">
          <MapPin className="h-5 w-5 flex-shrink-0 text-primary-mid" strokeWidth={2.5} />
          <span className="truncate text-[13px] text-grey-text-tertiary md:text-[14px]">
            {location}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-6">
          <div className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 flex-shrink-0 text-primary-mid" />
            <span className="text-[12px] font-medium text-grey-text-primary">
              {beds} {t('common.propertyMeta.bedSuffix')}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 flex-shrink-0 text-primary-mid" />
            <span className="text-[12px] font-medium text-grey-text-primary">
              {baths} {t('common.propertyMeta.bathSuffix')}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Expand className="h-4 w-4 flex-shrink-0 text-primary-mid" />
            <span className="text-[12px] font-medium text-grey-text-primary">{sqft}</span>
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-[18px] font-semibold text-secondary-light md:text-[20px]">
              ${formattedPrice}
            </span>
            <span className="text-[12px] font-medium text-grey-text-tertiary">
              {t('common.propertyMeta.monthSuffix')}
            </span>
          </div>

          <Link
            to={`/properties/${id}`}
            onClick={onViewDetails}
            className={cn(
              'min-w-[98px] px-4 py-2.5',
              'rounded-[10px]',
              'border border-secondary-light',
              'text-[14px] font-medium text-secondary-light',
              'hover:bg-secondary-light hover:text-white transition-all duration-200',
              'active:scale-95',
              'whitespace-nowrap',
              'flex-shrink-0',
            )}
          >
            {t('common.propertyMeta.seeDetail')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
