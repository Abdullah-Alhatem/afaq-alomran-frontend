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
  const showMonthlySuffix = status === 'For Rent'

  const badgeStyles = {
    'For Sale': 'bg-[#E7F3E8] text-success',
    'For Rent': 'bg-blue-100 text-blue-600',
    [t('common.status.forSale')]: 'bg-[#E7F3E8] text-success',
    [t('common.status.forRent')]: 'bg-blue-100 text-blue-600',
  }

  return (
    <div
      data-page-reveal-item
      className={cn(
        'mx-auto flex w-full max-w-[332px] flex-col rounded-[20px] bg-white sm:mx-0',
        'border border-grey-stroke shadow-[0_6px_18px_rgba(24,24,24,0.04)]',
        'hover:shadow-[0_14px_32px_rgba(24,24,24,0.08)] transition-shadow duration-300',
        'gap-2 p-[8px]',
        'relative',
      )}
    >
      <div className="relative">
        <div className="h-[196px] w-full overflow-hidden rounded-[16px] md:h-[220px]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <button
          onClick={handleFavorite}
          className={cn(
            'absolute top-3 right-3',
            'h-[34px] w-[34px] md:h-9 md:w-9',
            'flex items-center justify-center',
            'transition-all duration-200',
            'hover:scale-105 active:scale-95',
            'p-0 border-0 bg-transparent',
          )}
        >
          <HeartIcon active={storedFavorite} />
        </button>
      </div>

      <div className="flex flex-col gap-2 px-3.5 pt-1 pb-3.5 md:pb-4">
        <div
          className={cn(
            'flex items-center gap-1.5',
            'w-fit rounded-[4px] px-3 py-1.5 text-xs',
            badgeStyles[statusLabel] || badgeStyles['For Sale'],
          )}
        >
          <span className="font-bold text-[12px] md:text-[13px]">{statusLabel}</span>
        </div>

        <h2
          className={cn(
            'text-[18px] font-medium leading-[1.22] md:text-[19px]',
            'text-grey-text-primary',
            'line-clamp-2',
          )}
        >
          {title}
        </h2>

        <div className="flex items-center gap-2 pb-1">
          <MapPin className="h-4 w-4 flex-shrink-0 text-primary-mid" strokeWidth={2.5} />
          <span className="truncate text-[12px] text-grey-text-tertiary">{location}</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 md:gap-x-4">
          <div className="flex items-center gap-1.5">
            <BedDouble className="h-[13px] w-[13px] flex-shrink-0 text-primary-mid" />
            <span className="text-[12px] font-medium text-grey-text-primary">
              {beds} {t('common.propertyMeta.bedSuffix')}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Bath className="h-[13px] w-[13px] flex-shrink-0 text-primary-mid" />
            <span className="text-[12px] font-medium text-grey-text-primary">
              {baths} {t('common.propertyMeta.bathSuffix')}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Expand className="h-[13px] w-[13px] flex-shrink-0 text-primary-mid" />
            <span className="text-[12px] font-medium text-grey-text-primary">{sqft}</span>
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2.5 pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-[16px] font-semibold text-secondary-light md:text-[17px]">
              ${formattedPrice}
            </span>
            {showMonthlySuffix ? (
              <span className="text-[10px] font-medium text-grey-text-tertiary">
                {t('common.propertyMeta.monthSuffix')}
              </span>
            ) : null}
          </div>

          <Link
            to={`/properties/${id}`}
            onClick={onViewDetails}
            className={cn(
              'min-w-[88px] px-3 py-2',
              'rounded-[10px]',
              'border border-secondary-light',
              'text-[12px] font-medium text-secondary-light',
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
