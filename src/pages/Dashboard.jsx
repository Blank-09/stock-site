import Box from '@mui/material/Box'
import MyChart from '../components/dashboard/MyChart'

export default function Dashboard() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <MyChart />
    </Box>
  )
}
