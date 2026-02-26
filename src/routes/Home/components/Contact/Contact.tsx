import { useGlobalContext } from '@/common/context/useGlobalContext'
import styles from './Contact.module.css'

const Contact = () => {
    const { contactRef } = useGlobalContext()
    const handleEmailClick = () => {
        window.location.href = 'mailto:austinlaitken@gmail.com'
    }

    const handleCallClick = () => {
        window.location.href = 'tel:+17097703770'
    }

    return (
        <section className={styles.container} ref={contactRef}>
            <h1 className={styles.title}>Reach Out Today</h1>
            <div className={styles.buttonsContainer}>
                <button onClick={handleEmailClick}>📧 austinlaitken@gmail.com</button>
                <button onClick={handleCallClick}>📞 1 (709) 770-3770</button>
            </div>
        </section>
    )
}

export default Contact
