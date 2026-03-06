import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/properties', label: 'Our Properties' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact-us', label: 'Contact' },
]

const HeaderNavLinks = ({ navLinkClass, onItemClick }) => (
  <>
    {NAV_ITEMS.map(({ to, label, end }) => (
      <NavLink key={to} to={to} end={end} className={navLinkClass} onClick={onItemClick}>
        {label}
      </NavLink>
    ))}
  </>
)

export default HeaderNavLinks
