import CoverSection from '@/components/CoverSection'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import PortfolioDetailsContent from '@/components/Portfolios/PortfolioDetailsContent'
import { usePortfolioDetailsQuery } from '@/lib/fake-api/hooks'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound'

function PortfolioDetails() {
  const { t } = useTranslation()
  const { portfolioId } = useParams()
  const { data: portfolio } = usePortfolioDetailsQuery(portfolioId)

  if (!portfolio) {
    return <NotFound />
  }

  return (
    <>
      <CoverSection
        title={t('portfolios.details.coverTitle')}
        currentPage={t('portfolios.details.currentPage')}
      />
      <PortfolioDetailsContent portfolio={portfolio} />
      <LookingForADreamBox background="bg-white" />
    </>
  )
}

export default PortfolioDetails
