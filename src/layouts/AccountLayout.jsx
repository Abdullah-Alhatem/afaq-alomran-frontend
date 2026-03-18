import CoverSection from '@/components/CoverSection'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import AccountTabsNav from '@/components/account/AccountTabsNav'
import { ACCOUNT_NAV_ITEMS, DEFAULT_ACCOUNT_PAGE } from '@/components/account/accountLayoutConfig'
import { Outlet, useMatches } from 'react-router-dom'

function AccountLayout() {
  const matches = useMatches()
  const accountPageMatch = [...matches].reverse().find((match) => match.handle?.accountPage)
  const accountPage = accountPageMatch?.handle?.accountPage ?? DEFAULT_ACCOUNT_PAGE

  return (
    <div className="bg-white">
      <CoverSection title={accountPage.coverTitle} currentPage={accountPage.currentPage} />

      <AccountTabsNav />

      <main className="bg-white">
        <div className="home-shell py-8 md:py-10 lg:py-12">
          <Outlet context={{ accountPage, accountNavItems: ACCOUNT_NAV_ITEMS }} />
        </div>
      </main>

      <LookingForADreamBox />
    </div>
  )
}

export default AccountLayout
