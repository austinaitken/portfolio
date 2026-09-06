import { Link } from 'react-router'

import { usePageTitle } from '@/common/hooks/usePageTitle'

import styles from './UnknownRoute.module.css'

const UnknownRoute = () => {
    usePageTitle('Page Not Available')

    return (
        <div className={styles.container}>
            <h1>Page Not Available</h1>
            <p className={styles.subtitle}>Check for typos in your url</p>
            <Link to="/" className={styles.backLink}>
                Back to Overview
            </Link>
        </div>
    )
}

export default UnknownRoute
