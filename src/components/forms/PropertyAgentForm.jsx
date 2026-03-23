import { useState } from 'react'
import { ChevronDown, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { useInquiryMutation, useReviewMutation } from '@/lib/fake-api/hooks'
import { cn } from '@/lib/utils'
import PhoneNumberField from './PhoneNumberField'
import RecaptchaField from './RecaptchaField'
import { DEFAULT_PHONE_COUNTRY_CODE } from './phoneCountryUtils'

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

function PropertyAgentForm({ variant = 'review', className }) {
  const { i18n, t } = useTranslation()
  const [selectedRating, setSelectedRating] = useState(0)
  const [selectedPhoneCountryCode, setSelectedPhoneCountryCode] = useState(
    DEFAULT_PHONE_COUNTRY_CODE,
  )
  const [phoneNumber, setPhoneNumber] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')
  const [captchaResetSignal, setCaptchaResetSignal] = useState(0)
  const [captchaError, setCaptchaError] = useState('')
  const inquiryMutation = useInquiryMutation()
  const reviewMutation = useReviewMutation()
  const isReview = variant === 'review'
  const isContact = variant === 'contact'
  const isRtl = i18n.dir() === 'rtl'
  const isSubmitting = inquiryMutation.isPending || reviewMutation.isPending
  const captchaRequiredMessage =
    i18n.language === 'ar'
      ? 'يرجى إكمال التحقق الأمني قبل الإرسال.'
      : 'Please complete the CAPTCHA verification before submitting.'

  async function handleSubmit(event) {
    event.preventDefault()

    if (!isReview && !captchaToken) {
      setCaptchaError(captchaRequiredMessage)
      return
    }

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    if (isReview) {
      await reviewMutation.mutateAsync({
        ...payload,
        rating: selectedRating,
        variant,
      })
      setSelectedRating(0)
    } else {
      await inquiryMutation.mutateAsync({
        ...payload,
        variant,
      })
    }

    event.currentTarget.reset()
    setSelectedPhoneCountryCode(DEFAULT_PHONE_COUNTRY_CODE)
    setPhoneNumber('')
    setCaptchaToken('')
    setCaptchaError('')
    setCaptchaResetSignal((currentValue) => currentValue + 1)
  }

  return (
    <form
      className={cn(isContact ? contactCardClassName : defaultCardClassName, className)}
      onSubmit={handleSubmit}
    >
      {isReview ? (
        <>
          <h3 className="text-[1.75rem] font-semibold leading-tight text-primary-mid sm:text-[2rem] lg:text-[2.25rem]">
            {t('common.form.addReview')}
          </h3>

          <div className="mt-7 sm:mt-8">
            <p className="text-base font-semibold text-[#181818] sm:text-[1.25rem] lg:text-[1.35rem]">
              {t('common.form.yourRatings')}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              {reviewFormStars.map((star) => {
                const isSelected = star <= selectedRating

                return (
                  <button
                    key={star}
                    type="button"
                    aria-label={
                      star > 1
                        ? t('common.form.rateStars', { count: star })
                        : t('common.form.rateStar', { count: star })
                    }
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
              {t('common.form.getQuote')}
            </h3>
          ) : null}

          <label className={cn('block', isContact ? 'mt-7' : '')}>
            <span className={propertyAgentLabelClassName}>{t('common.labels.inquiryType')}</span>
            <div className="relative">
              <select
                name="inquiryType"
                defaultValue=""
                className={cn(propertyAgentInputClassName, 'appearance-none pr-12')}
              >
                <option value="" disabled>
                  {t('common.form.selectInquiry')}
                </option>
                <option value="buying">{t('common.form.inquiryOptions.buying')}</option>
                <option value="selling">{t('common.form.inquiryOptions.selling')}</option>
                <option value="viewing">{t('common.form.inquiryOptions.viewing')}</option>
              </select>

              <ChevronDown
                aria-hidden="true"
                className={cn(
                  'pointer-events-none absolute top-1/2 h-5 w-5 -translate-y-1/2 text-[#929AA5]',
                  isRtl ? 'left-4' : 'right-4',
                )}
              />
            </div>
          </label>
        </>
      )}

      {isReview ? (
        <div className="mt-7 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
          <label className="block">
            <span className={propertyAgentLabelClassName}>{t('common.labels.name')}</span>
            <input
              name="name"
              type="text"
              placeholder={t('common.fields.fullName')}
              className={propertyAgentInputClassName}
            />
          </label>

          <label className="block">
            <span className={propertyAgentLabelClassName}>{t('common.labels.email')}</span>
            <input
              name="email"
              type="email"
              placeholder={t('common.fields.emailPlaceholder')}
              className={propertyAgentInputClassName}
            />
          </label>
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className={propertyAgentLabelClassName}>{t('common.labels.name')}</span>
              <input
                name="name"
                type="text"
                placeholder={t('common.fields.fullName')}
                className={propertyAgentInputClassName}
              />
            </label>

            <label className="block">
              <span className={propertyAgentLabelClassName}>{t('common.labels.phoneNumber')}</span>
              <PhoneNumberField
                selectedCountryCode={selectedPhoneCountryCode}
                onCountryCodeChange={setSelectedPhoneCountryCode}
                numberValue={phoneNumber}
                onNumberValueChange={setPhoneNumber}
                placeholder={t('common.fields.phonePlaceholder')}
                isRtl={isRtl}
                inputName="phoneNationalNumber"
                combinedName="phone"
                countryCodeName="phoneCountryCode"
                dialCodeName="phoneDialCode"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className={propertyAgentLabelClassName}>{t('common.labels.email')}</span>
            <input
              name="email"
              type="email"
              placeholder={t('common.fields.emailPlaceholder')}
              className={propertyAgentInputClassName}
            />
          </label>
        </>
      )}

      {!isReview ? <input type="hidden" name="captchaToken" value={captchaToken} /> : null}

      <label className="mt-5 block">
        <span className={propertyAgentLabelClassName}>
          {isReview ? t('common.labels.message') : t('common.labels.description')}
        </span>
        <textarea
          name={isReview ? 'message' : 'description'}
          rows="6"
          placeholder={
            isReview ? t('common.fields.messagePlaceholder') : t('common.fields.inquiryPlaceholder')
          }
          className={textareaClassName}
        />
      </label>

      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-[#818181] sm:text-base">
        <input
          name="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border border-[#D7D7D7] text-primary-mid focus:ring-primary-mid"
        />
        <span>{t('common.form.consentText')}</span>
      </label>

      {isReview ? (
        <div className="mt-8 flex sm:mt-10 sm:justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full min-w-[148px] items-center justify-center rounded-[12px] bg-primary-mid px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-primary sm:w-auto"
          >
            {t('common.buttons.submit')}
          </button>
        </div>
      ) : isContact ? (
        <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-16">
          <div className="w-full max-w-[304px]">
            <RecaptchaField
              value={captchaToken}
              onChange={(token) => {
                setCaptchaToken(token)
                setCaptchaError('')
              }}
              resetSignal={captchaResetSignal}
            />
            {captchaError ? <p className="mt-2 text-xs text-[#D14343]">{captchaError}</p> : null}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-[8px] bg-primary-mid px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-primary sm:h-[64px] sm:min-w-[256px] sm:w-auto"
          >
            {t('common.buttons.getFreeService')}
          </button>
        </div>
      ) : (
        <>
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-[304px]">
              <RecaptchaField
                value={captchaToken}
                onChange={(token) => {
                  setCaptchaToken(token)
                  setCaptchaError('')
                }}
                resetSignal={captchaResetSignal}
              />
              {captchaError ? <p className="mt-2 text-xs text-[#D14343]">{captchaError}</p> : null}
            </div>
          </div>

          <div className="mt-8 flex sm:mt-10 sm:justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full min-w-[228px] items-center justify-center rounded-[12px] bg-primary-mid px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-primary sm:w-auto"
            >
              {t('common.buttons.getFreeService')}
            </button>
          </div>
        </>
      )}
    </form>
  )
}

export default PropertyAgentForm
