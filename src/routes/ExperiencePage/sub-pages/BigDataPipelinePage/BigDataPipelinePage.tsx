import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './BigDataPipelinePage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import NasdaqVerafinGraphic from '@/routes/HomePage/NasdaqVerafinGraphic/NasdaqVerafinGraphic'
import type { PageSectionProps } from '@/common/components/pages/PageSection/PageSection'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'
// import PageSection from '@/common/components/pages/PageSection/PageSection'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'

const bigDataPipelinePageContent: PageSectionProps[] = [
    {
        titleStart: 'Big Data',
        titleEnd: 'Technologies',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Developed Scala queries to run on Spark for cloud-based EMR jobs to replace PostgreSQL queries.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Production Data',
        titleEnd: 'Pipeline',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Developed a step function pipeline to run EMR jobs and transform the results into RDS instances.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Reduced',
        titleEnd: 'Time & Cost',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Reduced the time to analyze financial data for potential fraud by over 90% for a fraction of the cost.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Real-Time',
        titleEnd: 'Monitoring',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Developed real-time monitoring methods to ensure the pipeline’s health and quality of results.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
]

const BigDataPipelinePage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Big Data"
                titleEnd="Big Results"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<NasdaqVerafinGraphic />}
                description="Developed a big data pipeline to analyze over 10k institutions' activity for fraud."
                buttonLabel="Contact Me"
                buttonAction={() => {}}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Technical Overview</p>
                    {/* <p className={styles.experienceMain}>Bachelor of Engineering (Computer)</p> */}
                    <p className={styles.experienceDate}>
                        * Technical details omitted for NDA-related purposes *
                    </p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.pagePreviewsContainer}>
                {bigDataPipelinePageContent.map((item, index) => {
                    const {
                        titleStart,
                        titleEnd,
                        titleEndDrawing,
                        description,
                        content,
                        // subSections,
                        buttonAction,
                        buttonLabel,
                    } = item
                    return (
                        <PagePreview
                            key={`${titleStart}-${titleEnd}`}
                            titleStart={titleStart}
                            titleEnd={titleEnd}
                            titleEndDrawing={titleEndDrawing}
                            description={description}
                            content={content}
                            // subSections={subSections}
                            contentSide={index % 2 === 0 ? 'left' : 'right'}
                            buttonAction={buttonAction ?? (() => {})}
                            buttonLabel={buttonLabel ?? ''}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default BigDataPipelinePage
