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
// import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'

const screenshotItems = [
    { src: phaunaScreenshot1, alt: 'Phauna App Screenshot 1' },
    { src: phaunaScreenshot2, alt: 'Phauna App Screenshot 2' },
    { src: phaunaScreenshot3, alt: 'Phauna App Screenshot 3' },
]

// const featuredContent = {
//     titleStart: 'Driven By',
//     titleEnd: 'Clinical Data',
//     description: 'Complete and auditable clinical data built to support remote veterinary care.',
//     buttonLabel: 'Learn More',
// }

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
        buttonAction: () => {},
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
    // {
    //     titleStart: 'Clinical Decision',
    //     titleEnd: 'Support',
    //     titleEndDrawing: problemSolverPhraseDrawing,
    //     description: 'Use clinical data to advise diagnostic and therapeutic decisions.',
    //     content: (
    //         <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
    //     ),
    //     buttonAction: () => {},
    //     buttonLabel: 'Learn More',
    // },
    {
        titleStart: 'Automated',
        titleEnd: 'Evidence Collection',
        titleEndDrawing: problemSolverPhraseDrawing,
        description: 'Automating the collection of clinical evidence for virtual veterinary care.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
        buttonAction: () => {},
        buttonLabel: 'View Automation',
    },
    // {
    //     titleStart: 'Custom',
    //     titleEnd: 'Mobile',
    //     titleEndDrawing: problemSolverPhraseDrawing,
    //     description: 'Integrated C and Swift code for cross-platform development.',
    //     content: (
    //         <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
    //     ),
    // },
    // {
    //     titleStart: 'Something',
    //     titleEnd: 'Else',
    //     titleEndDrawing: problemSolverPhraseDrawing,
    //     description:
    //         'I demoed live a new product feature I implemented to over 700 enterprise clients and stakeholders.',
    //     content: (
    //         <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
    //     ),
    // },
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
                description="A veterinary telemedicine platform with the tools vital for remote care."
                buttonLabel={'Contact Me'}
                buttonAction={() => {}}
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
            {/* <div className={styles.mainContentContainer}>
                <section className={styles.mainContentLayout}>
                    <div className={styles.titleContainer}>
                        <h2
                            className={styles.title}
                            aria-label={`${featuredContent.titleStart} ${featuredContent.titleEnd}`}
                        >
                            {featuredContent.titleStart}
                            <span className={styles.visuallyHidden}>
                                {' '}
                                {featuredContent.titleEnd}
                            </span>
                        </h2>
                        <div className={styles.titleDrawing}>
                            <AnimatedDrawing
                                drawing={problemSolverPhraseDrawing}
                                aria-hidden="true"
                                focusable="false"
                                strokeColor={'var(--color-text-primary)'}
                            />
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <TrioAppScreenshots screenshots={screenshotItems} />
                    </div>
                    <p className={`mediumDescription ${styles.description}`}>
                        {featuredContent.description}
                    </p>
                    <button className={`secondaryButton ${styles.button}`} onClick={() => {}}>
                        {featuredContent.buttonLabel}
                    </button>
                </section>
            </div> */}
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
                        buttonAction={() => {}}
                        contentSide={index % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </div>
            {/* <div className={styles.sectionsContainer}>
                {PhaunaPageContent.map(
                    ({
                        titleStart,
                        titleEnd,
                        titleEndDrawing,
                        description,
                        content,
                        subSections,
                        buttonLabel,
                        buttonAction,
                    }: PageSectionProps) => (
                        <PageSection
                            key={`${titleStart}-${titleEnd}`}
                            titleStart={titleStart}
                            titleEnd={titleEnd}
                            titleEndDrawing={titleEndDrawing}
                            description={description}
                            content={content}
                            subSections={subSections}
                            buttonLabel={buttonLabel}
                            buttonAction={buttonAction}
                        />
                    )
                )}
            </div> */}
        </section>
    )
}

export default PhaunaPage
