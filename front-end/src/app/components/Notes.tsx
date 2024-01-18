import React from 'react'
import styles from '../app/page.module.css'

type Props = {
    notes: string,
}

export default function Notes({notes}: Props) {
    return (
        <div className={styles.notesModal}>
            <p>{notes ? notes : 'Sem notas!'}</p>
        </div>
    )
}
