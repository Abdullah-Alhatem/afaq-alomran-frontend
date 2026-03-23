import { fakeDb } from './database'

const DEFAULT_DELAY_MS = 250

function cloneData(value) {
  return JSON.parse(JSON.stringify(value))
}

function wait(delayMs = DEFAULT_DELAY_MS) {
  return new Promise((resolve) => {
    globalThis.setTimeout(resolve, delayMs)
  })
}

async function respond(value, delayMs) {
  await wait(delayMs)
  return cloneData(value)
}

function findProperty(propertyId) {
  return fakeDb.properties.find((property) => String(property.id) === String(propertyId)) ?? null
}

function findAgent(agentId) {
  return fakeDb.agents.find((agent) => agent.id === agentId) ?? null
}

function findPortfolio(portfolioId) {
  return fakeDb.portfolios.find((portfolio) => portfolio.id === portfolioId) ?? null
}

function buildGoogleProfile(profileOverrides = {}) {
  return {
    ...fakeDb.accountProfile,
    fullName: 'Google User',
    email: 'google.user@example.com',
    ...profileOverrides,
  }
}

export function peekSiteSettings() {
  return cloneData(fakeDb.siteSettings)
}

export function peekPhoneCountries() {
  return cloneData(fakeDb.phoneCountries)
}

export function peekProperties() {
  return cloneData(fakeDb.properties)
}

export function peekProperty(propertyId) {
  return cloneData(findProperty(propertyId))
}

export function peekHomeLatestProperties() {
  return cloneData(
    fakeDb.homeCollections.latestPropertyIds
      .map((propertyId) => findProperty(propertyId))
      .filter(Boolean),
  )
}

export function peekHomePopularProperties() {
  return cloneData(
    fakeDb.homeCollections.popularPropertyIds
      .map((propertyId) => findProperty(propertyId))
      .filter(Boolean),
  )
}

export function peekHomeReviews() {
  return cloneData(fakeDb.homeCollections.reviewItems)
}

export function peekAgents() {
  return cloneData(fakeDb.agents)
}

export function peekAgent(agentId) {
  return cloneData(findAgent(agentId))
}

export function peekPortfolios() {
  return cloneData(fakeDb.portfolios)
}

export function peekPortfolio(portfolioId) {
  return cloneData(findPortfolio(portfolioId))
}

export function peekAccountProfile() {
  return cloneData(fakeDb.accountProfile)
}

export function peekAppointments() {
  return cloneData(fakeDb.appointments)
}

export function peekFavoriteProperties() {
  return cloneData(
    fakeDb.favoritePropertyIds.map((propertyId) => findProperty(propertyId)).filter(Boolean),
  )
}

export function peekNotifications() {
  return cloneData(fakeDb.notifications)
}

export const fakeApi = {
  async getSiteSettings() {
    return respond(fakeDb.siteSettings)
  },

  async getPhoneCountries() {
    return respond(fakeDb.phoneCountries)
  },

  async getProperties() {
    return respond(fakeDb.properties)
  },

  async getPropertyById(propertyId) {
    return respond(findProperty(propertyId))
  },

  async getHomeLatestProperties() {
    return respond(
      fakeDb.homeCollections.latestPropertyIds
        .map((propertyId) => findProperty(propertyId))
        .filter(Boolean),
    )
  },

  async getHomePopularProperties() {
    return respond(
      fakeDb.homeCollections.popularPropertyIds
        .map((propertyId) => findProperty(propertyId))
        .filter(Boolean),
    )
  },

  async getHomeReviews() {
    return respond(fakeDb.homeCollections.reviewItems)
  },

  async getAgents() {
    return respond(fakeDb.agents)
  },

  async getAgentById(agentId) {
    return respond(findAgent(agentId))
  },

  async getPortfolios() {
    return respond(fakeDb.portfolios)
  },

  async getPortfolioById(portfolioId) {
    return respond(findPortfolio(portfolioId))
  },

  async getAccountProfile() {
    return respond(fakeDb.accountProfile)
  },

  async updateAccountProfile(nextProfile) {
    fakeDb.accountProfile = {
      ...fakeDb.accountProfile,
      ...nextProfile,
    }

    return respond(fakeDb.accountProfile)
  },

  async getAppointments() {
    return respond(fakeDb.appointments)
  },

  async cancelAppointment(appointmentId) {
    fakeDb.appointments = fakeDb.appointments.filter(
      (appointment) => String(appointment.id) !== String(appointmentId),
    )

    return respond(fakeDb.appointments)
  },

  async getFavoriteProperties() {
    return respond(
      fakeDb.favoritePropertyIds.map((propertyId) => findProperty(propertyId)).filter(Boolean),
    )
  },

  async removeFavoriteProperty(propertyId) {
    fakeDb.favoritePropertyIds = fakeDb.favoritePropertyIds.filter(
      (favoriteId) => String(favoriteId) !== String(propertyId),
    )

    return respond(
      fakeDb.favoritePropertyIds.map((favoriteId) => findProperty(favoriteId)).filter(Boolean),
    )
  },

  async getNotifications() {
    return respond(fakeDb.notifications)
  },

  async deleteNotification(notificationId) {
    fakeDb.notifications = fakeDb.notifications.filter(
      (notification) => String(notification.id) !== String(notificationId),
    )

    return respond(fakeDb.notifications)
  },

  async signIn(payload) {
    fakeDb.activityLog.authRequests.push({
      id: crypto.randomUUID(),
      type: 'sign-in',
      payload,
    })

    return respond({ success: true })
  },

  async signUp(payload) {
    fakeDb.activityLog.authRequests.push({
      id: crypto.randomUUID(),
      type: 'sign-up',
      payload,
    })

    return respond({ success: true })
  },

  async authenticateWithGoogle(payload = {}) {
    const authType = payload.intent === 'sign-up' ? 'google-sign-up' : 'google-sign-in'
    const profile = buildGoogleProfile(payload.profile)

    fakeDb.accountProfile = profile
    fakeDb.activityLog.authRequests.push({
      id: crypto.randomUUID(),
      type: authType,
      payload: {
        provider: 'google',
        ...payload,
      },
    })

    return respond({
      success: true,
      provider: 'google',
      profile,
    })
  },

  async requestPasswordReset(payload) {
    fakeDb.activityLog.authRequests.push({
      id: crypto.randomUUID(),
      type: 'forgot-password',
      payload,
    })

    return respond({ success: true })
  },

  async resetPassword(payload) {
    fakeDb.activityLog.authRequests.push({
      id: crypto.randomUUID(),
      type: 'reset-password',
      payload,
    })

    return respond({ success: true })
  },

  async submitInquiry(payload) {
    fakeDb.activityLog.inquiries.push({
      id: crypto.randomUUID(),
      ...payload,
    })

    return respond({ success: true })
  },

  async submitReview(payload) {
    fakeDb.activityLog.reviews.push({
      id: crypto.randomUUID(),
      ...payload,
    })

    return respond({ success: true })
  },

  async subscribeToNewsletter(payload) {
    fakeDb.activityLog.newsletterSubscriptions.push({
      id: crypto.randomUUID(),
      ...payload,
    })

    return respond({ success: true })
  },
}
