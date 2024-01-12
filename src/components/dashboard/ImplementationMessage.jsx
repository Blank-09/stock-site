import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const ImplementationMessage = () => {
  return (
    <Container sx={{ height: '100%', display: 'grid', placeContent: 'center' }}>
      <Typography variant="h4">⚠️ This page needs to be built.</Typography>
      <Box
        component="code"
        sx={{
          textAlign: 'center',
          mt: 2,
          p: 1,
        }}
      >
        <pre>
          <p>
            Page:{' '}
            <Box
              component="span"
              sx={{
                color: 'red',
                bgcolor: 'rgba(255, 0, 0, 0.1)',
                px: '8px',
                py: '4px',
                borderRadius: 2,
              }}
            >
              {window.location.pathname}
            </Box>
          </p>
        </pre>
      </Box>
    </Container>
  )
}

export default ImplementationMessage
