import { Box, Typography } from '@mui/material'
import React from 'react'
import ContactDataForm from '../../../ContactDataForm/ContactDataForm'

export default function FinalStep() {
  return (
    <Box sx={{width: 655, backgroundColor: 'rgba(219, 187, 169, 1)', padding: 4, borderRadius: '4px'}}>
      <Typography variant='h4' sx={{color: 'white', mb: 1}}>Получить предложение</Typography>
      <Typography variant='subtitle1' sx={{color: 'white', mb: 3}}>Получите подборку подходящих для вас моделей на почту</Typography>
      <ContactDataForm/>
    </Box>
  )
}
