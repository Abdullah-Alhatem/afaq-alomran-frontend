import { createBrowserRouter } from 'react-router-dom'
import { ACCOUNT_PAGE_HANDLES } from '../components/account/accountLayoutConfig'

// Layouts
import MainLayout from '../layouts/MainLayout'
import AccountLayout from '../layouts/AccountLayout'

// Auth Pages
import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import ForgotPassword from '../pages/auth/ForgotPassword'
import CreateNewPassword from '../pages/auth/CreateNewPassword'

// Main Pages
import Home from '../pages/home/Home'
import Properties from '../pages/properties/Properties'
import PropertyDetails from '../pages/properties/PropertyDetails'
import MapPage from '../pages/properties/MapPage'
import About from '../pages/About'
import Agents from '../pages/agents/Agents'
import AgentDetails from '../pages/agents/AgentDetails'
import Portfolios from '../pages/portfolios/Portfolios'
import PortfolioDetails from '../pages/portfolios/PortfolioDetails'
import FAQs from '../pages/FAQs'
import ContactUs from '../pages/ContactUs'
import NotFound from '../pages/NotFound'

// Account Pages
import MyAccount from '../pages/account/MyAccount'
import ShowInfo from '../pages/account/ShowInfo'
import EditProfile from '../pages/account/EditProfile'
import Appointments from '../pages/account/Appointments'
import FavoriteProperties from '../pages/account/FavoriteProperties'
import Notifications from '../pages/account/Notifications'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: 'properties', element: <Properties /> },
      { path: 'properties/:propertyId', element: <PropertyDetails /> },

      { path: 'about', element: <About /> },

      { path: 'agents', element: <Agents /> },
      { path: 'agents/:agentId', element: <AgentDetails /> },

      { path: 'portfolios', element: <Portfolios /> },
      { path: 'portfolios/:portfolioId', element: <PortfolioDetails /> },

      { path: 'faqs', element: <FAQs /> },
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'map', element: <MapPage /> },
      { path: '*', element: <NotFound /> },
      // Auth Routes
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/create-new-password',
        element: <CreateNewPassword />,
      },
      // My Account (Nested)
      {
        path: '/my-account',
        element: <AccountLayout />,
        handle: { accountPage: ACCOUNT_PAGE_HANDLES.personalInfo },
        children: [
          { index: true, element: <MyAccount /> },

          {
            path: 'personal-info',
            handle: { accountPage: ACCOUNT_PAGE_HANDLES.personalInfo },
            children: [
              { index: true, element: <ShowInfo /> },
              {
                path: 'edit',
                element: <EditProfile />,
                handle: { accountPage: ACCOUNT_PAGE_HANDLES.editProfile },
              },
            ],
          },

          {
            path: 'appointments',
            element: <Appointments />,
            handle: { accountPage: ACCOUNT_PAGE_HANDLES.appointments },
          },
          {
            path: 'favorite-properties',
            element: <FavoriteProperties />,
            handle: { accountPage: ACCOUNT_PAGE_HANDLES.favoriteProperties },
          },
          {
            path: 'notifications',
            element: <Notifications />,
            handle: { accountPage: ACCOUNT_PAGE_HANDLES.notifications },
          },
        ],
      },
    ],
  },
])
