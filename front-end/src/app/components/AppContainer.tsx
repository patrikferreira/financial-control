"use client"
import React, { useContext, useEffect } from 'react'
import styles from '../app/page.module.css'
import Transactions from './Transactions'
import AddValue from './AddValue'
import Balance from './Balance'
import Graphic from './GenerateReport'
import { User, userCtx } from '../store/UserProvider'
import UserData from '../service/UserData'


export default function AppContainer() {
  const { user, setUser } = useContext(userCtx);

  useEffect(() => {
    async function fetchData() {
      const userBalance = await UserData.getUserData(user.id);

      setUser((prev: User) => {
        return { ...prev, balance: userBalance.balance, income: userBalance.income, outcome: userBalance.outcome };
      });

      const userTransactions = await UserData.getTransactionsData(user.id);

      setUser((prev: User) => {
        return { ...prev, transactions: userTransactions } as User;
      });
    }

    fetchData()

  }, [user])

  return (
    <div className={styles.container}>
      <AddValue />
      <Transactions />
      <Graphic />
      <Balance />
    </div>
  )
}
