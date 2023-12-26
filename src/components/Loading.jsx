import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const Loading = () => (
  <Box
    height="100%"
    width="100%"
    sx={{
      // Centering the loader
      display: 'grid',
      placeItems: 'center',
    }}
  >
    <CircularProgress sx={{ color: 'white' }} />
  </Box>
)

export default Loading
