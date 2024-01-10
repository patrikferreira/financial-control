import React, { useEffect, useState } from 'react'
import styles from '../app/page.module.css'


type Props = {
    type?: string,
    value: number,
    icon: string;
}

export default function CashFlow({type, value, icon}: Props) {

  return (
    <div className={styles.cashFlow}>
        <i className={icon}></i>
        <div className={styles.cashInfo}>
            <p className={styles.cashType}>{type}</p>
            <p>{`R$ ${value}`}</p>
        </div>
    </div>
  )
}