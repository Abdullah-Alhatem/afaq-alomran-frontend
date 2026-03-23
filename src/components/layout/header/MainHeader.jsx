import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import logoForOtherPages from '../../../assets/Logo/logo(Light).svg'
import { cn } from '@/lib/utils'
import Popup from '../../ui/Popup'
import HeaderNavLinks from './HeaderNavLinks'
import HeaderMenuToggleButton from './HeaderMenuToggleButton'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './Logo'
import MainHeaderAccountActions from './MainHeaderAccountActions'
import MainHeaderCtaLinks from './MainHeaderCtaLinks'

const MainHeader = ({ isLoggedIn }) => {
  const { t, i18n } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isRtl = i18n.dir() === 'rtl'

  const navLinkClass = ({ isActive }) =>
    `px-6 h-10 inline-flex items-center justify-center rounded-lg text-lg leading-none transition-all duration-200 ${
      isActive
        ? 'bg-secondary-light text-white font-bold'
        : 'text-white font-medium hover:bg-white/10'
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `h-11 px-4 rounded-lg inline-flex items-center justify-start text-base transition-all duration-200 ${
      isActive
        ? 'bg-primary-mid text-white font-bold'
        : 'text-primary-mid font-medium hover:bg-slate-100'
    }`

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-primary-mid backdrop-blur-[40px]">
        <div
          className={cn(
            'mx-auto flex h-[88px] w-full items-center justify-between lg:px-8',
            isRtl ? 'pl-2 pr-4 sm:pl-2 sm:pr-6' : 'pl-4 pr-2 sm:pl-6 sm:pr-2',
          )}
        >
          <div className="flex w-full items-center justify-between gap-10 lg:w-auto lg:justify-normal">
            <Logo imageClassName="h-11" logoSrc={logoForOtherPages} />

            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <div className="flex items-center gap-2 lg:hidden">
                  <MainHeaderAccountActions mobile />
                </div>
              ) : null}
              <HeaderMenuToggleButton
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              />
            </div>
            <nav className="hidden xl:flex items-center gap-2">
              <HeaderNavLinks navLinkClass={navLinkClass} />
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher className="hidden xl:inline-flex" />
            {isLoggedIn ? <MainHeaderAccountActions /> : null}
            <MainHeaderCtaLinks isLoggedIn={isLoggedIn} />
            <HeaderMenuToggleButton
              className="xl:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          </div>
        </div>
      </header>

      <Popup
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        title={t('common.menu')}
      >
        <div className="flex flex-col gap-3">
          <LanguageSwitcher mobile />
          <nav className="flex flex-col gap-2">
            <HeaderNavLinks
              navLinkClass={mobileNavLinkClass}
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
          </nav>

          <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-4 lg:hidden">
            <MainHeaderCtaLinks
              isLoggedIn={isLoggedIn}
              mobile
              onActionClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      </Popup>
    </>
  )
}

export default MainHeader
