import PagePreview from '@/common/components/PagePreview/PagePreview'
import styles from './ResourcesPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import ResourcePreviewGraphic from './components/ResourcePreviewGraphic/ResourcePreviewGraphic'

const ResourcesPage = () => {
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
                <iframe
                    className={styles.verticalPdfViewer}
                    src="/pdfs/Austin_Aitken_Resume.pdf"
                    title="Resume"
                />
            </section>
            <section className={styles.sectionContainer}>
                <h2>Transcript</h2>
                <p>Last Updated: January 2024</p>
                <iframe
                    className={styles.horizontalPdfViewer}
                    src="/pdfs/Austin_Aitken_Transcript.pdf"
                    title="Transcript"
                />
            </section>
        </section>
    )
}

export default ResourcesPage
