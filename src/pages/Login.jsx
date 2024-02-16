import { useState } from 'react'

// MUI
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import LinkMUI from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// Icons
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

// Components
import Copyright from '../components/Copyright'

// Others
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'sonner'
import { login } from '../utils/api'

export default function Login() {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const credentials = {
      username: data.get('username'),
      password: data.get('password'),
    }

    try {
      setLoading(true)
      await login(credentials.username, credentials.password)
      toast.success('Logged in successfully')
      navigate('/dashboard')
    } catch (e) {
      toast.error("Couldn't log in")
      setMessage(e.message)
    } finally {
      setLoading(false)
    }
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
                  <TextField required fullWidth id="username" label="User Id" name="username" autoComplete="username" />
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
                    required
                    control={<Checkbox value="terms" color="primary" />}
                    label="Agree our terms and conditions"
                  />
                </Grid>
              </Grid>
              <Button fullWidth sx={{ mt: 3, mb: 2 }} type="submit" variant="contained" size="large" disabled={loading}>
                {loading ? <CircularProgress size={24} sx={{ mr: 2 }} /> : 'Login'}
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
