import CategoryIcon from '@mui/icons-material/Category'
import DashboardIcon from '@mui/icons-material/Dashboard'

export const sidebarItems = [
  {
    href: '/dashboard',
    icon: DashboardIcon,
    label: 'Dashboard',
  },
  {
    href: '/dashboard/Settings',
    icon: CategoryIcon,
    label: 'Settings',
  },
  {
    icon: CategoryIcon,
    label: 'Products',
    children: [
      {
        href: '/dashboard/product/create',
        icon: CategoryIcon,
        label: 'Create',
      },
      {
        href: '/dashboard/product/list',
        icon: CategoryIcon,
        label: 'List',
      },
    ],
  },
]
