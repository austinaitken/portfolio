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
            'Designed and implemented distributed Scala workloads on Apache Spark, orchestrated via AWS EMR.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Production Data',
        titleEnd: 'Pipeline',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Orchestrated EMR workloads using AWS Step Functions, loading results into production RDS databases.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Reduced',
        titleEnd: 'Time & Cost',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Reduced fraud analysis time by over 90% while significantly lowering infrastructure costs.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Real-Time',
        titleEnd: 'Monitoring',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Implemented real-time monitoring and alerting with AWS CloudWatch for pipeline reliability and data integrity.',
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
                description="Developed a big data pipeline to analyze ~3k institutions' activity for fraud."
                buttonLabel="Contact Me"
                buttonAction={() => {}}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Technical Overview</p>
                    {/* <p className={styles.experienceMain}>Bachelor of Engineering (Computer)</p> */}
                    <p className={styles.experienceDate}>
                        * Technical details omitted due to NDA *
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
