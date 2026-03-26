import orangeLine2 from '@/assets/icons/orangeLine2.svg'

function PropertiesResultsHeader({ title, description }) {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-center gap-5">
        <img
          src={orangeLine2}
          alt=""
          aria-hidden="true"
          className="hidden h-[9px] w-full max-w-[140px] object-contain sm:block md:max-w-[190px]"
        />
        <h2 className="whitespace-nowrap text-center text-[20px] font-[600] leading-8 text-primary-mid">
          {title}
        </h2>
        <img
          src={orangeLine2}
          alt=""
          aria-hidden="true"
          className="hidden h-[9px] w-full max-w-[140px] object-contain sm:block md:max-w-[190px]"
        />
      </div>

      {description ? (
        <p className="mx-auto max-w-[780px] text-center text-[14px] leading-6 text-[#6B7280]">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default PropertiesResultsHeader
