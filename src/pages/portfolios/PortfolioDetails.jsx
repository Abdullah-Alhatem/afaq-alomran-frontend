import CoverSection from '@/components/CoverSection'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import PortfolioDetailsContent from '@/components/Portfolios/PortfolioDetailsContent'

function PortfolioDetails() {
  return (
    <>
      <CoverSection title="Portfolio Details" currentPage="Portfolio Details" />
      <PortfolioDetailsContent />
      <LookingForADreamBox background="bg-white" />
    </>
  )
}

export default PortfolioDetails
