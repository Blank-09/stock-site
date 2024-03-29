import { useState } from 'react'

// MUI
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
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

export default function Register() {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const body = {}

    for (let [key, value] of data.entries()) {
      body[key] = value
    }

    /*
      body = {
        "userid": "abc",
        "email": "abc@gmail.com",
        "phoneno": "1234567890",
        "password": "alsdkf",
        "confirm-password": "alkfj",
        "terms": "terms"
      }
    */

    if (body.password !== body['confirm-password']) {
      setMessage('Passwords do not match')
      return
    }

    console.log(body)
    toast.success('Registered successfully')
    navigate('/login')
  }

  return (
    <Box sx={{ display: 'grid', placeItems: 'center' }}>
      <Container component="main" sx={{ paddingTop: 4 }}>
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
              <Typography variant="subtitle2" color={'red'} paddingY={3}>
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
                    id="email"
                    label="Email ID"
                    name="email"
                    type="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // required
                    fullWidth
                    id="phoneno"
                    label="Phone Number (optional)"
                    name="phoneno"
                    autoComplete="phoneno"
                  />
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
                  <TextField
                    required
                    fullWidth
                    name="confirm-password"
                    label="Confirm Password"
                    type={visible ? 'text' : 'password'}
                    id="confirm-password"
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
                    name="terms"
                    control={<Checkbox value="terms" color="primary" />}
                    label="Agree our terms and conditions"
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 3, mb: 2 }}>
                Register
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <LinkMUI component={Link} to="/login" variant="body2">
                    Already have an account?
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
