import Head from 'next/head'
import styles from './styles/Home.module.css'
import Nav from '../components/nav'

import axios from 'axios'
import { useState } from 'react'

export default function Home() {

  const [email, setEmail] = useState('')
  const [tel, setCel] = useState('')
  const [response, setResponse] = useState('')

  function checkSendman() {
    if (email) return { email }
    if (tel) return { tel }
    if (email && tel) return { tel }
    if (!email) return {}
    if (!tel) return {}
  }

  const subscribe = async () => {
    try {
      await axios.post('./api/newsletter', { email })
      setResponse('Sucess')
      return alert(response)
    } catch (error) {
      setResponse('Fail')
      alert(error)
      return error.response.data.error
    }
  }

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
            <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="tel" placeholder="Digite seu telefone" maxLength={11} onChange={(e) => setCel(e.target.value)} value={tel} />
          </span>
          <button onClick={() => subscribe()}>Inscrevera</button>
        </span>
        <span className={styles.right}>
          <img className={styles.ilus} src="./assets/Send-Gift.svg" alt="ilustration" />
        </span>
      </main>
    </div>
  )
}
