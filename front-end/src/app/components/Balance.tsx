"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from '../app/page.module.css'
import { User, userCtx } from '../store/UserProvider'
import ContainerContent from './ContainerContent'
import InputOutput from './balance/InputOutput'
import UserData from '../service/UserData'

export default function Balance() {
  const { user } = useContext(userCtx);
  const [balance, setBalance] = useState<number>(0);
  const [input, setInput] = useState<number>(0);
  const [output, setOutput] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const userBalance = await UserData.balance(user.id);
      setBalance(userBalance.balance);

      const userTransactions = await UserData.transactions(user.id);

      let totalInput = 0;
      let totalOutput = 0;

      userTransactions.forEach((transaction: any) => {
        if (transaction.transactionType === 1) {
          totalInput += transaction.amount;
        } else if( transaction.transactionType === 2) {
          totalOutput += transaction.amount;
        }
        
      })

      setInput(totalInput);
      setOutput(totalOutput);

    }

    fetchData()

  }, [user])

  return (
    <ContainerContent>
      <div className={styles.balance}>
        <div className={styles.balanceHeader}>
          <InputOutput type='Entradas' value={input} icon={<i className="fa-solid fa-arrow-down"></i>} />
          <InputOutput type='Saídas' value={output} icon={<i className="fa-solid fa-arrow-up"></i>} />
        </div>
        <div className={styles.totalBalanceDiv}>
          <InputOutput type='Total' value={balance} icon='R$' />
        </div>
      </div>
    </ContainerContent>
  )
}
