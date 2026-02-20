import styles from './Resources.module.css'

const Resources = () => {
    const handleResumeDownload = () => {}

    const handleTranscriptDownload = () => {}

    const handleGitHubRedirect = () => {}

    const handleLinkedInRedirect = () => {}

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Resources
            </h1>
            <div className={styles.resourcesContainer}>
                <div className={styles.downloadContainer}>
                    <button onClick={handleResumeDownload}>
                        Resume
                    </button>
                    <button onClick={handleTranscriptDownload}>
                        Transcript
                    </button>
                </div>
                <div className={styles.externalLinkContainer}>
                    <button onClick={handleGitHubRedirect}>
                        GitHub
                    </button>
                    <button onClick={handleLinkedInRedirect}>
                        LinkedIn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Resources