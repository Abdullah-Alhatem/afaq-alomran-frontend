import { Form, Field, Formik } from 'formik'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { useCounterStore } from '@/stores/useCounterStore'

function App() {
  const { t, i18n } = useTranslation()
  const { count, inc, dec, reset } = useCounterStore()

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 bg-primary-light p-6 ">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-2xl font-semibold text-secondary-lighter">{t('title')}</h1>

          <div className="flex items-center gap-2">
            <Button variant="primary" size="sm" onClick={() => i18n.changeLanguage('ar')}>
              AR
            </Button>
            <Button variant="primary" size="sm" onClick={() => i18n.changeLanguage('en')}>
              EN
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-4 text-card-foreground">
          <div className="mb-3 text-sm font-medium">{t('counter')}</div>

          <div className="mb-4 text-3xl font-bold">{count}</div>

          <div className="flex flex-wrap gap-2">
            <Button onClick={inc}>{t('increment')}</Button>
            <Button variant="secondary" onClick={dec}>
              {t('decrement')}
            </Button>
            <Button variant="outline" onClick={reset}>
              {t('reset')}
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-4 text-card-foreground">
          <div className="mb-3 text-sm font-medium">{t('formTitle')}</div>

          <Formik
            initialValues={{ name: '' }}
            onSubmit={(values, actions) => {
              console.log(values)
              actions.setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-3">
                <label className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground">{t('name')}</span>
                  <Field
                    name="name"
                    className="h-10 rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder={t('name')}
                  />
                </label>

                <div className="flex justify-end">
                  <Button className="g" type="submit" disabled={isSubmitting}>
                    {t('submit')}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default App
