export const ACCOUNT_NOTIFICATION_COUNT = 5

export const ACCOUNT_PAGE_KEYS = {
  personalInfo: 'personalInfo',
  editProfile: 'editProfile',
  appointments: 'appointments',
  favoriteProperties: 'favoriteProperties',
  notifications: 'notifications',
}

export function getAccountNavItems(t) {
  return [
    {
      key: 'personal-info',
      label: t('account.nav.personalInfo'),
      to: '/my-account/personal-info',
    },
    {
      key: 'appointments',
      label: t('account.nav.appointments'),
      to: '/my-account/appointments',
    },
    {
      key: 'favorite-properties',
      label: t('account.nav.favoriteProperties'),
      to: '/my-account/favorite-properties',
    },
    {
      key: 'notifications',
      label: t('account.nav.notifications'),
      to: '/my-account/notifications',
      badgeCount: ACCOUNT_NOTIFICATION_COUNT,
    },
  ]
}

export function getAccountPageMeta(t, pageKey = ACCOUNT_PAGE_KEYS.personalInfo) {
  const pages = {
    [ACCOUNT_PAGE_KEYS.personalInfo]: {
      coverTitle: t('account.pages.personalInfo.coverTitle'),
      currentPage: t('account.pages.personalInfo.currentPage'),
      activeTab: 'personal-info',
    },
    [ACCOUNT_PAGE_KEYS.editProfile]: {
      coverTitle: t('account.pages.editProfile.coverTitle'),
      currentPage: t('account.pages.editProfile.currentPage'),
      activeTab: 'personal-info',
    },
    [ACCOUNT_PAGE_KEYS.appointments]: {
      coverTitle: t('account.pages.appointments.coverTitle'),
      currentPage: t('account.pages.appointments.currentPage'),
      activeTab: 'appointments',
    },
    [ACCOUNT_PAGE_KEYS.favoriteProperties]: {
      coverTitle: t('account.pages.favoriteProperties.coverTitle'),
      currentPage: t('account.pages.favoriteProperties.currentPage'),
      activeTab: 'favorite-properties',
    },
    [ACCOUNT_PAGE_KEYS.notifications]: {
      coverTitle: t('account.pages.notifications.coverTitle'),
      currentPage: t('account.pages.notifications.currentPage'),
      activeTab: 'notifications',
    },
  }

  return pages[pageKey] ?? pages[ACCOUNT_PAGE_KEYS.personalInfo]
}
