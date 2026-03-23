import React from 'react'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import AuthPageBox from '@/components/auth/AuthPageBox'
import AuthIntroText from '@/components/auth/AuthIntroText'
import AuthInputField from '@/components/auth/AuthInputField'
import AuthPageLayout from '@/components/auth/AuthPageLayout'
import AuthPrimaryButton from '@/components/auth/AuthPrimaryButton'
import createNewPasswordIcon from '@/assets/Auth/createNewPassword.svg'
import { useResetPasswordMutation } from '@/lib/fake-api/hooks'

function CreateNewPassword() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const resetPasswordMutation = useResetPasswordMutation()

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors = {}

      if (!values.newPassword) {
        errors.newPassword = t('common.validation.newPasswordRequired')
      } else if (values.newPassword.length < 8 || !/\d/.test(values.newPassword)) {
        errors.newPassword = t('common.validation.passwordStrength')
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = t('common.validation.confirmPasswordRequired')
      } else if (values.confirmPassword !== values.newPassword) {
        errors.confirmPassword = t('common.validation.passwordMismatch')
      }

      return errors
    },
    onSubmit: async (values, actions) => {
      await resetPasswordMutation.mutateAsync(values)
      actions.setSubmitting(false)
      navigate('/sign-in')
    },
  })

  return (
    <AuthPageLayout>
      <AuthPageBox imageSrc={createNewPasswordIcon} imageAlt="Create new password illustration">
        <AuthIntroText
          title={t('auth.createNewPassword.title')}
          description={t('auth.createNewPassword.description')}
          descriptionClassName="mt-6"
        />

        <form className="mt-8 space-y-7" noValidate onSubmit={formik.handleSubmit}>
          <AuthInputField
            label={t('common.labels.newPassword')}
            name="newPassword"
            type="password"
            placeholder={t('common.fields.newPasswordPlaceholder')}
            autoComplete="new-password"
            withEye
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.newPassword}
            error={formik.errors.newPassword}
          />

          <AuthInputField
            label={t('common.labels.confirmPassword')}
            name="confirmPassword"
            type="password"
            placeholder={t('common.fields.newPasswordAgainPlaceholder')}
            autoComplete="new-password"
            withEye
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
          />

          <p className="text-[16px] font-medium text-grey-text-secondary">
            {t('common.form.requirementHint')}
          </p>

          <AuthPrimaryButton type="submit" disabled={formik.isSubmitting}>
            {t('common.buttons.resetPassword')}
          </AuthPrimaryButton>
        </form>
      </AuthPageBox>
    </AuthPageLayout>
  )
}

export default CreateNewPassword
