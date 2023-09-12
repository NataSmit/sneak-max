import { Typography } from '@mui/material'
import React from 'react'

export default function FormTitle({children}) {
  return (
    <Typography
      variant="h5"
      component="h2"
      sx={{ color: "rgba(68, 75, 88, 1)", marginBottom: 4 }}
    >
      {children}
    </Typography>
  )
}
