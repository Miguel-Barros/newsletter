import styles from './styles/Nav.module.css'

export default function Nav() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                    <span>
                        <li>Index</li>
                        <li>About</li>
                    </span>
                    <span>
                        <li>Sign In</li>
                    </span>
                </ul>
            </nav>
        </header>
    )
}