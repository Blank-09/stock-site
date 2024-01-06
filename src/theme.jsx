import { createTheme } from '@mui/material/styles'

const commonPalette = {
  // common palettes
  // common palettes
  lightGreen: {
    main: '#81c784', // light green
    contrastText: '#000', // appropriate contrast text color
  },
  lightRed: {
    main: '#ef9a9a', // light red
    contrastText: '#000', // appropriate contrast text color
  },
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
