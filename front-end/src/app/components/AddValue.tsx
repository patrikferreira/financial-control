"use client"
import React, { useContext, useState, useEffect } from 'react'
import styles from '../app/page.module.css'
import InComeOption from './InComeOption';
import OutComeOption from './OutComeOption';
import Input from './formLogin/Input';
import Button from './formLogin/Button';
import UserData from '../service/UserData';
import { userCtx } from '../store/UserProvider';

export default function AddValue() {
    const { user, setUser } = useContext(userCtx);
    const [description, setDescription] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [notes, setNotes] = useState<string>('');
    const [type, setType] = useState<number>(1);
    const [inComeCategory, setInComeCategory] = useState<number>(1);
    const [outComeCategory, setOutComeCategory] = useState<number>(1);


    async function addTransaction() {
        const secretKey = process.env.SECRET as string;

        const newTransaction = {
            UserId: user.id,
            Description: description,
            Amount: amount,
            Notes: notes,
            IsPaid: false,
            TransactionType: type,
            InComeCategoryId: inComeCategory,
            OutComeCategoryId: outComeCategory,
        }

        const response = await fetch(`https://localhost:7229/transaction/${user.id}`, {
            method: 'POST',
            headers: {
                Secret: secretKey,
            },
            body: JSON.stringify(newTransaction)
        });

        const json = await response.json()

        console.log(json)

        return json
    }

    function getOutCome(selectedValue: number) {
        setOutComeCategory(selectedValue)
    }

    function getInCome(selectedValue: number) {
        setInComeCategory(selectedValue)
    }


    return (
        <div className={styles.addValue}>
            <h4>Adicionar transação</h4>
            <div className={styles.input}>
                <Input type='string' getValue={(value) => setDescription(value)} placeholder='Descrição' />
                <Input type='number' getValue={(value) => setAmount(parseInt(value))} placeholder='Valor' />
            </div>
            <textarea name="" id="" cols={30} rows={2} placeholder='Notas' onChange={(e) => setNotes(e.target.value)}></textarea>
            <div className={styles.selectContainer}>
                <div className={styles.select}>
                    <select name="type" id="" onChange={(event) => setType(parseInt(event.target.value, 10))}>
                        <option value={1}>Entrada</option>
                        <option value={2}>Saída</option>
                    </select>
                </div>
                <div className={styles.select}>
                    {type === 2 ? <OutComeOption sendValue={getOutCome} /> : <InComeOption sendValue={getInCome} />}
                </div>

            </div>
            <Button action={addTransaction} description='Adicionar' />
        </div>
    )
}
