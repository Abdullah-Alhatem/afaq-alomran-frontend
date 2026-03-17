import { Link } from 'react-router-dom'
import fbIcon from '@/assets/Footer/FB.png'
import igIcon from '@/assets/Footer/IG.png'
import waIcon from '@/assets/Footer/WA.png'
import agent1 from '@/assets/images/agent1.png'
import agent2 from '@/assets/images/agent2.png'
import agent3 from '@/assets/images/agent3.png'
import agent4 from '@/assets/images/agent4.png'

const agentItems = [
  {
    id: 'esther-howard',
    name: 'Esther Howard',
    role: 'Real Estate Broker',
    image: agent1,
    alt: 'Portrait of Esther Howard',
  },
  {
    id: 'cameron-williamson',
    name: 'Cameron Williamson',
    role: 'Real Estate Broker',
    image: agent2,
    alt: 'Portrait of Cameron Williamson',
  },
  {
    id: 'brooklyn-simmons',
    name: 'Brooklyn Simmons',
    role: 'Real Estate Broker',
    image: agent3,
    alt: 'Portrait of Brooklyn Simmons',
  },
  {
    id: 'robert-fox',
    name: 'Robert Fox',
    role: 'Real Estate Broker',
    image: agent4,
    alt: 'Portrait of Robert Fox',
  },
]

const socialLinks = [
  { href: '#', icon: fbIcon, label: 'Facebook' },
  { href: '#', icon: igIcon, label: 'Instagram' },
  { href: '#', icon: waIcon, label: 'WhatsApp' },
]

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
              <Link to={`/agents/${agent.id}`} key={agent.id} className="text-center max-w-[280px]">
                <div className="block overflow-hidden rounded-[12px] h-[450px] w-full sm:h-[340px] lg:h-[390px]">
                  <img
                    src={agent.image}
                    alt={agent.alt}
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="mt-5 text-h3 font-medium text-[#18181B]">{agent.name}</h3>
                <p className="mt-2 text-body text-grey-text-secondary">{agent.role}</p>

                <div className="mt-4 flex items-center justify-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon

                    return (
                      <Link
                        key={social.label}
                        to={social.href}
                        aria-label={social.label}
                        className="inline-flex h-6 w-6 items-center justify-center transition-opacity hover:opacity-80"
                      >
                        <img
                          src={social.icon}
                          alt=""
                          aria-hidden="true"
                          className="h-6 w-6 object-contain"
                        />
                      </Link>
                    )
                  })}
                </div>
              </Link>
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
