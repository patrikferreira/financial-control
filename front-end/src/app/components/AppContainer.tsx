"use client"
import React, { useContext, useEffect, useState } from 'react';
import styles from '../app/page.module.css';
import Transactions from './Transactions';
import AddValue from './AddValue';
import { User, userCtx } from '../store/UserProvider';
import UserData from '../service/UserData';
import Balance from './Balance';
import Report from './Report';
import Graphic from './Graphic';

export default function AppContainer() {
  const { user, setUser } = useContext(userCtx);

  useEffect(() => {
    async function fetchData() {
      try {
        const userBalance = await UserData.getUserData(user.id);
        setUser((prev: User) => {
          return { ...prev, balance: userBalance.balance, income: userBalance.income, outcome: userBalance.outcome };
        });
  
        const userTransactions = await UserData.getTransactionsData(user.id);
        setUser((prev: User) => {
          return { ...prev, transactions: userTransactions } as User;
        });
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();

  }, []);

  return (
    <div className={styles.container}>
      <AddValue />
      <Transactions />
      <Graphic />
      <Balance />
    </div>
  );
}
