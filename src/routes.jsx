import React, { Suspense } from 'react'
import { Outlet, createBrowserRouter } from 'react-router-dom'

// MUI
import Box from '@mui/material/Box'

// Components
import Loading from './components/Loading'

//
const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Box height="100vh">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Box>
    ),
    children: [
      {
        path: '/',
        Component: React.lazy(() => import('./pages/Home')),
      },
      {
        path: '/register',
        Component: React.lazy(() => import('./pages/Register')),
      },
      {
        path: '/login',
        Component: React.lazy(() => import('./pages/Login')),
      },
      {
        path: '/logout',
        element: <h1>Logging out...</h1>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <h1>Dashboard</h1>,
  },
])

export default routes
