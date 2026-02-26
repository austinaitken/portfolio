import { useGlobalContext } from '@/common/context/useGlobalContext'

import verafinLogo from '@/assets/images/verafin/Nasdaq_Verafin_Logo.png'

import styles from './Experience.module.css'

const Experience = () => {
    const { experienceRef } = useGlobalContext()

    const handleVerafinLogoClick = () => {
        window.open('https://verafin.com/canada/', '_blank')
    }

    return (
        <section className={styles.container} ref={experienceRef}>
            <h1 className={styles.title}>An Experienced Professional</h1>
            <img
                className="clickable"
                src={verafinLogo}
                alt="Verafin Logo"
                onClick={handleVerafinLogoClick}
            />
            <p>Catching Fraud for the Largest Institutions in North America</p>
            <h2>Protecting You in Real-Time.</h2>
            <p></p>
            <h2>Big Data for Big Results.</h2>
            <p></p>
            <h2>Training Crime Fighters.</h2>
            <p></p>
            <h2>Heroism Recognized.</h2>
            <p></p>
        </section>
    )
}

export default Experience
