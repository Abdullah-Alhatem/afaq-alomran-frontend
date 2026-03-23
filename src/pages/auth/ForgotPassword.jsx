import React from 'react'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import AuthPageBox from '@/components/auth/AuthPageBox'
import AuthIntroText from '@/components/auth/AuthIntroText'
import AuthInputField from '@/components/auth/AuthInputField'
import AuthPageLayout from '@/components/auth/AuthPageLayout'
import AuthPrimaryButton from '@/components/auth/AuthPrimaryButton'
import AuthTextLink from '@/components/auth/AuthTextLink'
import forgotPasswordIcon from '@/assets/Auth/forgotPasswordIcon.svg'
import { useForgotPasswordMutation } from '@/lib/fake-api/hooks'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ForgotPassword() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const forgotPasswordMutation = useForgotPasswordMutation()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: (values) => {
      const errors = {}

      if (!values.email.trim()) {
        errors.email = t('common.validation.emailRequired')
      } else if (!emailPattern.test(values.email)) {
        errors.email = t('common.validation.validEmail')
      }

      return errors
    },
    onSubmit: async (values, actions) => {
      await forgotPasswordMutation.mutateAsync(values)
      actions.setSubmitting(false)
      navigate('/create-new-password')
    },
  })

  return (
    <AuthPageLayout>
      <AuthPageBox imageSrc={forgotPasswordIcon} imageAlt="Forgot password illustration">
        <AuthIntroText
          title={t('auth.forgotPassword.title')}
          subtitle={t('auth.forgotPassword.subtitle')}
          description={t('auth.forgotPassword.description')}
        />

        <form className="mt-8 space-y-8" noValidate onSubmit={formik.handleSubmit}>
          <AuthInputField
            label={t('common.labels.email')}
            name="email"
            type="email"
            placeholder={t('common.fields.registeredEmailPlaceholder')}
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.email}
            error={formik.errors.email}
          />

          <AuthPrimaryButton type="submit" disabled={formik.isSubmitting}>
            {t('common.buttons.sendResetLink')}
          </AuthPrimaryButton>
        </form>

        <p className="mt-8 text-center text-[14px]">
          <AuthTextLink to="/sign-in" className="text-secondary">
            {t('common.buttons.backToLogin')}
          </AuthTextLink>
        </p>
      </AuthPageBox>
    </AuthPageLayout>
  )
}

export default ForgotPassword
