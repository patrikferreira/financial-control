"use client"
import React, { useContext } from 'react'
import styles from '../app/page.module.css'
import { userCtx } from '../store/UserProvider'
import ContainerContent from './ContainerContent'

export default function Balance() {
  const ctx = useContext(userCtx)
  return (
    <ContainerContent>
      <div className={styles.balanceHeader}>
        <p>Saldo</p>
        <p><i className="fa-solid fa-comments-dollar"></i></p>
      </div>
      <p className={styles.balance}>R$ 3000.00</p>
    </ContainerContent>
  )
}
