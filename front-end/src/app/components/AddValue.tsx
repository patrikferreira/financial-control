import React from 'react'
import styles from '../app/page.module.css'

export default function AddValue() {
    return (
        <div className={styles.addValue}>
            <label htmlFor=""></label>
            <div className={styles.input}>
                <input type="text" name="" id="" placeholder='Descrição' />
                <input type="number" placeholder='Valor' />
            </div>
            <div className={styles.select}>
                <select name="" id="">
                    <option value="">Entrada</option>
                    <option value="">Saída</option>
                </select>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <button>
                Adicionar
            </button>
        </div>
    )
}
