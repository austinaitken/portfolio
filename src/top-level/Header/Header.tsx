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
                    <button className={styles.logoButton} onClick={scrollToIntro}>
                        {/* <img
                            className={styles.logo}
                            src={logo}
                            alt="Austin Aitken profile picture"
                        /> */}
                        <p className={styles.name}>Austin Aitken</p>
                    </button>
                </div>
                <button className={styles.sectionButton} onClick={scrollToExperience}>
                    Experience
                </button>
                <button className={styles.sectionButton} onClick={scrollToEntrepreneurship}>
                    Entrepreneurship
                </button>
                <button className={styles.sectionButton} onClick={scrollToQualifications}>
                    Qualifications
                </button>
                <button className={styles.sectionButton} onClick={scrollToPersonality}>
                    Personality
                </button>
                <button className={styles.sectionButton} onClick={scrollToResources}>
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
                    <button className={styles.getStartedButton} onClick={scrollToContact}>
                        Contact Me
                    </button>
                    <button
                        className={styles.navButton}
                        style={{ transform: !isNavOpen ? 'rotate(90deg)' : 'none' }}
                        onClick={toggleNav}
                    >
                        <p style={{ color: 'black' }}>|||</p>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
