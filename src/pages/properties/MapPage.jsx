import CoverSection from '@/components/CoverSection'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import React from 'react'

function MapPage() {
  return (
    <div>
      <CoverSection title="Google Map Locations" currentPage="Google Map Locations" />

      <section className="bg-[#ECF1F6] px-6 py-10 md:px-16 md:py-[72px] lg:px-40 2xl:px-[224px]">
        <div className="rounded-[24px] bg-white p-4 shadow-[4px_10px_30px_0px_rgba(0,0,0,0.03)] sm:p-8">
          <div className="overflow-hidden rounded-[16px]">
            <iframe
              title="Google map location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18429.444688130417!2d36.2766021818303!3d33.50641459414196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1005eaa110f%3A0xf57a927322ed1e08!2zRGlnaXQt2K_Zitis2Ko!5e0!3m2!1sar!2sus!4v1773839074688!5m2!1sar!2sus"
              className="h-[450px] w-full md:h-[560px] lg:h-[650px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <LookingForADreamBox background="bg-white" />
    </div>
  )
}

export default MapPage
