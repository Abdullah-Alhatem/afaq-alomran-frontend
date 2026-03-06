import { Bell, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

const MainHeaderAccountActions = ({ mobile = false, onActionClick }) => {
  const notificationClass = mobile
    ? 'relative h-10 w-10 rounded-lg inline-flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200'
    : 'relative h-12 w-12 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-all duration-200'

  const accountClass = mobile
    ? 'h-10 w-10 rounded-lg inline-flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200'
    : 'h-12 rounded-lg inline-flex items-center gap-2 text-white font-bold text-base leading-6 hover:bg-white/10 transition-all duration-200'

  return (
    <>
      <Link
        to="/my-account/notifications"
        onClick={onActionClick}
        className={notificationClass}
        aria-label="Notifications"
      >
        <Bell size={mobile ? 25 : 20} strokeWidth={1.8} />
        <span className="absolute right-1.5 top-1.5 h-4 w-4 rounded-full bg-[#DE8556] text-[10px] font-bold leading-4 text-white text-center">
          6
        </span>
      </Link>
      <Link
        to="/my-account"
        onClick={onActionClick}
        className={accountClass}
        aria-label={mobile ? 'My Account' : undefined}
        id={mobile ? undefined : 'my-account-button-lg'}
      >
        <UserRound size={mobile ? 25 : 20} strokeWidth={1.8} />
        {mobile ? null : <span>My Account</span>}
      </Link>
    </>
  )
}

export default MainHeaderAccountActions
