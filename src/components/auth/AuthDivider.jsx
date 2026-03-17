import React from 'react'

function AuthDivider({ text = 'or' }) {
  return (
    <div className="my-7 flex items-center gap-4">
      <div className="h-px flex-1 bg-grey-stroke" />
      <span className="text-[14px] font-semibold text-grey-text-tertiary">{text}</span>
      <div className="h-px flex-1 bg-grey-stroke" />
    </div>
  )
}

export default AuthDivider
