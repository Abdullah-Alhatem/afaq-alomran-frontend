import React from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import apartmentCardImage from '@/assets/images/apartmentCard.png'
import { Bath, BedDouble, CalendarDays, Expand, MapPin } from 'lucide-react'

export function ApartmentCard({
  className,
  image = apartmentCardImage,
  title = 'Warm and Cozy Apartment',
  location = 'Belia Gargen, California',
  area = '732 sq ft',
  baths = 1,
  beds = 1,
  price = 400000,
  dateLabel = 'Saturday, 14 Oct 2024',
  timeLabel = '4:30 PM',
  onCancel,
  onOpenMap,
}) {
  const { t } = useTranslation()
  const formattedPrice = typeof price === 'number' ? `$${price.toLocaleString()}` : price

  return (
    <div
      className={cn(
        'flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6',
        'bg-[#ECF1F6] rounded-[16px] shadow-[2px_4px_16px_rgba(0,0,0,0.04)]',
        'w-full overflow-hidden px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8',
        'lg:min-h-[204px]',
        className,
      )}
    >
      {/* Left Section: Image + Details */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start lg:min-w-0 lg:flex-1">
        {/* Image */}
        <div className="h-[200px] w-full flex-none overflow-hidden rounded-[12px] sm:h-[120px] sm:w-[120px] md:h-[140px] md:w-[140px]">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>

        {/* Details */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-1.5 sm:gap-2 lg:max-w-[275px]">
          {/* Status Badge */}
          <div className="flex h-[30px] w-fit items-center rounded-[8px] bg-[#E7F3E8] px-2 py-1">
            <span className="text-xs sm:text-[14px] leading-[22px] font-normal text-[#3AC922]">
              {t('common.status.forSale')}
            </span>
          </div>

          {/* Title */}
          <h2 className="w-full text-[20px] leading-tight font-semibold text-[#123E56] sm:text-[22px] sm:leading-[30px] md:text-[24px] md:leading-[32px]">
            {title}
          </h2>

          {/* Location */}
          <div className="flex w-full items-center gap-1">
            <MapPin className="h-3 w-3 flex-shrink-0 text-[#123E56] sm:h-4 sm:w-4" />
            <span className="line-clamp-2 text-xs leading-[20px] font-normal text-[#5C5C5C] sm:line-clamp-1 sm:text-[14px] sm:leading-[22px]">
              {location}
            </span>
          </div>

          {/* Specs */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6 lg:gap-x-8">
            {/* Area */}
            <div className="flex items-center gap-1">
              <Expand className="h-3 w-3 flex-shrink-0 text-[#123E56] sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-[14px] leading-[22px] font-medium text-[#5C5C5C]">
                {area}
              </span>
            </div>

            {/* Baths */}
            <div className="flex items-center gap-1">
              <Bath className="h-3 w-3 flex-shrink-0 text-[#123E56] sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-[14px] leading-[22px] font-medium text-[#5C5C5C]">
                {baths}
              </span>
            </div>

            {/* Beds */}
            <div className="flex items-center gap-1">
              <BedDouble className="h-3 w-3 flex-shrink-0 text-[#123E56] sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-[14px] leading-[22px] font-medium text-[#5C5C5C]">
                {beds}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:flex-none xl:flex-row lg:items-center lg:gap-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:flex lg:gap-4">
          {/* Middle Section: Price */}
          <div className="flex min-h-[76px] flex-col justify-center gap-1 rounded-[12px] bg-[#F8F8F8] px-4 py-3 sm:min-h-[88px] lg:w-[132px]">
            <span className="text-sm leading-[22px] font-bold text-[#181818]">
              {t('common.labels.price')}
            </span>
            <span className="text-[24px] leading-[26px] font-semibold text-[#DE8556]">
              {formattedPrice}
            </span>
          </div>

          {/* Middle Section: Date & Time */}
          <div className="flex min-h-[76px] flex-col justify-center gap-1 rounded-[12px] bg-[#F8F8F8] px-4 py-3 sm:min-h-[88px] lg:w-[249px]">
            <span className="text-sm leading-[22px] font-bold text-[#181818]">
              {t('common.labels.dateTime')}
            </span>
            <div className="flex items-start gap-2">
              <CalendarDays className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#123E56] sm:h-5 sm:w-5" />
              <div className="flex min-w-0 flex-wrap items-center gap-x-1 gap-y-0.5">
                <span className="text-xs leading-[20px] font-bold text-[#123E56] sm:text-[14px] sm:leading-[22px]">
                  {dateLabel}
                </span>
                <span className="text-xs leading-[20px] font-bold text-[#DE8556] sm:text-[14px] sm:leading-[22px]">
                  {timeLabel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Buttons */}
        <div className="grid gap-3 sm:grid-cols-2 lg:flex lg:w-[277px] lg:justify-end lg:gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex h-12 w-full items-center justify-center rounded-[24px] border-2 border-[#FF4747] px-5 transition-colors hover:bg-[#FF4747]/5 lg:w-[94px]"
          >
            <span className="text-sm sm:text-[16px] leading-[24px] font-bold text-[#FF4747]">
              {t('common.buttons.cancel')}
            </span>
          </button>

          <button
            type="button"
            onClick={onOpenMap}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-[24px] bg-[#123E56] px-5 transition-colors hover:bg-[#0d2a38] lg:w-[151px]"
          >
            <MapPin className="h-4 w-4 flex-shrink-0 text-white sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-[16px] leading-[24px] font-bold text-white">
              {t('common.buttons.openMap')}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ApartmentCard
