import styles from './ExperiencePage.module.css'
// import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'
import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
// import mdiumNewspaperHeadshotImage from '@/assets/images/mdium/Mdium_Newspaper_Headshot.png'
// import nasdaqLogo from '@/assets/images/verafin/NDAQ.svg'

// import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'
// import PageSubSection from '@/common/components/pages/PageSubSection/PageSubSection'
import type { PageSectionProps } from '@/common/components/pages/PageSection/PageSection'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import NasdaqVerafinGraphic from '../HomePage/NasdaqVerafinGraphic/NasdaqVerafinGraphic'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
// import phaunaScreenshot1 from '@/assets/images/App_Screenshot.jpeg'
// import phaunaScreenshot2 from '@/assets/images/App_Screenshot.jpeg'
// import phaunaScreenshot3 from '@/assets/images/App_Screenshot.jpeg'
import { useNavigate } from 'react-router-dom'
// import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'
// import TrioAppScreenshots from '@/common/components/TrioAppScreenshots/TrioAppScreenshots'
// import RealtimePaymentsFraud from '../Home2/components/Experience/components/RealtimePaymentsFraud/RealtimePaymentsFraud'

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
    // {
    //     titleStart: 'Commanding',
    //     titleEnd: 'the Stage',
    //     titleEndDrawing: problemSolverPhraseDrawing,
    //     description:
    //         'Demoed a new product feature I implemented to over 700 enterprise clients and stakeholders.',
    //     content: (
    //         <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
    //     ),
    //     buttonAction: () => {},
    //     buttonLabel: 'Learn More',
    // },
    // {
    //     titleStart: 'Commanding',
    //     titleEnd: 'the Stage2',
    //     titleEndDrawing: problemSolverPhraseDrawing,
    //     description:
    //         'Demoed a new product feature I implemented to over 700 enterprise clients and stakeholders.',
    //     content: (
    //         <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
    //     ),
    //     buttonAction: () => {},
    //     buttonLabel: 'Learn More',
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
    //     buttonAction: () => {},
    //     buttonLabel: 'Learn More',
    // },
]

// const screenshotItems = [
//     { src: phaunaScreenshot1, alt: 'Phauna App Screenshot 1' },
//     { src: phaunaScreenshot2, alt: 'Phauna App Screenshot 2' },
//     { src: phaunaScreenshot3, alt: 'Phauna App Screenshot 3' },
// ]

// const featuredContent = {
//     titleStart: 'Fighting',
//     titleEnd: 'Fraudsters',
//     description:
//         'Developed cloud-based fraud detection agents to identify high-risk activity across financial institutions.',
//     buttonLabel: 'Visit Verafin',
// }

const ExperiencePage = () => {
    const navigate = useNavigate()

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className={styles.container}>
            <PageIntroduction
                titleStart="An Experienced"
                titleEnd="Professional"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<NasdaqVerafinGraphic />}
                description="Catching financial fraud for the largest institutions in North America."
                buttonLabel="Contact Me"
                buttonAction={scrollToContact}
            />
            {/* <section
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '3.5rem',
                    marginTop: '2.5rem',
                }}
            >
                <p className="contextText" style={{ textAlign: 'center', marginRight: '0px' }}>
                    <span>Nasdaq Verafin</span>
                    <span>&nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;</span>
                    <span>Software Developer</span>
                    <span>&nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;</span>
                    <span>May 2022&nbsp;&nbsp;&mdash;&nbsp;&nbsp;Nov 2023</span>
                </p>
            </section> */}
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
            </div>
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Achievement Overview</p>
                </div>
                <span className={styles.dividerLine} />
            </div> */}
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
                        buttonAction={() => navigate(preview.routePath)}
                        contentSide={index % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </div>
            {/* <div className={styles.sectionsContainer}>
                {experiencePageContent.map(
                    ({
                        titleStart,
                        titleEnd,
                        titleEndDrawing,
                        description,
                        content,
                        subSections,
                        buttonAction,
                        buttonLabel,
                    }) => (
                        <PageSection
                            key={`${titleStart}-${titleEnd}`}
                            titleStart={titleStart}
                            titleEnd={titleEnd}
                            titleEndDrawing={titleEndDrawing}
                            description={description}
                            content={content}
                            subSections={subSections}
                            buttonAction={buttonAction}
                            buttonLabel={buttonLabel}
                        />
                    )
                )}
            </div> */}
            {/* <section className={styles.sectionContainer}>
                        <div className={styles.sectionTitleContainer}>
                            <h2>Protection in Real-Time</h2>
                            <p className="mediumDescription">
                                I pioneered the company's real-time fraud detection of payment
                                services like E-Transfer and Zelle.
                            </p>
                        </div>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                        <div className={styles.subSectionTitleContainer}>
                            <h3>Sub-Second Analysis</h3>
                            <p className="smallDescription">
                                By optimizing our data pipeline, I reduced processing time by 30%
                                and costs by 20%.
                            </p>
                        </div>
                        <div className={styles.subSectionTitleContainer}>
                            <h3>Rest API</h3>
                            <p className="smallDescription">
                                By optimizing our data pipeline, I reduced processing time by 30%
                                and costs by 20%.
                            </p>
                        </div>
                        <div className={styles.subSectionTitleContainer}>
                            <h3>Machine Learning</h3>
                            <p className="smallDescription">
                                By optimizing our data pipeline, I reduced processing time by 30%
                                and costs by 20%.
                            </p>
                        </div>
                    </section>
                    <section className={styles.sectionContainer}>
                        <div className={styles.sectionTitleContainer}>
                            <h2>Big Data for Big Results</h2>
                            <p className="mediumDescription">
                                I designed and maintained a big data pipeline to analyze thousands
                                of financial institutions' data for fraud.
                            </p>
                        </div>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                        <div className={styles.subSectionTitleContainer}>
                            <h3>Reduced Time & Cost</h3>
                            <p className="smallDescription">
                                By optimizing our data pipeline, I reduced processing time by 30%
                                and costs by 20%.
                            </p>
                        </div>
                        <div className={styles.subSectionTitleContainer}>
                            <h3>Latest Technologies</h3>
                            <p className="smallDescription">
                                By optimizing our data pipeline, I reduced processing time by 30%
                                and costs by 20%.
                            </p>
                        </div>
                        <div className={styles.subSectionTitleContainer}>
                            <h3>Scalable Solutions</h3>
                            <p className="smallDescription">
                                By optimizing our data pipeline, I reduced processing time by 30%
                                and costs by 20%.
                            </p>
                        </div>
                    </section>
                    <section className={styles.sectionContainer}>
                        <h2>Training Crime Fighters</h2>
                        <p className="mediumDescription">
                            I mentored and supervised new software developers to achieve full-time
                            employment and become top performers.
                        </p>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                    </section>
                    <section className={styles.sectionContainer}>
                        <h2>Heroism Recognized</h2>
                        <p className="mediumDescription">
                            I won the company's annual hackathon by detecting potential animal
                            trafficking through banking and online data.
                        </p>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                    </section>
                </div>
            </section> */}
        </section>
    )
}

export default ExperiencePage
