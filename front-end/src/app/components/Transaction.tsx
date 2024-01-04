import React from 'react'
import styles from '../app/page.module.css'
import { initialize } from 'next/dist/server/lib/render-server'

type Props = {
    description: string,
    value: string,
    type: number,
    typeOf: number,
}

export default function Transaction({ description, type, typeOf, value }: Props) {
    function teste() {

    }

    const colors = {
        1: '#5af57e',
        2: '#ff5555'
      }
    
    return (
        <li>
            <div className={styles.transactionType}>
                <div className={styles.type}>
                    {type === 2 ? <i className="fa-solid fa-arrow-up" style={{color: colors[2]}}></i> : <i className="fa-solid fa-arrow-down" style={{color: colors[1]}}></i> }
                </div>
                <p>{description}</p>
            </div>

            <div className={styles.transactionValue}>
                <p>{`R$ ${value}`}</p>
                <div className={styles.action}>
                    <button ><i className="fa-regular fa-pen-to-square"></i></button>
                    <button ><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>

        </li>
    )
}
