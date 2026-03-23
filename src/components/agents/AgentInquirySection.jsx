import agentDetailsImage from '@/assets/images/agentDetails.png'
import PropertyAgentForm from '@/components/forms/PropertyAgentForm'

function AgentInquirySection({ image = agentDetailsImage }) {
  return (
    <section className="bg-[#F8F8F8] pb-12 md:pb-16 lg:pb-20 xl:pb-24">
      <div className="home-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] items-center lg:gap-10 xl:gap-14">
          <div className="overflow-hidden rounded-[22px] border border-[#E7E7E7] shadow-[0_28px_80px_rgba(7,46,69,0.08)]">
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="h-[420px] w-full object-cover sm:h-[560px] lg:h-[760px] xl:h-[835px]"
            />
          </div>

          <PropertyAgentForm
            variant="inquiry"
            className="border-[#E7E7E7] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-12"
          />
        </div>
      </div>
    </section>
  )
}

export default AgentInquirySection
