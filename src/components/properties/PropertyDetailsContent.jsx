import { Link } from 'react-router-dom'
import { Phone, Send, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { PropertyCard } from '@/components/cards/PropertyCard'
import PropertyAgentForm from '@/components/forms/PropertyAgentForm'
import { useSiteSettingsQuery } from '@/lib/fake-api/hooks'
import bathroomIcon from '@/assets/PropertyDetails/bathroomIcon.svg'
import bedroomIcon from '@/assets/PropertyDetails/bedroomIcon.svg'
import garageIcon from '@/assets/PropertyDetails/garageIcon.svg'
import locationIcon from '@/assets/PropertyDetails/LocationIcon.svg'
import poolIcon from '@/assets/PropertyDetails/poolIcon.svg'
import sizeIcon from '@/assets/PropertyDetails/sizeIcon.svg'

const propertyFeatureIcons = [bedroomIcon, bathroomIcon, sizeIcon, garageIcon, poolIcon]
const reviewFormStars = [1, 2, 3, 4, 5]

function SectionHeading({ title, className = '' }) {
  return (
    <div className={className}>
      <h2 className="text-[1.65rem] font-semibold leading-[1.15] text-[#181818] sm:text-[1.85rem] xl:text-[2.05rem]">
        {title}
      </h2>
      <div className="mt-3 h-px w-full bg-secondary-light/70 sm:mt-4" />
    </div>
  )
}

function PropertyFeatureItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 rounded-[16px] bg-white px-3.5 py-3 transition-colors duration-200 hover:bg-[#F8FAFC] sm:gap-4 sm:rounded-[18px] sm:px-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10">
        <img src={icon} alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
      </span>
      <span className="text-base font-medium text-[#38343D] sm:text-lg xl:text-[1.15rem]">
        {label}
      </span>
    </div>
  )
}

function ReviewItem({ image, name, date, text }) {
  return (
    <article className="flex flex-col gap-4 rounded-[20px] border border-[#E8E8E8] bg-white p-4 shadow-[0_12px_40px_rgba(7,46,69,0.04)] sm:flex-row sm:gap-5 sm:rounded-[24px] sm:p-6">
      <img
        src={image}
        alt={`Portrait of ${name}`}
        className="h-12 w-12 rounded-full object-cover sm:h-16 sm:w-16"
      />

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-[1.25rem] font-semibold leading-tight text-[#38343D] sm:text-[1.45rem]">
              {name}
            </h3>
            <div className="mt-2 flex items-center gap-1">
              {reviewFormStars.map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 fill-[#FFC107] text-[#FFC107]"
                  strokeWidth={1.8}
                />
              ))}
            </div>
          </div>

          <p className="text-sm font-semibold text-[#8A8A8A] sm:text-base">{date}</p>
        </div>

        <p className="mt-4 max-w-[900px] text-[0.98rem] leading-7 text-[#5C5C5C] sm:text-[1.05rem] sm:leading-8">
          {text}
        </p>
      </div>
    </article>
  )
}

