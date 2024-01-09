import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DashboardRoute from './dashboard'

// MUI
import Box from '@mui/material/Box'

// Components
import Home from '../pages/Home'

//
const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Box height="100vh">
        <Home />
      </Box>
    ),
    children: [
      {
        path: '/register',
        Component: React.lazy(() => import('../pages/Register')),
      },
      {
        path: '/login',
        Component: React.lazy(() => import('../pages/Login')),
      },
      {
        path: '/logout',
        element: (
          <h1 style={{ color: 'white', textAlign: 'center' }}>
            Logging out...
          </h1>
        ),
      },
    ],
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
        path: '/dashboard/option-analysis',
        Component: React.lazy(() =>
          import('../components/dashboard/OptionAnalysis')
        ),
      },
    ],
  },
])

export default routes
