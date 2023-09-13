import React, { useState } from "react";
import { AppBar, Container, Toolbar, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Logo from "../../ui/Logo/Logo";
import { menuItems } from "../../data/text";
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "../Sidebar/Sidebar";

export default function Header() {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  function handleMenuClick() {
    setSidebarOpen(true)
  }

  return (
    <AppBar position="static">
      <Container>
        <Toolbar
          disableGutters="true"
          sx={{
            borderBottom: 1,
            borderColor: "rgba(255, 255, 255, 0.5)",
            pt: 1,
          }}
        >
          <Logo />
          <List sx={{ display: "flex", '@media (max-width: 1000px)': {display: 'none'}}}>
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <IconButton onClick={handleMenuClick} color="inherit" sx={{mr: 2, '@media (min-width: 1000px)': {display: 'none'}}}>
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingBasketIcon />
          </IconButton>
        </Toolbar>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </Container>
      
    </AppBar>
  );
}
