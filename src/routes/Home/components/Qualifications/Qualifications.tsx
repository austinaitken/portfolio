import { useGlobalContext } from '@/common/context/useGlobalContext'

import graduationCard from '@/assets/images/university/Austin_Aitken_Graduation_Trading_Card.png'
import munLogo from '@/assets/images/university/MUN_Logo.png'

import styles from './Qualifications.module.css'

const Qualifications = () => {
    const { qualificationsRef } = useGlobalContext()
    const handleMunLogoClick = () => {
        window.open('https://www.mun.ca/engineering/', '_blank')
    }

    return (
        <section className={styles.container} ref={qualificationsRef}>
            <h1>A Qualified Problem Solver</h1>
            <h2>Bachelor of Engineering - Computer Major</h2>
            <p>
                Graduated with a strong foundation in computer engineering principles and practices.
            </p>
            <h2>Excellence Awarded</h2>
            <p>
                Earned the Director's Award for Exemplary Work Terms by achieving an Outstanding
                with Distinction on all 5 engineering work terms. A rare and prestigious award.{' '}
            </p>
            <h2>Academically Proven</h2>
            <p>A top performer in the most advanced engineering courss</p>
            <p>Real-time Operating Systems - 91%</p>
            <p>Computer Security - 90%</p>
            <p>Concurrent Programming - 87%</p>
            <p>Computer Architecture - 87%</p>
            <img
                className={`clickable ${styles.munLogo}`}
                src={munLogo}
                alt="Memorial University of Newfoundland Logo"
                onClick={handleMunLogoClick}
            />
            <img src={graduationCard} alt="Austin Aitken's Graduation Trading Card" />
        </section>
    )
}

export default Qualifications
