// Tooltip.js
import React from 'react';
import styles from '../app/page.module.css'

type Props = {
    text: string,
}

export default function Tooltip({text}: Props) {
  return (
    <div className={styles.tooltip}>
      {text}
    </div>
  );
}
