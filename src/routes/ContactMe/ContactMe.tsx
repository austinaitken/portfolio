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
        <section id="contact" className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title} aria-label={fullTitle}>
                    {titleStart}
                    <span className={styles.visuallyHidden}> {titleEnd}</span>
                </h2>
                <div className={styles.titleDrawing}>
                    <AnimatedDrawing
                        drawing={titleEndDrawing}
                        aria-hidden="true"
                        focusable="false"
                        strokeColor="var(--color-text-primary)"
                    />
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.addressButtonContainer}>
                    <button
                        style={{ width: '100%' }}
                        className="secondaryButton"
                        onClick={handleEmailCopy}
                    >
                        austinlaitken@gmail.com
                    </button>
                    <button className="secondaryButton" onClick={handleEmail}>
                        📧
                    </button>
                </div>
                <div className={styles.addressButtonContainer}>
                    <button
                        style={{ width: '100%' }}
                        className="secondaryButton"
                        onClick={handlePhoneCopy}
                    >
                        + 1 (709) 770-3770
                    </button>
                    <button className="secondaryButton" onClick={handlePhoneCall}>
                        📞
                    </button>
                    <button className="secondaryButton" onClick={handlePhoneMessage}>
                        💬
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
