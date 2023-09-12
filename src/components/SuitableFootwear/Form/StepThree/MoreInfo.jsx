import React from "react";
import FormTitle from "../../../../ui/FormTitle/FormTitle";
import { TextField } from "@mui/material";

export default function MoreInfo() {
  return (
    <div>
      <FormTitle>Уточните какие-либо моменты</FormTitle>
      <TextField
        id="filled-basic"
        label="Введите сообщение"
        variant="filled"
        sx={{
          width: 465,
          "& .MuiFilledInput-root": {
            backgroundColor: "white",
            minHeight: 240,
            color: "rgba(219, 187, 169, 1)",
            "&::before": { borderBottom: "none" },
          },
        }}
      />
    </div>
  );
}
