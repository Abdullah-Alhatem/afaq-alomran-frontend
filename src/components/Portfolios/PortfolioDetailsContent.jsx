import mainImage from '@/assets/PortfolioDetailsPage/main.png'
import image1 from '@/assets/PortfolioDetailsPage/Image1.png'
import image2 from '@/assets/PortfolioDetailsPage/Image2.png'
import image3 from '@/assets/PortfolioDetailsPage/Image3.png'

const openingParagraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus. At mattis nulla in pretium. Condimentum sagittis mauris augue maecenas fusce commodo neque purus et. Integer eu amet at pretium id ultrices faucibus. In vestibulum pretium, potenti molestie.',
  'Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing arcu, consectetur lacus eu. Non, augue integer augue accumsan ante. Ultricies libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in sed arcu turpis neque.',
  'Nam elementum aliquet integer sit condimentum sed. Pulvinar aliquam nascetur maecenas risus vestibulum eu. Pellentesque non molestie est mauris tristique pretium. Congue ac et neque vulputate et morbi gravida. Ut semper odio dictumst vel nibh urna. Cras blandit cursus nam nulla. Montes, bibendum mauris dui sollicitudin est purus, hendrerit. Convallis in nunc a, commodo euismod.',
]

const closingParagraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus. At mattis nulla in pretium. Condimentum sagittis mauris augue maecenas fusce commodo neque purus et. Integer eu amet at pretium id ultrices faucibus. In vestibulum pretium, potenti molestie.',
  'Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing arcu, consectetur lacus eu. Non, augue integer augue accumsan ante. Ultricies libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in sed arcu turpis neque.',
  'Nam elementum aliquet integer sit condimentum sed. Pulvinar aliquam nascetur maecenas risus vestibulum eu. Pellentesque non molestie est mauris tristique pretium. Congue ac et neque vulputate et morbi gravida. Ut semper odio dictumst vel nibh urna. Cras blandit cursus nam nulla. Montes, bibendum mauris dui sollicitudin est purus, hendrerit. Convallis in nunc a, commodo euismod.',
]

const galleryImages = [
  {
    image: image1,
    alt: 'Bright living room with fireplace and warm wood floors',
  },
  {
    image: image2,
    alt: 'Soft neutral lounge with layered textiles and coffee table',
  },
  {
    image: image3,
    alt: 'Styled sitting area with orange accent chair and indoor plants',
  },
]

function PortfolioDetailsContent() {
  return (
    <section className="bg-[#F8F8F8] py-8 sm:py-10 md:py-14 lg:py-16">
      <div className="home-shell">
        <article className="mx-auto max-w-[920px]">
          <div className="overflow-hidden rounded-[8px]">
            <img
              src={mainImage}
              alt="Modern portfolio house exterior photographed at dusk"
              className="h-[260px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[530px]"
            />
          </div>

          <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-[#5C5C5C] sm:mt-10 sm:text-[16px] md:space-y-7 md:text-[17px]">
            {openingParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {galleryImages.map((item) => (
              <div key={item.image} className="overflow-hidden rounded-[8px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-[200px] w-full object-cover sm:h-[180px] md:h-[220px]"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-[#5C5C5C] sm:mt-10 sm:text-[16px] md:space-y-7 md:text-[17px]">
            {closingParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default PortfolioDetailsContent
