import FormLogin from '../components/form/FormLogin'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <FormLogin />
    </main>
  )
}
