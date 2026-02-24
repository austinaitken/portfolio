import { useGlobalContext } from '@/common/context/useGlobalContext'
import logo from '@/assets/images/profile_pic_1080.png'

import styles from './Personality.module.css'

const Personality = () => {
    const { personalityRef } = useGlobalContext()
    return (
        <section
            className={styles.container}
            ref={personalityRef}
        >
            <h1>A Light in the Dark</h1>
            <p>Tagline</p>
            <p>This is a very long description about the personality traits and characteristics.</p>
            <img
                style={{ width: '100%' }}
                src={logo}
                alt="Austin Aitken's profile picture"
            />
        </section>
    )
}

export default Personality