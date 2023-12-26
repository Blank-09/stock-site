import React from 'react'

// Router
import { Link } from 'react-router-dom'

// MUI
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
// import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
// import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'

// MUI Icons
import Person from '@mui/icons-material/Person'

// Components
import ModeToggleButton from './ModeToggleButton'

// constants
import { company } from '../constants'

/* prettier-ignore */
export const pages = [
  { path: '/',          name: 'Home'      },
  { path: '/login',     name: 'Login'     },
  { path: '/register',  name: 'Register'  },
  { path: '/dashboard', name: 'dashboard'  },
]

/* prettier-ignore */
export const settings = [
  { path: '/user/profile',   name: 'Profile'   },
  { path: '/user/settings',  name: 'Account'   },
  { path: '/user/home',      name: 'Dashboard' },
  { path: '/logout',         name: 'Logout'    },
]

/**
 * Navbar Props
 * @param {{ transparent: boolean }} param0
 * @returns
 */

const Navbar = ({ transparent }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget)
  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget)
  const handleCloseNavMenu = () => setAnchorElNav(null)
  const handleCloseUserMenu = () => setAnchorElUser(null)

  return (
    <AppBar
      position="absolute"
      color={transparent && 'transparent'}
      sx={{ color: 'white' }}
      elevation={transparent ? 0 : 1}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            noWrap
            variant="h6"
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {company.name}
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              sx={{ display: { xs: 'block', md: 'none' } }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              keepMounted
            >
              {pages.map((page) => (
                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            noWrap
            variant="h5"
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {company.name}
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                to={page.path}
                component={Link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'inherit' }}
              >
                {page.name}
              </Button>
            ))}
          </Box> */}

          <Box sx={{ ml: 'auto', mr: 1 }}>
            <ModeToggleButton />
          </Box>

          <Box>
            <Tooltip title="Open settings">
              <IconButton color="inherit" onClick={handleOpenUserMenu}>
                <Person />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              keepMounted
            >
              {settings.map((setting) => (
                <MenuItem
                  component={Link}
                  to={setting.path}
                  key={setting.path}
                  onClick={handleCloseUserMenu}
                  sx={{ textAlign: 'center', color: 'inherit' }}
                >
                  {setting.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
