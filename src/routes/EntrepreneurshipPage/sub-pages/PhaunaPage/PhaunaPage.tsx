import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './PhaunaPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import phaunaLogo from '@/assets/images/phauna/Phauna_Logo.png'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'
import type { PageSectionProps } from '@/common/components/pages/PageSection/PageSection'
import PageSection from '@/common/components/pages/PageSection/PageSection'

const PhaunaPageContent: PageSectionProps[] = [
    {
        description:
            "I pioneered the company's real-time fraud detection of payment services like E-Transfer and Zelle.",
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
        titleStart: 'Protection in',
        titleEnd: 'Real-Time',
        titleEndDrawing: problemSolverPhraseDrawing,
        // subSections: [
        //     {
        //         title: 'Sub-Second Analysis',
        //         description:
        //             'By optimizing our data pipeline, I reduced processing time by 30% and costs by 20%.',
        //         // content: () => (
        //         //     <img
        //         //         className={styles.goldMedal}
        //         //         src={goldMedal}
        //         //         alt="Verafin Hackathon Winner"
        //         //     />
        //         // ),
        //     },
        //     {
        //         title: 'Rest API',
        //         description:
        //             'I developed a REST API to provide real-time fraud insights to clients, enhancing their ability to respond swiftly.',
        //         // content: () => (
        //         //     <img
        //         //         className={styles.goldMedal}
        //         //         src={goldMedal}
        //         //         alt="Verafin Hackathon Winner"
        //         //     />
        //         // ),
        //     },
        //     {
        //         title: 'Machine Learning',
        //         description:
        //             'I implemented machine learning models that improved fraud detection accuracy by 25%, significantly reducing false positives.',
        //         // content: () => (
        //         //     <img
        //         //         className={styles.goldMedal}
        //         //         src={goldMedal}
        //         //         alt="Verafin Hackathon Winner"
        //         //     />
        //         // ),
        //     },
        // ],
    },
    {
        titleStart: 'Big Data',
        titleEnd: 'for Big Results',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            "I designed and maintained a big data pipeline to analyze thousands of financial institutions' data for fraud.",
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Training',
        titleEnd: 'Crime Fighters',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'I supervised new software developers to achieve full-time employment and become top performers.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Heroism',
        titleEnd: 'Recognized',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'I won the company’s annual hackathon by detecting potential animal trafficking through banking and online data.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Commanding',
        titleEnd: 'the Stage',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'I demoed live a new product feature I implemented to over 700 enterprise clients and stakeholders.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'Something',
        titleEnd: 'Else',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'I demoed live a new product feature I implemented to over 700 enterprise clients and stakeholders.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
]

const PhaunaPage = () => {
    return (
        <section className={styles.container}>
            <PageIntroduction
                titleStart="Virtual Veterinary"
                titleEnd="Care"
                titleEndDrawing={problemSolverPhraseDrawing}
                // content={<TrioAppScreenshots screenshots={screenshotItems} />}
                content={<img src={phaunaLogo} alt="Phauna Logo" />}
                description="A veterinary telemedicine platform with the tools for remote care."
                buttonLabel={'Contact Me'}
                buttonAction={() => {}}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>
                        Phauna Technologies&nbsp;&nbsp;&middot;&nbsp;&nbsp;Founder
                    </p>
                    <p className={styles.experienceDate}>Nov 2023 &mdash; Mar 2026</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.sectionsContainer}>
                {PhaunaPageContent.map(
                    ({
                        titleStart,
                        titleEnd,
                        titleEndDrawing,
                        description,
                        content,
                        subSections,
                    }: PageSectionProps) => (
                        <PageSection
                            key={`${titleStart}-${titleEnd}`}
                            titleStart={titleStart}
                            titleEnd={titleEnd}
                            titleEndDrawing={titleEndDrawing}
                            description={description}
                            content={content}
                            subSections={subSections}
                        />
                    )
                )}
            </div>
        </section>
    )
}

export default PhaunaPage
