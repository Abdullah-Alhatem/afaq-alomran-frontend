import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <div>header</div>

      <Outlet />

      <div>footer</div>
    </div>
  )
}

export default MainLayout
