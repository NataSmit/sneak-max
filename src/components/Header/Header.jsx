import React from 'react'
import { AppBar, Container, Toolbar, IconButton } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters='true' sx={{borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.5)', pt: 1}}>
          <Logo />
          <IconButton color='inherit' >
            <ShoppingBasketIcon />
          </IconButton>
  
        </Toolbar>
      </Container>
    </AppBar>
  )
}
