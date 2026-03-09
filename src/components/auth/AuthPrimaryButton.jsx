import React from 'react'

import { cn } from '@/lib/utils'

function AuthPrimaryButton({ type = 'button', className, children }) {
  return (
    <button
      type={type}
      className={cn(
        'h-14 w-full rounded-[10px] bg-primary text-[16px] font-semibold text-white',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default AuthPrimaryButton
