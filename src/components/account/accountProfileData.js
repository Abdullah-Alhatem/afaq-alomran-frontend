export const DEFAULT_ACCOUNT_PROFILE = {
  fullName: 'Jone Doe',
  mobile: '+9639425614287',
  email: 'Jonedoe@email.com',
  dateOfBirth: '1999-06-11',
  country: 'Syria',
  houseNumber: '',
  streetAddress: '',
  floor: '',
  place: '',
  postcode: '',
}

export const ACCOUNT_PROFILE_DETAILS = [
  { key: 'mobile', label: 'Mobile' },
  { key: 'email', label: 'Email' },
  { key: 'dateOfBirth', label: 'Date of birth' },
  { key: 'country', label: 'Country' },
  { key: 'houseNumber', label: 'House Number' },
  { key: 'streetAddress', label: 'Street Address' },
  { key: 'floor', label: 'Floor' },
  { key: 'place', label: 'Place' },
  { key: 'postcode', label: 'Postcode' },
]

export const ACCOUNT_PROFILE_FORM_FIELDS = [
  { key: 'fullName', label: 'Full Name', type: 'text', autoComplete: 'name' },
  { key: 'mobile', label: 'Mobile', type: 'tel', autoComplete: 'tel' },
  { key: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { key: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
  { key: 'country', label: 'Country', type: 'text', autoComplete: 'country-name' },
  { key: 'houseNumber', label: 'House Number', type: 'text', autoComplete: 'address-line1' },
  {
    key: 'streetAddress',
    label: 'Street Address',
    type: 'text',
    autoComplete: 'street-address',
  },
  { key: 'floor', label: 'Floor', type: 'text' },
  { key: 'place', label: 'Place', type: 'text', autoComplete: 'address-level2' },
  { key: 'postcode', label: 'Postcode', type: 'text', autoComplete: 'postal-code' },
]

export function formatAccountProfileValue(key, value) {
  if (!value) {
    return '-'
  }

  if (key === 'dateOfBirth') {
    return value.replaceAll('-', '/')
  }

  return value
}
