import React from "react";
import styles from "./ChooseShoesForm.module.scss";
import ShoesType from "./StepOne/ShoesType";
import { Button } from "@mui/material";
import ShoeSize from './StepTwo/ShoeSize'
import MoreInfo from './StepThree/MoreInfo'
import { useMultistepForm } from '../../../hooks/useMultistepForm'

export default function ChooseShoesForm() {

  const {currentStep, goToNextStep} = useMultistepForm()
  const formSteps = [<ShoesType />, <ShoeSize />, <MoreInfo />]

  return (
    <form className={styles.form} >
      <div className={styles.container}>
        {formSteps[currentStep - 1]}
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.page}>{currentStep <= 3 && `${currentStep} из 3`}</div>
        <div className={styles.button}>
          {currentStep <= 3 &&
          <Button variant="outlined" sx={{ color: "rgba(68, 75, 88, 1)" }} onClick={goToNextStep}>
            Следующий шаг
          </Button>
          }
        </div>
      </div>
    </form>
  );
}
