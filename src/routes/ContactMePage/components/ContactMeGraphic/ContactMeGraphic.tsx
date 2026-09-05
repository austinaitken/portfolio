import styles from './ContactMeGraphic.module.css'
import linkedinLogo from '@/assets/images/LinkedIn_icon.svg'

const ContactMeGraphic = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <p className={`${styles.icon}`}>📞</p>
                <p className={`${styles.icon}`}>💬</p>
            </div>
            <div className={styles.row}>
                <p className={`${styles.icon}`}>📧</p>
                <img className={styles.icon} src={linkedinLogo} alt="LinkedIn Logo" />
            </div>
        </div>
    )
}

export default ContactMeGraphic
