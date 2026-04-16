import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './HackathonWinnerPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import NasdaqVerafinGraphic from '@/routes/HomePage/NasdaqVerafinGraphic/NasdaqVerafinGraphic'
import type { PageSectionProps } from '@/common/components/pages/PageSection/PageSection'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'

const hackathonPageContent: PageSectionProps[] = [
    {
        titleStart: 'Real-Time',
        titleEnd: 'Monitoring',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Engineered a fraud detection agent to identify animal trafficking risk using financial and online data.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Evidence Design',
        titleEnd: 'Technologies',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Designed financial indicators to detect patterns consistent with illicit animal trafficking activity.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Web Scraping',
        titleEnd: 'Pipeline',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Integrated news and online marketplaces to identify potential animal trafficking affiliates.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Less than',
        titleEnd: 'One Week',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Built the fraud detection agent prototype in one week to win first place in the hackathon.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
]

const HackathonWinnerPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Heroism"
                titleEnd="Recognized"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<NasdaqVerafinGraphic />}
                description="Won a hackathon by detecting high-risk animal trafficking activity."
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
                {hackathonPageContent.map((item, index) => {
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

export default HackathonWinnerPage
