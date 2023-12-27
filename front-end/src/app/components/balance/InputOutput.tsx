import React, { useEffect, useState } from 'react'
import styles from '../../../app/app/page.module.css'
import { DataType } from '../DataType'

type Props = {
    type?: string,
    value: number,
    icon: React.ReactNode;
}

export default function InputOutput({type, value, icon}: Props) {
  const colors = {
    1: '#5af57e',
    2: '#ff5555'
  }

  return (
    <div className={styles.inputOutput}>
      <div className={styles.inputOutputHeader}>
        <p>{type}</p>
        <p style={{color: type === 'Saídas' ? colors[2] : colors[1]}}>{icon}</p>
      </div>
      <p>{`R$ ${value}`}</p>
    </div>
  )
}
