import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

import fbIcon from '@/assets/Footer/FB.png'
import igIcon from '@/assets/Footer/IG.png'
import waIcon from '@/assets/Footer/WA.png'

import {
  fakeApi,
  peekAccountProfile,
  peekAgent,
  peekAgents,
  peekAppointments,
  peekFavoriteProperties,
  peekHomeLatestProperties,
  peekHomePopularProperties,
  peekHomeReviews,
  peekNotifications,
  peekPhoneCountries,
  peekPortfolio,
  peekPortfolios,
  peekProperties,
  peekProperty,
  peekSiteSettings,
} from './client'

export const queryKeys = {
  site: ['fake-api', 'site'],
  phoneCountries: ['fake-api', 'phone-countries'],
  properties: {
    list: (language) => ['fake-api', 'properties', 'list', language],
    detail: (propertyId, language) => [
      'fake-api',
      'properties',
      'detail',
      String(propertyId),
      language,
    ],
    homeLatest: (language) => ['fake-api', 'home', 'latest-properties', language],
    homePopular: (language) => ['fake-api', 'home', 'popular-properties', language],
  },
  agents: {
    list: (language) => ['fake-api', 'agents', 'list', language],
    detail: (agentId, language) => ['fake-api', 'agents', 'detail', agentId, language],
  },
  home: {
    reviews: (language) => ['fake-api', 'home', 'reviews', language],
  },
  portfolios: {
    home: ['fake-api', 'portfolios', 'home'],
    list: ['fake-api', 'portfolios', 'list'],
    detail: (portfolioId) => ['fake-api', 'portfolios', 'detail', portfolioId],
  },
  account: {
    profile: ['fake-api', 'account', 'profile'],
    appointments: (language) => ['fake-api', 'account', 'appointments', language],
    appointmentsRoot: ['fake-api', 'account', 'appointments'],
    favoriteProperties: (language) => ['fake-api', 'account', 'favorite-properties', language],
    favoritePropertiesRoot: ['fake-api', 'account', 'favorite-properties'],
    notifications: (language) => ['fake-api', 'account', 'notifications', language],
    notificationsRoot: ['fake-api', 'account', 'notifications'],
  },
}

const socialIconMap = {
  facebook: fbIcon,
  instagram: igIcon,
  whatsapp: waIcon,
}

function getTranslationArray(t, key) {
  const value = t(key, { returnObjects: true })
  return Array.isArray(value) ? value : []
}

function getPropertyTranslation(property, localizedPropertyItems = []) {
  return localizedPropertyItems[property.id - 1] ?? {}
}

function getStatusLabel(status, t) {
  if (status === 'For Sale') {
    return t('common.status.forSale')
  }

  if (status === 'For Rent') {
    return t('common.status.forRent')
  }

  return status
}

function getPropertyTypeLabel(type, t) {
  const typeKeyMap = {
    apartment: 'apartment',
    house: 'house',
    'single-family': 'singleFamily',
    studio: 'studio',
  }

  const translationKey = typeKeyMap[type]
  return translationKey ? t(`properties.list.filters.propertyType.${translationKey}`) : type
}

export function buildSocialLinks(socials = {}, t) {
  return ['facebook', 'instagram', 'whatsapp']
    .filter((platform) => Boolean(socials[platform]))
    .map((platform) => ({
      href: socials[platform],
      icon: socialIconMap[platform],
      label: t(`agents.social.${platform}`),
    }))
}

function buildTranslatedAgentMap(t) {
  return new Map(getTranslationArray(t, 'agents.people').map((agent) => [agent.id, agent]))
}

function localizeAgent(agent, translatedAgentMap, t) {
  if (!agent) {
    return null
  }

  return {
    ...agent,
    ...(translatedAgentMap.get(agent.id) ?? {}),
    socialLinks: buildSocialLinks(agent.socials, t),
  }
}

function localizePropertyCard(property, localizedPropertyItems, options = {}) {
  if (!property) {
    return null
  }

  const translation = getPropertyTranslation(property, localizedPropertyItems)
  const { withAreaSuffix = false } = options

  return {
    ...property,
    title: translation.title ?? property.title ?? '',
    location: translation.location ?? property.location ?? '',
    sqft: withAreaSuffix
      ? `${property.sqft.toLocaleString()} ${options.areaSuffix}`
      : property.sqft,
  }
}

