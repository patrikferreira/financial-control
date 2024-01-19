"use client"
import React, {useState, useContext} from 'react'
import styles from '../../page.module.css'
import Input from './Input'
import Button from './Button'
import AuthService from '@/app/service/AuthService'
import { userCtx } from '@/app/store/UserProvider'
import { useRouter } from 'next/navigation'


export default function FormLogin() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const {setUser} = useContext(userCtx);
  const router = useRouter();

  function handleEnterKey(event: any) {
    if (event.key === 'Enter') {
      AuthService.login(username, password).then((x) => {
        if (x.token) {
          setUser(x);
          localStorage.setItem("token", x.token);
          router.push('/app');
        } else {
          setError("Usuário ou senha inválidos.");
        }
      });
    }
  };

  return (
    <div className={`${styles.formLogin} ${styles.centralized}`}>
      <div className={styles.formTop}>
        <h1>Controle Financeiro</h1>
        <p>Bem-vindo!</p>
      </div>
      <div className={styles.formBody}>
        <label htmlFor="username">Login</label>
        <Input type='text' getValue={(value) => {
          setUsername(value);
          setError('');
        }} id='username' onKeyDown={handleEnterKey}/>
        <label htmlFor="password">Senha</label>
        <Input type='password' getValue={(value) => {
          setPassword(value);
          setError('');   
        }} id='password' onKeyDown={handleEnterKey}/>
      <span className={styles.msgError}>{error}</span>
      </div>
      <div className={styles.formFooter}>
        <Button description='Logar' action={() => {
          AuthService.login(username, password).then((x) => {
            if(x.token) {
              setUser(x);
              localStorage.setItem("token", x.token);
              router.push('/app');
            } else {
              setError("Usuário ou senha inválidos.");
            }
          })
        }} />  
      </div>
    </div>
  )
}
