import React from 'react'

import { styled, useTheme } from '@mui/material/styles'

// MUI
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// MUI Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import MenuIcon from '@mui/icons-material/Menu'

// Others
import { Link } from 'react-router-dom'
import { sidebarItems } from '../constants/dashboardSidebar'
import { company } from '../constants'

//
const drawerWidth = 280

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

export default function SideBar() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)

  const [collapseOpen, setCollapseOpen] = React.useState({})

  if (!open && collapseOpen) {
    setCollapseOpen(false)
  }

  const handleClick = (index) => {
    setCollapseOpen({ ...collapseOpen, [index]: !collapseOpen[index] })
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {!open && (
            <Typography variant="h6" noWrap component="div">
              {company.name}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ bgcolor: 'primary.main', color: 'white' }}>
          {open && (
            <Typography sx={{ mr: 'auto' }} variant="h6" noWrap component="div">
              {company.name}
            </Typography>
          )}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sidebarItems.map((item, index) => (
            <div key={item.label}>
              <ListItem disablePadding onClick={() => handleClick(index)}>
                <ListItemButton
                  LinkComponent={Link}
                  to={item.href}
                  disabled={!!item.children}
                  style={{ opacity: 1 }}
                >
                  <ListItemIcon sx={{ color: 'primary.main' }}>
                    <item.icon size="24" />
                  </ListItemIcon>
                  <Typography sx={{ fontWeight: '500', mr: 'auto' }}>
                    {item.label}
                  </Typography>
                  {/* <ListItemText
                    sx={{ fontWeight: 'bold' }}
                    primary={item.label}
                  /> */}
                  {item.children ? (
                    collapseOpen[index] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null}
                </ListItemButton>
              </ListItem>
              {item.children && (
                <Collapse in={collapseOpen[index]} timeout="auto" unmountOnExit>
                  <List disablePadding dense>
                    {item.children.map((child) => (
                      <ListItem key={child.label}>
                        <ListItemButton LinkComponent={Link} to={child.href}>
                          <ListItemIcon
                            sx={{ color: 'primary.main', minWidth: '40px' }}
                          >
                            <child.icon sx={{ fontSize: '16px' }} />
                          </ListItemIcon>
                          <ListItemText primary={child.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
