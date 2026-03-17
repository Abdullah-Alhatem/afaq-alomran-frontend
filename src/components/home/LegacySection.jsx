import homePageTwoImage from '@/assets/images/homepage2.png'

const paragraphs = [
  'Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing arcu, consectetur lacus eu.',
  'Non, augue integer augue accumsan ante. Ultricies libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in sed arcu turpis neque.',
  'Nam elementum aliquet integer sit condimentum sed. Pulvinar aliquam nascetur maecenas risus vestibulum eu. Pellentesque non molestie est mauris tristique pretium. Congue ac et neque vulputate et morbi gravida.',
]

function LegacySection() {
  return (
    <section className="py-5 md:py-20 lg:py-24">
      <div className="home-shell flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full max-w-[500px] overflow-hidden rounded-[22px] mx-auto lg:mx-0">
          <img
            src={homePageTwoImage}
            alt="Bright living room interior"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full max-w-[980px] space-y-8 pt-2 lg:pt-0">
          <h2 className="max-w-[760px] text-[30px] font-semibold leading-[1.25] text-[#38343D] lg:text-[40px]">
            We are your partner in creating a legacy building facade.
          </h2>

          <div className="max-w-[930px] font-normal space-y-4 lg:space-y-7 leading-[1.6] text-[#818181] text-[16px]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegacySection
