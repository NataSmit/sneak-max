import React from 'react'
import styles from './ContactDataForm.module.scss'
import Button from '../../ui/Button/Button'

export default function ContactDataForm() {
  return (
    <form className={styles.contactForm}>
      <input type='text' className={styles.contactInput} placeholder='Ваше имя'/>
      <input type='email' className={styles.contactInput} placeholder='E-mail'/>
      <div><Button text={'Получить'}/></div>
    </form>
  )
}
