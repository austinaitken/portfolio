import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import styles from './ResourcesPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import ResourcePreviewGraphic from './components/ResourcePreviewGraphic/ResourcePreviewGraphic'
import PdfDocument from './components/PdfDocument/PdfDocument'

const ResourcesPage = () => {
    const resumePdfSrc = '/pdfs/Austin_Aitken_Resume.pdf'
    const transcriptPdfSrc = '/pdfs/Austin_Aitken_Transcript.pdf'
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className={styles.container}>
            <PagePreview
                titleStart="Explore"
                titleEnd="Resources"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<ResourcePreviewGraphic />}
                description="View or download resources related to my work and education."
                buttonLabel="Contact Me"
                buttonAction={scrollToContact}
            />
            <section className={styles.sectionContainer}>
                <h2>Resume</h2>
                <p>Last Updated: January 2024</p>
                <PdfDocument file={resumePdfSrc} />
            </section>
            <section className={styles.sectionContainer}>
                <h2>Transcript</h2>
                <p>Last Updated: January 2024</p>
                <PdfDocument file={transcriptPdfSrc} />
            </section>
        </section>
    )
}

export default ResourcesPage
