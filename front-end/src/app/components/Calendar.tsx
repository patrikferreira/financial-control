"use client"
import React, { useEffect, useState } from 'react';
import styles from '../app/page.module.css';

export default function Calendar() {
    const [currentMonth, setCurrentMonth] = useState<number>();
    const [currentYear, setCurrentYear] = useState<number>();

    useEffect(() => {
        function fetchData() {
            const newDate = new Date();
            const year = newDate.getFullYear();
            const month = newDate.getMonth();
            setCurrentMonth(month);
            setCurrentYear(year);
        }
        fetchData();
    }, []);

    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth - 1 + 12) % 12);
    };

    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth + 1) % 12);
    };

    return (
        <div className={styles.calendar}>
            <button onClick={handlePrevMonth}><i className="fa-solid fa-chevron-left"></i></button>
            <h4>{monthNames[currentMonth]} {currentYear}</h4>
            <button onClick={handleNextMonth}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    );
}
