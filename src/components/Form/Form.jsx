import React, { useState } from 'react'
import { Box, Typography, Slider, TextField } from '@mui/material'

export default function Form() {
  const [valueMin, setValueMin] = useState(0)
  const [valueMax, setValueMax] = useState(100000)
  const handleSliderChange = (event, newValue) => {
    setValueMin(newValue[0]);
    setValueMax(newValue[1])
  };

  function handleMinInputChange(e) {
    setValueMin(e.target.value)
  }

  function handleMaxInputChange(e) {
    setValueMax(e.target.value)
  }

  return (
    <Box component='form' sx={{width: 280, backgroundColor: 'rgba(255, 244, 238, 1)', padding: 2}} >
      <Typography 
      component='p' variant='h5' 
      color='rgba(68, 75, 88, 1)'
      my={2}
      >
        Подбор по параметрам
      </Typography>
      <Box >
        <Typography my={1} color='rgba(68, 75, 88, 1)'>Цена, руб</Typography>
        <TextField variant="outlined" sx={{width: 135}} value={valueMin} onChange={handleMinInputChange} />
        <TextField variant="outlined" sx={{width: 135}} value={valueMax} onChange={handleMaxInputChange} />
      </Box>
      <Slider 
        value={[valueMin, valueMax]}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={100000}
        sx={{
          color: 'rgba(68, 75, 88, 1)',
          '& .MuiSlider-thumb': {
            borderRadius: '0',
            width: 4,
          },
        }}
        />
    </Box>
  )
}
