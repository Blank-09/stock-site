import { Suspense } from 'react'

// MUI
import Box from '@mui/material/Box'

// Components
import SideBar from '../components/SideBar'
import Loading from '../components/Loading'

// Others
import { Outlet } from 'react-router-dom'

const DashboardRoute = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <SideBar />
      <Box sx={{ pt: 8, width: '100%', height: '100vh' }}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  )
}

export default DashboardRoute
