import React from 'react'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import AuthPageBox from '@/components/auth/AuthPageBox'
import AuthDivider from '@/components/auth/AuthDivider'
import AuthGoogleButton from '@/components/auth/AuthGoogleButton'
import AuthIntroText from '@/components/auth/AuthIntroText'
import AuthInputField from '@/components/auth/AuthInputField'
import AuthPageLayout from '@/components/auth/AuthPageLayout'
import AuthPrimaryButton from '@/components/auth/AuthPrimaryButton'
import AuthTextLink from '@/components/auth/AuthTextLink'
import signUpIcon from '@/assets/Auth/sign-upIcon.svg'
import { useGoogleAuthMutation, useSignUpMutation } from '@/lib/fake-api/hooks'
import useAuthStore from '@/stores/useAuthStore'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function SignUp() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const signUpMutation = useSignUpMutation()
  const googleAuthMutation = useGoogleAuthMutation()
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    },
    validate: (values) => {
      const errors = {}

      if (!values.name.trim()) {
        errors.name = t('common.validation.nameRequired')
      }

      if (!values.email.trim()) {
        errors.email = t('common.validation.emailRequired')
      } else if (!emailPattern.test(values.email)) {
        errors.email = t('common.validation.validEmail')
      }

      if (!values.password) {
        errors.password = t('common.validation.passwordRequired')
      } else if (values.password.length < 8 || !/\d/.test(values.password)) {
        errors.password = t('common.validation.passwordStrength')
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = t('common.validation.confirmPasswordRequired')
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = t('common.validation.passwordMismatch')
      }

      if (!values.agreeTerms) {
        errors.agreeTerms = t('common.validation.agreeTermsRequired')
      }

      return errors
    },
    onSubmit: async (values, actions) => {
      await signUpMutation.mutateAsync(values)
      setLoggedIn(true)
      actions.setSubmitting(false)
      navigate('/my-account')
    },
  })
  const isAuthenticating = formik.isSubmitting || googleAuthMutation.isPending

  async function handleGoogleSignUp() {
    await googleAuthMutation.mutateAsync({
      intent: 'sign-up',
    })
    setLoggedIn(true)
    navigate('/my-account')
  }

  return (
    <AuthPageLayout>
      <AuthPageBox imageSrc={signUpIcon} imageAlt="Sign up illustration">
        <AuthIntroText
          title={t('auth.signUp.title')}
          subtitle={t('auth.signUp.subtitle')}
          description={t('auth.signUp.description')}
        />

        <AuthGoogleButton
          onClick={handleGoogleSignUp}
          disabled={isAuthenticating}
          isLoading={googleAuthMutation.isPending}
        />
        <AuthDivider />

        <form className="space-y-4" noValidate onSubmit={formik.handleSubmit}>
          <AuthInputField
            label={t('common.labels.name')}
            name="name"
            type="text"
            placeholder={t('common.fields.fullName')}
            autoComplete="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.name}
            error={formik.errors.name}
          />
          <AuthInputField
            label={t('common.labels.email')}
            name="email"
            type="email"
            placeholder={t('common.fields.emailPlaceholder')}
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
          <AuthInputField
            label={t('common.labels.password')}
            name="password"
            type="password"
            placeholder={t('common.fields.passwordPlaceholder')}
            autoComplete="new-password"
            withEye
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.password}
            error={formik.errors.password}
          />
          <AuthInputField
            label={t('common.labels.confirmPassword')}
            name="confirmPassword"
            type="password"
            placeholder={t('common.fields.passwordAgainPlaceholder')}
            autoComplete="new-password"
            withEye
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
          />

          <label className="inline-flex items-center gap-2 pt-1 text-[14px] text-grey-text-secondary">
            <input
              name="agreeTerms"
              type="checkbox"
              checked={formik.values.agreeTerms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="h-5 w-5 rounded border-grey-stroke accent-primary-light"
            />
            {t('common.form.agreeToTerms')}
          </label>
          {formik.touched.agreeTerms && formik.errors.agreeTerms ? (
            <p className="-mt-2 text-[12px] text-destructive">{formik.errors.agreeTerms}</p>
          ) : null}

          <AuthPrimaryButton type="submit" className="mt-1" disabled={isAuthenticating}>
            {t('auth.signUp.submit')}
          </AuthPrimaryButton>
        </form>

        <p className="mt-7 text-center text-grey-text-primary font-medium text-[16px]">
          {t('auth.signUp.alreadyHaveAccount')}{' '}
          <AuthTextLink to="/sign-in" className="text-secondary font-bold">
            {t('auth.signUp.loginLink')}
          </AuthTextLink>
        </p>
      </AuthPageBox>
    </AuthPageLayout>
  )
}

export default SignUp
