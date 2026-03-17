import React from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

function AuthTextLink({ to, className, children }) {
  return (
    <Link to={to} className={cn('font-semibold hover:underline', className)}>
      {children}
    </Link>
  )
}

export default AuthTextLink
