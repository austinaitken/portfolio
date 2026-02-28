import { useEffect, useRef } from 'react'
import { useGlobalContext } from '@/common/context/useGlobalContext'
// import logo from '@/assets/images/logo.jpg'

import styles from './Header.module.css'

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
    const headerRef = useRef<HTMLElement>(null)
    useEffect(() => {
        const header = headerRef.current
        if (!header) return

        const rootStyle = document.documentElement.style
        const previousOffset = rootStyle.getPropertyValue('--header-scroll-offset')

        const updateHeaderOffset = () => {
            const height = Math.ceil(header.getBoundingClientRect().height)
            rootStyle.setProperty('--header-scroll-offset', `${height}px`)
        }

        updateHeaderOffset()

        const resizeObserver = new ResizeObserver(updateHeaderOffset)
        resizeObserver.observe(header)

        return () => {
            resizeObserver.disconnect()
            if (previousOffset.trim().length > 0) {
                rootStyle.setProperty('--header-scroll-offset', previousOffset)
            } else {
                rootStyle.removeProperty('--header-scroll-offset')
            }
        }
    }, [])

    return (
        <header className={styles.header} ref={headerRef}>
            <div className={styles.innerHeaderContainer}>
                <div className={styles.leftButtonContainer}>
                    <button
                        className={`${styles.logoButton} ${styles.cascadeItem} ${styles.fadeOrder0}`}
                        onClick={scrollToIntro}
                    >
                        {/* <img
                            className={styles.logo}
                            src={logo}
                            alt="Austin Aitken profile picture"
                        /> */}
                        <p className={styles.name}>Austin Aitken</p>
                    </button>
                </div>
                <button
                    className={`${styles.sectionButton} ${styles.cascadeItem} ${styles.fadeOrder1}`}
                    onClick={scrollToExperience}
                >
                    Experience
                </button>
                <button
                    className={`${styles.sectionButton} ${styles.cascadeItem} ${styles.fadeOrder2}`}
                    onClick={scrollToEntrepreneurship}
                >
                    Entrepreneurship
                </button>
                <button
                    className={`${styles.sectionButton} ${styles.cascadeItem} ${styles.fadeOrder3}`}
                    onClick={scrollToQualifications}
                >
                    Qualifications
                </button>
                <button
                    className={`${styles.sectionButton} ${styles.cascadeItem} ${styles.fadeOrder4}`}
                    onClick={scrollToPersonality}
                >
                    Personality
                </button>
                <button
                    className={`${styles.sectionButton} ${styles.cascadeItem} ${styles.fadeOrder5}`}
                    onClick={scrollToResources}
                >
                    Resources
                </button>
                {/* <button
                    className={styles.sectionButton}
                    onClick={scrollToContact}
                >
                    Contact Me
                </button> */}
                {/* <Link
                    className={styles.link}
                    to='/'
                    onClick={() => {setNavOpen(false)}}
                >
                    Overview
                </Link> */}
                {/* <Link
                    className={styles.link}
                    to='/how-it-works'
                    onClick={() => {setNavOpen(false)}}
                >
                    Experience
                </Link>

                <Link
                    className={styles.link}
                    to='/how-it-works'
                    onClick={() => {setNavOpen(false)}}
                >
                    Entrepreneurship
                </Link>
                
                <Link
                    className={styles.link}
                    onClick={() => {setNavOpen(false)}}
                    to='/contact-us'
                >
                    Personality
                </Link>

                <Link
                    className={styles.link}
                    onClick={() => {setNavOpen(false)}}
                    to='/contact-us'
                >
                    Qualifications
                </Link>

                <Link
                    className={styles.link}
                    onClick={() => {setNavOpen(false)}}
                    to='/contact-us'
                >
                    Resources
                </Link> */}

                <div className={styles.rightButtonContainer}>
                    <button
                        className={`${styles.getStartedButton} ${styles.cascadeItem} ${styles.fadeOrder6}`}
                        onClick={scrollToContact}
                    >
                        Contact Me
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
