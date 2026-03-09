import { Link } from 'react-router-dom'
import callIcon from '../../assets/Footer/Call.png'
import fbIcon from '../../assets/Footer/FB.png'
import igIcon from '../../assets/Footer/IG.png'
import footerLogo from '../../assets/Footer/Logo.png'
import locationIcon from '../../assets/Footer/location (3) 1.png'
import messageIcon from '../../assets/Footer/Message.png'
import sendIcon from '../../assets/Footer/Button.png'
import waIcon from '../../assets/Footer/WA.png'

function Footer() {
  const companyLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/properties', label: 'Shop' },
    { to: '/wishlist', label: 'Wishlist' },
    { to: '/portfolio', label: 'Portfolio' },
  ]

  const serviceLinks = [
    { to: '/sign-in', label: 'Login' },
    { to: '/sign-up', label: 'Register' },
    { to: '/contact-us', label: 'Location' },
    { to: '/faqs', label: 'FAQ' },
    { to: '/news', label: 'News' },
  ]

  const socialLinks = [
    { href: '#', icon: fbIcon, label: 'Facebook' },
    { href: '#', icon: igIcon, label: 'Instagram' },
    { href: '#', icon: waIcon, label: 'WhatsApp' },
  ]

  const contactItems = [
    {
      icon: callIcon,
      label: 'Phone',
      content: (
        <a href="tel:+9647700000000" className="transition-colors hover:text-white">
          (208) 555-0112
        </a>
      ),
    },
    {
      icon: messageIcon,
      label: 'Email',
      content: (
        <a href="mailto:homeq.example@gmail.com" className="transition-colors hover:text-white">
          homeq.example@gmail.com
        </a>
      ),
    },
    {
      icon: locationIcon,
      label: 'Address',
      content: <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>,
    },
  ]

  return (
    <footer className="bg-primary-mid text-white shadow-[0px_4px_200px_0px_rgba(232,249,247,0.2)]">
      <div className="mx-auto w-full max-w-[1904px] px-6 py-6 lg:py-[72px]">
        <div className="grid gap-8 md:grid-cols-2 md:items-start lg:grid-cols-[328px_90px_90px_264px] lg:justify-between lg:gap-[72px]">
          <div className="w-full max-w-[328px]">
            <Link to="/" className="inline-flex">
              <img src={footerLogo} alt="AFFAQ" className="h-[72px] w-auto object-contain" />
            </Link>

            <p className="mt-2 text-body-sm text-white/95">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>

            <div className="mt-1 space-y-[6px]">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                  />
                  <div className="text-body">
                    <p className="text-secondary-light lg:text-white">{item.label}</p>
                    <div className="text-white/95">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <nav className="w-[90px]">
            <h3 className="text-body font-bold text-secondary-light">Company</h3>
            <div className="mt-4 flex flex-col gap-4">
              {companyLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-body text-white transition-colors hover:text-secondary-light"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav className="w-[90px]">
            <h3 className="text-body font-bold text-secondary-light">Service</h3>
            <div className="mt-4 flex flex-col gap-4">
              {serviceLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-body text-white transition-colors hover:text-secondary-light"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="max-w-[264px]">
            <h3 className="text-body font-bold text-secondary-light">Newsletter</h3>
            <p className="mt-3 text-caption text-white">
              Subscribe to our newsletter and receive updates via email
            </p>

            <form className="mt-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email Address
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email Address"
                  className="h-10 w-full rounded-sm border border-grey-stroke bg-transparent px-[15px] text-body-sm text-white outline-none placeholder:text-white/95"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-secondary-light transition-colors hover:bg-secondary"
                >
                  <img
                    src={sendIcon}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
            </form>

            <p className="mt-4 text-label font-semibold text-secondary-light">Social Account</p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="inline-flex h-6 w-6 items-center justify-center transition-opacity hover:opacity-80"
                >
                  <img
                    src={link.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-6 w-6 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t-2 border-secondary-light pt-6">
          <p className="text-center text-body text-white/95">
            ©{new Date().getFullYear()} Afaaq. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
