import React from 'react'
import { Check } from 'lucide-react'

function CheckItem({ checked, label, rightText, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-3 text-left"
    >
      <div className="flex items-center gap-3">
        <span
          className={[
            'h-6 w-6 rounded-[6px] border border-grey-stroke flex items-center justify-center shrink-0',
            checked ? 'bg-secondary-light border-secondary-light' : 'bg-grey-disabled-bg',
          ].join(' ')}
          aria-hidden="true"
        >
          {checked ? <Check className="h-4 w-4 text-white" strokeWidth={3} /> : null}
        </span>
        <span className="text-[16px] leading-6 font-[500] text-grey-text-secondary">{label}</span>
      </div>
      <span className="text-[16px] leading-6 font-[500] text-grey-text-secondary">{rightText}</span>
    </button>
  )
}

export default CheckItem
