import logo from '@/assets/images/Austin_Portfolio_Logo.png'
import { Link } from 'react-router-dom'
import { NAV_ROUTES } from '@/routes/routes'
import { useGlobalContext } from '@/common/context/useGlobalContext'

import styles from './Header.module.css'

const Header = () => {
    const { isNavOpen, toggleNav, closeNav } = useGlobalContext()

    const scrollToContact = () => {
        closeNav()
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className={styles.header}>
            <div className={styles.innerHeaderContainer}>
                <Link
                    to="/"
                    onClick={closeNav}
                    className={`${styles.logoButton} ${styles.cascadeItem} ${styles.fadeOrder0}`}
                >
                    <img className={styles.logo} src={logo} alt="Austin Aitken profile picture" />
                </Link>
                {NAV_ROUTES.map((route, index) => (
                    <Link
                        key={route.path}
                        to={route.path}
                        onClick={closeNav}
                        className={`${styles.sectionButton} ${styles.cascadeItem} ${styles[`fadeOrder${index + 1}`]}`}
                    >
                        {route.label}
                    </Link>
                ))}
                <button type="button" className={styles.contactButton} onClick={scrollToContact}>
                    Contact Me
                </button>
                <button
                    type="button"
                    className={`${styles.navButton} ${styles.cascadeItem} ${styles.fadeOrder7}`}
                    onClick={toggleNav}
                    aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isNavOpen}
                    aria-controls="mobile-nav-menu"
                >
                    <span className={isNavOpen ? styles.close : styles.bars}>
                        {isNavOpen ? '✕' : '☰'}
                    </span>
                </button>
            </div>
        </header>
    )
}

export default Header
