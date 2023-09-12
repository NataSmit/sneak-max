import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import React from "react";
import FormTitle from "../../../../ui/FormTitle/FormTitle";
import { shoeTypes } from "../../../../mocData/mocData";

export default function ShoesType() {
  return (
    <div>
      <FormTitle>Какой тип кроссовок рассматриваете?</FormTitle>
      <Grid container spacing={2}>
        {shoeTypes.map((shoeType) => (
          <Grid item>
            <Box sx={{ width: 280 }}>
              <Box sx={{ width: 280, height: 120 }}>
                <img
                  style={{ width: "100%" }}
                  src={shoeType.image}
                  alt={shoeType.type}
                />
              </Box>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label={shoeType.type}
                />
              </FormGroup>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
