import CoverSection from '@/components/CoverSection'
import AgentInquirySection from '@/components/agents/AgentInquirySection'
import AgentCard from '@/components/cards/AgentCard'
import { agentDetailsItems, agentSocialLinks } from '@/data/agents'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound'
import LookingForADreamBox from '@/components/LookingForADreamBox'

function AgentDetails() {
  const { agentId } = useParams()
  const agent = agentDetailsItems.find((item) => item.id === agentId)

  if (!agent) {
    return <NotFound />
  }

  return (
    <>
      <CoverSection title="Agent Details" currentPage="Agent Details" />
      <section className="bg-[#F8F8F8] py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="home-shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(280px,300px)_minmax(0,1fr)] lg:items-start lg:gap-12 xl:gap-16">
            <AgentCard
              image={agent.image}
              alt={agent.alt}
              name={agent.name}
              role={agent.role}
              socialLinks={agentSocialLinks}
              className="max-w-[298px] lg:mx-0"
            />

            <div className="max-w-[1100px]">
              <p className="text-[17px] leading-[1.8] text-[#262626] md:text-[18px] xl:text-[19px]">
                {agent.intro}
              </p>

              <dl className="mt-9 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
                {agent.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[16px] font-bold text-[#5B5B5B]">{fact.label}</dt>
                    <dd className="mt-2 text-body text-grey-text-secondary">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-9 text-[17px] leading-[1.85] text-grey-text-secondary md:text-[18px]">
                {agent.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <AgentInquirySection />
      <LookingForADreamBox background="bg-white" />
    </>
  )
}

export default AgentDetails
