import { useGlobalContext } from '@/common/context/useGlobalContext'
import logo from '@/assets/images/profile_pic_1080.png'

import styles from './Experience.module.css'

const Experience = () => {
    const { experienceRef } = useGlobalContext()
    return (
        <section
            className={styles.container}
            ref={experienceRef}
        >
            <h1 className={styles.title}>
                An Experienced Professional
            </h1>
            <p>Tagline</p>
            <p>This is a very long description about the professional journey and achievements.</p>
            <img
                style={{ width: '100%' }}
                src={logo}
                alt="Austin Aitken's profile picture"
            />
        </section>
    )
}

export default Experience