import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DashboardRoute from './dashboard'

// Components
import Home from '../pages/Home'
import Logout from '../pages/Logout'

//
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/register',
        Component: React.lazy(() => import('../pages/Register')),
      },
      {
        path: '/login',
        Component: React.lazy(() => import('../pages/Login')),
      },
    ],
  },
  {
    path: '/logout',
    element: <Logout />,
  },
  {
    path: '/dashboard',
    element: <DashboardRoute />,
    children: [
      {
        path: '/dashboard/home',
        Component: React.lazy(() => import('../pages/Dashboard')),
      },
      {
        path: '/dashboard/oi-range',
        Component: React.lazy(() => import('../components/dashboard/EODDataAnalysis/OIRange')),
      },
      {
        path: '/dashboard/option-analysis',
        Component: React.lazy(() => import('../components/dashboard/EODDataAnalysis')),
      },
      {
        path: '/dashboard/future-analysis',
        Component: React.lazy(() => import('../components/dashboard/EODDataAnalysis/FutureAnalysis')),
      },
      {
        path: '/dashboard/cash-segment-analysis',
        Component: React.lazy(() => import('../components/dashboard/EODDataAnalysis')),
      },
      {
        path: '/dashboard/funds',
        Component: React.lazy(() => import('../components/Error/ImplementationMessage')),
      },
      {
        path: '/dashboard/recommendation',
        Component: React.lazy(() => import('../pages/Recommendation')),
      },
      {
        path: '/dashboard/virtual-trading',
        Component: React.lazy(() => import('../components/Error/ImplementationMessage')),
      },
    ],
  },
])

export default routes
