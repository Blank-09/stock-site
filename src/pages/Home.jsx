import { Suspense } from 'react'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// Components
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'

// Others
import { Link as RouterLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { company } from '../constants'
import { Paper } from '@mui/material'

const Home = () => {
  return (
    <Box height="100vh">
      <Navbar transparent />

      <Box
        sx={{
          backgroundImage:
            "url('https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          // "url('https://img.freepik.com/free-vector/gradient-cryptocurrency-concept_23-2149215736.jpg?w=1060&t=st=1703876148~exp=1703876748~hmac=94e62394ab432ce5a2cc528b0c8e955e6d7134c23faf5df64e73d7ee2006913b')",
          // background: '#161A30',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            minHeight: '100vh',
          }}
          maxWidth="xl"
        >
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              flexShrink: 0,
              display: 'grid',
              placeItems: 'center',
              color: 'white',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Chip
                component={Paper}
                sx={{
                  mb: 1,
                  px: 2,
                  background: '#fffa',
                  color: 'black',
                }}
                variant="filled"
                label={
                  <Box component="span">
                    Want to learn more about{' '}
                    <Link
                      sx={{
                        fontWeight: 600,
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                      component={RouterLink}
                      to="/about"
                    >
                      {company.name}. →
                    </Link>
                  </Box>
                }
              />

              <Typography variant="h2" fontWeight="bold" sx={{ mb: 2 }}>
                Empower Tomorrow, <br />
                One Innovation at a Time
              </Typography>

              <Typography variant="body1" fontSize="18px" maxWidth="sm">
                Optimize operations with efficient inventory management
                <br />
                for businesses and empower individuals to excel in dynamic control.
              </Typography>

              <Box sx={{ mt: 6 }}>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/register"
                  size="large"
                  sx={{ m: 1, width: { xs: '100%', md: '200px' } }}
                >
                  Register
                </Button>
                <Button
                  component={RouterLink}
                  to="/login"
                  variant="outlined"
                  size="large"
                  sx={{ m: 1, width: { xs: '100%', md: '200px' } }}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Outlet is here */}
          <Box sx={{ width: { xs: '100%', md: '50%' }, flexShrink: 0 }}>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Home
