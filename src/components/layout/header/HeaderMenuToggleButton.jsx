import menuToggler from '../../../assets/MenuToggler/MenuTogler.png'
import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'

const HeaderMenuToggleButton = ({ onClick, className = '' }) => {
  const { i18n, t } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'

  return (
    <button
      type="button"
      className={cn(
        'inline-flex h-11 w-11 shrink-0 items-center justify-center lg:-mx-3',
        isRtl && 'order-last',
        className,
      )}
      onClick={onClick}
      aria-label={t('common.menu')}
    >
      <img
        src={menuToggler}
        alt=""
        aria-hidden="true"
        className={`h-full w-full object-contain ${isRtl ? '[transform:scaleX(-1)]' : ''}`}
      />
    </button>
  )
}

export default HeaderMenuToggleButton
