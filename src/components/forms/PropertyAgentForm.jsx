import { useState } from 'react'
import { ChevronDown, Star } from 'lucide-react'

import { cn } from '@/lib/utils'

const reviewFormStars = [1, 2, 3, 4, 5]

const defaultCardClassName =
  'rounded-[24px] border border-[#EBEBEB] bg-white p-5 shadow-[0_28px_80px_rgba(7,46,69,0.08)] sm:rounded-[28px] sm:p-8 lg:p-10'
const contactCardClassName =
  'rounded-[16px] bg-white p-6 shadow-[4px_10px_30px_0px_rgba(0,0,0,0.03)] sm:p-8 lg:p-10'
export const propertyAgentLabelClassName = 'text-base font-medium text-[#181818]'
export const propertyAgentInputClassName =
  'mt-3 h-14 w-full rounded-[12px] border border-[#D7D7D7] bg-[#ECF1F6] px-4 text-base text-[#5C5C5C] outline-none transition-colors duration-200 placeholder:text-[#9A9A9A] focus:border-primary-mid'
const textareaClassName =
  'mt-3 min-h-[180px] w-full rounded-[12px] border border-[#D7D7D7] bg-[#ECF1F6] px-4 py-4 text-base text-[#5C5C5C] outline-none transition-colors duration-200 placeholder:text-[#9A9A9A] focus:border-primary-mid sm:min-h-[210px]'

export function CountryPrefixFlag() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-4 w-6 flex-col overflow-hidden rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
    >
      <span className="h-1/3 w-full bg-[#1D9D3D]" />
      <span className="h-1/3 w-full bg-white" />
      <span className="h-1/3 w-full bg-black" />
    </span>
  )
}

function CaptchaPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="flex w-full max-w-[272px] items-start gap-3 rounded-[4px] border border-[#D7D7D7] bg-white px-3 py-4 shadow-[0_4px_12px_rgba(7,46,69,0.05)]"
    >
      <span className="mt-1 h-6 w-6 rounded-[2px] border border-[#C9C9C9] bg-[#F8F8F8]" />

      <div className="min-w-0 flex-1">
        <p className="text-[14px] text-[#181818] sm:text-[15px]">I&apos;m not a robot</p>
      </div>

      <div className="shrink-0 text-right">
        <div className="ml-auto h-8 w-8 rounded-[6px] bg-[linear-gradient(180deg,#60A5FA_0%,#2563EB_100%)]" />
        <p className="mt-1 text-[8px] leading-[1.2] text-[#8A8A8A]">reCAPTCHA</p>
        <p className="text-[7px] leading-[1.2] text-[#8A8A8A]">Privacy - Terms</p>
      </div>
    </div>
  )
}

