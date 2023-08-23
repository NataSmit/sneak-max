import React from 'react'
import styles from './Catalogue.module.scss'
import { Typography } from '@mui/material'

export default function Catalogue() {
  return (
    <section className={styles.catalogue}>
      <div className={styles.container}>
        <Typography variant="h4" component="h1" sx={{fontWeight: 700, color: 'rgba(68, 75, 88, 1)'}}>Каталог</Typography>
      </div>
    </section>
  )
}
