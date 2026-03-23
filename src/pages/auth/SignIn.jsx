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
import signInIcon from '@/assets/Auth/sign-inIcon.svg'
import { useGoogleAuthMutation, useSignInMutation } from '@/lib/fake-api/hooks'
import useAuthStore from '@/stores/useAuthStore'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function SignIn() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const signInMutation = useSignInMutation()
  const googleAuthMutation = useGoogleAuthMutation()
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: (values) => {
      const errors = {}

      if (!values.email.trim()) {
        errors.email = t('common.validation.emailRequired')
      } else if (!emailPattern.test(values.email)) {
        errors.email = t('common.validation.validEmail')
      }

      if (!values.password) {
        errors.password = t('common.validation.passwordRequired')
      }

      return errors
    },
    onSubmit: async (values, actions) => {
      await signInMutation.mutateAsync(values)
      setLoggedIn(true)
      actions.setSubmitting(false)
      navigate('/my-account')
    },
  })
  const isAuthenticating = formik.isSubmitting || googleAuthMutation.isPending

  async function handleGoogleSignIn() {
    await googleAuthMutation.mutateAsync({
      intent: 'sign-in',
    })
    setLoggedIn(true)
    navigate('/my-account')
  }

  return (
    <AuthPageLayout>
      <AuthPageBox imageSrc={signInIcon} imageAlt="Sign in illustration">
        <AuthIntroText
          title={t('auth.signIn.title')}
          subtitle={t('auth.signIn.subtitle')}
          description={t('auth.signIn.description')}
        />

        <AuthGoogleButton
          onClick={handleGoogleSignIn}
          disabled={isAuthenticating}
          isLoading={googleAuthMutation.isPending}
        />
        <AuthDivider />

        <form className="space-y-4" noValidate onSubmit={formik.handleSubmit}>
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
            autoComplete="current-password"
            withEye
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.password}
            error={formik.errors.password}
          />

          <div className="flex items-center justify-between pt-1 text-[16px]">
            <label className="inline-flex items-center gap-2 text-grey-text-secondary">
              <input
                name="rememberMe"
                type="checkbox"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
                className="h-5 w-5 rounded border-grey-stroke accent-primary-light"
              />
              {t('common.form.rememberMe')}
            </label>
            <AuthTextLink to="/forgot-password" className="text-primary font-bold">
              {t('common.form.forgotPassword')}
            </AuthTextLink>
          </div>

          <AuthPrimaryButton type="submit" className="mt-2" disabled={isAuthenticating}>
            {t('auth.signIn.submit')}
          </AuthPrimaryButton>
        </form>

        <p className="mt-7 text-center text-grey-text-primary font-medium text-[16px]">
          {t('auth.signIn.noAccount')}{' '}
          <AuthTextLink to="/sign-up" className="text-secondary font-bold">
            {t('common.buttons.signUp')}
          </AuthTextLink>
        </p>
      </AuthPageBox>
    </AuthPageLayout>
  )
}

export default SignIn