function PropertyDetailsContent({ property }) {
  const { t } = useTranslation()
  const { data: siteSettings } = useSiteSettingsQuery()

  const projectFeaturesRaw = t('properties.detail.features', { returnObjects: true })
  const descriptionParagraphs = t('properties.detail.descriptionParagraphs', {
    returnObjects: true,
  })

  const projectFeatures = Array.isArray(projectFeaturesRaw) ? projectFeaturesRaw : []
  const projectDescription = Array.isArray(descriptionParagraphs) ? descriptionParagraphs : []
  const propertyFeatures = propertyFeatureIcons.map((icon, index) => ({
    icon,
    label: projectFeatures[index] ?? '',
  }))
  const reviewItems = property.reviewItems ?? []
  const relatedProperties = property.relatedProperties ?? []
  const portfolioItems = property.portfolioItems ?? []
  const contactAgent = property.contactAgent

  return (
    <section className="py-8 sm:py-10 md:py-14 lg:py-16">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(280px,320px)] xl:items-start xl:gap-14 2xl:gap-16">
        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          <section className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)] lg:gap-10">
            <div>
              <span className="inline-flex rounded-[10px] bg-[#3AC9221A] px-3.5 py-1.5 text-sm font-semibold text-[#43E50D] sm:px-4 sm:py-2">
                {t('properties.detail.badge')}
              </span>

              <h1 className="mt-4 text-[clamp(1.9rem,7vw,4.75rem)] font-bold leading-[1.06] tracking-[-0.03em] text-primary-mid sm:mt-5">
                {property.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-start gap-3 sm:mt-5">
                <img
                  src={locationIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 object-contain"
                />
                <span className="text-base leading-7 text-[#5C5C5C] sm:text-lg xl:text-[1.35rem]">
                  {property.location}
                </span>
              </div>
            </div>

            <div className="lg:flex lg:justify-end">
              <div className="w-full rounded-[18px] border border-[#EFEFEF] bg-white px-5 py-4 shadow-[0_16px_42px_rgba(7,46,69,0.06)] sm:max-w-[320px] sm:px-6 sm:py-5 lg:max-w-[280px] lg:rounded-[20px]">
                <p className="text-lg font-semibold text-[#181818]">
                  {t('properties.detail.priceLabel')}
                </p>
                <p className="mt-2 text-[2.1rem] font-bold leading-none text-secondary-light sm:text-[2.55rem] lg:text-[3rem]">
                  ${property.price.toLocaleString()}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[1.65rem] font-semibold leading-[1.15] text-[#181818] sm:text-[1.85rem] xl:text-[2.05rem]">
              {t('properties.detail.descriptionTitle')}
            </h2>
            <div className="mt-4 max-w-[1100px] space-y-4 text-[0.98rem] leading-7 text-[#5C5C5C] sm:mt-5 sm:space-y-5 sm:text-[1.05rem] sm:leading-8 xl:text-[1.08rem] xl:leading-9">
              {projectDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[1.65rem] font-semibold leading-[1.15] text-[#181818] sm:text-[1.85rem] xl:text-[2.05rem]">
              {t('properties.detail.featuresTitle')}
            </h2>
            <div className="mt-5 rounded-[24px] border border-[#D7D7D7] bg-white p-4 shadow-[0_18px_46px_rgba(7,46,69,0.04)] sm:mt-6 sm:rounded-[28px] sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-4">
                {propertyFeatures.map((feature) => (
                  <PropertyFeatureItem
                    key={`${feature.icon}-${feature.label}`}
                    icon={feature.icon}
                    label={feature.label}
                  />
                ))}
              </div>
            </div>
          </section>

          <section>
            <SectionHeading title={t('properties.detail.factsTitle')} />

            <div className="mt-5 rounded-[24px] border border-[#D7D7D7] bg-white p-5 shadow-[0_18px_46px_rgba(7,46,69,0.04)] sm:mt-6 sm:rounded-[28px] sm:p-6">
              <div className="grid gap-4 md:grid-cols-2">
                {Array.isArray(property.projectFacts)
                  ? property.projectFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="rounded-[18px] bg-[#F8FAFC] px-4 py-4 sm:px-5 sm:py-5"
                      >
                        <p className="text-sm font-semibold text-[#123E56] sm:text-base">
                          {fact.label}
                        </p>
                        <p className="mt-2 text-[0.98rem] leading-7 text-[#5C5C5C] sm:text-[1.02rem]">
                          {fact.value}
                        </p>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </section>

          <section>
            <SectionHeading title={t('properties.detail.galleryTitle')} />

            <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
              <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
                {property.gallery.slice(0, 2).map((item) => (
                  <div key={item.image} className="overflow-hidden rounded-[20px]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-[220px] w-full object-cover sm:h-[280px] lg:h-[300px] xl:h-[330px]"
                    />
                  </div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {property.gallery.slice(2).map((item) => (
                  <div key={item.image} className="overflow-hidden rounded-[20px]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-[190px] w-full object-cover sm:h-[220px] lg:h-[250px] xl:h-[290px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <SectionHeading title={t('properties.detail.locationTitle')} />

            <div className="mt-5 overflow-hidden rounded-[20px] border border-[#E8E8E8] shadow-[0_18px_46px_rgba(7,46,69,0.04)] sm:mt-6 sm:rounded-[24px]">
              <iframe
                title={t('mapPage.iframeTitle')}
                src={siteSettings?.mapEmbedUrl ?? ''}
                className="h-[220px] w-full sm:h-[300px] lg:h-[380px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          <section>
            <SectionHeading title={t('properties.detail.reviewsTitle')} />

            <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
              {reviewItems.map((review) => (
                <ReviewItem key={`${review.name}-${review.date}`} {...review} />
              ))}
            </div>

            <PropertyAgentForm variant="review" className="mt-8" />
          </section>

          <section>
            <SectionHeading title={t('properties.detail.relatedTitle')} />

            <div className="mt-5 grid gap-5 sm:mt-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {relatedProperties.map((relatedProperty) => (
                <PropertyCard
                  key={relatedProperty.id}
                  id={relatedProperty.id}
                  image={relatedProperty.image}
                  title={relatedProperty.title}
                  location={relatedProperty.location}
                  beds={String(relatedProperty.beds)}
                  baths={String(relatedProperty.baths)}
                  sqft={relatedProperty.sqft}
                  price={relatedProperty.price}
                  status={relatedProperty.status}
                />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-5 sm:space-y-6 xl:sticky xl:top-28 xl:max-h-[calc(100vh-7rem)] xl:overflow-y-auto xl:overscroll-contain xl:pr-2">
          <div className="rounded-[22px] border border-[#D7D7D7] bg-white p-5 shadow-[0_16px_42px_rgba(7,46,69,0.05)] sm:rounded-[24px] sm:p-6">
            <h3 className="text-[1.2rem] font-semibold leading-tight text-[#181818] sm:text-[1.3rem]">
              {t('properties.detail.visitCta.title')}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#5C5C5C] sm:text-[0.98rem]">
              {t('properties.detail.visitCta.description')}
            </p>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center rounded-[16px] border border-[#D7D7D7] bg-white p-3 shadow-[0_12px_32px_rgba(7,46,69,0.04)] transition-colors duration-200 hover:border-primary-mid sm:rounded-[18px]"
            >
              <span className="flex min-h-[48px] w-full items-center justify-center rounded-full border border-primary-mid px-5 text-base font-semibold text-primary-mid sm:min-h-[52px] sm:px-6">
                {t('properties.detail.visitCta.button')}
              </span>
            </button>
          </div>

          {contactAgent ? (
            <div className="rounded-[22px] border border-[#D7D7D7] bg-white p-5 shadow-[0_16px_42px_rgba(7,46,69,0.05)] sm:rounded-[24px] sm:p-6">
              <h3 className="text-[1.35rem] font-semibold leading-tight text-[#181818] sm:text-[1.45rem]">
                {t('properties.detail.contactTitle')}
              </h3>

              <Link
                to={`/agents/${contactAgent.id}`}
                className="mt-5 flex items-center gap-3 rounded-[16px] bg-[#F8FAFC] p-4 transition-colors duration-200 hover:bg-[#EEF5FA] sm:mt-6 sm:gap-4 sm:rounded-[18px]"
              >
                <img
                  src={contactAgent.image}
                  alt={contactAgent.alt ?? `Portrait of ${contactAgent.name}`}
                  className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
                />
                <div>
                  <p className="text-[1.05rem] font-semibold text-[#38343D] sm:text-[1.2rem]">
                    {contactAgent.name}
                  </p>
                  <p className="text-sm font-medium text-[#818181]">{contactAgent.role}</p>
                </div>
              </Link>

              <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 xl:grid-cols-1">
                <a
                  href={`mailto:${contactAgent.email}`}
                  className="inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full bg-primary-mid px-5 text-base font-semibold text-white transition-colors duration-200 hover:bg-primary"
                >
                  <Send className="h-4 w-4" strokeWidth={2.2} />
                  {t('properties.detail.actions.message')}
                </a>

                <a
                  href={`tel:${contactAgent.phone}`}
                  className="inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full border border-primary-mid px-5 text-base font-semibold text-primary-mid transition-colors duration-200 hover:bg-primary-mid hover:text-white"
                >
                  <Phone className="h-4 w-4" strokeWidth={2.2} />
                  {t('properties.detail.actions.call')}
                </a>
              </div>
            </div>
          ) : null}

          <section>
            <SectionHeading title={t('properties.detail.portfolioTitle')} />

            <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
              {portfolioItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/portfolios/${item.id}`}
                  className="block overflow-hidden rounded-[18px] shadow-[0_12px_32px_rgba(7,46,69,0.04)]"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-[180px] w-full object-cover transition-transform duration-300 hover:scale-[1.02] sm:h-[190px] xl:h-[180px]"
                  />
                </Link>
              ))}
            </div>

            <div className="mt-5 flex sm:mt-6 sm:justify-center">
              <Link
                to="/portfolios"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[10px] border border-secondary-light px-6 text-base font-semibold text-secondary-light transition-colors duration-200 hover:bg-secondary-light hover:text-white sm:min-w-[128px] sm:w-auto"
              >
                {t('properties.detail.portfolioSeeAll')}
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </section>
  )
}

export default PropertyDetailsContent
