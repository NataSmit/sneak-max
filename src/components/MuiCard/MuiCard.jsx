import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import image from '../../images/sneak.jpg'

export default function MuiCard() {
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        component="img"
        alt="sneak"
        height="290"
        src={image}
      />
      <CardContent sx={{padding: 0}}>
        <Typography sx={{color: 'rgba(68, 75, 88, 1)', marginTop: 1}} gutterBottom >Кроссовки Nike Air Force 1 '07 QS</Typography>
        <Typography variant="h6" sx={{color: 'rgba(68, 75, 88, 1)'}}>11 000 р</Typography>
      </CardContent>
    </Card>
  )
}
