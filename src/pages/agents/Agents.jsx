import CoverSection from '@/components/CoverSection'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import AgentCard from '@/components/cards/AgentCard'
import { agentsPageItems, agentSocialLinks } from '@/data/agents'
import React from 'react'

function Agents() {
  return (
    <>
      <CoverSection title="Our Agent" currentPage="Our Agent" />
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
                socialLinks={agentSocialLinks}
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
