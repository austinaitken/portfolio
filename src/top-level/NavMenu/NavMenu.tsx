import { Fragment } from 'react'
import { Link } from 'react-router'
import { NAV_ROUTES } from '@/routes/routes'
import { useGlobalContext } from '@/common/context/useGlobalContext'

import styles from './NavMenu.module.css'

const NavMenu = () => {
    const { closeNav } = useGlobalContext()

    return (
        <nav id="mobile-nav-menu" className={styles.navMenu}>
            <hr className={styles.hr} />
            {NAV_ROUTES.map(({ path, label }) => (
                <Fragment key={path}>
                    <Link to={path} className={styles.navButton} onClick={closeNav}>
                        {label}
                    </Link>
                    <hr className={styles.hr} />
                </Fragment>
            ))}
        </nav>
    )
}

export default NavMenu
