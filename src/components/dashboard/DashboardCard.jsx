import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const DashboardCard = ({ img: { src, alt }, stockPrice, stockPriceChange, stockPriceChangePercent }) => (
  <Card sx={{ width: '100%', display: 'flex', px: 2, py: 3 }}>
    <CardMedia component="img" sx={{ width: 150, height: '100%', my: 'auto' }} image={src} alt={alt} />
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
      <div>
        <Typography component="span" variant="h6" color="primary">
          {stockPrice}
        </Typography>
      </div>

      <div>
        <Typography
          component="span"
          fontWeight="semibold"
          sx={{ color: stockPriceChangePercent < 0 ? 'red' : 'green' }}
        >
          {stockPriceChange} ({stockPriceChangePercent}%)
        </Typography>
      </div>
    </Box>
  </Card>
)

export default DashboardCard
