import React from 'react'
import styles from '../app/page.module.css'
import { DataType } from './DataType';
import Button from './form/Button';

type Props = {
    description: string,
    value: string,
    type: number,
    typeOf: number,
}

export default function Transaction({ description, type, typeOf, value }: Props) {
    const transactionType = type === 1 ? 'income' : 'outcome';
    const color = DataType[transactionType][typeOf].color;

    function teste() {

    }
    return (
        <li>
            <div className={styles.transactionType}>

                <div className={styles.type} style={{ background: color }}>
    
                </div>
                <p>{description}</p>
            </div>

            <div className={styles.transactionValue}>
                <p>{`R$ ${value}`}</p>
                <div className={styles.action}>
                    {type === 2 ? <button className={styles.check}><i className="fa-solid fa-check"></i></button> : ''}
                    <button ><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>

        </li>
    )
}
