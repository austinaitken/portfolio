// import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <p className={styles.year}>Copyright &copy; {currentYear} Austin Aitken</p>
        </footer>
    )
}

export default Footer
