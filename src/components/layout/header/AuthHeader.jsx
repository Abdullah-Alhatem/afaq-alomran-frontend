import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Popup from '../../ui/Popup'
import AuthHeaderActionLink from './AuthHeaderActionLink'
import HeaderMenuToggleButton from './HeaderMenuToggleButton'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './Logo'

const AuthHeader = ({ isSignUp }) => {
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-[124px] py-4 min-h-[88px] flex items-center justify-between sticky top-0 z-50 shadow-[0_2px_8px_0_rgba(131,139,180,0.12)] max-md:backdrop-blur-[40px] max-md:shadow-none">
        <Logo imageClassName="h-14" />

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden md:inline-flex" mobile />
          <HeaderMenuToggleButton className="md:hidden" onClick={() => setIsMobileMenuOpen(true)} />
          <AuthHeaderActionLink isSignUp={isSignUp} />
        </div>
      </header>

      <Popup
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        title={t('common.menu')}
      >
        <div className="flex flex-col gap-4">
          <LanguageSwitcher mobile />
          <AuthHeaderActionLink
            isSignUp={isSignUp}
            mobile
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </Popup>
    </>
  )
}

export default AuthHeader
