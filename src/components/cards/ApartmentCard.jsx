import React from 'react'
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
  const formattedPrice = typeof price === 'number' ? `$${price.toLocaleString()}` : price

  return (
    <div
      className={cn(
        'flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-28',
        'bg-[#ECF1F6] rounded-[16px] shadow-[2px_4px_16px_rgba(0,0,0,0.04)]',
        'px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 w-full md:max-w-[1472px]',
        'md:min-h-[204px] overflow-hidden',
        className,
      )}
    >
      {/* Left Section: Image + Details */}
      <div className="flex flex-row items-center gap-3 sm:gap-4 md:flex-none">
        {/* Image */}
        <div className="h-24 w-24 sm:h-[120px] sm:w-[120px] md:h-[140px] md:w-[140px] overflow-hidden rounded-[4px] flex-none">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>

        {/* Details */}
        <div className="flex flex-col items-start gap-1 sm:gap-2 flex-1 sm:w-auto md:w-[275.34px]">
          {/* Status Badge */}
          <div className="flex flex-row items-center gap-0 w-fit h-[30px] bg-[#E7F3E8] rounded-[8px] px-2 py-1">
            <span className="text-xs sm:text-[14px] leading-[22px] font-normal text-[#3AC922]">
              For Sale
            </span>
          </div>

          {/* Title */}
          <h2 className="text-base sm:text-lg md:text-[24px] leading-tight sm:leading-[32px] font-semibold text-[#123E56] line-clamp-2 sm:line-clamp-none md:w-[275.34px]">
            {title}
          </h2>

          {/* Location */}
          <div className="flex flex-row items-center gap-1 md:w-[275.34px]">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#123E56] flex-shrink-0" />
            <span className="text-xs sm:text-[14px] leading-[22px] font-normal text-[#5C5C5C] line-clamp-1">
              {location}
            </span>
          </div>

          {/* Specs */}
          <div className="flex flex-row items-center gap-2 sm:gap-8 md:w-[249px]">
            {/* Area */}
            <div className="flex flex-row items-center gap-1">
              <Expand className="w-3 h-3 sm:w-4 sm:h-4 text-[#123E56] flex-shrink-0" />
              <span className="text-xs sm:text-[14px] leading-[22px] font-medium text-[#5C5C5C]">
                {area}
              </span>
            </div>

            {/* Baths */}
            <div className="flex flex-row items-center gap-1">
              <Bath className="w-3 h-3 sm:w-4 sm:h-4 text-[#123E56] flex-shrink-0" />
              <span className="text-xs sm:text-[14px] leading-[22px] font-medium text-[#5C5C5C]">
                {baths}
              </span>
            </div>

            {/* Beds */}
            <div className="flex flex-row items-center gap-1">
              <BedDouble className="w-3 h-3 sm:w-4 sm:h-4 text-[#123E56] flex-shrink-0" />
              <span className="text-xs sm:text-[14px] leading-[22px] font-medium text-[#5C5C5C]">
                {beds}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Price */}
      <div className="flex flex-row md:flex-col justify-center items-start max-md:gap-2 h-16 sm:h-[62px] bg-[#F8F8F8] rounded-[8px] px-3 sm:px-4 py-2 flex-1 sm:flex-none sm:w-[132px]">
        <span className="text-sm sm:text-[14px] leading-[22px] font-bold text-[#181818]">
          Price
        </span>
        <span className="text-xl sm:text-[24px] leading-[24px] font-semibold text-[#DE8556]">
          {formattedPrice}
        </span>
      </div>

      {/* Middle Section: Date & Time */}
      <div className="flex flex-row items-center gap-2 sm:gap-4 h-16 sm:h-[62px] bg-[#F8F8F8] rounded-[8px] px-3 sm:px-4 py-2 flex-1 sm:flex-none md:w-[249px]">
        <div className="flex flex-col items-center md:items-start gap-0 flex-1">
          <span className="text-xs sm:text-[14px] leading-[22px] font-bold text-[#181818]">
            Date &amp; Time
          </span>
          <div className="flex flex-row items-center gap-1 flex-wrap">
            <CalendarDays className="w-4 h-4 sm:w-6 sm:h-6 text-[#123E56] flex-shrink-0" />
            <span className="text-xs sm:text-[14px] leading-[22px] font-bold text-[#123E56] truncate">
              {dateLabel}
            </span>
            <span className="text-xs sm:text-[14px] leading-[22px] font-bold text-[#DE8556] flex-shrink-0">
              {timeLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex flex-row justify-end items-center gap-2 sm:gap-4 md:gap-8 h-12 sm:h-[48px] flex-none w-full md:w-[277px]">
        <button
          type="button"
          onClick={onCancel}
          className="flex flex-row justify-center items-center flex-1 sm:flex-none h-12 sm:h-[48px] sm:w-[94px] rounded-[24px] border-2 border-[#FF4747] hover:bg-[#FF4747]/5 transition-colors"
        >
          <span className="text-sm sm:text-[16px] leading-[24px] font-bold text-[#FF4747]">
            Cancel
          </span>
        </button>

        <button
          type="button"
          onClick={onOpenMap}
          className="flex flex-row justify-center items-center gap-1 sm:gap-2 flex-1 sm:flex-none h-12 sm:h-[48px] sm:w-[151px] rounded-[24px] bg-[#123E56] hover:bg-[#0d2a38] transition-colors"
        >
          <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-white flex-shrink-0" />
          <span className="text-sm sm:text-[16px] leading-[24px] font-bold text-white">
            Open Map
          </span>
        </button>
      </div>
    </div>
  )
}

export default ApartmentCard
