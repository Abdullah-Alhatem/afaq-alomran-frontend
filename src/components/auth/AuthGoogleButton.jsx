import React from 'react'
import { useTranslation } from 'react-i18next'

import googleIcon from '@/assets/Auth/googleIcon.svg'
import { cn } from '@/lib/utils'

function AuthGoogleButton({ text, onClick, disabled = false, isLoading = false }) {
  const { t } = useTranslation()

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-busy={isLoading}
      className={cn(
        'mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-[10px] border border-grey-stroke bg-white text-[16px] font-bold text-grey-text-primary transition-opacity',
        disabled && 'cursor-not-allowed opacity-70',
      )}
    >
      {isLoading ? (
        <span
          aria-hidden="true"
          className="h-5 w-5 animate-spin rounded-full border-2 border-grey-dividers border-t-grey-text-primary"
        />
      ) : (
        <img src={googleIcon} alt="" aria-hidden="true" className="h-7 w-7" />
      )}
      {text ?? t('common.form.continueWithGoogle')}
    </button>
  )
}

export default AuthGoogleButton
