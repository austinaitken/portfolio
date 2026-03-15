import styles from './ResourcePreviewGraphic.module.css'
import githubLogo from '@/assets/images/github-icon.svg'
import documentIcon from '@/assets/images/page-blank-svgrepo-com.svg'
import linkedinLogo from '@/assets/images/LinkedIn_icon.svg'

const ResourcePreviewGraphic = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <img className={styles.icon} src={githubLogo} alt="GitHub Logo" />
                <img className={styles.icon} src={documentIcon} alt="Document Icon" />
            </div>
            <div className={styles.row}>
                <img className={styles.icon} src={documentIcon} alt="Document Icon" />
                <img className={styles.icon} src={linkedinLogo} alt="LinkedIn Logo" />
            </div>
        </div>
    )
}

export default ResourcePreviewGraphic
