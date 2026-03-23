import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, Clock3, Plus, Search, Trash2 } from 'lucide-react'

import AccountEmptyState from '@/components/account/AccountEmptyState'
import { useDeleteNotificationMutation, useNotificationsQuery } from '@/lib/fake-api/hooks'
import { cn } from '@/lib/utils'

function CompanyAvatar() {
  return (
    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#DE8556] sm:h-[56px] sm:w-[56px]">
      <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#123E56] sm:h-[38px] sm:w-[38px]">
        <svg
          aria-hidden="true"
          viewBox="0 0 56 56"
          className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.8525 21.2083L30.8594 12.6657C29.8946 11.9159 28.7072 11.5088 27.4849 11.5088C26.2626 11.5088 25.0752 11.9159 24.1105 12.6657L13.1153 21.2083C12.4545 21.7217 11.9199 22.3792 11.5523 23.1305C11.1846 23.8818 10.9937 24.7072 10.9941 25.5435V40.3715C10.9941 41.4639 11.4285 42.5115 12.2017 43.284C12.9748 44.0564 14.0234 44.4904 15.1168 44.4904H39.853C40.9464 44.4904 41.9951 44.0564 42.7682 43.284C43.5414 42.5115 43.9757 41.4639 43.9757 40.3715V25.5435C43.9757 23.8485 43.1924 22.2483 41.8525 21.2083Z"
            fill="#F9F9F9"
            stroke="#F9F9F9"
            strokeWidth="4.1227"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.731 32.1221C31.1754 34.8705 23.7917 34.8705 19.2402 32.1221"
            stroke="#F9F9F9"
            strokeWidth="4.1227"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  )
}

function CompanyName() {
  return (
    <span className="text-[17px] font-bold leading-none tracking-[0.01em] text-[#123E56] sm:text-[18px]">
      AFA<span className="text-[#DE8556]">Q</span>
    </span>
  )
}

function NotificationAvatar({ notification }) {
  if (notification.avatarType === 'company') {
    return <CompanyAvatar />
  }

  return (
    <img
      src={notification.avatarSrc}
      alt={notification.sender}
      className="h-[52px] w-[52px] rounded-full border border-[#DE8556] object-cover sm:h-[56px] sm:w-[56px]"
    />
  )
}

function FilterTabButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'h-[50px] min-w-[122px] rounded-[10px] px-6 text-[15px] font-bold transition-colors sm:text-[16px]',
        active ? 'bg-[#123E56] text-white' : 'bg-[#D9D9D9] text-[#8A8A8A] hover:bg-[#D0D0D0]',
      )}
    >
      {children}
    </button>
  )
}

