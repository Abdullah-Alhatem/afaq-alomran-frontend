export const ACCOUNT_NOTIFICATION_COUNT = 5

export const ACCOUNT_NAV_ITEMS = [
  {
    key: 'personal-info',
    label: 'Personal Information',
    to: '/my-account/personal-info',
  },
  {
    key: 'appointments',
    label: 'Appointments',
    to: '/my-account/appointments',
  },
  {
    key: 'favorite-properties',
    label: 'Favorite Properties',
    to: '/my-account/favorite-properties',
  },
  {
    key: 'notifications',
    label: 'Notifications',
    to: '/my-account/notifications',
    badgeCount: ACCOUNT_NOTIFICATION_COUNT,
  },
]

export const ACCOUNT_PAGE_HANDLES = {
  personalInfo: {
    coverTitle: 'My Account',
    currentPage: 'My Account / Personal Information',
    activeTab: 'personal-info',
  },
  editProfile: {
    coverTitle: 'My Account',
    currentPage: 'My Account / Personal Information',
    activeTab: 'personal-info',
  },
  appointments: {
    coverTitle: 'My Account',
    currentPage: 'My Account / Appointments',
    activeTab: 'appointments',
  },
  favoriteProperties: {
    coverTitle: 'Favorite Properties',
    currentPage: 'My Account / Favorite Properties',
    activeTab: 'favorite-properties',
  },
  notifications: {
    coverTitle: 'My Account',
    currentPage: 'My Account / Notifications',
    activeTab: 'notifications',
  },
}

export const DEFAULT_ACCOUNT_PAGE = ACCOUNT_PAGE_HANDLES.personalInfo
