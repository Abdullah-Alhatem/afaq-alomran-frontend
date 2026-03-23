import { useOutletContext } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  ACCOUNT_PAGE_KEYS,
  getAccountNavItems,
  getAccountPageMeta,
} from '@/components/account/accountLayoutConfig'

function useAccountPage() {
  const { t } = useTranslation()

  return (
    useOutletContext() ?? {
      accountPage: getAccountPageMeta(t, ACCOUNT_PAGE_KEYS.personalInfo),
      accountNavItems: getAccountNavItems(t),
    }
  )
}

export default useAccountPage
