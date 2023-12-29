import CategoryIcon from '@mui/icons-material/Category'
import DashboardIcon from '@mui/icons-material/Dashboard'

export const sidebarItems = [
  {
    href: '/dashboard',
    icon: DashboardIcon,
    text: 'Dashboard',
  },
  {
    href: '/dashboard/Settings',
    icon: CategoryIcon,
    text: 'Settings',
  },
  {
    icon: CategoryIcon,
    text: 'Products',
    children: [
      {
        href: '/dashboard/product/create',
        icon: CategoryIcon,
        text: 'Create',
      },
      {
        href: '/dashboard/product/list',
        icon: CategoryIcon,
        text: 'List',
      },
    ],
  },
]
