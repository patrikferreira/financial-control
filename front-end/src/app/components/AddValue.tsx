"use client"
import React, { useState } from 'react'
import styles from '../app/page.module.css'
import InComeOption from './InComeOption';
import OutComeOption from './OutComeOption';
import Input from './formLogin/Input';
import Button from './formLogin/Button';

export default function AddValue() {
    const [type, setType] = useState<string>('income');

    function getValue(value: string) {
        setType(value)
    }

    function teste() {
        return ''
    }

    return (
        <div className={styles.addValue}>
            <h4>Adicionar transação</h4>
            <div className={styles.input}>
                <Input type='string' getValue={teste} placeholder='Descrição' />
                <Input type='number' getValue={teste} placeholder='Valor' />
            </div>
            <textarea name="" id="" cols={30} rows={2} placeholder='Notas'></textarea>
            <div className={styles.selectContainer}>
                <div className={styles.select}>
                    <select name="type" id="" onChange={({ target }) => {
                        getValue(target.value)
                    }}>
                        <option value="income">Entrada</option>
                        <option value="outcome">Saída</option>
                    </select>
                </div>
                <div className={styles.select}>

                    {type === 'outcome' ? <OutComeOption /> : <InComeOption />}
                </div>

            </div>
            <Button action={teste} description='Adicionar' />
        </div>
    )
}
