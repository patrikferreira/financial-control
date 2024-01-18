"use client"
import React, { useContext } from 'react'
import styles from '../app/page.module.css'
import { userCtx } from '../store/UserProvider';

export default function GenerateReport() {
  const { user, setUser } = useContext(userCtx);

  return (
    <div className={styles.generateReport}>
      <h4>Gerar Relatório</h4>
      
    </div>
  )
}
