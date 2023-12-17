"use client"
import React, { useContext } from 'react'
import styles from '../app/page.module.css'
import Auth from './Auth'
import { useRouter } from 'next/navigation'
import { userCtx } from '../store/UserProvider'

export default function AppHeader() {
    const router = useRouter();
    const {user, setUser} = useContext(userCtx);

    function logout() {
        localStorage.removeItem("token");
        router.push("/login");
    }

    return (
        <Auth>
            <div className={styles.headerApp}>
                <div className={styles.userDiv}>
                    <div className={styles.imgUser}>
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <p>{user.name}</p>
                </div>

                <div className={styles.logout} onClick={logout}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                </div>
            </div>
        </Auth>
    )
}
