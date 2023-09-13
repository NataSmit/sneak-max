import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { menuItems } from "../../data/text";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSidebarOpen(false);
  };

  const list = () => (
    <Box onClose={toggleDrawer()} onKeyDown={toggleDrawer()} role="presentation">
      <List>
        {menuItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor="right"
          open={sidebarOpen}
          onClose={toggleDrawer()}
          
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
