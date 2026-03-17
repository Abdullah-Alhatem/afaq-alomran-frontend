import ServiceCard from '@/components/cards/ServiceCard'
import { Activity, ShoppingCart, Phone, ChartColumn, BadgePercent, ChartPie } from 'lucide-react'

function ServicesSection() {
  const services = [
    {
      icon: Activity,
      title: 'Property Management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      icon: ShoppingCart,
      title: 'Property Buying',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      icon: Phone,
      title: 'Consultation Service',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      icon: ChartColumn,
      title: 'Mortgage Service',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      icon: BadgePercent,
      title: 'Home Selling',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      icon: ChartPie,
      title: 'Escrow Service',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
  ]
  return (
    <section className="py-5 md:py-20 lg:py-24 bg-[#F7F2EE]">
      <div className="home-shell flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-[#DE8556] font-[500] text-[18px] leading-6 text-center"
            style={{ fontFamily: 'Cairo' }}
          >
            WE HELP FOR YOU
          </span>
          <h2
            className="text-[#0B090A] font-[700] text-[28px] md:text-[40px] leading-8 md:leading-10 text-center"
            style={{ fontFamily: 'Cairo' }}
          >
            OUR SERVICES
          </h2>
        </div>

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
