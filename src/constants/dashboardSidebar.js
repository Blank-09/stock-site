import DashboardIcon from '@mui/icons-material/Dashboard'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import AssessmentIcon from '@mui/icons-material/Assessment'
import StarIcon from '@mui/icons-material/Star'
import { TbMoneybag } from 'react-icons/tb'

export const sidebarItems = [
  {
    href: '/dashboard',
    icon: DashboardIcon,
    label: 'Dashboard',
  },
  {
    href: '/dashboard/funds',
    icon: TbMoneybag,
    label: 'Fund',
  },
  {
    icon: AssessmentIcon,
    label: 'EOD Data Analysis',
    children: [
      {
        href: '/dashboard/option-analysis',
        icon: RadioButtonUncheckedIcon,
        label: 'Option Analysis',
      },
      {
        href: '/dashboard/product/list',
        icon: RadioButtonUncheckedIcon,
        label: 'Future Analysis',
      },
      {
        href: '/dashboard/product/list',
        icon: RadioButtonUncheckedIcon,
        label: 'Cash Segment Analysis',
      },
    ],
  },
  {
    href: '/dashboard/Settings',
    icon: StarIcon,
    label: 'Recommendation',
  },
]
