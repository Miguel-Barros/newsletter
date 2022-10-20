import styles from './styles/Nav.module.css'

export default function Nav() {
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                    <li>Index</li>
                    <li>About</li>
                    <li>Sign In</li>
                </ul>
            </nav>
        </header>
    )
}