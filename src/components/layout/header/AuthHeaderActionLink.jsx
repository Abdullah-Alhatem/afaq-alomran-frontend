import { Link } from 'react-router-dom'

const AuthHeaderActionLink = ({ isSignUp, mobile = false, onClick }) => {
  const action = isSignUp
    ? {
        to: '/sign-in',
        label: 'Log In',
        desktopId: 'login-button',
        mobileId: 'mobile-login-button',
      }
    : {
        to: '/sign-up',
        label: 'Sign Up',
        desktopId: 'signup-button',
        mobileId: 'mobile-signup-button',
      }

  const className = mobile
    ? 'h-11 rounded-lg border border-primary-mid text-primary-mid font-bold inline-flex items-center justify-center w-full hover:bg-primary-mid hover:text-white transition-all duration-200'
    : 'hidden md:inline-flex px-6 py-3 border-2 border-primary-mid text-primary-mid font-bold text-body rounded-lg hover:bg-primary-mid hover:text-white transition-all duration-200 active:scale-95'

  return (
    <Link
      to={action.to}
      onClick={onClick}
      className={className}
      id={mobile ? action.mobileId : action.desktopId}
    >
      {action.label}
    </Link>
  )
}

export default AuthHeaderActionLink
