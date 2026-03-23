import LookingForADreamBox from '@/components/LookingForADreamBox'

function AuthPageLayout({ children }) {
  return (
    <div>
      <main className="bg-[#F8F8F8] px-4 py-8 sm:px-8 lg:px-16 lg:py-12">{children}</main>
      <LookingForADreamBox variant="auth" />
    </div>
  )
}

export default AuthPageLayout
