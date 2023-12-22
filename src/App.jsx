import React from 'react'

// MUI
import CssBaseline from '@mui/material/CssBaseline'

// Router
import { RouterProvider } from 'react-router-dom'

// Components
import ThemeProvider from './components/ThemeProvider.jsx'
import routes from './routes.jsx'

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}

export default App
