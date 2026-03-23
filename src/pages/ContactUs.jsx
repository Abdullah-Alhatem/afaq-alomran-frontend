import CoverSection from '@/components/CoverSection'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import ServiceCard from '@/components/cards/ServiceCard'
import PropertyAgentForm from '@/components/forms/PropertyAgentForm'
import { useSiteSettingsQuery } from '@/lib/fake-api/hooks'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function ContactUs() {
  const { t } = useTranslation()
  const { data: siteSettings } = useSiteSettingsQuery()

  return (
    <div>
      <CoverSection title={t('contact.pageTitle')} currentPage={t('contact.currentPage')} />
      <section className="bg-[#ECF1F6] py-10 md:py-[72px]">
        <div className="home-shell flex flex-col items-center gap-8 md:gap-10">
          <div className="w-full max-w-[1024px]">
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6 md:gap-8 md:px-8">
              <ServiceCard
                variant="contact"
                icon={Mail}
                title={t('contact.cards.emailAddress')}
                description={siteSettings.contact.primaryEmail}
              />
              <ServiceCard
                variant="contact"
                icon={PhoneCall}
                title={t('contact.cards.phoneNumber')}
                description={siteSettings.contact.primaryPhone}
              />
              <ServiceCard
                variant="contact"
                icon={MapPin}
                title={t('contact.cards.officeAddress')}
                description={siteSettings.contact.contactAddress}
              />
            </div>

            <div className="mt-8 md:mt-10">
              <PropertyAgentForm variant="contact" />
            </div>
          </div>
        </div>
      </section>
      <LookingForADreamBox background="white" />
    </div>
  )
}

export default ContactUs
