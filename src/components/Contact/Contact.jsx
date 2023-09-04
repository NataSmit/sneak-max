import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './Contact.module.scss'
import Map from '../Map/Map'

export default function Contact() {
  return (
    <section className={styles.contact}>
      <Box sx={{py: 5, maxWidth: 1152, my: 0, mx: 'auto'}}>
        <Box>
          <Typography sx={{color: 'rgba(68, 75, 88, 1)', fontWeight: 700, marginBottom: 6}} variant='h5' >Контакты</Typography>
          <Typography sx={{color: 'rgba(178, 181, 187, 1)', textTransform: 'uppercase', marginBottom: 3}} variant='subtitle2'>Главный офис</Typography>
          <Typography sx={{color: 'rgba(68, 75, 88, 1)', fontWeight: 400, marginBottom: 2}} variant='h4'>+7 800 800 00 00</Typography>
          <Typography sx={{color: 'rgba(68, 75, 88, 1)', fontWeight: 400, marginBottom: 4}}>г. Санкт-Петербург, Комсомольская, 43 к1</Typography>
          <Typography sx={{color: 'rgba(178, 181, 187, 1)', textTransform: 'uppercase', marginBottom: 3}} variant='subtitle2'>отдел продаж</Typography>
          <Typography sx={{color: 'rgba(68, 75, 88, 1)', fontWeight: 400, marginBottom: 2}} variant='h4'>+7 800 800 00 00</Typography>
          <Typography sx={{color: 'rgba(68, 75, 88, 1)', fontWeight: 400}}>г. Санкт-Петербург, Комсомольская, 43 к1</Typography>
        </Box>
        <Box>
          <Map />
        </Box>

      </Box>
    </section>
  )
}
