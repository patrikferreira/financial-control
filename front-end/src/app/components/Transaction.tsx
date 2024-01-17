import React from 'react'
import styles from '../app/page.module.css'
import { initialize } from 'next/dist/server/lib/render-server'

type Props = {
    description: string,
    value: number,
    type: number,
    typeOf?: number,
}

export default function Transaction({ description, type, value, typeOf }: Props) {
    function teste() {

    }

    const typeOfIncomeDescription = {
        1: 'Salário',
        2: 'Outros'
    }

    const typeOfOutcomeDescription = {
        1: 'Contas fixas',
        2: 'Cartão de crédito',
        3: 'Estudos',
        4: 'Alimentação',
        5: 'Lazer',
        6: 'Investimentos',
        7: 'Outros'
    }

    return (
        <li>
            <div className={styles.transactionType}>
                <div className={styles.type}>
                    {type === 2 ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>}
                </div>
                <div className={styles.descriptionDiv}>
                    <p>{description}</p>
                    <div className={styles.typeOf}>
                        <p>Teste</p>
                    </div>
                </div>
            </div>
            <div className={styles.transactionValue}>
                <p>{`R$ ${value}`}</p>
                <div className={styles.action}>
                    <button ><i className="fa-regular fa-pen-to-square"></i></button>
                    <button ><i className="fa-solid fa-trash"></i></button>
                </div>
                <img src={`/path/to/image.png?v=${new Date().getTime()}`} alt="Imagem" />

            </div>
        </li>
    )
}
