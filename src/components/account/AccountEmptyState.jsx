function AccountEmptyState({ title, description, className = '' }) {
  return (
    <section
      className={`rounded-[24px] border border-grey-stroke bg-muted px-6 py-12 text-center sm:px-8 ${className}`}
    >
      <h2 className="text-[24px] font-bold text-grey-text-primary">{title}</h2>
      <p className="mt-3 text-[16px] leading-7 text-grey-text-secondary">{description}</p>
    </section>
  )
}

export default AccountEmptyState
