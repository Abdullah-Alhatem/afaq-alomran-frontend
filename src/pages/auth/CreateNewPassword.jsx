import React from 'react'
import { useFormik } from 'formik'

import AuthPageBox from '@/components/auth/AuthPageBox'
import AuthIntroText from '@/components/auth/AuthIntroText'
import AuthInputField from '@/components/auth/AuthInputField'
import AuthPrimaryButton from '@/components/auth/AuthPrimaryButton'
import createNewPasswordIcon from '@/assets/Auth/createNewPassword.svg'
import LookingForADreamBox from '@/components/LookingForADreamBox'

function CreateNewPassword() {
  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors = {}

      if (!values.newPassword) {
        errors.newPassword = 'New password is required.'
      } else if (values.newPassword.length < 8 || !/\d/.test(values.newPassword)) {
        errors.newPassword = 'Password must be at least 8 characters and include a number.'
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = 'Please confirm your password.'
      } else if (values.confirmPassword !== values.newPassword) {
        errors.confirmPassword = 'Passwords do not match.'
      }

      return errors
    },
    onSubmit: () => {},
  })

  return (
    <div>
      <main className=" bg-[#F8F8F8] px-4 py-8 sm:px-8 lg:px-16 lg:py-12">
        <AuthPageBox imageSrc={createNewPasswordIcon} imageAlt="Create new password illustration">
          <AuthIntroText
            title="Create New Password"
            description="Please enter a strong password to secure your account."
            descriptionClassName="mt-6"
          />

          <form className="mt-8 space-y-7" noValidate onSubmit={formik.handleSubmit}>
            <AuthInputField
              label="New Password"
              name="newPassword"
              type="password"
              placeholder="Enter new password"
              autoComplete="new-password"
              withEye
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.newPassword}
              error={formik.errors.newPassword}
            />

            <AuthInputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Enter new password again"
              autoComplete="new-password"
              withEye
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.confirmPassword}
              error={formik.errors.confirmPassword}
            />

            <p className="text-[16px] font-medium text-grey-text-secondary">
              Must be at least 8 characters and include a number.
            </p>

            <AuthPrimaryButton type="submit">Reset Password</AuthPrimaryButton>
          </form>
        </AuthPageBox>
      </main>
      <LookingForADreamBox />
    </div>
  )
}

export default CreateNewPassword
