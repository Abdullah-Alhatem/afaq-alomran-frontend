import CoverSection from '@/components/CoverSection'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import ServiceCard from '@/components/cards/ServiceCard'
import PropertyAgentForm from '@/components/forms/PropertyAgentForm'
import { Mail, MapPin, PhoneCall } from 'lucide-react'

function ContactUs() {
  return (
    <div>
      <CoverSection title="Contact Us" currentPage="Contact Us" />
      <section className="bg-[#ECF1F6] py-10 md:py-[72px]">
        <div className="home-shell flex flex-col items-center gap-8 md:gap-10">
          <div className="w-full max-w-[1024px]">
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6 md:gap-8 md:px-8">
              <ServiceCard
                variant="contact"
                icon={Mail}
                title="Email Address"
                description="homeq.example@gmail.com"
              />
              <ServiceCard
                variant="contact"
                icon={PhoneCall}
                title="Phone Number"
                description="+963 937 302 533"
              />
              <ServiceCard
                variant="contact"
                icon={MapPin}
                title="Office Address"
                description="Damascus, Syria"
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
