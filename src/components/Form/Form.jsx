import React, { useState } from "react";
import {
  Box,
  Typography,
  Slider,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import styles from './Form.module.scss'
import MuiButton from '../../ui/Button/Button'

const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43]

export default function Form() {
  const [valueMin, setValueMin] = useState(0);
  const [valueMax, setValueMax] = useState(100000);
  const handleSliderChange = (event, newValue) => {
    setValueMin(newValue[0]);
    setValueMax(newValue[1]);
  };

  function handleMinInputChange(e) {
    setValueMin(e.target.value);
  }

  function handleMaxInputChange(e) {
    setValueMax(e.target.value);
  }

  return (
    <Box
      component="form"
      sx={{ width: 280, backgroundColor: "rgba(255, 244, 238, 1)", padding: 2 }}
    >
      <Typography component="p" variant="h5" color="rgba(68, 75, 88, 1)" my={2}>
        Подбор по параметрам
      </Typography>
      <Box>
        <Typography my={1} color="rgba(68, 75, 88, 1)">
          Цена, руб
        </Typography>
        <TextField
          variant="outlined"
          sx={{ width: 135 }}
          value={valueMin}
          onChange={handleMinInputChange}
        />
        <TextField
          variant="outlined"
          sx={{ width: 135 }}
          value={valueMax}
          onChange={handleMaxInputChange}
        />
      </Box>
      <Slider
        value={[valueMin, valueMax]}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={100000}
        sx={{
          color: "rgba(68, 75, 88, 1)",
          "& .MuiSlider-thumb": {
            borderRadius: "0",
            width: 4,
          },
        }}
      />
      <Box>
        <Typography my={1} color="rgba(68, 75, 88, 1)">
          Пол
        </Typography>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox/>
            }
            label="Мужской"
          />
          <FormControlLabel control={<Checkbox />} label="Женский" />
        </FormGroup>
      </Box>
      <Box>
        <Typography my={1} color="rgba(68, 75, 88, 1)">
          Размер
        </Typography>
        <div className={styles.sizes}>
          {sizes.map((size) => (
            <div className={styles.size}>{size}</div>
          ))}
        </div>
      </Box>
      <Box sx={{textAlign: 'center', marginBottom: 1.5}}>
        <MuiButton text={'Применить'}/>
      </Box>
      <Box sx={{textAlign: 'center'}}>
        <Button variant="text">Сбросить</Button>
      </Box>
    </Box>
  );
}
