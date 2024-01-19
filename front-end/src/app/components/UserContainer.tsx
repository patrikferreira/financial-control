"use client"
import React, { useContext } from 'react'
import styles from '../app/page.module.css'
import { userCtx } from '../store/UserProvider';

export default function UserContainer() {
    const { user, setUser } = useContext(userCtx);
    return (
        <div className={styles.userContainer}>
            <div className={`${styles.imgUser} ${styles.centralized}`}>
                <i className="fa-regular fa-user"></i>
            </div>
            <p className={styles.userName}>{user.name}</p>
        </div>
    )
}
