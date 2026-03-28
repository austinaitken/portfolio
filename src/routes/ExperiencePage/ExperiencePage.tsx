import styles from './ExperiencePage.module.css'
// import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'
import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
// import mdiumNewspaperHeadshotImage from '@/assets/images/mdium/Mdium_Newspaper_Headshot.png'
// import nasdaqLogo from '@/assets/images/verafin/NDAQ.svg'

// import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'
// import PageSubSection from '@/common/components/pages/PageSubSection/PageSubSection'
import PageSection, {
    type PageSectionProps,
} from '@/common/components/pages/PageSection/PageSection'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import NasdaqVerafinGraphic from '../HomePage/NasdaqVerafinGraphic/NasdaqVerafinGraphic'
// import RealtimePaymentsFraud from '../Home2/components/Experience/components/RealtimePaymentsFraud/RealtimePaymentsFraud'

const ExperiencePageContent: PageSectionProps[] = [
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
            "I designed and maintained a big data pipeline to analyze ~10k financial institutions' data for fraud.",
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
            'I demoed a new product feature I implemented to over 700 enterprise clients and stakeholders.',
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

const ExperiencePage = () => {
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
            <section
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '3rem',
                    marginTop: '2.5rem',
                    // border: '1px solid red',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <p className="contextText">Nasdaq Verafin</p>
                    <p>&nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;</p>
                    <p className="contextText">Software Developer</p>
                </div>
                <p className="contextText">May 2022&nbsp;&nbsp;&mdash;&nbsp;&nbsp;Nov 2023</p>
            </section>
            <div className={styles.sectionsContainer}>
                {ExperiencePageContent.map(
                    ({
                        titleStart,
                        titleEnd,
                        titleEndDrawing,
                        description,
                        content,
                        subSections,
                    }) => (
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
