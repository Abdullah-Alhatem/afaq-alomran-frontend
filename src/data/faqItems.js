export function getFaqItemsAll(t) {
  return t('faqs.items', { returnObjects: true })
}

export function getFaqItemsPreview(t) {
  return getFaqItemsAll(t).slice(0, 5)
}
