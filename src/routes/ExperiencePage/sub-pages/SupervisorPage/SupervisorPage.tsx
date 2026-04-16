import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './SupervisorPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import NasdaqVerafinGraphic from '@/routes/HomePage/NasdaqVerafinGraphic/NasdaqVerafinGraphic'
import type { PageSectionProps } from '@/common/components/pages/PageSection/PageSection'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'

const supervisorPageContent: PageSectionProps[] = [
    {
        titleStart: 'Developer',
        titleEnd: 'Supervision',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Led onboarding and mentorship to ramp developers into production-ready contributions.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Regular Code',
        titleEnd: 'Reviews',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Co-designed and reviewed software architectures with the developers before implementation.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Goal-Setting',
        titleEnd: 'Time & Cost',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Served as the primary code reviewer for developer production changes, approving all releases.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Developer',
        titleEnd: 'Growth Engine',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Drove developer growth through structured feedback, performance reviews, and development planning.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
]

const SupervisorPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Training New"
                titleEnd="Crime Fighters"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<NasdaqVerafinGraphic />}
                description="Supervised new software developers to become top performers."
                buttonLabel="Contact Me"
                buttonAction={() => {}}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Supervisorship Overview</p>
                    {/* <p className={styles.experienceMain}>Bachelor of Engineering (Computer)</p> */}
                    {/* <p className={styles.experienceDate}>
                        * Technical details omitted for NDA-related purposes *
                    </p> */}
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.pagePreviewsContainer}>
                {supervisorPageContent.map((item, index) => {
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

export default SupervisorPage
