import { useEffect, useRef } from 'react'
import { useGlobalContext } from '@/common/context/useGlobalContext'
import { NAV_KEYS, NAV_ITEMS, type NavItemKey } from '@/common/constants/navigation'
import logo from '@/assets/images/Austin_Portfolio_Logo.png'

import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const {
        scrollToIntro,
        scrollToExperience,
        scrollToEntrepreneurship,
        scrollToPersonality,
        scrollToQualifications,
        scrollToResources,
        scrollToContact,
        isNavOpen,
        toggleNav,
    } = useGlobalContext()

    const scrollActionByKey: Record<NavItemKey, () => void> = {
        overview: scrollToIntro,
        experience: scrollToExperience,
        entrepreneurship: scrollToEntrepreneurship,
        qualifications: scrollToQualifications,
        personality: scrollToPersonality,
        resources: scrollToResources,
        contact: scrollToContact,
    }

    return (
        <header className={styles.header}>
            <div className={styles.innerHeaderContainer}>
                <div className={styles.leftButtonContainer}>
                    <button
                        className={`${styles.logoButton} ${styles.cascadeItem} ${styles.fadeOrder0}`}
                        onClick={scrollToIntro}
                    >
                        <img
                            className={styles.logo}
                            src={logo}
                            alt="Austin Aitken profile picture"
                        />
                    </button>
                </div>
                {/* {NAV_KEYS.filter((key) => key !== 'overview' && key !== 'contact').map(
                    (key, index) => (
                        <button
                            key={key}
                            className={`${styles.sectionButton} ${styles.cascadeItem} ${styles[`fadeOrder${index + 1}`]}`}
                            onClick={scrollActionByKey[key]}
                        >
                            {NAV_ITEMS[key].label}
                        </button>
                    )
                )} */}
                <Link to="/">Overview</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/entrepreneurship">Entrepreneurship</Link>
                <Link to="/qualifications">Qualifications</Link>
                <Link to="/personality">Personality</Link>
                <div className={styles.rightButtonContainer}>
                    <button
                        className={`${styles.getStartedButton} ${styles.cascadeItem} ${styles.fadeOrder6}`}
                        onClick={scrollToContact}
                    >
                        {NAV_ITEMS.contact.label}
                    </button>
                    <button
                        className={`${styles.navButton} ${styles.cascadeItem} ${styles.fadeOrder7}`}
                        onClick={toggleNav}
                    >
                        <p style={{ color: 'black', transform: 'rotate(90deg)' }}>
                            {isNavOpen ? '>' : '|||'}{' '}
                        </p>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
