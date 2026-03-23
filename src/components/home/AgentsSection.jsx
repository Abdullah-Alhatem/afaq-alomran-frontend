import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useAgentsQuery } from '@/lib/fake-api/hooks'
import AgentCard from '@/components/cards/AgentCard'
import SectionActionLink from '@/components/common/SectionActionLink'
import HomeSectionIntro from './HomeSectionIntro'
import { HOME_SECTION_PADDING_CLASSNAME } from './homeSectionStyles'

function AgentsSection() {
  const { t } = useTranslation()
  const { data: agentItems = [] } = useAgentsQuery()

  return (
    <section className={`bg-white ${HOME_SECTION_PADDING_CLASSNAME}`}>
      <div className="home-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <HomeSectionIntro
            eyebrow={t('home.agents.eyebrow')}
            title={t('home.agents.title')}
            eyebrowClassName="text-sm uppercase tracking-[0.08em] md:text-[18px]"
          />

          <SectionActionLink to="/agents" className="hidden w-fit lg:inline-flex">
            {t('common.buttons.seeAll')}
          </SectionActionLink>
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
                socialLinks={agent.socialLinks}
              />
            ))}
          </div>
          <SectionActionLink to="/agents" className="w-fit lg:hidden">
            {t('common.buttons.seeAll')}
          </SectionActionLink>
        </div>
      </div>
    </section>
  )
}

export default AgentsSection