function localizeHomePropertySection(properties, translatedItems) {
  const translatedItemsById = new Map(translatedItems.map((item) => [String(item.id), item]))

  return properties.map((property) => {
    const translation = translatedItemsById.get(String(property.id)) ?? {}

    return {
      ...property,
      title: translation.title ?? '',
      location: translation.location ?? '',
      beds: property.beds,
      baths: property.baths,
      sqft: property.sqft.toLocaleString(),
    }
  })
}

function buildPropertyDetails(property, t) {
  if (!property) {
    return null
  }

  const translatedPropertyItems = getTranslationArray(t, 'properties.list.items')
  const projectFacts = getTranslationArray(t, 'properties.detail.facts')
  const reviewTexts = getTranslationArray(t, 'properties.detail.reviews')
  const translatedAgentMap = buildTranslatedAgentMap(t)
  const localizedProperty = localizePropertyCard(property, translatedPropertyItems)
  const contactAgent = localizeAgent(peekAgent(property.contactAgentId), translatedAgentMap, t)
  const relatedProperties = property.relatedPropertyIds
    .map((relatedPropertyId) => peekProperty(relatedPropertyId))
    .filter(Boolean)
    .map((relatedProperty) =>
      localizePropertyCard(relatedProperty, translatedPropertyItems, {
        withAreaSuffix: true,
        areaSuffix: t('common.propertyMeta.areaSuffix'),
      }),
    )

  const factValues = [
    getPropertyTypeLabel(property.type, t),
    String(property.numberOfUnits),
    `${property.sqft.toLocaleString()} ${t('common.propertyMeta.areaSuffix')}`,
    getStatusLabel(property.status, t),
  ]

  return {
    ...localizedProperty,
    videoUrl: property.videoUrl,
    gallery: property.gallery,
    mapImage: property.mapImage,
    reviewItems: property.reviewImages
      .map((image, index) => ({
        image,
        ...(reviewTexts[index] ?? {}),
      }))
      .filter((review) => review.name && review.text),
    projectFacts: projectFacts.map((fact, index) => ({
      label: fact.label,
      value: factValues[index] ?? fact.value,
    })),
    contactAgent,
    portfolioItems: property.portfolioIds
      .map((portfolioId) => peekPortfolio(portfolioId))
      .filter(Boolean),
    relatedProperties,
  }
}

function localizeAppointments(appointments, t) {
  const localizedPropertyItems = getTranslationArray(t, 'properties.list.items')

  return appointments
    .map((appointment) => {
      const property = peekProperty(appointment.propertyId)
      if (!property) {
        return null
      }

      const localizedProperty = localizePropertyCard(property, localizedPropertyItems)

      return {
        ...appointment,
        propertyId: property.id,
        image: property.image,
        title: localizedProperty.title,
        location: localizedProperty.location,
        area: `${property.sqft.toLocaleString()} ${t('common.propertyMeta.areaSuffix')}`,
        baths: `${property.baths} ${t('common.propertyMeta.bathSuffix')}`,
        beds: `${property.beds} ${t('common.propertyMeta.bedSuffix')}`,
        price: property.price,
      }
    })
    .filter(Boolean)
}

function localizeFavoriteProperties(properties, t) {
  const localizedPropertyItems = getTranslationArray(t, 'properties.list.items')

  return properties
    .map((property) =>
      localizePropertyCard(property, localizedPropertyItems, {
        withAreaSuffix: true,
        areaSuffix: t('common.propertyMeta.areaSuffix'),
      }),
    )
    .filter(Boolean)
}

function localizeNotifications(notifications, t) {
  const translatedNotifications = new Map(
    getTranslationArray(t, 'account.notificationsCenter.items').map((item) => [item.id, item]),
  )

  return notifications.map((notification) => ({
    ...notification,
    ...(translatedNotifications.get(notification.id) ?? {}),
  }))
}

