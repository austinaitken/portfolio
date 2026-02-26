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
            <img
                src={munLogo}
                alt="Memorial University of Newfoundland Logo"
            />
            <img
                src={graduationCard}
                alt="Austin Aitken's Graduation Trading Card"
            />
        </section>
    )
}

export default Qualifications
