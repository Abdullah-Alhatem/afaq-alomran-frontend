import { Link } from 'react-router-dom'

const MainHeaderCtaLinks = ({ isLoggedIn, mobile = false, onActionClick }) => {
  const loginClass = mobile
    ? 'h-11 rounded-lg border border-[#123E56] text-[#123E56] font-bold inline-flex items-center justify-center hover:bg-[#123E56] hover:text-white transition-all duration-200'
    : 'h-12 px-6 rounded-lg border-2 border-white text-white font-bold text-base leading-6 inline-flex items-center justify-center hover:bg-white hover:text-[#123E56] transition-all duration-200'

  const exploreClass = mobile
    ? 'h-11 rounded-lg bg-[#DE8556] text-white font-bold inline-flex items-center justify-center hover:bg-[#e59a71] transition-all duration-200'
    : 'h-12 px-5 rounded-lg bg-[#DE8556] text-white font-bold text-base leading-6 inline-flex items-center justify-center hover:bg-[#e59a71] transition-all duration-200'

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
