import React from 'react'
import styles from '../app/page.module.css'

type Props = {
    description: string,
}

export default function GraphicItem({description}: Props) {
    return (
        <div className={styles.typey}>
            <p>10%</p>
            <div className={styles.typex}>

            </div>
            <p>{description}</p>
        </div>
    )
}
