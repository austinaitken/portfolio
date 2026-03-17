import styles from './Footer.module.css'

const Footer = () => (
    <footer className={styles.footer}>
        Copyright &copy; {new Date().getFullYear()} Austin Aitken
    </footer>
)

export default Footer
