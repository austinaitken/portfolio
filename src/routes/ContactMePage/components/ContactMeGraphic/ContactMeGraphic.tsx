import styles from './ContactMeGraphic.module.css'
// import githubLogo from '@/assets/images/github-icon.svg'
// import documentIcon from '@/assets/images/page-blank-svgrepo-com.svg'
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
