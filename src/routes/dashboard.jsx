import React from 'react'

// MUI
import Box from '@mui/material/Box'

// Components
import SideBar from '../components/SideBar'

// Others
import { Outlet } from 'react-router-dom'

const DashboardRoute = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Outlet />
    </Box>
  )
}

export default DashboardRoute