function PropertyAgentForm({ variant = 'review', className }) {
  const [selectedRating, setSelectedRating] = useState(0)
  const isReview = variant === 'review'
  const isContact = variant === 'contact'

  return (
    <form
      className={cn(isContact ? contactCardClassName : defaultCardClassName, className)}
      onSubmit={(event) => event.preventDefault()}
    >
      {isReview ? (
        <>
          <h3 className="text-[1.75rem] font-semibold leading-tight text-primary-mid sm:text-[2rem] lg:text-[2.25rem]">
            Add a Review
          </h3>

          <div className="mt-7 sm:mt-8">
            <p className="text-base font-semibold text-[#181818] sm:text-[1.25rem] lg:text-[1.35rem]">
              Your Ratings
            </p>

            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              {reviewFormStars.map((star) => {
                const isSelected = star <= selectedRating

                return (
                  <button
                    key={star}
                    type="button"
                    aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                    onClick={() => setSelectedRating(star)}
                    className="rounded-full p-1 transition-transform duration-200 hover:scale-105"
                  >
                    <Star
                      className={`h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 ${
                        isSelected
                          ? 'fill-[#FFC107] text-[#FFC107]'
                          : 'fill-[#D9D9D9] text-[#D9D9D9]'
                      }`}
                      strokeWidth={1.8}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          {isContact ? (
            <h3 className="text-[1.75rem] font-semibold leading-tight text-primary-mid sm:text-[2rem] lg:text-[2.25rem]">
              Get a Quote
            </h3>
          ) : null}

          <label className={cn('block', isContact ? 'mt-7' : '')}>
            <span className={propertyAgentLabelClassName}>Inquiry Type</span>
            <div className="relative">
              <select
                defaultValue=""
                className={cn(propertyAgentInputClassName, 'appearance-none pr-12')}
              >
                <option value="" disabled>
                  Select your Inquiry
                </option>
                <option value="buying">Buying Property</option>
                <option value="selling">Selling Property</option>
                <option value="viewing">Book a Viewing</option>
              </select>

              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#929AA5]"
              />
            </div>
          </label>
        </>
      )}

      {isReview ? (
        <div className="mt-7 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
          <label className="block">
            <span className={propertyAgentLabelClassName}>Name</span>
            <input type="text" placeholder="Full name" className={propertyAgentInputClassName} />
          </label>

          <label className="block">
            <span className={propertyAgentLabelClassName}>Email</span>
            <input
              type="email"
              placeholder="hi@example.com"
              className={propertyAgentInputClassName}
            />
          </label>
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className={propertyAgentLabelClassName}>Name</span>
              <input type="text" placeholder="Full name" className={propertyAgentInputClassName} />
            </label>

            <label className="block">
              <span className={propertyAgentLabelClassName}>Phone Number</span>
              <div className="mt-3 flex h-14 overflow-hidden rounded-[12px] border border-[#D7D7D7] bg-[#ECF1F6] transition-colors duration-200 focus-within:border-primary-mid">
                <div className="flex shrink-0 items-center gap-2 border-r border-[#D7D7D7] px-4 text-[#5C5C5C]">
                  <CountryPrefixFlag />
                  <ChevronDown aria-hidden="true" className="h-4 w-4 text-[#929AA5]" />
                </div>

                <input
                  type="tel"
                  placeholder="+963 --- --- ----"
                  className="h-full w-full bg-transparent px-4 text-base text-[#5C5C5C] outline-none placeholder:text-[#9A9A9A]"
                />
              </div>
            </label>
          </div>

          <label className="mt-5 block">
            <span className={propertyAgentLabelClassName}>Email</span>
            <input
              type="email"
              placeholder="hi@example.com"
              className={propertyAgentInputClassName}
            />
          </label>
        </>
      )}

      <label className="mt-5 block">
        <span className={propertyAgentLabelClassName}>{isReview ? 'Message' : 'Description'}</span>
        <textarea
          rows="6"
          placeholder={
            isReview ? 'Tell us about your message here' : 'Tell us about your Inquiry here'
          }
          className={textareaClassName}
        />
      </label>

      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-[#818181] sm:text-base">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border border-[#D7D7D7] text-primary-mid focus:ring-primary-mid"
        />
        <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
      </label>

      {isReview ? (
        <div className="mt-8 flex sm:mt-10 sm:justify-center">
          <button
            type="submit"
            className="inline-flex w-full min-w-[148px] items-center justify-center rounded-[12px] bg-primary-mid px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-primary sm:w-auto"
          >
            Submit
          </button>
        </div>
      ) : isContact ? (
        <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-16">
          <CaptchaPlaceholder />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-[8px] bg-primary-mid px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-primary sm:h-[64px] sm:min-w-[256px] sm:w-auto"
          >
            Get an Free Service
          </button>
        </div>
      ) : (
        <>
          <div className="mt-8 flex justify-center">
            <CaptchaPlaceholder />
          </div>

          <div className="mt-8 flex sm:mt-10 sm:justify-center">
            <button
              type="submit"
              className="inline-flex w-full min-w-[228px] items-center justify-center rounded-[12px] bg-primary-mid px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-primary sm:w-auto"
            >
              Get an Free Service
            </button>
          </div>
        </>
      )}
    </form>
  )
}

export default PropertyAgentForm
