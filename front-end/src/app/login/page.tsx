import FormLogin from '../components/formLogin/FormLogin'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.centralized}`}>
      <FormLogin />
    </main>
  )
}
