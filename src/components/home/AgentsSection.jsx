import { Link } from 'react-router-dom'
import AgentCard from '@/components/cards/AgentCard'
import { agentItems, agentSocialLinks } from '@/data/agents'

function AgentsSection() {
  return (
    <section className="bg-white py-5 md:py-20 lg:py-24">
      <div className="home-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.08em] text-secondary-light md:text-[18px]">
              CHECKOUT OUR NEW
            </p>
            <h2 className="mt-3 text-[34px] font-bold leading-[1.2] text-[#18181B] md:text-[40px]">
              Our Agent
            </h2>
          </div>

          <Link
            to="/agents"
            className="hidden lg:inline-flex h-[52px] w-fit min-w-[138px] items-center justify-center gap-3 rounded-[10px] border border-secondary-light px-7 text-base font-semibold text-secondary-light transition-colors duration-200 hover:bg-secondary-light hover:text-white"
          >
            See All
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none">
              <path
                d="M5 12h14m-5-5 5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div className="mt-10 w-full grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:mt-12 xl:flex xl:justify-between">
            {agentItems.map((agent) => (
              <AgentCard
                key={agent.id}
                to={`/agents/${agent.id}`}
                image={agent.image}
                alt={agent.alt}
                name={agent.name}
                role={agent.role}
                socialLinks={agentSocialLinks}
              />
            ))}
          </div>
          <Link
            to="/agents"
            className="lg:hidden inline-flex h-[52px] w-fit min-w-[138px] items-center justify-center gap-3 rounded-[10px] border border-secondary-light px-7 text-base font-semibold text-secondary-light transition-colors duration-200 hover:bg-secondary-light hover:text-white"
          >
            See All
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none">
              <path
                d="M5 12h14m-5-5 5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AgentsSection
