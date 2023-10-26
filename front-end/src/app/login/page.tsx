"use client"
import { useContext, useEffect } from 'react'
import FormLogin from '../components/form/FormLogin'
import styles from '../page.module.css'
import { userCtx } from '../store/UserProvider'

export default function Home() {
  const ctx = useContext(userCtx);

  return (
    <main className={styles.main}>
      <FormLogin />
    </main>
  )
}
