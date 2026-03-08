import { Link } from 'react-router-dom'
import logo from '../../../assets/Logo/LogoForSignUpAndSignIn.png'

const Logo = ({ className = '', imageClassName = 'h-10', logoSrc = logo }) => (
  <Link to="/" className={`flex items-center gap-2 cursor-pointer group ${className}`}>
    <div className="flex items-center gap-1.5">
      <img
        src={logoSrc}
        alt="Afaaq Logo"
        className={`${imageClassName} w-auto object-contain`}
        referrerPolicy="no-referrer"
        onError={(e) => {
          // If the image fails, we'll hide it and show a text-based logo as fallback
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
      />
    </div>
  </Link>
)

export default Logo
