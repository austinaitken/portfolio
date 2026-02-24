import { useGlobalContext } from '@/common/context/useGlobalContext'
import cardImage from '@/assets/images/Austin_Aitken_Graduation_Trading_Card.png'
import styles from './Qualifications.module.css'

const Qualifications = () => {
    const { qualificationsRef } = useGlobalContext()
    return (
        <section
            className={styles.container}
            ref={qualificationsRef}
        >
            <h1>A Qualified Problem Solver</h1>
            <p>Tagline</p>
            <p>This is a very long description about the qualifications and achievements.</p>
            <img
                style={{ width: '100%' }}
                src={cardImage}
                alt="Austin Aitken's Graduation Trading Card"
            />
        </section>
    )
}

export default Qualifications