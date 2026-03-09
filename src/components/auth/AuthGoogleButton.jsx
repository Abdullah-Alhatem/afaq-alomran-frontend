import React from 'react'

import googleIcon from '@/assets/Auth/googleIcon.svg'

function AuthGoogleButton({ text }) {
  return (
    <button
      type="button"
      className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-[10px] border border-grey-stroke bg-white text-[16px] font-bold text-[#111827]"
    >
      <img src={googleIcon} alt="Google" className="h-7 w-7" />
      {text}
    </button>
  )
}

export default AuthGoogleButton
