"use client"
import React, { useState } from 'react'
import styles from '../app/page.module.css'
import InComeOption from './InComeOption';
import OutComeOption from './OutComeOption';

export default function AddValue() {
    const [type, setType] = useState<string>();

    function getValue(value: string) {
        setType(value)
    }
    
    return (
        <div className={styles.addValue}>
            <label htmlFor=""></label>
            <div className={styles.input}>
                <input type="text" name="" id="" placeholder='Descrição' />
                <input type="number" placeholder='Valor' />
            </div>
            <div className={styles.select}>
                <select name="type" id="" onChange={({target}) => {
                        getValue(target.value)
                    }}>
                    <option value="income">Entrada</option>
                    <option value="outcome">Saída</option>
                </select>
                {type === 'outcome' ? <OutComeOption /> : <InComeOption /> }
                
            </div>
            <button>
                Adicionar
            </button>
        </div>
    )
}
