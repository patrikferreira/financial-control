"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from '../app/page.module.css'
import { User, userCtx } from '../store/UserProvider'
import CashFlow from './CashFlow'

export default function Balance() {
  const { user, setUser } = useContext(userCtx);

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  function calcInvestiments() {
    if(user.transactions) {
      const totalInvestments = user.transactions
      .filter(transaction => transaction.outComeCategoryId === 6)
      .reduce((total, transaction) => total + transaction.amount, 0);

    return totalInvestments;
    }
    return 0
  }

  const totalInvestments = calcInvestiments()

  return (
    <div className={styles.balance}>
        <h4>Resumo</h4>

      <div className={styles.cashContainer}>
        <CashFlow type='Receitas' value={user.income} icon='fa-solid fa-arrow-down' />
        <CashFlow type='Dispesas' value={user.outcome} icon='fa-solid fa-arrow-up' />
        <CashFlow type='Investimentos' value={totalInvestments} icon='fa-solid fa-star'/>
        <CashFlow type='Saldo total' value={user.balance} icon='fa-solid fa-wallet' />
      </div>
    </div>
  )
}


