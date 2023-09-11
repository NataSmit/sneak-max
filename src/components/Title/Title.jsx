import { Typography } from "@mui/material";
import React from "react";

export default function Title({children}) {
  return (
    <Typography
      variant="h4"
      component="h1"
      sx={{ color: "rgba(68, 75, 88, 1)", marginBottom: 4 }}
    >
      {children}
    </Typography>
  );
}
