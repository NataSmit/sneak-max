import { AppBar, Container, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import React from "react";
import Logo from "../Logo/Logo";
import './Footer.css'

const menuItems = [
  "Каталог",
  "О нас",
  "Подбор товара",
  "Наша команда",
  "Доставка и оплата",
  "Контакты",
];

export default function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "rgba(68, 75, 88, 1)" }}>
      <Container>
        <Toolbar disableGutters="true" sx={{ pt: 1 }}>
          <Logo />
          <List sx={{display: 'flex'}}>
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }} >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
