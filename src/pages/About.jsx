import AboutHeroSection from '@/components/about/AboutHeroSection'
import AgentsSection from '@/components/home/AgentsSection'
import LatestListedPropertiesSection from '@/components/home/LatestListedPropertiesSection'
import LegacySection from '@/components/home/LegacySection'
import PortfoliosSection from '@/components/home/PortfoliosSection'
import ServicesSection from '@/components/home/ServicesSection'
import LookingForADreamBox from '@/components/LookingForADreamBox'

function About() {
  return (
    <>
      <AboutHeroSection />
      <LegacySection />
      <ServicesSection />
      <AgentsSection />
      <LatestListedPropertiesSection />
      <LookingForADreamBox background="bg-white" />
      <PortfoliosSection />
    </>
  )
}

export default About
