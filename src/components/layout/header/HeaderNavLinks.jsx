import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NAV_ITEMS = [
  { to: '/', labelKey: 'header.nav.home', end: true },
  { to: '/about', labelKey: 'header.nav.about' },
  { to: '/properties', labelKey: 'header.nav.properties' },
  { to: '/faqs', labelKey: 'header.nav.faqs' },
  { to: '/contact-us', labelKey: 'header.nav.contact' },
]

const HeaderNavLinks = ({ navLinkClass, onItemClick }) => {
  const { t } = useTranslation()

  return (
    <>
      {NAV_ITEMS.map(({ to, labelKey, end }) => (
        <NavLink key={to} to={to} end={end} className={navLinkClass} onClick={onItemClick}>
          {t(labelKey)}
        </NavLink>
      ))}
    </>
  )
}

export default HeaderNavLinks
