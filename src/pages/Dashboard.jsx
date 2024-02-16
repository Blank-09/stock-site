// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

// Components
import DashboardCard from '../components/dashboard/DashboardCard'
import { Grid } from '@mui/material'

const dashboardData = [
  {
    name: 'NIFTY',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Nifty_50_Logo.svg/1200px-Nifty_50_Logo.svg.png',
    stockPrice: '21,513.00',
    stockPriceChange: '-197.80',
    stockPriceChangePercent: '-0.91',
  },
  {
    name: 'NIFTY',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Nifty_50_Logo.svg/1200px-Nifty_50_Logo.svg.png',
    stockPrice: '21,513.00',
    stockPriceChange: '-197.80',
    stockPriceChangePercent: '-0.91',
  },
  {
    name: 'NIFTY',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Nifty_50_Logo.svg/1200px-Nifty_50_Logo.svg.png',
    stockPrice: '21,513.00',
    stockPriceChange: '-197.80',
    stockPriceChangePercent: '-0.91',
  },
  {
    name: 'NIFTY',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Nifty_50_Logo.svg/1200px-Nifty_50_Logo.svg.png',
    stockPrice: '21,513.00',
    stockPriceChange: '-197.80',
    stockPriceChangePercent: '-0.91',
  },
  {
    name: 'NIFTY',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Nifty_50_Logo.svg/1200px-Nifty_50_Logo.svg.png',
    stockPrice: '21,513.00',
    stockPriceChange: '-197.80',
    stockPriceChangePercent: '-0.91',
  },
]

const Dashboard = () => {
  return (
    <Container
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
        }}
      >
        <div>
          <Typography component="span" fontWeight="bold">
            Date:{' '}
          </Typography>
          <Typography component="span">
            {new Date().toLocaleTimeString('en-IN', {
              // weekday: 'long',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            })}
          </Typography>
          <br />
          {/* <Typography component="span" fontWeight="bold">
            Market:{' '}
          </Typography>
          <Typography component="span">Open</Typography> */}
        </div>
      </Box>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {dashboardData.map((data, index) => (
          <Grid key={index} item xs={12} sm={6} lg={4}>
            <DashboardCard
              img={{ src: data.img, alt: data.name }}
              stockPrice={data.stockPrice}
              stockPriceChange={data.stockPriceChange}
              stockPriceChangePercent={data.stockPriceChangePercent}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Dashboard
