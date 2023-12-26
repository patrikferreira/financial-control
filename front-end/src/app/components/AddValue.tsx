"use client"
import React, { useState } from 'react'
import styles from '../app/page.module.css'
import InComeOption from './InComeOption';
import OutComeOption from './OutComeOption';
import ContainerContent from './ContainerContent';
import Input from './form/Input';
import Button from './form/Button';

export default function AddValue() {
    const [type, setType] = useState<string>();

    function getValue(value: string) {
        setType(value)
    }

    function teste() {
        return ''
    }

    return (
        <ContainerContent>
            <label htmlFor=""></label>
            <div className={styles.input}>
                <Input type='string' getValue={teste} placeholder='Descrição' />
                <Input type='number' getValue={teste} placeholder='Valor' />
            </div>
            <div className={styles.select}>
                <select name="type" id="" onChange={({ target }) => {
                    getValue(target.value)
                }}>
                    <option value="income">Entrada</option>
                    <option value="outcome">Saída</option>
                </select>
                {type === 'outcome' ? <OutComeOption /> : <InComeOption />}

            </div>
            <Button action={teste} description='Adicionar'/>
        </ContainerContent>
    )
}
