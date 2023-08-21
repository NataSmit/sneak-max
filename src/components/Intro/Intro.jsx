import React from 'react'
import styles from './Intro.module.scss'

export default function Intro() {
  return (
    <div className={styles.intro} >
      <div className={styles.container}>
         <h1 className={styles.header}>Кроссовки известных брендов с доставкой по России и СНГ</h1>
      </div>
    </div>
  )
}
