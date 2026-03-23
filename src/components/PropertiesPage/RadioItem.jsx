import React from 'react'

function RadioItem({ checked, label, rightText, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="w-full flex items-center justify-between gap-3 text-start"
    >
      <div className="flex items-center gap-3">
        <span
          className={[
            'h-5 w-5 rounded-full border border-grey-stroke flex items-center justify-center shrink-0',
            checked ? 'bg-secondary-light border-secondary-light' : 'bg-white',
          ].join(' ')}
          aria-hidden="true"
        >
          <span
            className={['h-2 w-2 rounded-full', checked ? 'bg-white' : 'bg-transparent'].join(' ')}
          />
        </span>
        <span className="text-[16px] leading-6 font-[500] text-grey-text-secondary">{label}</span>
      </div>
      {rightText ? (
        <span className="text-[16px] leading-6 font-[500] text-grey-text-secondary">
          {rightText}
        </span>
      ) : null}
    </button>
  )
}

export default RadioItem
