import Head from 'next/head'
import styles from './styles/Home.module.css'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TCC SPEED RUN</title>
      </Head>
      <Nav />
      <main className={styles.main}>
        <span className={styles.left}>
          <h1>Bem vindo ao seu Jornal Habitual favorito</h1>
          <p>Tenha as ultimas noticias de mongaguá na palma de sua mão</p>
          <span className={styles.inputs}>
            <input type="email" placeholder="Digite seu email" />
            <input type="tel" placeholder="Digite seu telefone" maxLength={11} />
          </span>
          <button>Inscrevera</button>
        </span>
        <span className={styles.right}>
          <img className={styles.ilus} src="./assets/Send-Gift.svg" alt="ilustration" />
        </span>
      </main>
    </div>
  )
}
