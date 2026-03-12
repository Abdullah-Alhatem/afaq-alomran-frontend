import PropertyCard from '@/components/cards/PropertyCard'
import ServiceCard from '@/components/cards/ServiceCard'
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  Phone,
  ChartColumn,
  BadgePercent,
  ChartPie,
} from 'lucide-react'
import { useState } from 'react'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [latestFilter, setLatestFilter] = useState('all')
  const [popularFilter, setPopularFilter] = useState('all')
  const latestProperties = [
    {
      id: 1,
      image: '/src/assets/images/roomCard.png',
      title: 'Warm and Cozy Apartment',
      location: 'Belia Gargen, California',
      beds: '1',
      baths: '1',
      sqft: '732',
      price: '4,321',
      status: 'For Sale',
    },
    {
      id: 2,
      image: '/src/assets/images/roomCard.png',
      title: 'Modern Family Home',
      location: 'Downtown District',
      beds: '3',
      baths: '2',
      sqft: '1,200',
      price: '6,500',
      status: 'For Sale',
    },
    {
      id: 3,
      image: '/src/assets/images/roomCard.png',
      title: 'Luxury Villa',
      location: 'Beverly Hills',
      beds: '5',
      baths: '4',
      sqft: '3,500',
      price: '12,000',
      status: 'For Sale',
    },
    {
      id: 4,
      image: '/src/assets/images/roomCard.png',
      title: 'Studio Apartment',
      location: 'City Center',
      beds: '1',
      baths: '1',
      sqft: '450',
      price: '2,100',
      status: 'For Sale',
    },
  ]

  const popularProperties = [
    {
      id: 5,
      image: '/src/assets/images/roomCard.png',
      title: 'Beach House Paradise',
      location: 'Miami Beach',
      beds: '4',
      baths: '3',
      sqft: '2,800',
      price: '8,900',
      status: 'For Sale',
    },
    {
      id: 6,
      image: '/src/assets/images/roomCard.png',
      title: 'Mountain Retreat',
      location: 'Aspen, Colorado',
      beds: '6',
      baths: '5',
      sqft: '4,200',
      price: '15,000',
      status: 'For Sale',
    },
    {
      id: 7,
      image: '/src/assets/images/roomCard.png',
      title: 'Urban Loft',
      location: 'New York City',
      beds: '2',
      baths: '2',
      sqft: '950',
      price: '5,200',
      status: 'For Sale',
    },
    {
      id: 8,
      image: '/src/assets/images/roomCard.png',
      title: 'Suburban Dream',
      location: 'Suburbs',
      beds: '3',
      baths: '2',
      sqft: '1,600',
      price: '3,800',
      status: 'For Sale',
    },
  ]

  const filterButtonBaseClasses =
    'px-6 py-3 rounded-full font-bold text-[16px] leading-6 transition-all duration-200 transform hover:scale-105 active:scale-95'

  const getFilterButtonClasses = (isActive) =>
    `${
      isActive
        ? 'bg-[#DE8556] text-white border-2 border-[#DE8556]'
        : 'bg-[#D9D9D9] text-[#8A8A8A] border-2 border-[#D7D7D7]'
    } ${filterButtonBaseClasses}`

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
    <main className="min-h-screen bg-white">
      {/* Section 1: Latest Listed Properties */}
      <section className="flex flex-col items-center px-4 md:px-16 py-10 gap-4 bg-white">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-30">
          <div className="flex flex-col items-start gap-2 w-full md:w-auto">
            <div className="flex flex-col items-start gap-2">
              <span
                className="text-[#DE8556] font-[500] text-[18px] leading-6"
                style={{ fontFamily: 'Cairo' }}
              >
                CHECKOUT OUR NEW
              </span>
              <h2
                className="text-[#181818] font-[700] text-[28px] md:text-[40px] leading-8 md:leading-10"
                style={{ fontFamily: 'Cairo' }}
              >
                Latest Listed Properties
              </h2>
            </div>
            <p
              className="text-[#5C5C5C] font-[500] text-[16px] md:text-[18px] leading-6 max-w-[899px]"
              style={{ fontFamily: 'Cairo' }}
            >
              Explore an exclusive selection of premium properties, meticulously curated to provide
              you with the best in luxury living and prime real estate investment options, tailored
              to your needs
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button
              className={getFilterButtonClasses(latestFilter === 'all')}
              style={{ fontFamily: 'Cairo' }}
              onClick={() => setLatestFilter('all')}
            >
              All
            </button>
            <button
              className={getFilterButtonClasses(latestFilter === 'sell')}
              style={{ fontFamily: 'Cairo' }}
              onClick={() => setLatestFilter('sell')}
            >
              For Sell
            </button>
            <button
              className={getFilterButtonClasses(latestFilter === 'buy')}
              style={{ fontFamily: 'Cairo' }}
              onClick={() => setLatestFilter('buy')}
            >
              To Buy
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12 w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            {latestProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                image={property.image}
                title={property.title}
                location={property.location}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                price={property.price}
                status={property.status}
              />
            ))}
          </div>

          <button className="flex items-center gap-4 px-8 py-4 border border-[#DE8556] rounded-lg text-[#DE8556] font-[700] text-[16px] leading-6 font-['Cairo'] hover:bg-[#DE8556] hover:text-white transition-colors">
            <span>See More</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Section 2: Our Most Popular Properties */}
      <section className="flex flex-col items-center px-4 md:px-16 py-10 gap-4 bg-white">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-32">
          <div className="flex flex-col items-start gap-2 w-full md:w-auto">
            <div className="flex flex-col items-start gap-2">
              <span
                className="text-[#DE8556] font-[500] text-[18px] leading-6"
                style={{ fontFamily: 'Cairo' }}
              >
                Popular Properties
              </span>
              <h2
                className="text-[#181818] font-[700] text-[28px] md:text-[40px] leading-8 md:leading-10"
                style={{ fontFamily: 'Cairo' }}
              >
                Our Most Popular Properties
              </h2>
            </div>
            <p
              className="text-[#5C5C5C] font-[500] text-[16px] md:text-[18px] leading-6 max-w-2xl"
              style={{ fontFamily: 'Cairo' }}
            >
              Browse the homes and investments that have captivated buyers and investors alike,
              offering outstanding deals and high demand.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button
              className={getFilterButtonClasses(popularFilter === 'all')}
              style={{ fontFamily: 'Cairo' }}
              onClick={() => setPopularFilter('all')}
            >
              All
            </button>
            <button
              className={getFilterButtonClasses(popularFilter === 'sell')}
              style={{ fontFamily: 'Cairo' }}
              onClick={() => setPopularFilter('sell')}
            >
              For Sell
            </button>
            <button
              className={getFilterButtonClasses(popularFilter === 'buy')}
              style={{ fontFamily: 'Cairo' }}
              onClick={() => setPopularFilter('buy')}
            >
              To Buy
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12 w-full max-w-7xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            {popularProperties.map((property) => (
              <PropertyCard
                key={`popular-${property.id}`}
                id={property.id}
                image={property.image}
                title={property.title}
                location={property.location}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                price={property.price}
                status={property.status}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-5 w-full">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="w-10 h-10 border border-[#7C7B7B] rounded-full flex items-center justify-center hover:border-[#DE8556] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#7C7B7B]" />
            </button>

            <div className="flex items-center gap-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-[#DE8556] w-4' : 'bg-[#D9D9D9]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentSlide(Math.min(3, currentSlide + 1))}
              className="w-10 h-10 border border-[#DE8556] rounded-full flex items-center justify-center hover:bg-[#DE8556] transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-[#DE8556]" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Our Services */}
      <section className="flex flex-col items-center px-4 md:px-16 py-10 gap-16 bg-[#F7F2EE]">
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

        <div className="flex flex-col justify-between items-center gap-8 md:gap-14 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 w-full">
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
      </section>
    </main>
  )
}

export default Home
