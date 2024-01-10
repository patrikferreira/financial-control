"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from '../app/page.module.css'
import { User, userCtx } from '../store/UserProvider'
import UserData from '../service/UserData'
import CashFlow from './CashFlow'

export default function Balance() {
  const { user, setUser } = useContext(userCtx);
  const [balance, setBalance] = useState<number>(0);
  const [input, setInput] = useState<number>(0);
  const [output, setOutput] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const userBalance = await UserData.balance(user.id);
      setBalance(userBalance.balance);

      const userTransactions = await UserData.transactions(user.id);

      setUser((prev: User) => {
        return {...prev, transactions: userTransactions} as User
      })

      // const newUser = {
      //   id: user.id,
      //   name: user.name,
      //   userName: user.name,
      //   password: user.password,
      //   email: user.email,
      //   balance: user.balance,
      //   transactions: userTransactions
      // }

      // setUser(newUser)
      
    }

    fetchData()

  }, [user])

  return (
    <div className={styles.balance}>
      <h4>Balanço</h4>
      <div className={styles.cashContainer}>
        <CashFlow type='Receitas' value={input} icon='fa-solid fa-arrow-down' />
        <CashFlow type='Dispesas' value={output} icon='fa-solid fa-arrow-up' />
        <CashFlow type='Saldo total' value={balance} icon='fa-solid fa-wallet' />
      </div>
    </div>
  )
}


