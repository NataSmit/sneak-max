import { Box, Typography } from "@mui/material";
import React from "react";
import Title from "../../ui/Title/Title";
import styles from "./SuitableFootwear.module.scss";
import ChooseShoesForm from "./Form/ChooseShoesForm";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { answerQuestions, provideContactData, selectShoes, selectionReady } from '../../data/text'

export default function SuitableFootwear() {

  const {currentStep, goToNextStep} = useMultistepForm()

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
          <Title>{currentStep <= 3 ? selectShoes : selectionReady} </Title>
          <Typography sx={{ color: "rgba(128, 128, 128, 1)", mb: 2 }}>
            {currentStep <= 3 ? answerQuestions : provideContactData}
          </Typography>
          <ChooseShoesForm goToNextStep={goToNextStep} currentStep={currentStep} />
        </Box>
      </Box>
    </div>
  );
}
