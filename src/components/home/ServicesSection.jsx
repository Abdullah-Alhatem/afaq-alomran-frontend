import ServiceCard from '@/components/cards/ServiceCard'
import { Activity, ShoppingCart, Phone, ChartColumn, BadgePercent, ChartPie } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import HomeSectionIntro from './HomeSectionIntro'
import { HOME_SECTION_PADDING_CLASSNAME } from './homeSectionStyles'

function ServicesSection() {
  const { t } = useTranslation()
  const services = [
    {
      icon: Activity,
      ...t('home.services.items.0', { returnObjects: true }),
    },
    {
      icon: ShoppingCart,
      ...t('home.services.items.1', { returnObjects: true }),
    },
    {
      icon: Phone,
      ...t('home.services.items.2', { returnObjects: true }),
    },
    {
      icon: ChartColumn,
      ...t('home.services.items.3', { returnObjects: true }),
    },
    {
      icon: BadgePercent,
      ...t('home.services.items.4', { returnObjects: true }),
    },
    {
      icon: ChartPie,
      ...t('home.services.items.5', { returnObjects: true }),
    },
  ]
  return (
    <section className={`${HOME_SECTION_PADDING_CLASSNAME} bg-[#F7F2EE]`}>
      <div className="home-shell flex flex-col items-center gap-16">
        <HomeSectionIntro
          align="center"
          eyebrow={t('home.services.eyebrow')}
          title={t('home.services.title')}
        />

        <div className="flex flex-col justify-between items-center gap-8 md:gap-14 w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-14 w-full">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
