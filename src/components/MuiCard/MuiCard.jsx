import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import image from '../../images/sneak.jpg'

export default function MuiCard() {
  return (
    <Card sx={{ maxWidth: 260 }}>
      <CardMedia
        component="img"
        alt="sneak"
        height="280"
        src={image}
      />
      <CardContent sx={{px: 1, paddingTop: 1, '&:last-child': {paddingBottom: 1}}}>
        <Typography sx={{color: 'rgba(68, 75, 88, 1)', marginTop: 0}} gutterBottom >Кроссовки Nike Air Force 1 '07</Typography>
        <Typography variant="h6" sx={{color: 'rgba(68, 75, 88, 1)'}}>11 000 р</Typography>
      </CardContent>
    </Card>
  )
}
