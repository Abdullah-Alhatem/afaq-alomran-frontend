import fbIcon from '@/assets/Footer/FB.png'
import igIcon from '@/assets/Footer/IG.png'
import waIcon from '@/assets/Footer/WA.png'
import agent1 from '@/assets/images/agent1.png'
import agent2 from '@/assets/images/agent2.png'
import agent3 from '@/assets/images/agent3.png'
import agent4 from '@/assets/images/agent4.png'
import agentDetailsImage from '@/assets/images/agentDetails.png'

const sharedAgentIntro =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus. At mattis nulla in pretium. Condimentum sagittis mauris augue maecenas fusce commodo neque purus et. Integer eu amet at pretium id ultrices faucibus. In vestibulum pretium, potenti molestie.'

const sharedAgentDescription =
  'Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing arcu, consectetur lacus eu. Non, augue integer augue accumsan ante. Ultricies libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in sed arcu turpis neque. Nam elementum aliquet integer sit condimentum sed. Pulvinar aliquam nascetur maecenas risus vestibulum eu. Pellentesque non molestie est mauris tristique pretium. Congue ac et neque vulputate et morbi gravida. Ut semper odio dictumst vel nibh urna. Cras blandit cursus nam nulla. Montes, bibendum mauris dui sollicitudin est purus, hendrerit. Convallis in nunc a, commodo euismod.'

export const agentDetailsItems = [
  {
    id: 'esther-howard',
    name: 'Esther Howard',
    role: 'Real Estate Broker',
    image: agent1,
    detailImage: agentDetailsImage,
    alt: 'Portrait of Esther Howard',
    intro: sharedAgentIntro,
    description: sharedAgentDescription,
    facts: [
      { label: 'Positions', value: 'Real Estate Broker' },
      { label: 'Location', value: '14/A, NYC' },
      { label: 'FAX', value: '09-622-5689' },
      { label: 'Experience', value: '10+ Years' },
      { label: 'Email', value: 'example@gmail.com' },
      { label: 'Phone', value: '07-4041-9059' },
    ],
  },
  {
    id: 'cameron-williamson',
    name: 'Cameron Williamson',
    role: 'Real Estate Broker',
    image: agent2,
    alt: 'Portrait of Cameron Williamson',
    intro: sharedAgentIntro,
    description: sharedAgentDescription,
    facts: [
      { label: 'Positions', value: 'Senior Property Consultant' },
      { label: 'Location', value: '22/B, Dubai' },
      { label: 'FAX', value: '09-514-2288' },
      { label: 'Experience', value: '12+ Years' },
      { label: 'Email', value: 'cameron@example.com' },
      { label: 'Phone', value: '07-3118-4020' },
    ],
  },
  {
    id: 'brooklyn-simmons',
    name: 'Brooklyn Simmons',
    role: 'Real Estate Broker',
    image: agent3,
    alt: 'Portrait of Brooklyn Simmons',
    intro: sharedAgentIntro,
    description: sharedAgentDescription,
    facts: [
      { label: 'Positions', value: 'Luxury Home Advisor' },
      { label: 'Location', value: '18/C, London' },
      { label: 'FAX', value: '09-403-9916' },
      { label: 'Experience', value: '9+ Years' },
      { label: 'Email', value: 'brooklyn@example.com' },
      { label: 'Phone', value: '07-5986-1304' },
    ],
  },
  {
    id: 'robert-fox',
    name: 'Robert Fox',
    role: 'Real Estate Broker',
    image: agent4,
    alt: 'Portrait of Robert Fox',
    intro: sharedAgentIntro,
    description: sharedAgentDescription,
    facts: [
      { label: 'Positions', value: 'Commercial Property Broker' },
      { label: 'Location', value: '09/D, Riyadh' },
      { label: 'FAX', value: '09-286-7143' },
      { label: 'Experience', value: '11+ Years' },
      { label: 'Email', value: 'robert@example.com' },
      { label: 'Phone', value: '07-2227-8145' },
    ],
  },
]

export const agentItems = agentDetailsItems.map(({ id, name, role, image, alt }) => ({
  id,
  name,
  role,
  image,
  alt,
}))

export const agentSocialLinks = [
  { href: '#', icon: fbIcon, label: 'Facebook' },
  { href: '#', icon: igIcon, label: 'Instagram' },
  { href: '#', icon: waIcon, label: 'WhatsApp' },
]

export const agentsPageItems = [...agentItems, ...agentItems].map((agent, index) => ({
  ...agent,
  renderId: `${agent.id}-${index + 1}`,
}))
