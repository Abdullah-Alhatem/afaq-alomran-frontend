import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import addIcon from '@/assets/MyAccount/AddIcon.svg'
import editIcon from '@/assets/MyAccount/editIcon.svg'
import trashIcon from '@/assets/MyAccount/trashIcon.svg'
import { DEFAULT_ACCOUNT_PROFILE } from '@/components/account/accountProfileData'
import {
  CountryPrefixFlag,
  propertyAgentInputClassName,
  propertyAgentLabelClassName,
} from '@/components/forms/PropertyAgentForm'
import useAccountProfileStore from '@/stores/useAccountProfileStore'

function splitFullName(fullName = '') {
  const [firstName = '', ...restNameParts] = fullName.trim().split(/\s+/).filter(Boolean)

  return {
    firstName,
    lastName: restNameParts.join(' '),
  }
}

function getFormState(profile) {
  const { firstName, lastName } = splitFullName(profile.fullName)

  return {
    ...profile,
    firstName,
    lastName,
    dateOfBirth: profile.dateOfBirth ? profile.dateOfBirth.replaceAll('-', '/') : '',
  }
}

function EditProfile() {
  const navigate = useNavigate()
  const profile = useAccountProfileStore((state) => state.profile)
  const updateProfile = useAccountProfileStore((state) => state.updateProfile)
  const [formData, setFormData] = useState(() => getFormState(profile))

  useEffect(() => {
    setFormData(getFormState(profile))
  }, [profile])

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const { firstName, lastName, dateOfBirth, ...restFormData } = formData
    const nextFullName =
      [firstName, lastName].filter(Boolean).join(' ').trim() || DEFAULT_ACCOUNT_PROFILE.fullName

    updateProfile({
      ...DEFAULT_ACCOUNT_PROFILE,
      ...restFormData,
      fullName: nextFullName,
      dateOfBirth: dateOfBirth.replaceAll('/', '-'),
    })

    navigate('/my-account/personal-info')
  }

  return (
    <section className="bg-white">
      <div className="flex flex-col gap-4 border-b border-secondary-lighter bg-[#ECF1F6] px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-9 lg:py-8">
        <h2 className="text-[22px] font-bold leading-tight text-grey-text-primary sm:text-[24px]">
          Edit Profile
        </h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/my-account/personal-info"
            className="inline-flex min-h-[50px] items-center justify-center rounded-full border-2 border-primary-mid px-8 text-[16px] font-bold text-primary-mid transition-colors duration-200 hover:bg-[#F4F8FB]"
          >
            Cancel
          </Link>

          <button
            form="account-edit-profile-form"
            type="submit"
            className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-primary-mid px-8 text-[16px] font-bold text-white transition-colors duration-200 hover:bg-primary"
          >
            Save Changes
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
                aria-label="Delete profile image"
                className="transition-transform duration-200 hover:scale-105"
              >
                <img src={trashIcon} alt="" className="h-[42px] w-[42px]" />
              </button>

              <button
                type="button"
                aria-label="Add profile image"
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
                aria-label="Edit profile image"
                className="transition-transform duration-200 hover:scale-105"
              >
                <img src={editIcon} alt="" className="h-[42px] w-[42px]" />
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:mt-14 lg:gap-x-12 lg:gap-y-10">
            <label className="block">
              <span className={propertyAgentLabelClassName}>First Name</span>
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                placeholder="First name"
                className={propertyAgentInputClassName}
              />
            </label>

            <label className="block">
              <span className={propertyAgentLabelClassName}>Last Name</span>
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                placeholder="Last name"
                className={propertyAgentInputClassName}
              />
            </label>

            <label className="block">
              <span className={propertyAgentLabelClassName}>Date of birth</span>
              <input
                name="dateOfBirth"
                type="text"
                value={formData.dateOfBirth}
                onChange={handleChange}
                inputMode="numeric"
                placeholder="2001/06/11"
                className={propertyAgentInputClassName}
              />
            </label>

            <label className="block">
              <span className={propertyAgentLabelClassName}>Country</span>
              <input
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                autoComplete="country-name"
                placeholder="Country"
                className={propertyAgentInputClassName}
              />
            </label>

            <label className="block">
              <span className={propertyAgentLabelClassName}>Email</span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="hi@example.com"
                className={propertyAgentInputClassName}
              />
            </label>

            <label className="block">
              <span className={propertyAgentLabelClassName}>Phone Number</span>
              <div className="mt-3 flex h-14 overflow-hidden rounded-[12px] border border-[#D7D7D7] bg-[#ECF1F6] transition-colors duration-200 focus-within:border-primary-mid">
                <div className="flex shrink-0 items-center gap-2 border-r border-[#D7D7D7] px-4 text-[#5C5C5C]">
                  <CountryPrefixFlag />
                  <ChevronDown aria-hidden="true" className="h-4 w-4 text-[#929AA5]" />
                </div>

                <input
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  autoComplete="tel"
                  placeholder="+963 --- --- ----"
                  className="h-full w-full bg-transparent px-4 text-base text-[#5C5C5C] outline-none placeholder:text-[#9A9A9A]"
                />
              </div>
            </label>
          </div>
        </div>
      </form>
    </section>
  )
}

export default EditProfile
