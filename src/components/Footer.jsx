import React from 'react'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

// Icons
import Facebook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import Instagram from '@mui/icons-material/Instagram'
import LinkedIn from '@mui/icons-material/LinkedIn'

// Others
import { company } from '../constants'

const links = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: <Facebook />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: <Instagram />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: <Twitter />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/',
    icon: <LinkedIn />,
  },
]

const Footer = () => {
  return (
    <Paper variant="outlined">
      <Container
        sx={{
          py: 4,
          gap: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Typography variant="body2" align="center">
          {'© '}
          {new Date().getFullYear()} <b>{company.name}</b>. All rights reserved.
        </Typography>

        <Box>
          {/* Social Links */}
          {links.map((link, index) => (
            <Button
              sx={{ mx: 1, p: 1, minWidth: 0 }}
              variant="text"
              key={index}
              href={link.url}
              target="_blank"
            >
              {link.icon}
            </Button>
          ))}
        </Box>
      </Container>
    </Paper>
  )
}

export default Footer
