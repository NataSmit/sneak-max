import React from 'react'
import styles from './ChooseShoesForm.module.scss'
import ShoesType from './ShoesType'

export default function ChooseShoesForm() {
  return (
    <form className={styles.form}>
      <ShoesType/>
      
    </form>
  )
}
