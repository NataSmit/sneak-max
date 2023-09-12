import React from "react";
import FormTitle from "../../../../ui/FormTitle/FormTitle";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import { sizes } from "../../../../mocData/mocData";
import img from "../../../../images/ShoesStepTwo.png";

export default function ShoeSize() {
  return (
    <div>
      <FormTitle>Какой размер вам подойдет?</FormTitle>
      <Grid container spacing={3} justifyContent="space-between">
        {sizes.map((size) => (
          <Grid item>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label={size} />
            </FormGroup>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ paddingTop: 2 }}>
        <img src={img} alt="обувь" style={{ width: "100%" }} />
      </Box>
    </div>
  );
}
