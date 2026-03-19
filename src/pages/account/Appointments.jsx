import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import apartmentCardImage from '@/assets/images/apartmentCard.png'
import portfolioListImageOne from '@/assets/PropertyDetails/PortfolioList1.png'
import portfolioListImageThree from '@/assets/PropertyDetails/PortfolioList3.png'
import ApartmentCard from '@/components/cards/ApartmentCard'

const INITIAL_APPOINTMENTS = [
  {
    id: 1,
    image: apartmentCardImage,
    title: 'Warm and Cozy Apartment',
    location: 'Belia Gargen, California',
    area: '732 sq ft',
    baths: '1 bath',
    beds: '1 bed',
    price: 400000,
    dateLabel: 'Saturday, 14 Oct 2024',
    timeLabel: '4:30 PM',
  },
  {
    id: 2,
    image: portfolioListImageOne,
    title: 'Warm and Cozy Apartment',
    location: 'Belia Gargen, California',
    area: '732 sq ft',
    baths: '1 bath',
    beds: '1 bed',
    price: 400000,
    dateLabel: 'Saturday, 14 Oct 2024',
    timeLabel: '4:30 PM',
  },
  {
    id: 3,
    image: portfolioListImageThree,
    title: 'Warm and Cozy Apartment',
    location: 'Belia Gargen, California',
    area: '732 sq ft',
    baths: '1 bath',
    beds: '1 bed',
    price: 400000,
    dateLabel: 'Saturday, 14 Oct 2024',
    timeLabel: '4:30 PM',
  },
]

function Appointments() {
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState(INITIAL_APPOINTMENTS)

  function handleCancel(appointmentId) {
    setAppointments((currentAppointments) =>
      currentAppointments.filter((appointment) => appointment.id !== appointmentId),
    )
  }

  function handleOpenMap() {
    navigate('/map')
  }

  if (appointments.length === 0) {
    return (
      <section className="rounded-[24px] border border-[#E8EEF3] bg-[#ECF1F6] px-6 py-12 text-center sm:px-8">
        <h2 className="text-[24px] font-bold text-grey-text-primary">No appointments left</h2>
        <p className="mt-3 text-[16px] leading-7 text-grey-text-secondary">
          Cancelled appointments are removed from this list. Book a new property visit any time.
        </p>
      </section>
    )
  }

  return (
    <section className="space-y-5 sm:space-y-6 lg:space-y-9">
      {appointments.map((appointment) => (
        <ApartmentCard
          key={appointment.id}
          image={appointment.image}
          title={appointment.title}
          location={appointment.location}
          area={appointment.area}
          baths={appointment.baths}
          beds={appointment.beds}
          price={appointment.price}
          dateLabel={appointment.dateLabel}
          timeLabel={appointment.timeLabel}
          onCancel={() => handleCancel(appointment.id)}
          onOpenMap={handleOpenMap}
        />
      ))}
    </section>
  )
}

export default Appointments
