import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const DashboardCard = ({
  img: { src, alt },
  stockPrice,
  stockPriceChange,
  stockPriceChangePercent,
  lastUpdated,
}) => (
  <Card sx={{ width: '100%', display: 'flex' }}>
    <CardMedia
      component="img"
      sx={{ width: 100, height: '100%', objectFit: 'contain' }}
      image={src}
      alt={alt}
    />
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

      {/* <div>
        <Typography component="span" variant="body2">
          {lastUpdated}
        </Typography>
      </div> */}
    </Box>
  </Card>
)

export default DashboardCard
