import React from 'react';
import { Button } from '@mui/material';

export default function MuiButton({text}) {
  return (
    <Button variant="contained" color="secondary" size='large'>{text}</Button>
  )
}
