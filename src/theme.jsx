import { createTheme } from '@mui/material/styles'

const commonPalette = {
  // common palettes
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#84cc16',
    },
    ...commonPalette,
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#84cc16',
    },
    ...commonPalette,
  },
})

export { lightTheme, darkTheme }
