import { useTranslation } from 'react-i18next'

import { useHomePortfoliosQuery } from '@/lib/fake-api/hooks'
import SectionActionLink from '@/components/common/SectionActionLink'
import PortfolioGrid from '@/components/Portfolios/PortfolioGrid'
import PortfolioSectionHeading from '@/components/Portfolios/PortfolioSectionHeading'
import { HOME_SECTION_PADDING_CLASSNAME } from './homeSectionStyles'

function PortfoliosSection() {
  const { t } = useTranslation()
  const { data: homePortfolioItems = [] } = useHomePortfoliosQuery()

  return (
    <section className={HOME_SECTION_PADDING_CLASSNAME}>
      <div className="home-shell">
        <PortfolioSectionHeading />

        <PortfolioGrid items={homePortfolioItems} />

        <div className="mt-8 flex justify-center md:mt-10">
          <SectionActionLink to="/portfolios">{t('common.buttons.seeAll')}</SectionActionLink>
        </div>
      </div>
    </section>
  )
}

export default PortfoliosSection
