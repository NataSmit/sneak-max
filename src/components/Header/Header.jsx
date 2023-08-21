import React from 'react'
import { AppBar, Container, Toolbar, Typography, IconButton } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters='true' sx={{borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.5)', pt: 1}}>
          <Typography variant="h4" sx={{fontWeight: 700, flexGrow: 1}}>
            SneakMax
          </Typography>
          <IconButton color='inherit' >
            <ShoppingBasketIcon />
          </IconButton>
  
        </Toolbar>
      </Container>
    </AppBar>
  )
}
