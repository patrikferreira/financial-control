import React from 'react'
import styles from '../app/page.module.css'

type Props = {
    description: string,
    notes: string,
    close: () => void,
}

export default function Notes({ description, notes, close }: Props) {
    return (
        <div className={`${styles.notesContainer} ${styles.centralized}`}>
            <div className={styles.notesModal}>
                <div className={styles.notesModalheader}>
                    <p>{description}</p>
                    <button onClick={close}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className={styles.notesModalContent}>
                    <p>{notes ? notes : 'Sem notas!'}</p>
                </div>
            </div>
        </div>
    )
}
