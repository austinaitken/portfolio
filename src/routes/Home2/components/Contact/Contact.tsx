import { useGlobalContext } from '@/common/context/useGlobalContext'
import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'
import { reachOutWordDrawing } from '@/common/constants/animated-drawings'

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
            <h1 className={styles.title}>Reach Out</h1>
            <div className={styles.animatedWordContainer}>
                <AnimatedDrawing drawing={reachOutWordDrawing} />
            </div>
            {/* <p className="largeDescription" style={{ marginBottom: '40px' }}>
                Call, text, or email at anytime and let's discuss how I can contribute to your team
                and organization.
            </p> */}
            <div className={styles.buttonsContainer}>
                <button onClick={handleEmailClick}>📧 austinlaitken@gmail.com</button>
                <button onClick={handleCallClick}>📞 1 (709) 770-3770</button>
            </div>
        </section>
    )
}

export default Contact
