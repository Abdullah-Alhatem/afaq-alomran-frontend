import { MapPin, Bath, BedDouble, Expand } from 'lucide-react'
import { cn } from '@/lib/utils'
import { HeartIcon } from './HeartIcon'
import { usePropertyCardStore } from '@/stores/usePropertyCardStore'

export function PropertyCard({
  id,
  image = '/src/assets/images/roomCard.png',
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
  const toggleFavorite = usePropertyCardStore((state) => state.toggleFavorite)
  const storedFavorite = usePropertyCardStore((state) => state.favorites[id] ?? isFavorite)

  const handleFavorite = () => {
    console.log('PropertyCard - ID:', id, 'Type:', typeof id, 'Current favorite:', storedFavorite)
    const newFavoriteState = !storedFavorite
    toggleFavorite(id, newFavoriteState)
    onFavoriteClick?.(newFavoriteState)
  }

  const formattedPrice = price?.toLocaleString() || '0'

  const badgeStyles = {
    'For Sale': 'bg-[#E7F3E8] text-[#19C116]',
    'For Rent': 'bg-blue-100 text-blue-600',
  }

  return (
    <div
      className={cn(
        'flex flex-col w-full max-w-[364px] bg-white rounded-[22px] mx-auto sm:mx-0',
        'border border-[#D7D7D7] shadow-[0_6px_18px_rgba(24,24,24,0.04)]',
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
            'px-4 py-2 w-fit rounded-[4px] text-sm',
            badgeStyles[status] || badgeStyles['For Sale'],
          )}
        >
          <span className="font-bold text-[12px] md:text-[14px]">{status}</span>
        </div>

        <h2
          className={cn(
            'text-[21px] md:text-[22px] font-medium leading-[1.25]',
            'text-[#38343D]',
            'line-clamp-2',
          )}
        >
          {title}
        </h2>

        <div className="flex items-center gap-2 pb-1">
          <MapPin className="w-5 h-5 text-[#123E56] flex-shrink-0" strokeWidth={2.5} />
          <span className="text-[13px] md:text-[14px] text-[#818181] truncate">{location}</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-6">
          <div className="flex items-center gap-1.5">
            <BedDouble className="w-4 h-4 text-[#123E56] flex-shrink-0" />
            <span className="text-[12px] font-medium text-[#38343D]">{beds} bed</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-[#123E56] flex-shrink-0" />
            <span className="text-[12px] font-medium text-[#38343D]">{baths} bath</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Expand className="w-4 h-4 text-[#123E56] flex-shrink-0" />
            <span className="text-[12px] font-medium text-[#38343D]">{sqft}</span>
          </div>
        </div>

        <div className="flex items-end justify-between gap-3 mt-auto pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-[18px] md:text-[20px] font-semibold text-[#DE8556]">
              ${formattedPrice}
            </span>
            <span className="text-[12px] font-medium text-[#818181]">/ month</span>
          </div>

          <button
            onClick={onViewDetails}
            className={cn(
              'px-4 py-2.5 min-w-[98px]',
              'rounded-[10px]',
              'border border-[#DE8556]',
              'text-[14px] font-medium text-[#DE8556]',
              'hover:bg-[#DE8556] hover:text-white transition-all duration-200',
              'active:scale-95',
              'whitespace-nowrap',
              'flex-shrink-0',
            )}
          >
            See Detail
          </button>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
