"use client"
import React, { useEffect, useState } from 'react'
import styles from '../app/page.module.css'
import UserData from '../service/UserData'
import Notes from './Notes'
import { TypeObject, inComeObject, outComeObject } from './TypeObject'

type Props = {
    id: number,
    description: string,
    notes: string,
    value: number,
    type: number,
    typeOf: string
}

export default function Transaction({ id, description, notes, type, value, typeOf }: Props) {
    const [notesModal, setNotesModal] = useState<boolean>(false);

    function deleteTransaction() {
        UserData.deleteTransaction(id)
    }

    function showNotesModal() {
        setNotesModal(!notesModal)
    }

    function closeModal() {
        setNotesModal(!notesModal)
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
                        <p>
                            {typeOf}
                        </p>

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
            </div>
            {notesModal && <Notes description={description} notes={notes} close={closeModal} />}
        </li>
    )
}
