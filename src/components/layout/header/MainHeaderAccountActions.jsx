import { Bell, LogOut, UserRound } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useAuthStore from '@/stores/useAuthStore'

const MainHeaderAccountActions = ({ mobile = false, onActionClick }) => {
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()
  const logOut = useAuthStore((state) => state.logOut)
  const logoutLabel = (() => {
    const translatedValue = t('common.buttons.logOut')
    if (translatedValue !== 'common.buttons.logOut') {
      return translatedValue
    }

    return i18n.language === 'ar' ? 'تسجيل الخروج' : 'Log out'
  })()
  const notificationClass = mobile
    ? 'relative h-10 w-10 rounded-lg inline-flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200'
    : 'relative h-12 w-12 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-all duration-200'

  const accountClass = mobile
    ? 'h-10 w-10 rounded-lg inline-flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200'
    : 'h-12 rounded-lg inline-flex items-center gap-2 text-white font-bold text-base leading-6 hover:bg-white/10 transition-all duration-200'

  const logoutClass = mobile
    ? 'h-10 w-10 rounded-lg inline-flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200'
    : 'h-12 rounded-lg inline-flex items-center gap-2 px-3 text-white font-bold text-base leading-6 hover:bg-white/10 transition-all duration-200'

  function handleLogOut() {
    logOut()
    onActionClick?.()
    navigate('/')
  }

  return (
    <>
      <Link
        to="/my-account/notifications"
        onClick={onActionClick}
        className={notificationClass}
        aria-label={t('common.labels.notifications')}
      >
        <Bell size={mobile ? 25 : 20} strokeWidth={1.8} />
        <span className="absolute right-1.5 top-1.5 h-4 w-4 rounded-full bg-secondary-light text-[10px] font-bold leading-4 text-white text-center">
          6
        </span>
      </Link>
      <Link
        to="/my-account"
        onClick={onActionClick}
        className={accountClass}
        aria-label={mobile ? t('common.labels.myAccount') : undefined}
        id={mobile ? undefined : 'my-account-button-lg'}
      >
        <UserRound size={mobile ? 25 : 20} strokeWidth={1.8} />
        {mobile ? null : <span>{t('common.labels.myAccount')}</span>}
      </Link>
      <button type="button" onClick={handleLogOut} className={logoutClass} aria-label={logoutLabel}>
        <LogOut size={mobile ? 25 : 20} strokeWidth={1.8} />
        {mobile ? null : <span>{logoutLabel}</span>}
      </button>
    </>
  )
}

export default MainHeaderAccountActions
