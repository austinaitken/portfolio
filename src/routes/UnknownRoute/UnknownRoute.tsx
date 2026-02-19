import styles from './UnknownRoute.module.css'

const UnknownRoute = () => {
    return (
        <div className={styles.container}>
            <h1>Page Not Available</h1>
            <p className={styles.subtitle}>Check for typos in your url</p>
        </div>
    )
}

export default UnknownRoute