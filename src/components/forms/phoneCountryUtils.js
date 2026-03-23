export const DEFAULT_PHONE_COUNTRY_CODE = 'SY'

export function normalizeNationalPhoneNumber(value = '') {
  return String(value).replace(/[^\d]/g, '')
}

export function getDefaultPhoneCountry(
  phoneCountries,
  fallbackCountryCode = DEFAULT_PHONE_COUNTRY_CODE,
) {
  return (
    phoneCountries.find((country) => country.code === fallbackCountryCode) ??
    phoneCountries[0] ??
    null
  )
}

export function buildCombinedPhoneValue(dialCode = '', nationalNumber = '') {
  const normalizedNumber = normalizeNationalPhoneNumber(nationalNumber)

  if (!normalizedNumber) {
    return ''
  }

  return `${dialCode}${normalizedNumber}`
}

export function parsePhoneValue(
  value = '',
  phoneCountries = [],
  fallbackCountryCode = DEFAULT_PHONE_COUNTRY_CODE,
) {
  const normalizedValue = String(value).trim()
  const sortedCountries = [...phoneCountries].sort(
    (left, right) => right.dialCode.length - left.dialCode.length,
  )
  const matchedCountry = sortedCountries.find((country) =>
    normalizedValue.startsWith(country.dialCode),
  )
  const fallbackCountry = getDefaultPhoneCountry(phoneCountries, fallbackCountryCode)
  const resolvedCountry = matchedCountry ?? fallbackCountry

  if (!resolvedCountry) {
    return {
      countryCode: fallbackCountryCode,
      nationalNumber: normalizeNationalPhoneNumber(normalizedValue),
    }
  }

  return {
    countryCode: resolvedCountry.code,
    nationalNumber: normalizeNationalPhoneNumber(
      normalizedValue.startsWith(resolvedCountry.dialCode)
        ? normalizedValue.slice(resolvedCountry.dialCode.length)
        : normalizedValue,
    ),
  }
}
