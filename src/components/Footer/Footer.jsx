import {
  AppBar,
  Container,
  Toolbar,
} from "@mui/material";
import React from "react";
import Logo from "../../ui/Logo/Logo";
import "./Footer.css";

export default function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "rgba(68, 75, 88, 1)" }}>
      <Container>
        <Toolbar disableGutters="true" sx={{ pt: 1 }}>
          <Logo />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
