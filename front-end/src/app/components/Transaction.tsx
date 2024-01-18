"use client"
import React, { useContext, useState, useEffect } from 'react'
import styles from '../app/page.module.css'
import UserData from '../service/UserData'
import Notes from './Notes'

type Props = {
    id: number,
    description: string,
    notes: string,
    value: number,
    type: number,
    typeOf?: number,
}

export default function Transaction({ id, description, notes, type, value, typeOf }: Props) {

    const [notesModal, setNotesModal] = useState<boolean>(false);

    function deleteTransaction() {
        UserData.deleteTransaction(id)
    }

    function showNotesModal() {
        setNotesModal(!notesModal)
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
                        <p>{type === 1 ? typeOfIncomeDescription[typeOf] : typeOfOutcomeDescription[typeOf]}</p>
                    </div>
                </div>
            </div>
            <div className={styles.transactionValue}>
                <p>{`R$ ${value}`}</p>
                <div className={styles.action}>
                    <button onClick={showNotesModal}><i className="fa-regular fa-file-lines"></i></button>
                    <button ><i className="fa-regular fa-pen-to-square"></i></button>
                    <button onClick={deleteTransaction}><i className="fa-solid fa-trash"></i></button>
                </div>
            {notesModal && <Notes notes={notes} />}
            </div>
        </li>
    )
}
