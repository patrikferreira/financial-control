"use client"
import React, { useContext } from 'react'
import styles from '../page.module.css'
import { userCtx } from '../store/UserProvider'

export default function page() {
    const {user, setUser} = useContext(userCtx);
  return (
    <main>
        aa
    </main>
  )
}
