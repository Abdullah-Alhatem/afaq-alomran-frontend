import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../../../assets/Logo/logo.svg'

const Logo = ({ className = '', imageClassName = 'h-10', logoSrc = logo }) => {
  const { t } = useTranslation()

  return (
    <Link to="/" className={`flex items-center gap-2 cursor-pointer group ${className}`}>
      <div className="flex items-center gap-1.5">
        <img
          src={logoSrc}
          alt={`${t('common.appName')} logo`}
          className={`${imageClassName} w-auto object-contain`}
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
      </div>
    </Link>
  )
}

export default Logo
