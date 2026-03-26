import I18nDocumentSync from '@/components/I18nDocumentSync'
import PageReveal from '@/components/PageReveal'
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

      <PageReveal>
        <Outlet />
      </PageReveal>

      <Footer />
    </div>
  )
}

export default MainLayout
