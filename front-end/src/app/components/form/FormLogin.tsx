import React from 'react'
import styles from '../../page.module.css'
import Input from './Input'
import Button from './Button'

export default function FormLogin() {
  return (
    <div className={styles.formLogin}>
      <Input type='text' placeholder='Login'/>
      <Input type='password' placeholder='Senha' />
      <Button description='Logar' />
    </div>
  )
}
