import { useGlobalContext } from '@/common/context/useGlobalContext'
import logo from '@/assets/images/profile_pic_1080.png'
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
                src={logo}
                alt="Austin Aitken's profile picture"
            />
        </section>
    )
}

export default Qualifications