import { useGlobalContext } from '@/common/context/useGlobalContext'
import logo from '@/assets/images/profile_pic_1080.png'
import styles from './Entrepreneurship.module.css'

const Entrepreneurship = () => {
    const { entrepreneurshipRef } = useGlobalContext()
    return (
        <section
            className={styles.container}
            ref={entrepreneurshipRef}
        >
            <h1>An Entrepreneural Flame</h1>
            <p>Tagline</p>
            <p>This is a very long description about the entrepreneurial journey and achievements.</p>
            <img
                style={{ width: '100%' }}
                src={logo}
                alt="Austin Aitken's profile picture"
            />
        </section>
    )
}

export default Entrepreneurship