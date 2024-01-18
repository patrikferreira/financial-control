"use client"
import React, { useContext, useState, useEffect } from 'react'
import styles from '../app/page.module.css'
import InComeOption from './InComeOption';
import OutComeOption from './OutComeOption';
import Input from './formLogin/Input';
import Button from './formLogin/Button';
import UserData from '../service/UserData';
import { userCtx } from '../store/UserProvider';
import Tooltip from './Tooltop';

export default function AddValue() {
    const { user, setUser } = useContext(userCtx);
    const [description, setDescription] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [notes, setNotes] = useState<string>('');
    const [type, setType] = useState<number>(1);
    const [inComeCategory, setInComeCategory] = useState<number>(1);
    const [outComeCategory, setOutComeCategory] = useState<number>(0);
    const [showTooltip, setShowTooltip] = useState(false);


    async function addTransaction() {
        await UserData.addTransaction(user.id, description, amount, notes, false, type, inComeCategory, outComeCategory);
        setShowTooltip(true);

        setTimeout(() => {
            setShowTooltip(false);
        }, 3000);
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
            <textarea name="" id="" cols={30} rows={2} maxLength={180} placeholder='Notas' onChange={(e) => setNotes(e.target.value)}></textarea>
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
            {showTooltip && <Tooltip text="Transação adicionada com sucesso!" />}
        </div>
    )
}
