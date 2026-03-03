import React from 'react'
import { Outlet } from 'react-router-dom'

function AccountLayout() {
  return (
    <div>
      <div>my account</div>

      <Outlet />
    </div>
  )
}

export default AccountLayout
