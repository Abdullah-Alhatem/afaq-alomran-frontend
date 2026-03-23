import { Check, ChevronDown, Search } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { usePhoneCountriesQuery } from '@/lib/fake-api/hooks'
import { cn } from '@/lib/utils'

import {
  buildCombinedPhoneValue,
  DEFAULT_PHONE_COUNTRY_CODE,
  getDefaultPhoneCountry,
} from './phoneCountryUtils'

const wrapperClassName =
  'relative mt-3 flex h-14 overflow-visible rounded-[12px] border border-[#D7D7D7] bg-[#ECF1F6] transition-colors duration-200 focus-within:border-primary-mid'
const prefixButtonClassName =
  'flex h-full min-w-[132px] shrink-0 items-center gap-3 bg-transparent px-4 text-[#5C5C5C] outline-none'
const numberInputClassName =
  'h-full w-full bg-transparent px-4 text-base text-[#5C5C5C] outline-none placeholder:text-[#9A9A9A]'

function getCountryLabel(country, language) {
  return language === 'ar' ? country.nameAr : country.nameEn
}

function getPhonePlaceholder(country, fallbackPlaceholder) {
  if (!country?.dialCode || !fallbackPlaceholder) {
    return fallbackPlaceholder
  }

  return String(fallbackPlaceholder).replace(/^\+\d+/, country.dialCode)
}

function PhoneNumberField({
  selectedCountryCode,
  onCountryCodeChange,
  numberValue,
  onNumberValueChange,
  placeholder,
  isRtl = false,
  inputName,
  combinedName,
  countryCodeName,
  dialCodeName,
  className,
}) {
  const { i18n, t } = useTranslation()
  const { data: phoneCountries = [] } = usePhoneCountriesQuery()
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const containerRef = useRef(null)
  const searchInputRef = useRef(null)
  const emptyResultsLabel =
    i18n.language === 'ar' ? 'لا توجد نتائج مطابقة' : 'No matching countries'

  const selectedCountry =
    phoneCountries.find((country) => country.code === selectedCountryCode) ??
    getDefaultPhoneCountry(phoneCountries, DEFAULT_PHONE_COUNTRY_CODE)
  const resolvedPlaceholder = getPhonePlaceholder(selectedCountry, placeholder)

  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredCountries =
    normalizedQuery.length === 0
      ? phoneCountries
      : phoneCountries.filter((country) => {
          const countryLabel = getCountryLabel(country, i18n.language).toLowerCase()

          return (
            countryLabel.includes(normalizedQuery) ||
            country.dialCode.toLowerCase().includes(normalizedQuery) ||
            country.code.toLowerCase().includes(normalizedQuery)
          )
        })

  useEffect(() => {
    if (!selectedCountry && phoneCountries.length > 0) {
      onCountryCodeChange(phoneCountries[0].code)
    }
  }, [onCountryCodeChange, phoneCountries, selectedCountry])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus()
    }
  }, [isOpen])

  function handleSelectCountry(countryCode) {
    onCountryCodeChange(countryCode)
    setIsOpen(false)
    setSearchQuery('')
  }

  const combinedPhoneValue = buildCombinedPhoneValue(selectedCountry?.dialCode, numberValue)

  return (
    <div ref={containerRef} className={cn(wrapperClassName, className)}>
      <button
        type="button"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={cn(
          prefixButtonClassName,
          isRtl ? 'border-l border-[#D7D7D7]' : 'border-r border-[#D7D7D7]',
        )}
      >
        <span className="text-xl leading-none" aria-hidden="true">
          {selectedCountry?.flag ?? '🏳️'}
        </span>
        <span className="text-sm font-semibold">{selectedCountry?.dialCode ?? ''}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn('h-4 w-4 text-[#929AA5] transition-transform', isOpen && 'rotate-180')}
        />
      </button>

      <input
        name={inputName}
        type="tel"
        value={numberValue}
        onChange={(event) => onNumberValueChange(event.target.value)}
        autoComplete="tel-national"
        placeholder={resolvedPlaceholder}
        className={numberInputClassName}
      />

      {combinedName ? <input type="hidden" name={combinedName} value={combinedPhoneValue} /> : null}
      {countryCodeName ? (
        <input type="hidden" name={countryCodeName} value={selectedCountry?.code ?? ''} />
      ) : null}
      {dialCodeName ? (
        <input type="hidden" name={dialCodeName} value={selectedCountry?.dialCode ?? ''} />
      ) : null}

      {isOpen ? (
        <div
          className={cn(
            'absolute top-[calc(100%+8px)] z-50 w-full overflow-hidden rounded-[16px] border border-[#D7D7D7] bg-white shadow-[0_24px_60px_rgba(7,46,69,0.14)]',
            isRtl ? 'right-0' : 'left-0',
          )}
        >
          <div className="border-b border-[#EEF1F4] p-3">
            <label className="relative block">
              <Search
                aria-hidden="true"
                className={cn(
                  'pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-[#929AA5]',
                  isRtl ? 'right-3' : 'left-3',
                )}
              />
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={t('common.fields.searchPlaceholder')}
                className={cn(
                  'h-11 w-full rounded-[10px] border border-[#D7D7D7] bg-[#F8FAFC] text-sm text-[#3B4752] outline-none focus:border-primary-mid',
                  isRtl ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4',
                )}
              />
            </label>
          </div>

          <div className="max-h-[280px] overflow-y-auto p-2" role="listbox">
            {filteredCountries.map((country) => {
              const isSelected = country.code === selectedCountry?.code

              return (
                <button
                  key={country.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelectCountry(country.code)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-[12px] px-3 py-3 text-left transition-colors',
                    isSelected ? 'bg-[#ECF1F6] text-primary-mid' : 'hover:bg-[#F8FAFC]',
                  )}
                >
                  <span className="text-xl leading-none" aria-hidden="true">
                    {country.flag}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold">
                      {getCountryLabel(country, i18n.language)}
                    </span>
                    <span className="mt-0.5 block text-xs text-[#7B8794]">{country.dialCode}</span>
                  </span>
                  {isSelected ? <Check className="h-4 w-4 shrink-0 text-primary-mid" /> : null}
                </button>
              )
            })}

            {filteredCountries.length === 0 ? (
              <p className="px-3 py-4 text-sm text-[#7B8794]">{emptyResultsLabel}</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default PhoneNumberField
