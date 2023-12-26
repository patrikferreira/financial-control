import React from 'react'
import styles from '../app/page.module.css'
import ContainerContent from './ContainerContent'

export default function Transactions() {
    return (
        <ContainerContent>
            <div className={styles.transactionsDiv}>
                <ul>
                    <li>
                        <div className={styles.transactionItem}>
                            <p>Salário</p>
                            <p className={styles.value}>R$ 3.000,00</p>
                        </div>
                        <div className={styles.transactionType}>
                            <div className={styles.type}>
                                <p><div className={styles.spanType}></div>Salário</p>
                            </div>
                        </div>
                    </li>

                    
                </ul>
            </div>
        </ContainerContent>
    )
}
