import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import addIcon from '@/assets/MyAccount/AddIcon.svg'
import editIcon from '@/assets/MyAccount/editIcon.svg'
import trashIcon from '@/assets/MyAccount/trashIcon.svg'
import { DEFAULT_ACCOUNT_PROFILE } from '@/components/account/accountProfileData'
import {
  propertyAgentInputClassName,
  propertyAgentLabelClassName,
} from '@/components/forms/PropertyAgentForm'
import PhoneNumberField from '@/components/forms/PhoneNumberField'
import { buildCombinedPhoneValue, parsePhoneValue } from '@/components/forms/phoneCountryUtils'
import {
  useAccountProfileQuery,
  usePhoneCountriesQuery,
  useUpdateAccountProfileMutation,
} from '@/lib/fake-api/hooks'

function splitFullName(fullName = '') {
  const [firstName = '', ...restNameParts] = fullName.trim().split(/\s+/).filter(Boolean)

  return {
    firstName,
    lastName: restNameParts.join(' '),
  }
}

function getFormState(profile, phoneCountries) {
  const { firstName, lastName } = splitFullName(profile.fullName)
  const phoneState = parsePhoneValue(profile.mobile, phoneCountries)

  return {
    ...profile,
    firstName,
    lastName,
    dateOfBirth: profile.dateOfBirth ? profile.dateOfBirth.replaceAll('-', '/') : '',
    phoneCountryCode: phoneState.countryCode,
    phoneNumber: phoneState.nationalNumber,
  }
}

function EditProfile() {
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()
  const { data: profile = DEFAULT_ACCOUNT_PROFILE } = useAccountProfileQuery()
  const { data: phoneCountries = [] } = usePhoneCountriesQuery()
  const updateProfileMutation = useUpdateAccountProfileMutation()
  const [formData, setFormData] = useState(() => getFormState(profile, phoneCountries))
  const isRtl = i18n.dir() === 'rtl'

  useEffect(() => {
    setFormData(getFormState(profile, phoneCountries))
  }, [phoneCountries, profile])

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const { firstName, lastName, dateOfBirth, phoneCountryCode, phoneNumber, ...restFormData } =
      formData
    const nextFullName =
      [firstName, lastName].filter(Boolean).join(' ').trim() || DEFAULT_ACCOUNT_PROFILE.fullName
    const selectedCountry = phoneCountries.find((country) => country.code === phoneCountryCode)

    await updateProfileMutation.mutateAsync({
      ...DEFAULT_ACCOUNT_PROFILE,
      ...restFormData,
      fullName: nextFullName,
      dateOfBirth: dateOfBirth.replaceAll('/', '-'),
      mobile: buildCombinedPhoneValue(selectedCountry?.dialCode, phoneNumber),
    })

    navigate('/my-account/personal-info')
  }

  return (
    <section className="bg-white">
      <div className="flex flex-col gap-4 border-b border-secondary-lighter bg-[#ECF1F6] px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-9 lg:py-8">
        <h2 className="text-[22px] font-bold leading-tight text-grey-text-primary sm:text-[24px]">
          {t('account.profile.editTitle')}
        </h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/my-account/personal-info"
            className="inline-flex min-h-[50px] items-center justify-center rounded-full border-2 border-primary-mid px-8 text-[16px] font-bold text-primary-mid transition-colors duration-200 hover:bg-[#F4F8FB]"
          >
            {t('common.buttons.cancel')}
          </Link>

          <button
            form="account-edit-profile-form"
            type="submit"
            disabled={updateProfileMutation.isPending}
            className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-primary-mid px-8 text-[16px] font-bold text-white transition-colors duration-200 hover:bg-primary"
          >
            {t('common.buttons.saveChanges')}
          </button>
        </div>
      </div>

      <form
        id="account-edit-profile-form"
        className="px-5 py-10 sm:px-8 lg:px-10 lg:py-12"
        onSubmit={handleSubmit}
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="flex justify-center">
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                aria-label={t('account.profile.deleteProfileImage')}
                className="transition-transform duration-200 hover:scale-105"
              >
                <img src={trashIcon} alt="" className="h-[42px] w-[42px]" />
              </button>

              <button
                type="button"
                aria-label={t('account.profile.addProfileImage')}
                className="relative h-24 w-24 overflow-hidden rounded-full transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={addIcon}
                  alt=""
                  className="absolute left-1/2 top-0 h-full w-auto max-w-none -translate-x-1/2"
                />
              </button>

              <button
                type="button"
                aria-label={t('account.profile.editProfileImage')}
                className="transition-transform duration-200 hover:scale-105"
              >
                <img src={editIcon} alt="" className="h-[42px] w-[42px]" />
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:mt-14 lg:gap-x-12 lg:gap-y-10">
            <label className="block">
              <span className={propertyAgentLabelClassName}>{t('common.labels.firstName')}</span>
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                placeholder={t('common.fields.firstName')}
                className={propertyAgentInputClassName}
              />
            </label>

            <label className="block">
              <span className={propertyAgentLabelClassName}>{t('common.labels.lastName')}</span>
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                placeholder={t('common.fields.lastName')}
                className={propertyAgentInputClassName}
              />
            </label>

            <label className="block">
              <span className={propertyAgentLabelClassName}>{t('common.labels.dateOfBirth')}</span>
              <input
                name="dateOfBirth"
                type="text"
                value={formData.dateOfBirth}
                onChange={handleChange}
                inputMode="numeric"
                placeholder={t('common.fields.dateOfBirthPlaceholder')}
                className={propertyAgentInputClassName}
              />
            </label>

            <label className="block">
              <span className={propertyAgentLabelClassName}>{t('common.labels.country')}</span>
              <input
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                autoComplete="country-name"
                placeholder={t('common.fields.countryPlaceholder')}
                className={propertyAgentInputClassName}
              />
            </label>

            <label className="block">
              <span className={propertyAgentLabelClassName}>{t('common.labels.email')}</span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder={t('common.fields.emailPlaceholder')}
                className={propertyAgentInputClassName}
              />
            </label>

            <label className="block">
              <span className={propertyAgentLabelClassName}>{t('common.labels.phoneNumber')}</span>
              <PhoneNumberField
                selectedCountryCode={formData.phoneCountryCode}
                onCountryCodeChange={(countryCode) =>
                  setFormData((current) => ({
                    ...current,
                    phoneCountryCode: countryCode,
                  }))
                }
                numberValue={formData.phoneNumber}
                onNumberValueChange={(value) =>
                  setFormData((current) => ({
                    ...current,
                    phoneNumber: value,
                  }))
                }
                placeholder={t('common.fields.phonePlaceholder')}
                isRtl={isRtl}
              />
            </label>
          </div>
        </div>
      </form>
    </section>
  )
}

export default EditProfile
