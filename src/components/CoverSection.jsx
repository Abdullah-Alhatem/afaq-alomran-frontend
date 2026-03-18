import bgImage from '../assets/images/bg-image.jpg'

function CoverSection({ title, currentPage, parentPage = 'Home' }) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-mid">
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_56%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,46,69,0.82)_0%,rgba(18,62,86,0.74)_46%,rgba(7,46,69,0.78)_100%)]"
      />

      <div className="home-shell relative z-10 flex min-h-[220px] items-center py-10 sm:min-h-[248px] sm:py-12 lg:min-h-[266px]">
        <div className="max-w-[780px]">
          <h1 className="text-[clamp(2rem,4vw,40px)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
            {title}
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-jakarta text-[15px] font-medium text-white/95 sm:mt-5 sm:text-lg">
            <span>{parentPage}</span>
            <span aria-hidden="true" className="text-white/70">
              /
            </span>
            <span className="font-semibold text-secondary-light">{currentPage}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default CoverSection
