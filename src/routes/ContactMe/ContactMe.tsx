import AnimatedDrawing, {
    type AnimatedDrawingData,
} from '@/common/components/AnimatedDrawing/AnimatedDrawing'
import styles from './ContactMe.module.css'

export interface ContactMeProps {
    titleStart: string
    titleEnd: string
    titleEndDrawing: AnimatedDrawingData
}

const ContactMe = ({ titleStart, titleEnd, titleEndDrawing }: ContactMeProps) => {
    const fullTitle = `${titleStart} ${titleEnd}`.trim()

    const handlePhoneCopy = () => {
        navigator.clipboard.writeText('+1 (709) 770-3770')
    }

    const handleEmailCopy = () => {
        navigator.clipboard.writeText('austinlaitken@gmail.com')
    }

    const handlePhoneCall = () => {
        window.location.href = 'tel:+17097703770'
    }

    const handleEmail = () => {
        window.location.href = 'mailto:austinlaitken@gmail.com'
    }

    const handlePhoneMessage = () => {
        window.location.href = 'sms:+17097703770'
    }

    return (
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title} aria-label={fullTitle}>
                    {titleStart}
                    <span className={styles.visuallyHidden}> {titleEnd}</span>
                </h1>
                <div className={styles.titleDrawing}>
                    <AnimatedDrawing
                        drawing={titleEndDrawing}
                        aria-hidden="true"
                        focusable="false"
                    />
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.addressButtonContainer}>
                    <button
                        style={{ width: '100%' }}
                        className={styles.button}
                        onClick={handleEmailCopy}
                    >
                        austinlaitken@gmail.com
                    </button>
                    <button className={styles.button} onClick={handleEmail}>
                        📧
                    </button>
                </div>
                <div className={styles.addressButtonContainer}>
                    <button
                        style={{ width: '100%' }}
                        className={styles.button}
                        onClick={handlePhoneCopy}
                    >
                        + 1 (709) 770-3770
                    </button>
                    <button onClick={handlePhoneCall}>📞</button>
                    <button onClick={handlePhoneMessage}>💬</button>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
