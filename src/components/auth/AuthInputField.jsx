import React from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'

const EyeIcon = () => (
  <svg className="h-6 w-6 text-grey-icons" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M1.95 12s3.53-6.5 10.05-6.5S22.05 12 22.05 12s-3.53 6.5-10.05 6.5S1.95 12 1.95 12Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const EyeOffIcon = () => (
  <svg className="h-6 w-6 text-grey-icons" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 3L21 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.58 10.58A2 2 0 0 0 13.42 13.42"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.88 5.09A10.94 10.94 0 0 1 12 4.9c6.52 0 10.05 6.5 10.05 6.5a13.95 13.95 0 0 1-3.1 3.77"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.23 6.23A13.94 13.94 0 0 0 1.95 12s3.53 6.5 10.05 6.5a10.9 10.9 0 0 0 5.77-1.66"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function AuthInputField({
  label,
  type = 'text',
  name,
  id,
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  withEye = false,
  touched,
  error,
  helperText,
  wrapperClassName,
  inputClassName,
}) {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = React.useState(false)
  const inputId = id || name
  const hasError = Boolean(touched && error)
  const messageId = inputId ? `${inputId}-message` : undefined
  const currentInputType = withEye && isVisible ? 'text' : type

  const baseInputClasses =
    'h-14 w-full rounded-[10px] border border-grey-stroke bg-muted px-4 text-[16px] text-grey-text-secondary outline-none focus:ring-2 focus:ring-primary-light/20'

  return (
    <label className={cn('block', wrapperClassName)}>
      <span className="mb-2 block text-[14px] font-normal text-grey-text-primary">{label}</span>
      {withEye ? (
        <div className="relative">
          <input
            id={inputId}
            name={name}
            type={currentInputType}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            autoComplete={autoComplete}
            aria-invalid={hasError}
            aria-describedby={messageId}
            className={cn(
              baseInputClasses,
              'pr-12',
              hasError && 'border-destructive focus:ring-destructive/20',
              inputClassName,
            )}
          />
          <button
            type="button"
            onClick={() => setIsVisible((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 transition hover:bg-grey-20"
            aria-label={isVisible ? t('common.form.hidePassword') : t('common.form.showPassword')}
          >
            <span className="relative block h-6 w-6">
              <span
                className={cn(
                  'absolute inset-0 transition-all duration-200',
                  isVisible ? 'scale-90 opacity-0' : 'scale-100 opacity-100',
                )}
              >
                <EyeIcon />
              </span>
              <span
                className={cn(
                  'absolute inset-0 transition-all duration-200',
                  isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0',
                )}
              >
                <EyeOffIcon />
              </span>
            </span>
          </button>
        </div>
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={hasError}
          aria-describedby={messageId}
          className={cn(
            baseInputClasses,
            hasError && 'border-destructive focus:ring-destructive/20',
            inputClassName,
          )}
        />
      )}
      {hasError ? (
        <p id={messageId} className="mt-1 text-[12px] text-destructive">
          {error}
        </p>
      ) : helperText ? (
        <p id={messageId} className="mt-1 text-[12px] text-grey-text-tertiary">
          {helperText}
        </p>
      ) : null}
    </label>
  )
}

export default AuthInputField
