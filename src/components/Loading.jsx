import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const Loading = () => (
  <Box
    height="100%"
    sx={{
      // Centering the loader
      display: 'grid',
      placeItems: 'center',
    }}
  >
    <CircularProgress />
  </Box>
)

export default Loading
