import React from 'react'
import bgImage from '@/assets/images/bg-image.jpg'

function CoverSection({ title, currentPage, parentPage = 'Home' }) {
  return (
    <div
      className="flex flex-col justify-center items-start gap-4 px-40"
      style={{
        height: '248px',
        backgroundImage: `linear-gradient(0deg, rgba(6, 48, 83, 0.7), rgba(6, 48, 83, 0.7)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '25% 70%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1
        className="text-white font-bold"
        style={{
          height: '56px',
          fontFamily: 'Cairo',
          fontSize: '40px',
          lineHeight: '56px',
          fontWeight: '700',
        }}
      >
        {title}
      </h1>
      <p
        className="text-white"
        style={{
          width: '1037.98px',
          height: '41.87px',
          fontFamily: 'Plus Jakarta Sans',
          fontSize: '16px',
          lineHeight: '20px',
          display: 'flex',
          alignItems: 'center',
          fontWeight: '400',
        }}
      >
        {parentPage} / <span className="text-secondary-light">{currentPage}</span>
      </p>
    </div>
  )
}

export default CoverSection
