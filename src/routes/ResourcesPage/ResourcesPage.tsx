import PagePreview from '@/common/components/PagePreview/PagePreview'
import styles from './ResourcesPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import ResourcePreviewGraphic from './components/ResourcePreviewGraphic/ResourcePreviewGraphic'

const ResourcesPage = () => {
    const resumePdfSrc = '/pdfs/Austin_Aitken_Resume.pdf#page=1&zoom=page-fit'
    const transcriptPdfSrc = '/pdfs/Austin_Aitken_Transcript.pdf#page=1&zoom=page-fit'

    return (
        <section className={styles.container}>
            <PagePreview
                titleStart="Explore"
                titleEnd="Resources"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<ResourcePreviewGraphic />}
                description="View or download resources related to my work and education."
                buttonLabel="Contact Me"
                buttonAction={() => {
                    // Navigate to Resources page
                }}
            />
            <section className={styles.sectionContainer}>
                <h2>Resume</h2>
                <p>Last Updated: January 2024</p>
                <iframe className={styles.verticalPdfViewer} src={resumePdfSrc} title="Resume" />
            </section>
            <section className={styles.sectionContainer}>
                <h2>Transcript</h2>
                <p>Last Updated: January 2024</p>
                <iframe
                    className={styles.horizontalPdfViewer}
                    src={transcriptPdfSrc}
                    title="Transcript"
                />
            </section>
        </section>
    )
}

export default ResourcesPage
