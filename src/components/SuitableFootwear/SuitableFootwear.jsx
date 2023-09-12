import { Box, Typography } from "@mui/material";
import React from "react";
import Title from "../../ui/Title/Title";
import styles from "./SuitableFootwear.module.scss";
import ChooseShoesForm from "./Form/ChooseShoesForm";

export default function SuitableFootwear() {
  return (
    <div className={styles.suitable}>
      <Box
        sx={{
          maxWidth: 1152,
          my: 0,
          mx: "auto",
          backgroundColor: "rgba(255, 244, 238, 1)",
          py: 3,
        }}
      >
        <Box sx={{ maxWidth: 980, my: 0, mx: "auto" }}>
          <Title>Мы подберем идеальную пару для вас</Title>
          <Typography sx={{ color: "rgba(128, 128, 128, 1)" }}>
            Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
            вас моделями
          </Typography>
          <ChooseShoesForm />
        </Box>
      </Box>
    </div>
  );
}
