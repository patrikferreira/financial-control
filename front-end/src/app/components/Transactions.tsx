"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from '../app/page.module.css'
import { userCtx } from '../store/UserProvider'
import Transaction from './Transaction'
import Balance from './Balance'
import { inComeObject, outComeObject } from './TypeObject'

export default function Transactions() {
    const { user, setUser } = useContext(userCtx);
    const [inCome, setInCome] = useState<string>('');
    const [outCome, setOutCome] = useState<string>('');

    // useEffect(() => {

    //     function setTypeDescription() {
    //         if (transaction.transactionType === 1 && transaction.inComeCategoryId !== undefined && inComeObject[transaction.inComeCategoryId - 1]) {
    //           setInCome(inComeObject[transaction.inComeCategoryId - 1].description);
    //         } else if (transaction.transactionType === 2 && transaction.outComeCategoryId !== undefined && outComeObject[transaction.outComeCategoryId - 1]) {
    //           setOutCome(outComeObject[transaction.outComeCategoryId - 1].description);
    //         }
    //       }

    //     setTypeDescription()
    // }, [user.transactions])
    

    return (
            <div className={styles.transactions}>
                <h4>Histórico de transações</h4>
                <ul>
                    {user.transactions ? user.transactions.map(transaction => {

                        return <Transaction id={transaction.id} description={transaction.description} type={transaction.transactionType} value={transaction.amount} notes={transaction.notes} typeOf={transaction.transactionType === 1 ? inCome : outCome}/>
                    }) : <div>Sem transação</div>}
                </ul>
            </div>
    )
}
