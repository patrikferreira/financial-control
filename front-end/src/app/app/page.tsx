import styles from '../app/page.module.css'
import AppContainer from '../components/AppContainer';
import Auth from '../components/Auth';

export default function page() {

  return (
    <Auth>
      <main className={styles.main}>
        <AppContainer />
      </main>
    </Auth>
  )
}
