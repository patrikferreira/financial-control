"use client"
import React from 'react'
import styles from '../app/page.module.css'
import ContainerContent from './ContainerContent'
import Transaction from './Transaction'

export default function Transactions() {

    return (
        <ContainerContent>
            <div className={styles.transactionsDiv}>
                <ul>
                    <Transaction description='Salário' type={1} typeOf={1} value='4000'/>
                    <Transaction description='Aluguel' type={2} typeOf={1} value='750'/>
                    <Transaction description='Condominio' type={2} typeOf={4} value='350'/>
                    <Transaction description='Alimentacao' type={2} typeOf={1} value='1000'/>
                    <Transaction description='Cartao de credito' type={2} typeOf={2} value='200'/>
                    <Transaction description='Poupanca' type={2} typeOf={6} value='300'/>
                    <Transaction description='Role' type={2} typeOf={5} value='300'/>
                    <Transaction description='Mentoria' type={2} typeOf={3} value='100'/>
                </ul>
            </div>
        </ContainerContent>
    )
}
