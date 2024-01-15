import React, { useState } from 'react'

// MUI
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import LinkMUI from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Icons
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

// Components
import Copyright from '../components/Copyright'

// Others
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'sonner'

export default function Login() {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const credentials = {
      userid: data.get('userid'),
      password: data.get('password'),
    }

    console.log(credentials)
    sessionStorage.setItem('login', JSON.stringify(credentials))

    toast.success('Logged in successfully')
    navigate('/dashboard')
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Container component="main" sx={{ padding: '3rem 1.5rem' }}>
        <Paper
          style={{
            maxWidth: '500px',
            margin: 'auto',
            padding: '1.5rem 2rem',
          }}
          elevation={0}
          variant="outlined"
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                m: 1,
                p: 2,
                bgcolor: 'secondary.main',
                width: '100px',
                height: '100px',
              }}
            >
              {/* <img
                style={{ width: '100%', height: '100%' }}
                src=""
              /> */}
            </Avatar>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Typography variant="subtitle2" color="red" paddingY={3}>
                {message}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField required fullWidth id="userid" label="User Id" name="userid" autoComplete="userid" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={visible ? 'text' : 'password'}
                    id="password"
                    autoComplete="new-password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setVisible((prev) => !prev)} edge="end">
                            {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="terms" color="primary" />}
                    label="Agree our terms and conditions"
                  />
                </Grid>
              </Grid>
              <Button fullWidth sx={{ mt: 3, mb: 2 }} type="submit" variant="contained" size="large">
                Login
              </Button>
              <Grid container justifyContent="flex-end" spacing={2}>
                <Grid item>
                  <LinkMUI component={Link} to={'/forgot-password'} variant="body2">
                    Forgot Password?
                  </LinkMUI>
                </Grid>
                <Grid item>
                  <LinkMUI component={Link} to={'/register'} variant="body2">
                    Create an account?
                  </LinkMUI>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
        <Copyright sx={{ mt: 2 }} />
      </Container>
    </Box>
  )
}
