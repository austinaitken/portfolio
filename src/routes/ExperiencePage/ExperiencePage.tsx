import styles from './ExperiencePage.module.css'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'
import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import type { PageSectionProps } from '@/common/components/pages/PageSection/PageSection'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import NasdaqVerafinGraphic from '../HomePage/NasdaqVerafinGraphic/NasdaqVerafinGraphic'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import { useNavigate } from 'react-router'

type ExperiencePreviewProps = PageSectionProps & {
    routePath: string
}

const experiencePageContent: ExperiencePreviewProps[] = [
    {
        titleStart: 'Protection in',
        titleEnd: 'Real-Time',
        titleEndDrawing: problemSolverPhraseDrawing,
        description: 'Pioneered real-time fraud detection of payment services like FedNow.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
        routePath: '/experience/real-time-fraud-analysis',
        buttonLabel: 'Learn More',
    },
    {
        titleStart: 'Big Data',
        titleEnd: 'for Big Results',
        titleEndDrawing: problemSolverPhraseDrawing,
        description: 'Developed a big data pipeline to analyze fraud for ~3k institutions.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
        routePath: '/experience/big-data-pipeline',
        buttonLabel: 'Learn More',
    },
    {
        titleStart: 'Training',
        titleEnd: 'Crime Fighters',
        titleEndDrawing: problemSolverPhraseDrawing,
        description: 'Supervised new software developers to become top performers.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
        routePath: '/experience/supervisor',
        buttonLabel: 'Learn More',
    },
    {
        titleStart: 'Heroism',
        titleEnd: 'Recognized',
        titleEndDrawing: problemSolverPhraseDrawing,
        description: 'Won a hackathon by detecting high-risk animal trafficking activity.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
        routePath: '/experience/hackathon-winner',
        buttonLabel: 'Learn More',
    },
]

const ExperiencePage = () => {
    const navigate = useNavigate()

    return (
        <section className={styles.container}>
            <PageIntroduction
                titleStart="An Experienced"
                titleEnd="Professional"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<NasdaqVerafinGraphic />}
                description="Catching financial fraud for the largest institutions in North America."
                buttonLabel="Contact Me"
                buttonAction={() => void navigate('/contact-me')}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>
                        Nasdaq Verafin&nbsp;&nbsp;&middot;&nbsp;&nbsp;Software Developer
                    </p>
                    <p className={styles.experienceDate}>May 2022 &mdash; Nov 2023</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.pagePreviewsContainer}>
                {experiencePageContent.map((preview, index) => (
                    <PagePreview
                        key={`${preview.titleStart}-${preview.titleEnd}`}
                        titleStart={preview.titleStart}
                        titleEnd={preview.titleEnd}
                        titleEndDrawing={preview.titleEndDrawing}
                        content={preview.content}
                        description={preview.description}
                        buttonLabel={preview.buttonLabel ?? 'Learn More'}
                        buttonAction={() => void navigate(preview.routePath)}
                        contentSide={index % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </div>
        </section>
    )
}

export default ExperiencePage
