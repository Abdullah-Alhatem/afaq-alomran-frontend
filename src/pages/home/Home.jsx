import HeroSection from '@/components/home/HeroSection'
import LegacySection from '@/components/home/LegacySection'
import ReviewsSection from '@/components/home/ReviewsSection'
import PortfoliosSection from '@/components/home/PortfoliosSection'
import VideoTestimonialSection from '@/components/home/VideoTestimonialSection'
import AgentsSection from '@/components/home/AgentsSection'
import FAQSection from '@/components/home/FAQSection'
import LatestListedPropertiesSection from '@/components/home/LatestListedPropertiesSection'
import OurMostPopularPropertiesSection from '@/components/home/OurMostPopularPropertiesSection'
import ServicesSection from '@/components/home/ServicesSection'
import LookingForADreamBox from '@/components/LookingForADreamBox'

function Home() {
  return (
    <>
      <HeroSection />
      <LegacySection />
      <LatestListedPropertiesSection />
      <OurMostPopularPropertiesSection />
      <VideoTestimonialSection />
      <ServicesSection />
      <PortfoliosSection />
      <ReviewsSection />
      <AgentsSection />
      <LookingForADreamBox background="bg-white" />
      <FAQSection />
    </>
  )
}

export default Home
