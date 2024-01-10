import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export default function Dashboard() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
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
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 1fr',
            lg: 'repeat(4, 1fr)',
          },
          gap: 2,
          mt: 2,
        }}
      >
        {new Array(4).fill().map((_, i) => (
          <Card key={i} sx={{ width: '100%', display: 'flex' }}>
            <CardMedia
              component="img"
              sx={{ width: 100, height: '100%', objectFit: 'cover' }}
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="card image"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
              {/* <div>
                <Typography component="span" fontWeight="bold">
                  Symbol:{' '}
                </Typography>
                <Typography component="span">Nifty</Typography>
              </div> */}

              <div>
                <Typography component="span" variant="h6" color="primary">
                  {/* Stock Price:{' '} */}
                  21,513.00
                </Typography>
                {/* <Typography component="span">21,513.00</Typography> */}
              </div>

              <div>
                <Typography
                  component="span"
                  fontWeight="semibold"
                  sx={{ color: 'red' }}
                >
                  {/* Current Value:{' '} */}
                  -197.80 (-0.91%)
                </Typography>
                {/* <Typography component="span">-197.80 (-0.91%)</Typography> */}
              </div>

              <div>
                {/* <Typography component="span" fontWeight="bold" >
                  Date:{' '}
                </Typography> */}
                <Typography component="span" variant="body2">
                  08-Jan-2024 15:30
                </Typography>
              </div>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
