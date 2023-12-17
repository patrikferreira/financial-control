import React, { useContext } from 'react'
import styles from '../app/page.module.css'
import Auth from '../components/Auth';
import AppContent from '../components/AppContent';
import AppHeader from '../components/AppHeader';

export default function page() {
  return (
    <Auth>
      <main className={styles.main}>
        <AppHeader />
        <AppContent />
      </main>
    </Auth>
  )
}
