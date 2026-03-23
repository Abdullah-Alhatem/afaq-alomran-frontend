import CoverSection from '@/components/CoverSection'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import AccountTabsNav from '@/components/account/AccountTabsNav'
import {
  ACCOUNT_PAGE_KEYS,
  getAccountNavItems,
  getAccountPageMeta,
} from '@/components/account/accountLayoutConfig'
import { useTranslation } from 'react-i18next'
import { Outlet, useMatches } from 'react-router-dom'

function AccountLayout() {
  const { t } = useTranslation()
  const matches = useMatches()
  const accountPageMatch = [...matches].reverse().find((match) => match.handle?.accountPageKey)
  const accountPageKey = accountPageMatch?.handle?.accountPageKey ?? ACCOUNT_PAGE_KEYS.personalInfo
  const accountPage = getAccountPageMeta(t, accountPageKey)
  const accountNavItems = getAccountNavItems(t)

  return (
    <div className="bg-white">
      <CoverSection title={accountPage.coverTitle} currentPage={accountPage.currentPage} />

      <AccountTabsNav />

      <main className="bg-white">
        <div className="home-shell py-8 md:py-10 lg:py-12">
          <Outlet context={{ accountPage, accountNavItems }} />
        </div>
      </main>

      <LookingForADreamBox />
    </div>
  )
}

export default AccountLayout
