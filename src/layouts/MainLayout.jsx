import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <Header />

      <div className="min-h-[1000px]">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default MainLayout
