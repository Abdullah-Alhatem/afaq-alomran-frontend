import orangeLine2 from '@/assets/icons/orangeLine2.svg'

function PropertiesResultsHeader({ title, description }) {
  return (
    <div className="w-full space-y-5">
      <div className="flex items-center justify-center gap-8">
        <img
          src={orangeLine2}
          alt=""
          aria-hidden="true"
          className="hidden h-[9px] w-full max-w-[151px] object-contain sm:block md:max-w-[251px]"
        />
        <h2 className="text-center text-[24px] font-[600] leading-8 text-primary-mid whitespace-nowrap">
          {title}
        </h2>
        <img
          src={orangeLine2}
          alt=""
          aria-hidden="true"
          className="hidden h-[9px] w-full max-w-[151px] object-contain sm:block md:max-w-[251px]"
        />
      </div>

      {description ? (
        <p className="mx-auto max-w-[860px] text-center text-[16px] leading-8 text-[#6B7280]">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default PropertiesResultsHeader
