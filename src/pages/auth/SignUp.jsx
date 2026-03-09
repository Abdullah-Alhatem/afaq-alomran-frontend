import React from 'react'
import { useFormik } from 'formik'

import AuthPageBox from '@/components/auth/AuthPageBox'
import AuthDivider from '@/components/auth/AuthDivider'
import AuthGoogleButton from '@/components/auth/AuthGoogleButton'
import AuthIntroText from '@/components/auth/AuthIntroText'
import AuthInputField from '@/components/auth/AuthInputField'
import AuthPrimaryButton from '@/components/auth/AuthPrimaryButton'
import AuthTextLink from '@/components/auth/AuthTextLink'
import signUpIcon from '@/assets/Auth/sign-upIcon.svg'
import LookingForADreamBox from '@/components/LookingForADreamBox'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function SignUp() {
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
        errors.name = 'Name is required.'
      }

      if (!values.email.trim()) {
        errors.email = 'Email is required.'
      } else if (!emailPattern.test(values.email)) {
        errors.email = 'Please enter a valid email address.'
      }

      if (!values.password) {
        errors.password = 'Password is required.'
      } else if (values.password.length < 8 || !/\d/.test(values.password)) {
        errors.password = 'Password must be at least 8 characters and include a number.'
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = 'Please confirm your password.'
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords do not match.'
      }

      if (!values.agreeTerms) {
        errors.agreeTerms = 'You must agree to the terms & policy.'
      }

      return errors
    },
    onSubmit: () => {},
  })

  return (
    <div>
      <main className=" bg-[#F8F8F8] px-4 py-8 sm:px-8 lg:px-16 lg:py-12">
        <AuthPageBox imageSrc={signUpIcon} imageAlt="Sign up illustration">
          <AuthIntroText
            title="Sign up"
            subtitle="Create Account with"
            description="Create an account to start saving properties, receiving alerts, and accessing expert real estate insights."
          />

          <AuthGoogleButton text="Continue with Google" />
          <AuthDivider />

          <form className="space-y-4" noValidate onSubmit={formik.handleSubmit}>
            <AuthInputField
              label="Name"
              name="name"
              type="text"
              placeholder="Full name"
              autoComplete="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.name}
              error={formik.errors.name}
            />
            <AuthInputField
              label="Email"
              name="email"
              type="email"
              placeholder="hi@example.com"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.email}
              error={formik.errors.email}
            />
            <AuthInputField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              autoComplete="new-password"
              withEye
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.password}
              error={formik.errors.password}
            />
            <AuthInputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Enter password again"
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
              I agree to the terms &amp; policy
            </label>
            {formik.touched.agreeTerms && formik.errors.agreeTerms ? (
              <p className="-mt-2 text-[12px] text-destructive">{formik.errors.agreeTerms}</p>
            ) : null}

            <AuthPrimaryButton type="submit" className="mt-1">
              Sign up
            </AuthPrimaryButton>
          </form>

          <p className="mt-7 text-center text-grey-text-primary font-medium text-[16px]">
            I already have an account,{' '}
            <AuthTextLink to="/sign-in" className="text-secondary font-bold">
              Login!
            </AuthTextLink>
          </p>
        </AuthPageBox>
      </main>
      <LookingForADreamBox />
    </div>
  )
}

export default SignUp
