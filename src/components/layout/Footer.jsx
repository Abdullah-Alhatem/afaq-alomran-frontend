import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import callIcon from '../../assets/Footer/Call.png'
import fbIcon from '../../assets/Footer/FB.png'
import igIcon from '../../assets/Footer/IG.png'
import footerLogo from '../../assets/Footer/Logo.png'
import locationIcon from '../../assets/Footer/location (3) 1.png'
import messageIcon from '../../assets/Footer/Message.png'
import sendIcon from '../../assets/Footer/Button.png'
import waIcon from '../../assets/Footer/WA.png'
import { useNewsletterSubscriptionMutation, useSiteSettingsQuery } from '@/lib/fake-api/hooks'

const FOOTER_FACEBOOK_URL = 'https://www.facebook.com/share/18H8RM7xw5/'
const FOOTER_EMAIL = 'afaq.alomran1@gmail.com'
const FOOTER_EMAIL_HREF = `mailto:${FOOTER_EMAIL}`

function Footer() {
  const { t } = useTranslation()
  const { data: siteSettings } = useSiteSettingsQuery()
  const newsletterMutation = useNewsletterSubscriptionMutation()

  const companyLinks = [
    { to: '/', label: t('footer.companyLinks.home') },
    { to: '/about', label: t('footer.companyLinks.about') },
    { to: '/properties', label: t('footer.companyLinks.projects') },
    { to: '/agents', label: t('footer.companyLinks.agents') },
    { to: '/portfolios', label: t('footer.companyLinks.portfolios') },
  ]

  const serviceLinks = [
    { to: '/contact-us', label: t('footer.serviceLinks.contact') },
    { to: '/faqs', label: t('footer.serviceLinks.faqs') },
    { to: '/map', label: t('footer.serviceLinks.map') },
    { to: '/sign-in', label: t('footer.serviceLinks.login') },
    { to: '/sign-up', label: t('footer.serviceLinks.register') },
  ]

  const socialLinks = [
    {
      href: FOOTER_FACEBOOK_URL,
      icon: fbIcon,
      label: t('agents.social.facebook'),
    },
    {
      href: siteSettings.socialLinks.instagram,
      icon: igIcon,
      label: t('agents.social.instagram'),
    },
    {
      href: siteSettings.socialLinks.whatsapp,
      icon: waIcon,
      label: t('agents.social.whatsapp'),
    },
  ]

  const contactItems = [
    {
      icon: callIcon,
      label: t('footer.contact.phone'),
      content: (
        <a
          href={siteSettings.contact.footerPhoneHref}
          className="transition-colors hover:text-white"
        >
          {siteSettings.contact.footerPhoneLabel}
        </a>
      ),
    },
    {
      icon: messageIcon,
      label: t('footer.contact.email'),
      content: (
        <a href={FOOTER_EMAIL_HREF} className="transition-colors hover:text-white">
          {FOOTER_EMAIL}
        </a>
      ),
    },
    {
      icon: locationIcon,
      label: t('footer.contact.address'),
      content: <p>{siteSettings.contact.footerAddress}</p>,
    },
  ]

  async function handleNewsletterSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    await newsletterMutation.mutateAsync({
      email: formData.get('email'),
    })
    event.currentTarget.reset()
  }

  return (
    <footer className="bg-primary-mid text-white shadow-[0px_4px_200px_0px_rgba(232,249,247,0.2)]">
      <div className="mx-auto w-full max-w-[1904px] px-6 py-6 lg:py-[72px]">
        <div className="grid gap-8 md:grid-cols-2 md:items-start lg:grid-cols-[328px_90px_90px_264px] lg:justify-between lg:gap-[72px]">
          <div className="w-full max-w-[328px]">
            <Link to="/" className="inline-flex">
              <img src={footerLogo} alt="AFFAQ" className="h-[72px] w-auto object-contain" />
            </Link>

            <p className="mt-2 text-body-sm text-white/95">{t('footer.description')}</p>

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
            <h3 className="text-body font-bold text-secondary-light">
              {t('footer.titles.company')}
            </h3>
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
            <h3 className="text-body font-bold text-secondary-light">
              {t('footer.titles.service')}
            </h3>
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
            <h3 className="text-body font-bold text-secondary-light">
              {t('footer.titles.newsletter')}
            </h3>
            <p className="mt-3 text-caption text-white">{t('footer.newsletterDescription')}</p>

            <form className="mt-2" onSubmit={handleNewsletterSubmit}>
              <label htmlFor="newsletter-email" className="sr-only">
                {t('common.fields.newsletterPlaceholder')}
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  placeholder={t('common.fields.newsletterPlaceholder')}
                  className="h-10 w-full rounded-sm border border-grey-stroke bg-transparent px-[15px] text-body-sm text-white outline-none placeholder:text-white/95"
                />
                <button
                  type="submit"
                  disabled={newsletterMutation.isPending}
                  aria-label={t('footer.send')}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-secondary-light transition-colors hover:bg-secondary"
                >
                  <img
                    src={sendIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-contain"
                  />
                </button>
              </div>
            </form>

            <p className="mt-4 text-label font-semibold text-secondary-light">
              {t('footer.titles.socialAccount')}
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
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
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
