import React from 'react'
import styles from '../app/page.module.css'

export default function Report() {
  return (
    <div className={styles.report}>
      <button><i className="fa-regular fa-file-pdf"></i> Baixar relatório</button>
      <button><i className="fa-brands fa-whatsapp"></i> Enviar relatório</button>
    </div>
  )
}
