import React from 'react'
import styles from '../app/page.module.css'
import UserContainer from './UserContainer'
import Logout from './Logout'

export default function Header() {
  return (
    <div className={styles.header}>
        <UserContainer />
        <Logout />
    </div>
  )
}
