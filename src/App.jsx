import React from 'react'

// Router
import { RouterProvider } from 'react-router-dom'

// Components
import ThemeProvider from './components/ThemeProvider.jsx'
import routes from './routes.jsx'

// Others
import { Toaster } from 'sonner'
import useTheme from '@mui/material/styles/useTheme'

const App = () => {
  const theme = useTheme()

  return (
    <ThemeProvider>
      <RouterProvider router={routes} />
      <Toaster richColors theme={theme.palette.mode} />
    </ThemeProvider>
  )
}

export default App
