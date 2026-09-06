import styles from './PageLoader.module.css'

const PageLoader = () => {
    return (
        <div className={styles.container} role="status" aria-label="Loading page">
            <div className={styles.spinner} />
        </div>
    )
}

export default PageLoader
