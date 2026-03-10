import React from 'react'

const AuthPageBox = ({ imageSrc, imageAlt, children }) => {
  return (
    <section className="mx-auto w-full max-w-[1288px] overflow-hidden rounded-[28px] bg-white shadow-[0_8px_20px_rgba(7,46,69,0.08)]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex w-full px-6 py-10 sm:px-10 lg:px-[72px] lg:py-[62px] mx-auto">
          <div className="w-full lg:max-w-[520px]">{children}</div>
        </div>

        <div className="flex items-center justify-center px-6 pb-10 pt-0">
          <div className="max-w-[500px] max-h-[500px]">
            <img src={imageSrc} alt={imageAlt} className={`h-full w-full object-contain`} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthPageBox
