"use client"
import styles from '../../page.module.css'
import { User, userCtx } from '@/app/store/UserProvider';
import React, { useContext } from 'react'

type Props = {
    description: string,
    action: () => void,
}

export default function Button({description, action}: Props) {
  const ctx = useContext(userCtx);
  return (
    <button onClick={(e) => {
      e.preventDefault()
      action()
    }}>{description}</button>
  )
}

