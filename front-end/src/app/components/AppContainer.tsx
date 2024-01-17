"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from '../app/page.module.css'
import Transactions from './Transactions'
import AddValue from './AddValue'
import Balance from './Balance'
import Graphic from './Graphic'
import { User, userCtx } from '../store/UserProvider'
import UserData from '../service/UserData'


export default function AppContainer() {
  const { user, setUser } = useContext(userCtx);

  useEffect(() => {
    async function fetchData() {
      const userBalance = await UserData.getUserData(user.id);

      setUser((prev: User) => {
        return {...prev, income: userBalance.income, outcome: userBalance.outcome, balance: userBalance.balance}
      })

      const userTransactions = await UserData.getTransactionsData(user.id);

      setUser((prev: User) => {
        return {...prev, transactions: userTransactions} as User
      }) 
    }

    fetchData()

  }, [])

  return (
    <div className={styles.container}>
      <AddValue />
      <Transactions />
      <Graphic />
      <Balance />
    </div>
  )
}
