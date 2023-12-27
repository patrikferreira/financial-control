import React from 'react'
import styles from '../app/page.module.css'

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
                <div className={styles.type} style={{background: type === 2 ? colors[2] : colors[1]}}>
                </div>
                <p>{description}</p>
            </div>

            <div className={styles.transactionValue}>
                <p>{`R$ ${value}`}</p>
                <div className={styles.action}>
                    {type === 2 ? <button ><i className="fa-solid fa-check"></i></button> : ''}
                    <button ><i className="fa-regular fa-pen-to-square"></i></button>
                    <button ><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>

        </li>
    )
}
