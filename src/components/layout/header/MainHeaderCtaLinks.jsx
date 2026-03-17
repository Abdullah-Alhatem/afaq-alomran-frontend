import { Link } from 'react-router-dom'

const MainHeaderCtaLinks = ({ isLoggedIn, mobile = false, onActionClick }) => {
  const loginClass = mobile
    ? 'h-11 rounded-lg border border-primary-mid text-primary-mid font-bold inline-flex items-center justify-center hover:bg-primary-mid hover:text-white transition-all duration-200'
    : 'h-12 px-6 rounded-lg border-2 border-white text-white font-bold text-body inline-flex items-center justify-center hover:bg-white hover:text-primary-mid transition-all duration-200'

  const exploreClass = mobile
    ? 'h-11 rounded-lg bg-secondary-light text-white font-bold inline-flex items-center justify-center hover:bg-secondary-lighter transition-all duration-200'
    : 'h-12 px-5 rounded-lg bg-secondary-light text-white font-bold text-body inline-flex items-center justify-center hover:bg-secondary-lighter transition-all duration-200'

  return (
    <>
      {isLoggedIn ? null : (
        <Link
          to="/sign-in"
          onClick={onActionClick}
          className={loginClass}
          id={mobile ? undefined : 'login-button-lg'}
        >
          Log in
        </Link>
      )}

      <Link
        to="/properties"
        onClick={onActionClick}
        className={exploreClass}
        id={mobile ? undefined : 'explore-button-lg'}
      >
        Explore Properties
      </Link>
    </>
  )
}

export default MainHeaderCtaLinks
