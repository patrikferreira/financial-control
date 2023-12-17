"use client"
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import {useEffect} from 'react'
import Loading from './Loading';

type Props = {
    children: React.ReactNode
}

export default function Auth({children}: Props) {
    const [auth, setAuth] = useState<boolean>(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        setAuth(!!token);
        if(!token) {
        return redirect("/")
    }
    }, [])

    return <>{auth ? children : <Loading />}</>
  
}
