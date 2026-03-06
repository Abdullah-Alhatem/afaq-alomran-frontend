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
    <footer className="mt-14 bg-[#123E56] text-white shadow-[0px_4px_200px_0px_rgba(232,249,247,0.2)]">
      <div className="mx-auto w-full max-w-[1904px] px-6 py-6 lg:py-[72px]">
        <div className="grid gap-8 md:grid-cols-2 md:items-start lg:grid-cols-[328px_90px_90px_264px] lg:justify-between lg:gap-[72px]">
          <div className="w-full max-w-[328px]">
            <Link to="/" className="inline-flex">
              <img src={footerLogo} alt="AFFAQ" className="h-[72px] w-auto object-contain" />
            </Link>

            <p className="mt-2 text-[14px] leading-[22px] text-[#F8F8F8]">
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
                  <div className="text-[16px] leading-6">
                    <p className="text-[#DE8556] lg:text-white">{item.label}</p>
                    <div className="text-[#F8F8F8]">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <nav className="w-[90px]">
            <h3 className="text-[16px] font-bold leading-6 text-[#DE8556]">Company</h3>
            <div className="mt-4 flex flex-col gap-4">
              {companyLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-[16px] leading-6 text-white transition-colors hover:text-[#DE8556]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav className="w-[90px]">
            <h3 className="text-[16px] font-bold leading-6 text-[#DE8556]">Service</h3>
            <div className="mt-4 flex flex-col gap-4">
              {serviceLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-[16px] leading-6 text-white transition-colors hover:text-[#DE8556]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="max-w-[264px]">
            <h3 className="text-[16px] font-bold leading-6 text-[#DE8556]">Newsletter</h3>
            <p className="mt-3 text-[12px] leading-6 text-white">
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
                  className="h-10 w-full rounded-[4px] border border-[#D7D7D7] bg-transparent px-[15px] text-[14px] text-white outline-none placeholder:text-[#F8F8F8]"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] bg-[#DE8556] transition-colors hover:bg-[#D76838]"
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

            <p className="mt-4 text-[12px] font-semibold text-[#DE8556]">Social Account</p>
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

        <div className="mt-12 border-t border-[#DE8556] pt-6">
          <p className="text-center text-[16px] leading-6 text-[#F8F8F8]">
            �{new Date().getFullYear()} Afaaq. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
