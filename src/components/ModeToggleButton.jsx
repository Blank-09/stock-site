import React from 'react'

// MUI
import useTheme from '@mui/material/styles/useTheme'
import IconButton from '@mui/material/IconButton'

// Icons
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

// Components
import { ThemeContext } from '../components/ThemeProvider'

const ModeToggleButton = () => {
  const theme = useTheme()
  const colorMode = React.useContext(ThemeContext)

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  )
}

export default ModeToggleButton