function ToolbarSelect({ value, options, onChange, className = '' }) {
  return (
    <div className={cn('relative', className)}>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-[50px] w-full appearance-none rounded-[10px] border border-[#D7D7D7] bg-white px-4 pr-11 text-[15px] font-medium text-[#8A8A8A] shadow-[0_1px_2px_rgba(18,62,86,0.05)] outline-none transition-colors focus:border-[#123E56]"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7D7D7D]"
        strokeWidth={1.8}
      />
    </div>
  )
}

function SearchField({ value, onChange, placeholder }) {
  return (
    <label className="relative block w-full">
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-[#7D7D7D]"
        strokeWidth={1.8}
      />

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-[50px] w-full rounded-[10px] border border-[#D7D7D7] bg-white pl-[50px] pr-4 text-[15px] text-[#181818] shadow-[0_1px_2px_rgba(18,62,86,0.05)] outline-none transition-colors placeholder:text-[#8A8A8A] focus:border-[#123E56]"
      />
    </label>
  )
}

function NotificationCard({ notification, onRemove, unreadLabel, deleteLabel }) {
  return (
    <article className="flex flex-col gap-4 rounded-[14px] bg-[#ECF1F6] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:px-6 lg:px-7">
      <div className="flex min-w-0 flex-1 items-start gap-4 sm:items-center">
        <div className="shrink-0">
          <NotificationAvatar notification={notification} />
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {notification.category === 'company' ? (
              <CompanyName />
            ) : (
              <h2 className="text-[16px] font-bold leading-none text-[#232B35] sm:text-[17px]">
                {notification.sender}
              </h2>
            )}

            {notification.unread ? (
              <span
                className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#39C61F]"
                aria-label={unreadLabel}
              />
            ) : null}
          </div>

          <p className="mt-2 max-w-[920px] text-[15px] leading-[1.65] text-[#5C5C5C] sm:text-[16px]">
            {notification.message}
          </p>

          <div className="mt-3 inline-flex items-center gap-2 rounded-[6px] border border-[#E2EAF1] bg-white px-2.5 py-1.5 text-[14px] leading-none text-[#123E56] shadow-[0_1px_2px_rgba(18,62,86,0.04)]">
            <Clock3 className="h-4 w-4" strokeWidth={2} />
            <span>{notification.timeLabel}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onRemove(notification.id)}
        aria-label={deleteLabel(notification.sender)}
        className="inline-flex h-[36px] w-[36px] items-center justify-center self-end rounded-[10px] bg-[#FFEAEA] text-[#FF5757] transition-colors hover:bg-[#FFD9D9] sm:h-[40px] sm:w-[40px] sm:self-center"
      >
        <Trash2 className="h-[18px] w-[18px]" strokeWidth={2} />
      </button>
    </article>
  )
}

function NotificationsToolbar({
  activeTab,
  tabs,
  onTabChange,
  searchQuery,
  onSearchChange,
  searchPlaceholder,
  senderFilter,
  senderOptions,
  onSenderChange,
  statusFilter,
  statusOptions,
  onStatusChange,
  newMessageLabel,
}) {
  return (
    <div className="space-y-6 border-b border-[#DE8556] pb-5">
      <div className="flex flex-wrap gap-2.5">
        {tabs.map((tab) => (
          <FilterTabButton
            key={tab.value}
            active={activeTab === tab.value}
            onClick={() => onTabChange(tab.value)}
          >
            {tab.label}
          </FilterTabButton>
        ))}
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid gap-3 md:grid-cols-[minmax(0,282px)_minmax(0,144px)_minmax(0,120px)]">
          <SearchField
            value={searchQuery}
            onChange={onSearchChange}
            placeholder={searchPlaceholder}
          />
          <ToolbarSelect value={senderFilter} options={senderOptions} onChange={onSenderChange} />
          <ToolbarSelect value={statusFilter} options={statusOptions} onChange={onStatusChange} />
        </div>

        <button
          type="button"
          className="inline-flex h-[50px] min-w-[194px] items-center justify-center gap-2 self-start rounded-[10px] bg-[#123E56] px-6 text-[16px] font-bold text-white transition-colors hover:bg-[#0d2a38]"
        >
          <Plus className="h-5 w-5" strokeWidth={2} />
          <span>{newMessageLabel}</span>
        </button>
      </div>
    </div>
  )
}

function Notifications() {
  const { t } = useTranslation()
  const { data: localizedNotifications = [] } = useNotificationsQuery()
  const deleteNotificationMutation = useDeleteNotificationMutation()
  const [activeTab, setActiveTab] = useState('all')
  const [senderFilter, setSenderFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('unread')
  const [searchQuery, setSearchQuery] = useState('')

  const tabs = [
    { value: 'all', label: t('account.notificationsCenter.tabs.all') },
    { value: 'agent', label: t('account.notificationsCenter.tabs.agent') },
    { value: 'company', label: t('account.notificationsCenter.tabs.company') },
  ]

  const statusOptions = [
    { value: 'unread', label: t('common.status.unread') },
    { value: 'all', label: t('common.status.allMessages') },
    { value: 'read', label: t('common.status.read') },
  ]

  const senderOptions = useMemo(() => {
    const filteredByTab =
      activeTab === 'all'
        ? localizedNotifications
        : localizedNotifications.filter((notification) => notification.category === activeTab)

    const uniqueSenders = Array.from(
      new Map(
        filteredByTab.map((notification) => [
          notification.senderKey,
          { value: notification.senderKey, label: notification.sender },
        ]),
      ).values(),
    )

    return [
      {
        value: 'all',
        label:
          activeTab === 'company'
            ? t('account.notificationsCenter.senderOptions.allCompanies')
            : t('account.notificationsCenter.senderOptions.allAgents'),
      },
      ...uniqueSenders,
    ]
  }, [activeTab, localizedNotifications, t])

  const filteredNotifications = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return localizedNotifications.filter((notification) => {
      const matchesTab = activeTab === 'all' || notification.category === activeTab
      const matchesSender = senderFilter === 'all' || notification.senderKey === senderFilter
      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'unread' && notification.unread) ||
        (statusFilter === 'read' && !notification.unread)
      const matchesSearch =
        normalizedQuery.length === 0 ||
        notification.sender.toLowerCase().includes(normalizedQuery) ||
        notification.message.toLowerCase().includes(normalizedQuery)

      return matchesTab && matchesSender && matchesStatus && matchesSearch
    })
  }, [activeTab, localizedNotifications, searchQuery, senderFilter, statusFilter])

  function handleTabChange(tabValue) {
    setActiveTab(tabValue)
    setSenderFilter('all')
  }

  function handleRemoveNotification(notificationId) {
    deleteNotificationMutation.mutate(notificationId)
  }

  return (
    <section className="space-y-8">
      <NotificationsToolbar
        activeTab={activeTab}
        tabs={tabs}
        onTabChange={handleTabChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder={t('common.fields.searchPlaceholder')}
        senderFilter={senderFilter}
        senderOptions={senderOptions}
        onSenderChange={setSenderFilter}
        statusFilter={statusFilter}
        statusOptions={statusOptions}
        onStatusChange={setStatusFilter}
        newMessageLabel={t('common.buttons.newMessage')}
      />

      {filteredNotifications.length === 0 ? (
        <AccountEmptyState
          title={t('account.notificationsCenter.emptyTitle')}
          description={t('account.notificationsCenter.emptyDescription')}
        />
      ) : (
        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onRemove={handleRemoveNotification}
              unreadLabel={t('common.status.unread')}
              deleteLabel={(sender) =>
                t('account.notificationsCenter.deleteNotification', { sender })
              }
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Notifications
