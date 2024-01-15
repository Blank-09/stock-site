import { Suspense, useEffect } from 'react'

// MUI
import Box from '@mui/material/Box'

// Components
import SideBar from '../components/SideBar'
import Loading from '../components/Loading'

// Others
import { Outlet, useNavigate } from 'react-router-dom'

const DashboardRoute = () => {
  const navigator = useNavigate()

  useEffect(() => {
    if (window.location.pathname.match(/^\/dashboard\/?$/)) {
      navigator('/dashboard/home')
    }
  }, [navigator])

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <SideBar />
      <Box
        sx={{
          pt: 8,
          width: '100%',
          minHeight: '100vh',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          position: 'relative',
          overflow: 'auto',
        }}
      >
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  )
}

export default DashboardRoute
