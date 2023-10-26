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
  const ctx = useContext(userCtx);
  const router = useRouter();


  return (
    <div className={styles.formLogin}>
      <div className={styles.formTop}>
        <h1>Controle Financeiro</h1>
        <p>Bem-vindo!</p>
      </div>
      <div className={styles.formBody}>
        <label htmlFor="">Login</label>
        <Input type='text' getValue={(value) => {
          setUsername(value)
        }}/>
        <label htmlFor="">Senha</label>
        <Input type='password' getValue={(value) => {
          setPassword(value)
        }}/>
      <span className={styles.msgError}>{error}</span>
      </div>
      <div className={styles.formFooter}>
        <Button description='Logar' action={() => {
          AuthService.login(username, password).then(x => {
            setError("");
            ctx.setUser(x);
            localStorage.setItem("token", x.token);
            router.push('/app');
          })
          .catch(err => {
            setError("Usuário ou senha incorretos!")
          });
        }}/>

      
      </div>
    </div>
  )
}
