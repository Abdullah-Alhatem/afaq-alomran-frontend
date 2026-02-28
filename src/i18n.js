import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      title: 'Afaq Alomran',
      counter: 'Counter',
      increment: 'Increment',
      decrement: 'Decrement',
      reset: 'Reset',
      formTitle: 'Sample Form',
      name: 'Name',
      submit: 'Submit',
    },
  },
  ar: {
    translation: {
      title: 'آفاق العمران',
      counter: 'العداد',
      increment: 'زيادة',
      decrement: 'نقصان',
      reset: 'تصفير',
      formTitle: 'نموذج تجريبي',
      name: 'الاسم',
      submit: 'إرسال',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ar',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
