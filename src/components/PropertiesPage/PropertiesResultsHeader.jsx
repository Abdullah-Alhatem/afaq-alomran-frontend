import React from 'react'

import orangeLine2 from '@/assets/icons/orangeLine2.svg'

function PropertiesResultsHeader({ title = 'Search for your Perfect Properties' }) {
  return (
    <div className="w-full flex items-center justify-center gap-8">
      <img
        src={orangeLine2}
        alt=""
        aria-hidden="true"
        className="hidden sm:block w-full max-w-[151px] md:max-w-[251px] h-[9px] object-contain"
      />
      <h2 className="text-[24px] leading-8 font-[600] text-primary-mid text-center whitespace-nowrap">
        {title}
      </h2>
      <img
        src={orangeLine2}
        alt=""
        aria-hidden="true"
        className="hidden sm:block w-full max-w-[151px] md:max-w-[251px] h-[9px] object-contain"
      />
    </div>
  )
}

export default PropertiesResultsHeader
