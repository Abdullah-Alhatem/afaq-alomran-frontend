import fbIcon from '@/assets/Footer/FB.png'
import igIcon from '@/assets/Footer/IG.png'
import waIcon from '@/assets/Footer/WA.png'
import agent1 from '@/assets/images/agent1.png'
import agent2 from '@/assets/images/agent2.png'
import agent3 from '@/assets/images/agent3.png'
import agent4 from '@/assets/images/agent4.png'
import agentDetailsImage from '@/assets/images/agentDetails.png'

const agentMediaById = {
  'esther-howard': {
    image: agent1,
    detailImage: agentDetailsImage,
  },
  'cameron-williamson': {
    image: agent2,
  },
  'brooklyn-simmons': {
    image: agent3,
  },
  'robert-fox': {
    image: agent4,
  },
}

export function getAgentDetailsItems(t) {
  const people = t('agents.people', { returnObjects: true })

  return people.map((person) => ({
    ...person,
    ...agentMediaById[person.id],
  }))
}

export function getAgentItems(t) {
  return getAgentDetailsItems(t).map(({ id, name, role, image, alt }) => ({
    id,
    name,
    role,
    image,
    alt,
  }))
}

export function getAgentSocialLinks(t) {
  return [
    { href: '#', icon: fbIcon, label: t('agents.social.facebook') },
    { href: '#', icon: igIcon, label: t('agents.social.instagram') },
    { href: '#', icon: waIcon, label: t('agents.social.whatsapp') },
  ]
}

export function getAgentsPageItems(t) {
  const agentItems = getAgentItems(t)

  return [...agentItems, ...agentItems].map((agent, index) => ({
    ...agent,
    renderId: `${agent.id}-${index + 1}`,
  }))
}
