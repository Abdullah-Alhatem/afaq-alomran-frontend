import CoverSection from '@/components/CoverSection'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import AgentCard from '@/components/cards/AgentCard'
import { useAgentsQuery } from '@/lib/fake-api/hooks'
import { useTranslation } from 'react-i18next'

function Agents() {
  const { t } = useTranslation()
  const { data: agents = [] } = useAgentsQuery()
  const agentsPageItems = [...agents, ...agents].map((agent, index) => ({
    ...agent,
    renderId: `${agent.id}-${index + 1}`,
  }))

  return (
    <>
      <CoverSection title={t('agents.pageTitle')} currentPage={t('agents.currentPage')} />
      <section className="bg-[#F8F8F8] py-12 md:py-16 lg:py-24">
        <div className="home-shell">
          <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 xl:grid-cols-4">
            {agentsPageItems.map((agent) => (
              <AgentCard
                key={agent.renderId}
                to={`/agents/${agent.id}`}
                image={agent.image}
                alt={agent.alt}
                name={agent.name}
                role={agent.role}
                socialLinks={agent.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>
      <LookingForADreamBox background="bg-white" />
    </>
  )
}

export default Agents
