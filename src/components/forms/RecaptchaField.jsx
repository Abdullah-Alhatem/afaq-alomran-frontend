import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'

const DEFAULT_RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
const RECAPTCHA_SCRIPT_ID = 'google-recaptcha-script'

let recaptchaScriptPromise = null

function getRecaptchaLanguage(language = 'en') {
  return language.toLowerCase().startsWith('ar') ? 'ar' : 'en'
}

function getCaptchaCopy(language = 'en') {
  const isArabic = language.toLowerCase().startsWith('ar')

  return {
    loading: isArabic ? 'جارٍ تحميل التحقق الأمني...' : 'Loading CAPTCHA...',
    unavailable: isArabic
      ? 'تعذر تحميل التحقق الأمني حالياً. حاول مرة أخرى.'
      : 'CAPTCHA is unavailable right now. Please try again.',
  }
}

function loadRecaptchaScript(language) {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('The browser window is unavailable.'))
  }

  if (window.grecaptcha?.render) {
    return Promise.resolve(window.grecaptcha)
  }

  if (recaptchaScriptPromise) {
    return recaptchaScriptPromise
  }

  recaptchaScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById(RECAPTCHA_SCRIPT_ID)

    function handleLoad() {
      if (window.grecaptcha?.render) {
        resolve(window.grecaptcha)
        return
      }

      recaptchaScriptPromise = null
      reject(new Error('reCAPTCHA did not initialize correctly.'))
    }

    function handleError() {
      recaptchaScriptPromise = null
      reject(new Error('Failed to load reCAPTCHA.'))
    }

    if (existingScript) {
      existingScript.addEventListener('load', handleLoad, { once: true })
      existingScript.addEventListener('error', handleError, { once: true })
      return
    }

    const script = document.createElement('script')
    script.id = RECAPTCHA_SCRIPT_ID
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit&hl=${getRecaptchaLanguage(language)}`
    script.async = true
    script.defer = true
    script.onload = handleLoad
    script.onerror = handleError
    document.head.appendChild(script)
  })

  return recaptchaScriptPromise
}

function RecaptchaField({ value, onChange, resetSignal = 0, className }) {
  const { i18n } = useTranslation()
  const widgetContainerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const [status, setStatus] = useState('loading')
  const [errorMessage, setErrorMessage] = useState('')
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || DEFAULT_RECAPTCHA_SITE_KEY
  const copy = getCaptchaCopy(i18n.language)

  useEffect(() => {
    let isActive = true

    async function initializeWidget() {
      if (!widgetContainerRef.current || widgetIdRef.current !== null) {
        return
      }

      setStatus('loading')
      setErrorMessage('')

      try {
        const grecaptcha = await loadRecaptchaScript(i18n.language)

        if (!isActive || !widgetContainerRef.current || widgetIdRef.current !== null) {
          return
        }

        widgetIdRef.current = grecaptcha.render(widgetContainerRef.current, {
          sitekey: siteKey,
          callback: (token) => {
            onChange(token)
            setStatus('verified')
            setErrorMessage('')
          },
          'expired-callback': () => {
            onChange('')
            setStatus('ready')
          },
          'error-callback': () => {
            onChange('')
            setStatus('error')
            setErrorMessage(copy.unavailable)
          },
        })

        setStatus(value ? 'verified' : 'ready')
      } catch {
        if (!isActive) {
          return
        }

        onChange('')
        setStatus('error')
        setErrorMessage(copy.unavailable)
      }
    }

    initializeWidget()

    return () => {
      isActive = false
    }
  }, [copy.unavailable, i18n.language, onChange, siteKey, value])

  useEffect(() => {
    if (widgetIdRef.current === null || !window.grecaptcha?.reset) {
      return
    }

    window.grecaptcha.reset(widgetIdRef.current)
    onChange('')
  }, [onChange, resetSignal])

  return (
    <div className={cn('w-full max-w-[304px]', className)}>
      <div ref={widgetContainerRef} className="min-h-[78px]" />

      {status === 'loading' ? <p className="mt-2 text-xs text-[#7B8794]">{copy.loading}</p> : null}

      {errorMessage ? <p className="mt-2 text-xs text-[#D14343]">{errorMessage}</p> : null}
    </div>
  )
}

export default RecaptchaField
