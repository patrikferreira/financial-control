"use client"
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import {useEffect} from 'react'

type Props = {
    children: React.ReactNode
}

export default function Auth({children}: Props) {
    const [auth, setAuth] = useState<boolean>(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(`auth: ${token}`)
        if(!token) {
        return redirect("/")
    }
    }, [])

    return <>{auth ? children : "Loading"}</>
  
}
