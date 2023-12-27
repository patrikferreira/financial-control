"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from '../app/page.module.css'
import { User, userCtx } from '../store/UserProvider'
import ContainerContent from './ContainerContent'

export default function Balance() {
  const {user, setUser} = useContext(userCtx);
  return (
    <ContainerContent>
      <div className={styles.balanceHeader}>
        <p>Saldo</p>
        
      </div>
      <p className={styles.balance}>R$ 1000</p>
    </ContainerContent>
  )
}
