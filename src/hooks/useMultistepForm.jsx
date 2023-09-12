import React, { useState } from 'react'

export function useMultistepForm() {
  
  const [currentStep, setCurrentStep] = useState(1)

  function goToNextStep() {
    setCurrentStep((step) => step + 1)
  }

  return {
    currentStep,
    goToNextStep
  }
}
