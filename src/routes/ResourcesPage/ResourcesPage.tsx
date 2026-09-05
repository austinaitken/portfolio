import styles from './ResourcesPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import ResourcePreviewGraphic from './components/ResourcePreviewGraphic/ResourcePreviewGraphic'
import PdfDocument from './components/PdfDocument/PdfDocument'
import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'
import { useNavigate } from 'react-router'

const ResourcesPage = () => {
    const navigate = useNavigate()
    const resumePdfSrc = '/pdfs/Austin_Aitken_Resume.pdf'
    const transcriptPdfSrc = '/pdfs/Austin_Aitken_Transcript.pdf'

    return (
        <section className={styles.container}>
            <PageIntroduction
                titleStart="Explore"
                titleEnd="Resources"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<ResourcePreviewGraphic />}
                description="View or download resources related to my work and education."
                buttonLabel="Contact Me"
                buttonAction={() => void navigate('/contact-me')}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Document Overview</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.documentsRow}>
                <section className={styles.sectionContainer}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title} aria-label="Latest Resume">
                            Latest
                            <span className={styles.visuallyHidden}> Resume</span>
                        </h2>
                        <div className={styles.titleDrawing}>
                            <AnimatedDrawing
                                drawing={problemSolverPhraseDrawing}
                                aria-hidden="true"
                                focusable="false"
                                strokeColor={'var(--color-text-primary)'}
                            />
                        </div>
                    </div>
                    <PdfDocument file={resumePdfSrc} />
                </section>
                <section className={styles.sectionContainer}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title} aria-label="Undergraduate Transcript">
                            Undergraduate
                            <span className={styles.visuallyHidden}> Transcript</span>
                        </h2>
                        <div className={styles.titleDrawing}>
                            <AnimatedDrawing
                                drawing={problemSolverPhraseDrawing}
                                aria-hidden="true"
                                focusable="false"
                                strokeColor={'var(--color-text-primary)'}
                            />
                        </div>
                    </div>
                    <PdfDocument file={transcriptPdfSrc} />
                </section>
            </div>
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>GitHub Overview</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div>
                <div>
                    <p>Cloud Infrastructure</p>
                    <button>VPC</button>
                    <button>Database</button>
                    <button>User Auth</button>
                </div>
                <div>
                    <p>Flutter</p>
                    <button>Kinesis Video Streams Plugin</button>
                </div>
            </div>
        </section>
    )
}

export default ResourcesPage
