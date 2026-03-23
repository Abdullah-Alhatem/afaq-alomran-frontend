import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'

function DirectionalArrowIcon({ className = '', strokeWidth = 2 }) {
  const { i18n } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn(className)} fill="none">
      <path
        d={isRtl ? 'M19 12H5m5-5-5 5 5 5' : 'M5 12h14m-5-5 5 5-5 5'}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DirectionalArrowIcon
