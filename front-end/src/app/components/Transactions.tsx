"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from '../app/page.module.css'
import { userCtx } from '../store/UserProvider'
import Transaction from './Transaction'

export default function Transactions() {
    const { user } = useContext(userCtx);

    return (
            <div className={styles.transactions}>
                <h4>Histórico de transações</h4>
                <ul>
                    {user.transactions ? user.transactions.map(transaction => {
                        return <Transaction description={transaction.description} type={transaction.transactionType} value={transaction.amount}/>
                    }) : <div>Sem transação</div>}
                </ul>
            </div>
    )
}
