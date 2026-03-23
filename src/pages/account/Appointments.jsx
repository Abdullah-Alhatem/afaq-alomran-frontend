import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import AccountEmptyState from '@/components/account/AccountEmptyState'
import ApartmentCard from '@/components/cards/ApartmentCard'
import { useAppointmentsQuery, useCancelAppointmentMutation } from '@/lib/fake-api/hooks'

function Appointments() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { data: appointments = [] } = useAppointmentsQuery()
  const cancelAppointmentMutation = useCancelAppointmentMutation()

  function handleCancel(appointmentId) {
    cancelAppointmentMutation.mutate(appointmentId)
  }

  function handleOpenMap() {
    navigate('/map')
  }

  if (appointments.length === 0) {
    return (
      <AccountEmptyState
        title={t('account.profile.emptyAppointmentsTitle')}
        description={t('account.profile.emptyAppointmentsDescription')}
      />
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
