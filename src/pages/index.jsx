import Head from 'next/head'
import styles from './styles/Home.module.css'
import Nav from '../components/nav'
import { useState, useRef } from 'react'

export default function Home() {

  const [email, setEmail] = useState('')
  const [tel, setCel] = useState('')
  const inputEl = useRef(null);
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);
      return;
    }
    setEmail('')
    inputEl.current.value = '';
    setMessage('Parabéns! 🎉 você se inscreveu com sucesso em nossa NewsLetter.')
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Viver - A ferramenta de axulio perfeita para sua manhã</title>
      </Head>
      <Nav />
      <main className={styles.main}>
        <span className={styles.left}>
          <h1>Seja bem vindo ao Viver</h1>
          <p>tornando sua manhã mais importante para o seu dia!</p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <span className={styles.inputs}>
              <input required ref={inputEl} type="email" name="email" id="email-input" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email} />
              <input type="tel" placeholder="Digite seu telefone" maxLength={11} onChange={(e) => setCel(e.target.value)} value={tel} />
            </span>
            <button type="submit" onClick={() => subscribe()}>Inscrever</button>
          </form>
          <p className={styles.confirm}>
            {message ? message : null}
          </p>
        </span>
        <span className={styles.right}>
          <img className={styles.ilus} src="./assets/Send-Gift.svg" alt="ilustration" />
        </span>
      </main>
    </div>
  )
}
