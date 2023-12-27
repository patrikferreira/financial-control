import React, { useContext } from 'react'
import styles from '../app/page.module.css'
import Transactions from './Transactions'
import Graphic from './Graphic'
import AddValue from './AddValue'
import Balance from './Balance'

export default function AppContent() {
  return (
    <div className={styles.container}>
      <div className={styles.appContent}>
        <AddValue />
        <Balance />
        <Transactions />
        <Graphic />
      </div>
    </div>
  )
}
