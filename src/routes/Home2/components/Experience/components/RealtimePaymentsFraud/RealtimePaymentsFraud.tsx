import Arrow from '../Arrow/Arrow'
import ndaqLogo from '@/assets/images/verafin/NDAQ.svg'
import paymentSender from '@/assets/images/verafin/AustinPaymentSender.png'
import phone from '@/assets/images/verafin/blank_iphone.png'
import styles from './RealtimePaymentsFraud.module.css'

const RealtimePaymentsFraud = () => {
    return (
        <div className={styles.container}>
            <div className={styles.personContainer}>
                <svg
                    className={styles.stickMan}
                    viewBox="0 0 120 200"
                    role="img"
                    aria-label="Stick figure"
                >
                    <path d="M60 50 L60 120" />
                    <path d="M30 85 L60 95 L90 85" />
                    <path d="M60 120 L35 170" />
                    <path d="M60 120 L85 170" />
                </svg>
                <img
                    className={styles.paymentSender}
                    src={paymentSender}
                    alt="Payment Sender Image"
                />
                <img
                    className={`${styles.phone} ${styles.leftPersonPhone}`}
                    src={phone}
                    alt="Phone in sender hand"
                />
            </div>
            <Arrow />
            <img className={styles.ndaqLogo} src={ndaqLogo} alt="NDAQ logo" />
            <Arrow delaySeconds={2.2} />
            <div className={styles.personContainer}>
                <svg
                    className={styles.stickMan}
                    viewBox="0 0 120 200"
                    role="img"
                    aria-label="Stick figure"
                >
                    <path d="M60 50 L60 120" />
                    <path d="M30 85 L60 95 L90 85" />
                    <path d="M60 120 L35 170" />
                    <path d="M60 120 L85 170" />
                </svg>
                <img
                    className={styles.paymentSender}
                    src={paymentSender}
                    alt="Payment Sender Image"
                />
                <img
                    className={`${styles.phone} ${styles.rightPersonPhone}`}
                    src={phone}
                    alt="Phone in receiver hand"
                />
            </div>
        </div>
    )
}

export default RealtimePaymentsFraud
