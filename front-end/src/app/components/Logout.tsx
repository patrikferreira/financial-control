"use client"
import React, { useContext } from 'react'
import styles from '../app/page.module.css'
import { userCtx } from '../store/UserProvider';
import { useRouter } from 'next/navigation';

export default function Logout() {
    const router = useRouter();

    function logout() {
        localStorage.removeItem("token");
        router.push("/login");
    }

    return (
        <div className={styles.logout} onClick={logout}>
            <p>Sair</p>
            <i className="fa-solid fa-right-from-bracket"></i>
        </div>
    )
}
