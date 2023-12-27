"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from '../app/page.module.css'
import { User, userCtx } from '../store/UserProvider'
import ContainerContent from './ContainerContent'
import InputOutput from './balance/InputOutput'

export default function Balance() {
  const { user, setUser } = useContext(userCtx);

  return (
    <ContainerContent>
      <div className={styles.balance}>
        <div className={styles.balanceHeader}>
          <InputOutput type='Entradas' value={4000} icon={<i className="fa-solid fa-arrow-down"></i>}/>
          <InputOutput type='Saídas' value={3000} icon={<i className="fa-solid fa-arrow-up"></i>}/>
        </div>
        <div className={styles.totalBalanceDiv}>
          <InputOutput type='Total' value={1000} icon='R$'/>
        </div>
      </div>
    </ContainerContent>
  )
}
