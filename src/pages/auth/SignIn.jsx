import React from 'react'
import { useFormik } from 'formik'

import AuthPageBox from '@/components/auth/AuthPageBox'
import AuthDivider from '@/components/auth/AuthDivider'
import AuthGoogleButton from '@/components/auth/AuthGoogleButton'
import AuthIntroText from '@/components/auth/AuthIntroText'
import AuthInputField from '@/components/auth/AuthInputField'
import AuthPrimaryButton from '@/components/auth/AuthPrimaryButton'
import AuthTextLink from '@/components/auth/AuthTextLink'
import signInIcon from '@/assets/Auth/sign-inIcon.svg'
import LookingForADreamBox from '@/components/LookingForADreamBox'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: (values) => {
      const errors = {}

      if (!values.email.trim()) {
        errors.email = 'Email is required.'
      } else if (!emailPattern.test(values.email)) {
        errors.email = 'Please enter a valid email address.'
      }

      if (!values.password) {
        errors.password = 'Password is required.'
      }

      return errors
    },
    onSubmit: () => {},
  })

  return (
    <div>
      <main className=" bg-[#F8F8F8] px-4 py-8 sm:px-8 lg:px-16 lg:py-12">
        <AuthPageBox imageSrc={signInIcon} imageAlt="Sign in illustration">
          <AuthIntroText
            title="Sign In"
            subtitle="Welcome Back!"
            description="Log in to manage your property searches, save favorites, and get personalized recommendations."
          />

          <AuthGoogleButton text="Continue with Google" />
          <AuthDivider />

          <form className="space-y-4" noValidate onSubmit={formik.handleSubmit}>
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
                Remember me
              </label>
              <AuthTextLink to="/forgot-password" className="text-primary font-bold">
                Forgot Password?
              </AuthTextLink>
            </div>

            <AuthPrimaryButton type="submit" className="mt-2">
              Log in
            </AuthPrimaryButton>
          </form>

          <p className="mt-7 text-center text-grey-text-primary font-medium text-[16px]">
            Don&apos;t have an account?{' '}
            <AuthTextLink to="/sign-up" className="text-secondary font-bold">
              Sign up
            </AuthTextLink>
          </p>
        </AuthPageBox>
      </main>
      <LookingForADreamBox variant="auth" />
    </div>
  )
}

export default SignIn
