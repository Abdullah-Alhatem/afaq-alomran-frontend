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

export function getAccountProfileDetails(t) {
  return [
    { key: 'mobile', label: t('account.profile.fields.mobile') },
    { key: 'email', label: t('account.profile.fields.email') },
    { key: 'dateOfBirth', label: t('account.profile.fields.dateOfBirth') },
    { key: 'country', label: t('account.profile.fields.country') },
    { key: 'houseNumber', label: t('account.profile.fields.houseNumber') },
    { key: 'streetAddress', label: t('account.profile.fields.streetAddress') },
    { key: 'floor', label: t('account.profile.fields.floor') },
    { key: 'place', label: t('account.profile.fields.place') },
    { key: 'postcode', label: t('account.profile.fields.postcode') },
  ]
}

export function formatAccountProfileValue(key, value) {
  if (!value) {
    return '-'
  }

  if (key === 'dateOfBirth') {
    return value.replaceAll('-', '/')
  }

  return value
}
