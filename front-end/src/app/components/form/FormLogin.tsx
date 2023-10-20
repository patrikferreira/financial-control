import React from 'react'
import styles from '../../page.module.css'
import Input from './Input'
import Button from './Button'

export default function FormLogin() {
  return (
    <div className={styles.formLogin}>
      <div className={styles.formTop}>
        <h1>Controle Financeiro</h1>
        <p>Bem-vindo!</p>
      </div>
      <div className={styles.formBody}>
        <label htmlFor="">Login</label>
        <Input type='text' />
        <label htmlFor="">Senha</label>
        <Input type='password' />
      </div>

      <div className={styles.formFooter}>
        <Button description='Logar' />
      </div>
    </div>
  )
}
