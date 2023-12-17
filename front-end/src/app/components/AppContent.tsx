import React from 'react'
import styles from '../app/page.module.css'
import AddValue from './AddValue'

export default function AppContent() {
  return (
    <div className={styles.appContent}>
      <AddValue />
    </div>
  )
}