export function useSiteSettingsQuery() {
  return useQuery({
    queryKey: queryKeys.site,
    queryFn: () => fakeApi.getSiteSettings(),
    initialData: () => peekSiteSettings(),
  })
}

export function usePhoneCountriesQuery() {
  return useQuery({
    queryKey: queryKeys.phoneCountries,
    queryFn: () => fakeApi.getPhoneCountries(),
    initialData: () => peekPhoneCountries(),
  })
}

export function usePropertiesQuery() {
  const { i18n, t } = useTranslation()

  return useQuery({
    queryKey: queryKeys.properties.list(i18n.language),
    queryFn: async () =>
      (await fakeApi.getProperties()).map((property) =>
        localizePropertyCard(property, getTranslationArray(t, 'properties.list.items')),
      ),
    initialData: () =>
      peekProperties().map((property) =>
        localizePropertyCard(property, getTranslationArray(t, 'properties.list.items')),
      ),
  })
}

export function useHomeLatestPropertiesQuery() {
  const { i18n, t } = useTranslation()

  return useQuery({
    queryKey: queryKeys.properties.homeLatest(i18n.language),
    queryFn: async () =>
      localizeHomePropertySection(
        await fakeApi.getHomeLatestProperties(),
        getTranslationArray(t, 'home.latestProperties.items'),
      ),
    initialData: () =>
      localizeHomePropertySection(
        peekHomeLatestProperties(),
        getTranslationArray(t, 'home.latestProperties.items'),
      ),
  })
}

export function useHomePopularPropertiesQuery() {
  const { i18n, t } = useTranslation()

  return useQuery({
    queryKey: queryKeys.properties.homePopular(i18n.language),
    queryFn: async () =>
      localizeHomePropertySection(
        await fakeApi.getHomePopularProperties(),
        getTranslationArray(t, 'home.popularProperties.items'),
      ),
    initialData: () =>
      localizeHomePropertySection(
        peekHomePopularProperties(),
        getTranslationArray(t, 'home.popularProperties.items'),
      ),
  })
}

export function usePropertyDetailsQuery(propertyId) {
  const { i18n, t } = useTranslation()

  return useQuery({
    queryKey: queryKeys.properties.detail(propertyId, i18n.language),
    queryFn: async () => buildPropertyDetails(await fakeApi.getPropertyById(propertyId), t),
    initialData: () => buildPropertyDetails(peekProperty(propertyId), t),
    enabled: Boolean(propertyId),
  })
}

export function useAgentsQuery() {
  const { i18n, t } = useTranslation()

  return useQuery({
    queryKey: queryKeys.agents.list(i18n.language),
    queryFn: async () => {
      const translatedAgentMap = buildTranslatedAgentMap(t)
      return (await fakeApi.getAgents())
        .map((agent) => localizeAgent(agent, translatedAgentMap, t))
        .filter(Boolean)
    },
    initialData: () => {
      const translatedAgentMap = buildTranslatedAgentMap(t)
      return peekAgents()
        .map((agent) => localizeAgent(agent, translatedAgentMap, t))
        .filter(Boolean)
    },
  })
}

export function useAgentDetailsQuery(agentId) {
  const { i18n, t } = useTranslation()

  return useQuery({
    queryKey: queryKeys.agents.detail(agentId, i18n.language),
    queryFn: async () =>
      localizeAgent(await fakeApi.getAgentById(agentId), buildTranslatedAgentMap(t), t),
    initialData: () => localizeAgent(peekAgent(agentId), buildTranslatedAgentMap(t), t),
    enabled: Boolean(agentId),
  })
}

export function useHomeReviewsQuery() {
  const { i18n, t } = useTranslation()

  return useQuery({
    queryKey: queryKeys.home.reviews(i18n.language),
    queryFn: async () =>
      (await fakeApi.getHomeReviews()).map((review, index) => ({
        ...review,
        ...(getTranslationArray(t, 'home.reviews.items')[index] ?? {}),
      })),
    initialData: () =>
      peekHomeReviews().map((review, index) => ({
        ...review,
        ...(getTranslationArray(t, 'home.reviews.items')[index] ?? {}),
      })),
  })
}

