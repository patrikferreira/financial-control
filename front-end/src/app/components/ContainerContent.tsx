import React from 'react'
import styles from '../app/page.module.css'

type Props = {
    children: React.ReactNode
}

export default function ContainerContent({children}: Props) {
  return (
    <div className={styles.containerContent}>
      {children}
    </div>
  )
}
