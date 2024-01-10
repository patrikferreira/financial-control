import React, { useContext } from 'react'
import styles from '../app/page.module.css'
import Transactions from './Transactions'
import AddValue from './AddValue'
import Balance from './Balance'
import Calendar from './Calendar'
import Graphic from './Graphic'


export default function AppContainer() {
  return (
    <div className={styles.container}>
      <AddValue />
      <Transactions />
      <Graphic />
      <Balance />
    </div>
  )
}
