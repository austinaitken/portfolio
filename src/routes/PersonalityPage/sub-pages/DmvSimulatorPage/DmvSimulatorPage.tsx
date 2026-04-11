import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './DmvSimulatorPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import GraduationCard from '@/routes/Home2/components/Qualifications/components/GraduationCard/GraduationCard'
import type { PageSectionProps } from '@/common/components/pages/PageSection/PageSection'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'
// import PageSection from '@/common/components/pages/PageSection/PageSection'
import YouTubeVideo from '@/common/components/YouTubeVideo/YouTubeVideo'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'

const dmvSimulatorPageContent: PageSectionProps[] = [
    {
        titleStart: 'Next Level',
        titleEnd: 'Gameplay',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Enjoy 40 minutes of gameplay with 3 alternative endings based on in-game decisions.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'The Latest',
        titleEnd: 'Technologies',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Built on the Unity Engine with C#, DMV Simulator delivers an engaging and humorous gaming experience.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Experience our',
        titleEnd: 'Demo',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Watch the demo that showcases the humorous and engaging gameplay of DMV Simulator.',
        content: <YouTubeVideo videoId="a5QZmygubM8" />,
        buttonAction: () => {},
        buttonLabel: 'Watch Demo',
    },
]

const DmvSimulatorPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Experience Life in"
                titleEnd="DMV Simulator"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<GraduationCard />}
                description="Enjoy renewing your license in this humour-based story game."
                buttonLabel="Contact Me"
                buttonAction={() => {}}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>DMV Simulator</p>
                    <p className={styles.experienceDate}>2020</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.pagePreviewsContainer}>
                {dmvSimulatorPageContent.map((preview, index) => (
                    <PagePreview
                        key={`${preview.titleStart}-${preview.titleEnd}`}
                        titleStart={preview.titleStart}
                        titleEnd={preview.titleEnd}
                        titleEndDrawing={preview.titleEndDrawing}
                        content={preview.content}
                        description={preview.description}
                        buttonLabel={preview.buttonLabel ?? ''}
                        buttonAction={preview.buttonAction ?? (() => {})}
                        contentSide={index % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </div>
        </div>
    )
}

export default DmvSimulatorPage
