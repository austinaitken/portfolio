import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './RealtimePaymentFraudPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import NasdaqVerafinGraphic from '@/routes/HomePage/NasdaqVerafinGraphic/NasdaqVerafinGraphic'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'
import type { PageSectionProps } from '@/common/components/pages/PageSection/PageSection'
// import PageSection from '@/common/components/pages/PageSection/PageSection'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'

const realtimeFraudPageContent: PageSectionProps[] = [
    {
        titleStart: 'Sub-Second',
        titleEnd: 'Analysis',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Implemented a production REST API for real-time fraud decisioning of payment transactions.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Production',
        titleEnd: 'Restful API',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Implemented AWS Lambda-based filtering for sub-second fraud screening of payment transactions.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'The Latest',
        titleEnd: 'Technologies',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Implemented a Java-based ECS Fargate service for fraud analysis using consortium intelligence.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Precomputed',
        titleEnd: 'Evidence',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Implemented precomputed fraud evidence to avoid expensive query execution paths in decisioning.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
]

const RealtimePaymentFraudPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Protection in"
                titleEnd="Real-Time"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<NasdaqVerafinGraphic />}
                description="Pioneered real-time fraud detection of payment services like FedNow."
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
                {realtimeFraudPageContent.map((item, index) => {
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

export default RealtimePaymentFraudPage
