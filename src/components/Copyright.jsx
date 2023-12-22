import React from 'react'

// MUI
import Typography from '@mui/material/Typography'
import LinkMUI from '@mui/material/Link'

// Others
import { company } from '../constants'

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <LinkMUI color="inherit" href="#" target="_blank">
        {company.name}
      </LinkMUI>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
