"use client"
import { redirect, useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import {useEffect} from 'react'
import Loading from './Loading';
import AuthService from '../service/AuthService';
import { userCtx } from '../store/UserProvider';

type Props = {
    children: React.ReactNode
}

export default function Auth({children}: Props) {
    const {setUser} = useContext(userCtx);
    const [auth, setAuth] = useState<boolean>(false);
    useEffect(() => {
        AuthService.verifyToken().then(user => {
            if(user === null) {
               return redirect("/")
            }
            setUser(user)
            return setAuth(true)
        })
    }, [])
    

    return <>{auth ? children : <Loading />}</>
  
}
