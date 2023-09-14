import React from "react";
import styles from "./Catalogue.module.scss";
import { Box, Grid, Typography } from "@mui/material";
import Form from "../Form/Form";
import MuiCard from "../MuiCard/MuiCard";
import MuiButton from "../../ui/Button/Button";

export default function Catalogue() {
  return (
    <section className={styles.catalogue}>
      <div className={styles.catalogueContainer}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: 700, color: "rgba(68, 75, 88, 1)", '@media (max-width: 650px)': {textAlign: 'center'} }}
        >
          Каталог
        </Typography>
        <div className={styles.container}>
          <Box>
            <Form />
          </Box>
          <Box>
            <Grid container spacing="20" columns="3" sx={{'@media (max-width: 650px)': {justifyContent: 'center'}}}>
              <Grid item>
                <MuiCard />
              </Grid>
              <Grid item>
                <MuiCard />
              </Grid>
              <Grid item>
                <MuiCard />
              </Grid>
              <Grid item>
                <MuiCard />
              </Grid>
            </Grid>
          </Box>
        </div>
        <Box sx={{ textAlign: "center" }}>
          <MuiButton text={"Показать еще"} />
        </Box>
      </div>
    </section>
  );
}
