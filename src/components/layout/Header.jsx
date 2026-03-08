import { useLocation } from 'react-router-dom'
import AuthHeader from './header/AuthHeader'
import MainHeader from './header/MainHeader'

const Header = () => {
  const location = useLocation()
  const isSignUp = location.pathname === '/sign-up'
  const isSignIn = location.pathname === '/sign-in'
  const isLoggedIn = false

  // const isLoggedIn = true

  return isSignIn || isSignUp ? (
    <AuthHeader isSignUp={isSignUp} />
  ) : (
    <MainHeader isLoggedIn={isLoggedIn} />
  )
}

export default Header
