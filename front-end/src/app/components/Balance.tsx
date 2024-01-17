"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from '../app/page.module.css'
import { User, userCtx } from '../store/UserProvider'
import UserData from '../service/UserData'
import CashFlow from './CashFlow'

export default function Balance() {
  const { user, setUser } = useContext(userCtx);
  
  return (
    <div className={styles.balance}>
      <h4>Balanço</h4>
      <div className={styles.cashContainer}>
        <CashFlow type='Receitas' value={user.income} icon='fa-solid fa-arrow-down' />
        <CashFlow type='Dispesas' value={user.outcome} icon='fa-solid fa-arrow-up' />
        <CashFlow type='Saldo total' value={user.balance} icon='fa-solid fa-wallet' />
      </div>
    </div>
  )
}


