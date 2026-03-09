import React from 'react'
import { useFormik } from 'formik'

import AuthPageBox from '@/components/auth/AuthPageBox'
import AuthIntroText from '@/components/auth/AuthIntroText'
import AuthInputField from '@/components/auth/AuthInputField'
import AuthPrimaryButton from '@/components/auth/AuthPrimaryButton'
import AuthTextLink from '@/components/auth/AuthTextLink'
import forgotPasswordIcon from '@/assets/Auth/forgotPasswordIcon.svg'
import LookingForADreamBox from '@/components/LookingForADreamBox'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ForgotPassword() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: (values) => {
      const errors = {}

      if (!values.email.trim()) {
        errors.email = 'Email is required.'
      } else if (!emailPattern.test(values.email)) {
        errors.email = 'Please enter a valid email address.'
      }

      return errors
    },
    onSubmit: () => {},
  })

  return (
    <div>
      <main className=" bg-[#F8F8F8] px-4 py-8 sm:px-8 lg:px-16 lg:py-12">
        <AuthPageBox imageSrc={forgotPasswordIcon} imageAlt="Forgot password illustration">
          <AuthIntroText
            title="Forgot Your Password?"
            subtitle="Welcome Back!"
            description="Enter your email address and we'll send you a secure link to reset your password."
          />

          <form className="mt-8 space-y-8" noValidate onSubmit={formik.handleSubmit}>
            <AuthInputField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your registered email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.email}
              error={formik.errors.email}
            />

            <AuthPrimaryButton type="submit">Send Reset Link</AuthPrimaryButton>
          </form>

          <p className="mt-8 text-center text-[14px]">
            <AuthTextLink to="/sign-in" className="text-secondary">
              Back to Login
            </AuthTextLink>
          </p>
        </AuthPageBox>
      </main>
      <LookingForADreamBox />
    </div>
  )
}

export default ForgotPassword