export function useHomePortfoliosQuery() {
  return useQuery({
    queryKey: queryKeys.portfolios.home,
    queryFn: async () => (await fakeApi.getPortfolios()).slice(0, 6),
    initialData: () => peekPortfolios().slice(0, 6),
  })
}

export function usePortfoliosQuery() {
  return useQuery({
    queryKey: queryKeys.portfolios.list,
    queryFn: () => fakeApi.getPortfolios(),
    initialData: () => peekPortfolios(),
  })
}

export function usePortfolioDetailsQuery(portfolioId) {
  return useQuery({
    queryKey: queryKeys.portfolios.detail(portfolioId),
    queryFn: () => fakeApi.getPortfolioById(portfolioId),
    initialData: () => peekPortfolio(portfolioId),
    enabled: Boolean(portfolioId),
  })
}

export function useAccountProfileQuery() {
  return useQuery({
    queryKey: queryKeys.account.profile,
    queryFn: () => fakeApi.getAccountProfile(),
    initialData: () => peekAccountProfile(),
  })
}

export function useUpdateAccountProfileMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (nextProfile) => fakeApi.updateAccountProfile(nextProfile),
    onSuccess: (updatedProfile) => {
      queryClient.setQueryData(queryKeys.account.profile, updatedProfile)
    },
  })
}

export function useAppointmentsQuery() {
  const { i18n, t } = useTranslation()

  return useQuery({
    queryKey: queryKeys.account.appointments(i18n.language),
    queryFn: async () => localizeAppointments(await fakeApi.getAppointments(), t),
    initialData: () => localizeAppointments(peekAppointments(), t),
  })
}

export function useCancelAppointmentMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (appointmentId) => fakeApi.cancelAppointment(appointmentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.account.appointmentsRoot })
    },
  })
}

export function useFavoritePropertiesQuery() {
  const { i18n, t } = useTranslation()

  return useQuery({
    queryKey: queryKeys.account.favoriteProperties(i18n.language),
    queryFn: async () => localizeFavoriteProperties(await fakeApi.getFavoriteProperties(), t),
    initialData: () => localizeFavoriteProperties(peekFavoriteProperties(), t),
  })
}

export function useRemoveFavoritePropertyMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (propertyId) => fakeApi.removeFavoriteProperty(propertyId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.account.favoritePropertiesRoot })
    },
  })
}

export function useNotificationsQuery() {
  const { i18n, t } = useTranslation()

  return useQuery({
    queryKey: queryKeys.account.notifications(i18n.language),
    queryFn: async () => localizeNotifications(await fakeApi.getNotifications(), t),
    initialData: () => localizeNotifications(peekNotifications(), t),
  })
}

export function useDeleteNotificationMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (notificationId) => fakeApi.deleteNotification(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.account.notificationsRoot })
    },
  })
}

export function useSignInMutation() {
  return useMutation({
    mutationFn: (payload) => fakeApi.signIn(payload),
  })
}

export function useSignUpMutation() {
  return useMutation({
    mutationFn: (payload) => fakeApi.signUp(payload),
  })
}

export function useGoogleAuthMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload) => fakeApi.authenticateWithGoogle(payload),
    onSuccess: (result) => {
      if (result?.profile) {
        queryClient.setQueryData(queryKeys.account.profile, result.profile)
      }
    },
  })
}

export function useForgotPasswordMutation() {
  return useMutation({
    mutationFn: (payload) => fakeApi.requestPasswordReset(payload),
  })
}

export function useResetPasswordMutation() {
  return useMutation({
    mutationFn: (payload) => fakeApi.resetPassword(payload),
  })
}

export function useInquiryMutation() {
  return useMutation({
    mutationFn: (payload) => fakeApi.submitInquiry(payload),
  })
}

export function useReviewMutation() {
  return useMutation({
    mutationFn: (payload) => fakeApi.submitReview(payload),
  })
}

export function useNewsletterSubscriptionMutation() {
  return useMutation({
    mutationFn: (payload) => fakeApi.subscribeToNewsletter(payload),
  })
}
