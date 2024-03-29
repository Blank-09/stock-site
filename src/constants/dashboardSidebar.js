import DashboardIcon from '@mui/icons-material/Dashboard'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import AssessmentIcon from '@mui/icons-material/Assessment'
import StarIcon from '@mui/icons-material/Star'
import { TbMoneybag } from 'react-icons/tb'
import ShowChartIcon from '@mui/icons-material/ShowChart'

export const sidebarItems = [
  {
    href: '/dashboard/home',
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
        href: '/dashboard/oi-range',
        icon: RadioButtonUncheckedIcon,
        label: 'OI Range',
      },
      {
        href: '/dashboard/option-analysis',
        icon: RadioButtonUncheckedIcon,
        label: 'Option Analysis',
      },
      {
        href: '/dashboard/future-analysis',
        icon: RadioButtonUncheckedIcon,
        label: 'Future Analysis',
      },
      {
        href: '/dashboard/cash-segment-analysis',
        icon: RadioButtonUncheckedIcon,
        label: 'Cash Segment Analysis',
      },
    ],
  },
  {
    href: '/dashboard/recommendation',
    icon: StarIcon,
    label: 'Recommendation',
  },
  {
    href: '/dashboard/virtual-trading',
    icon: ShowChartIcon,
    label: 'Virtual Trading',
  },
]
