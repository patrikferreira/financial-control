"use client"
import { useState } from 'react';
import styles from '../app/page.module.css'
import { useRouter } from 'next/navigation';
import Loading from './Loading';

export default function Logout() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    function logout() {
        router.push("/");
        setLoading(true)
    }

    return (
        <div className={styles.logout} onClick={logout}>
            <p>Sair</p>
            <i className="fa-solid fa-right-from-bracket"></i>
            {loading && <Loading /> }
        </div>
    )
}
