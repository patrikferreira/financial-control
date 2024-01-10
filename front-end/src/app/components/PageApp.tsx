"use client"
import React from 'react'
import styles from '../app/page.module.css'

type Props = {
    icon: string,
    description: string,
    action?: () => void,
}

export default function PageApp({icon, description, action}: Props) {

  return (
    <div className={styles.pageApp} onClick={action}>
        <i className={icon}></i>
        <p>{description}</p>
    </div>
  )
}
