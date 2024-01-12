// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

// Components
import DashboardCard from '../components/dashboard/DashboardCard'

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
            Date Time:{' '}
          </Typography>
          <Typography component="span">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: '2-digit',
              month: 'short',
              day: '2-digit',
            })}
          </Typography>
          <br />
          <Typography component="span" fontWeight="bold">
            Market Time:{' '}
          </Typography>
          <Typography component="span">Open </Typography>
        </div>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          gap: 2,
          mt: 2,
        }}
      >
        <DashboardCard
          img={{
            alt: 'NIFTY',
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Nifty_50_Logo.svg/1200px-Nifty_50_Logo.svg.png',
          }}
          stockPrice="21,513.00"
          stockPriceChange="-197.80"
          stockPriceChangePercent="-0.91"
          lastUpdated="08-Jan-2024 15:30"
        />
        <DashboardCard
          img={{
            alt: 'NIFTY',
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Nifty_50_Logo.svg/1200px-Nifty_50_Logo.svg.png',
          }}
          stockPrice="21,513.00"
          stockPriceChange="-197.80"
          stockPriceChangePercent="-0.91"
          lastUpdated="08-Jan-2024 15:30"
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          gap: 2,
          mt: 'auto',
        }}
      >
        <DashboardCard
          img={{
            alt: 'NIFTY',
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Nifty_50_Logo.svg/1200px-Nifty_50_Logo.svg.png',
          }}
          stockPrice="21,513.00"
          stockPriceChange="197.80"
          stockPriceChangePercent="0.91"
          lastUpdated="08-Jan-2024 15:30"
        />
        <DashboardCard
          img={{
            alt: 'NIFTY',
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Nifty_50_Logo.svg/1200px-Nifty_50_Logo.svg.png',
          }}
          stockPrice="21,513.00"
          stockPriceChange="-197.80"
          stockPriceChangePercent="-0.91"
          lastUpdated="08-Jan-2024 15:30"
        />
      </Box>
    </Container>
  )
}

export default Dashboard
