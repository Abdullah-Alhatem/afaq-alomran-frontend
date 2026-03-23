import React from 'react'
import { useTranslation } from 'react-i18next'

function AuthDivider({ text }) {
  const { t } = useTranslation()

  return (
    <div className="my-7 flex items-center gap-4">
      <div className="h-px flex-1 bg-grey-stroke" />
      <span className="text-[14px] font-semibold text-grey-text-tertiary">
        {text ?? t('common.form.or')}
      </span>
      <div className="h-px flex-1 bg-grey-stroke" />
    </div>
  )
}

export default AuthDivider
