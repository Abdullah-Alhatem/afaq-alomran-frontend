import PropertySection from './PropertySection'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import roomCardImg from '@/assets/images/roomCard.png'

function OurMostPopularPropertiesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const popularProperties = [
    {
      id: 5,
      image: roomCardImg,
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
      image: roomCardImg,
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
      image: roomCardImg,
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
      image: roomCardImg,
      title: 'Suburban Dream',
      location: 'Suburbs',
      beds: '3',
      baths: '2',
      sqft: '1,600',
      price: '3,800',
      status: 'For Sale',
    },
  ]

  return (
    <PropertySection
      badgeText="Popular Properties"
      title="Our Most Popular Properties"
      description={
        'Browse the homes and investments that have captivated buyers and investors alike, offering outstanding deals and high demand.'
      }
      properties={popularProperties}
      cardKeyPrefix={'popular-'}
      footer={
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
      }
    />
  )
}

export default OurMostPopularPropertiesSection
