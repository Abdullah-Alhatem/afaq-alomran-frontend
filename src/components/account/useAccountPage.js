import { useOutletContext } from 'react-router-dom'

import { ACCOUNT_NAV_ITEMS, DEFAULT_ACCOUNT_PAGE } from '@/components/account/accountLayoutConfig'

function useAccountPage() {
  return (
    useOutletContext() ?? {
      accountPage: DEFAULT_ACCOUNT_PAGE,
      accountNavItems: ACCOUNT_NAV_ITEMS,
    }
  )
}

export default useAccountPage
