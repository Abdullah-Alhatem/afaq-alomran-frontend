import React from 'react'
import PropertySection from './PropertySection'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import roomCardImg from '@/assets/images/roomCard.png'

function LatestListedPropertiesSection() {
  const latestProperties = [
    {
      id: 1,
      image: roomCardImg,
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
      image: roomCardImg,
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
      image: roomCardImg,
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
      image: roomCardImg,
      title: 'Studio Apartment',
      location: 'City Center',
      beds: '1',
      baths: '1',
      sqft: '450',
      price: '2,100',
      status: 'For Sale',
    },
  ]

  return (
    <PropertySection
      badgeText="CHECKOUT OUR NEW"
      title="Latest Listed Properties"
      description={
        'Explore an exclusive selection of premium properties, meticulously curated to provide you with the best in luxury living and prime real estate investment options, tailored to your needs'
      }
      properties={latestProperties}
      cardKeyPrefix={'latest-'}
      footer={
        <Link
          to={`/properties`}
          className="flex items-center gap-4 px-8 py-4 border border-[#DE8556] rounded-lg text-[#DE8556] font-[700] text-[16px] leading-6 font-['Cairo'] hover:bg-[#DE8556] hover:text-white transition-colors"
        >
          <span>See More</span>
          <ArrowRight className="w-6 h-6" />
        </Link>
      }
    />
  )
}

export default LatestListedPropertiesSection
