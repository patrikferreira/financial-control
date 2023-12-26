"use client"
import { userCtx } from '@/app/store/UserProvider';
import React, { useContext } from 'react'

type Props = {
    description: string,
    action: () => void,
}

export default function Button({description, action}: Props) {
  return (
    <button onClick={(e) => {
      e.preventDefault()
      action()
    }}>{description}</button>
  )
}

