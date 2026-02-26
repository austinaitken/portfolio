import { useGlobalContext } from '@/common/context/useGlobalContext'
import styles from './Resources.module.css'

const Resources = () => {
  const { resourcesRef } = useGlobalContext()

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/pdfs/Austin_Aitken_Resume.pdf'
    link.download = 'Austin_Aitken_Resume.pdf'
    link.click()
  }

  const handleTranscriptDownload = () => {
    const link = document.createElement('a')
    link.href = '/pdfs/Austin_Aitken_Transcript.pdf'
    link.download = 'Austin_Aitken_Transcript.pdf'
    link.click()
  }

  const handleGitHubRedirect = () => window.open('https://github.com/austinaitken', '_blank')

  const handleLinkedInRedirect = () =>
    window.open('https://www.linkedin.com/in/austin-aitken', '_blank')

  return (
    <section className={styles.container} ref={resourcesRef}>
      <h1 className={styles.title}>Resources</h1>
      <div className={styles.resourcesContainer}>
        <div className={styles.downloadContainer}>
          <button onClick={handleResumeDownload}>Resume</button>
          <button onClick={handleTranscriptDownload}>Transcript</button>
        </div>
        <div className={styles.externalLinkContainer}>
          <button onClick={handleGitHubRedirect}>GitHub</button>
          <button onClick={handleLinkedInRedirect}>LinkedIn</button>
        </div>
      </div>
    </section>
  )
}

export default Resources
