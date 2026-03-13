import { Fragment } from 'react'
import { Link } from 'react-router'
import { NAV_KEYS, NAV_ITEMS } from '@/common/constants/navigation'

import styles from './NavMenu.module.css'

const NavMenu = () => (
    <nav className={styles.navMenuContainer}>
        <hr />
        {NAV_KEYS.map((key) => (
            <Fragment key={key}>
                <Link to={NAV_ITEMS[key].to}>
                    {NAV_ITEMS[key].label}
                </Link>
                <hr />
            </Fragment>
        ))}
    </nav>
)

export default NavMenu
