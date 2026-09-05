import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './PhaunaPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import phaunaLogo from '@/assets/images/phauna/Phauna_Logo.png'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'
import type { PageSectionProps } from '@/common/components/pages/PageSection/PageSection'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import TrioAppScreenshots from '@/common/components/TrioAppScreenshots/TrioAppScreenshots'
import phaunaScreenshot1 from '@/assets/images/App_Screenshot.jpeg'
import phaunaScreenshot2 from '@/assets/images/App_Screenshot.jpeg'
import phaunaScreenshot3 from '@/assets/images/App_Screenshot.jpeg'
import { useNavigate } from 'react-router'

const screenshotItems = [
    { src: phaunaScreenshot1, alt: 'Phauna App Screenshot 1' },
    { src: phaunaScreenshot2, alt: 'Phauna App Screenshot 2' },
    { src: phaunaScreenshot3, alt: 'Phauna App Screenshot 3' },
]

const PhaunaPage = () => {
    const navigate = useNavigate()

    const phaunaPageContent: PageSectionProps[] = [
        {
            titleStart: 'Advanced',
            titleEnd: 'Virtual Exams',
            titleEndDrawing: problemSolverPhraseDrawing,
            description: 'Assessing patients through video-based physical examinations.',
            content: (
                <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
            ),
            buttonLabel: 'View Exam',
            buttonAction: () => void navigate('/entrepreneurship/phauna/virtual-exams'),
        },
        {
            titleStart: 'Driven By',
            titleEnd: 'Clinical Data',
            titleEndDrawing: problemSolverPhraseDrawing,
            description: 'Building auditable clinical data models for cross-domain interoperability.',
            content: (
                <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
            ),
            buttonAction: () => {},
            buttonLabel: 'View Data Design',
        },
        {
            titleStart: 'Clinical Decision',
            titleEnd: 'Support',
            titleEndDrawing: problemSolverPhraseDrawing,
            description: 'Turning clinical data into diagnostic and treatment recommendations.',
            content: (
                <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
            ),
            buttonAction: () => {},
            buttonLabel: 'View System',
        },
        {
            titleStart: 'Automated',
            titleEnd: 'History Collection',
            titleEndDrawing: problemSolverPhraseDrawing,
            description: 'Automating the collection of patient history for virtual veterinary care.',
            content: (
                <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
            ),
            buttonAction: () => {},
            buttonLabel: 'View Automation',
        },
    ]

    return (
        <section className={styles.container}>
            <PageIntroduction
                titleStart="Virtual Veterinary"
                titleEnd="Care"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<img src={phaunaLogo} alt="Phauna Logo" />}
                description="A veterinary telemedicine platform with the tools vital for remote care."
                buttonLabel={'Contact Me'}
                buttonAction={() => void navigate('/contact-me')}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>
                        Phauna Technologies Inc.&nbsp;&nbsp;&middot;&nbsp;&nbsp;Founder
                    </p>
                    <p className={styles.experienceDate}>Nov 2023 &mdash; Mar 2026</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <PagePreview
                key="the-veterinarian"
                titleStart="The Veterinarian"
                titleEnd=""
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<TrioAppScreenshots screenshots={screenshotItems} />}
                description="Sign up as a virtual veterinarian to care for patients remotely."
                buttonLabel="Learn More"
                buttonAction={() => {}}
                contentSide="left"
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Technical Overview</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.pagePreviewsContainer}>
                {phaunaPageContent.map((preview, index) => (
                    <PagePreview
                        key={`${preview.titleStart}-${preview.titleEnd}`}
                        titleStart={preview.titleStart}
                        titleEnd={preview.titleEnd}
                        titleEndDrawing={preview.titleEndDrawing}
                        content={preview.content}
                        description={preview.description}
                        buttonLabel={preview.buttonLabel ?? 'Learn More'}
                        buttonAction={preview.buttonAction ?? (() => {})}
                        contentSide={index % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </div>
        </section>
    )
}

export default PhaunaPage
