import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './HackathonWinnerPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import NasdaqVerafinGraphic from '@/routes/HomePage/NasdaqVerafinGraphic/NasdaqVerafinGraphic'
import type { PageSectionProps } from '@/common/components/pages/PageSection/PageSection'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'

const hackathonPageContent: PageSectionProps[] = [
    {
        titleStart: 'Evidence Design',
        titleEnd: 'Technologies',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Developed the core evidence criteria of animal trafficking behaviour through financial and online data.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Web Scrapping',
        titleEnd: 'Pipeline',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Searched online marketplaces and news articles to determine potential affiliations to animal trafficking.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Less than',
        titleEnd: 'One Week',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'The fraud detecting agent was developed in less than one week to earn the first place award.',
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

const HackathonWinnerPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Heroism"
                titleEnd="Recognized"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<NasdaqVerafinGraphic />}
                description="Won the annual hackathon by detecting high-risk animal trafficking behaviour."
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
