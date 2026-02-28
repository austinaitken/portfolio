import { useGlobalContext } from '@/common/context/useGlobalContext'

import verafinLogo from '@/assets/images/verafin/Nasdaq_Verafin_Logo.png'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'

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
            <p>Catching Financial Fraud for the Largest Institutions in North America</p>
            <h2>Protecting You in Real-Time</h2>
            <p>
                I pioneered the real-time fraud detection of payment services like E-Transfer and
                Zelle for Nasdaq Verafin.
            </p>
            <h2>Big Data for Big Results</h2>
            <p>I designed, implemented, and maintained a production big data pipeline.</p>
            <h2>Training Crime Fighters</h2>
            <p>
                I mentored and supervised new software developers to achieve full-time employment at
                Nasdaq Verafin.
            </p>
            <h2>Heroism Recognized</h2>
            <p>
                I won 1st place in the company's annual hackathon by developing an agent to detect
                high-risk animal trafficking through banking data and online activity.
            </p>
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        </section>
    )
}

export default Experience
