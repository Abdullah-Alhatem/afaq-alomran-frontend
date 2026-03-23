import { useTranslation } from 'react-i18next'

import HomeSectionIntro from '@/components/home/HomeSectionIntro'

function PortfolioSectionHeading({ eyebrow, title, className }) {
  const { t } = useTranslation()

  return (
    <HomeSectionIntro
      align="center"
      eyebrow={eyebrow ?? t('home.portfolios.eyebrow')}
      title={title ?? t('home.portfolios.title')}
      eyebrowClassName="text-sm uppercase tracking-[0.08em] md:text-[18px]"
      className={className}
    />
  )
}

export default PortfolioSectionHeading
