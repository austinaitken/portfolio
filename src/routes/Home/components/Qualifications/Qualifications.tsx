import { useGlobalContext } from '@/common/context/useGlobalContext'

import graduationCard from '@/assets/images/university/Austin_Aitken_Graduation_Trading_Card.png'
import munLogo from '@/assets/images/university/MUN_Logo.png'

import styles from './Qualifications.module.css'

const Qualifications = () => {
    const { qualificationsRef } = useGlobalContext()
    return (
        <section className={styles.container} ref={qualificationsRef}>
            <h1>A Qualified Problem Solver</h1>
            <h2>Bachelor of Engineering - (Computer Engineering)</h2>
            <h2>Excellence Awarded.</h2>
            <p>
                Earned the Director's Award for Exemplary Work Terms by achieving an Outstanding
                with Distinction on all 5 engineering work terms. A rare and prestigious award.{' '}
            </p>
            <img src={munLogo} alt="Memorial University of Newfoundland Logo" />
            <img src={graduationCard} alt="Austin Aitken's Graduation Trading Card" />
        </section>
    )
}

export default Qualifications
