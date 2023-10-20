"use client"
import styles from '../../page.module.css'
import { User, userCtx } from '@/app/store/UserProvider';
import React, { useContext } from 'react'

type Props = {
    description: string,
}

export default function Button({description}: Props) {
  const ctx = useContext(userCtx);
  return (
    <button onClick={async () => {
      const data = new FormData();
      data.append('login', 'teste');
      data.append('password', 'teste123');
      const res = await fetch(`http://localhost:3000/api/auth`, {method: 'POST', body: data, headers: {'Content-Type': 'multipart/form-data'}})
      const json = await res.json() as User;
      console.log(json);
      ctx.setUser(json);
    }}>{description}</button>
  )
}

