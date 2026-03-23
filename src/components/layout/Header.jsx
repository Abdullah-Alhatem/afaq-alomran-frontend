import { useLocation } from 'react-router-dom'
import useAuthStore from '@/stores/useAuthStore'
import AuthHeader from './header/AuthHeader'
import MainHeader from './header/MainHeader'

const Header = () => {
  const location = useLocation()
  const authRoutes = ['/sign-in', '/sign-up', '/forgot-password', '/create-new-password']
  const isSignUp = location.pathname === '/sign-up'
  const isAuthRoute = authRoutes.includes(location.pathname)
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

  return isAuthRoute ? <AuthHeader isSignUp={isSignUp} /> : <MainHeader isLoggedIn={isLoggedIn} />
}

export default Header
