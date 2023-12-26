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
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Box>
  )
}

export default DashboardRoute
