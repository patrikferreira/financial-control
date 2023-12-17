import React from 'react'
import styles from '../app/page.module.css'

export default function Balance() {
  return (
    <div className={styles.balanceDiv}>
      <div className={styles.balanceHeader}>
        <p>Saldo</p>
        <p><i className="fa-solid fa-comments-dollar"></i></p>
      </div>
      <p className={styles.balance}>R$ 3000.00</p>
    </div>
  )
}
