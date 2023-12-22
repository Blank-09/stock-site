import React from 'react'

// Theme
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from '../theme'

export const ThemeContext = React.createContext({ toggleColorMode: () => {} })

export default function ThemeProvider({ children }) {
  const [mode, setMode] = React.useState('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = mode === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
