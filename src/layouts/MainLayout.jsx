import I18nDocumentSync from '@/components/I18nDocumentSync'
import ScrollToTop from '@/components/ScrollToTop'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <I18nDocumentSync />
      <ScrollToTop />
      <Header />

      <div className="">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default MainLayout
