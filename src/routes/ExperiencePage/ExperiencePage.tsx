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

const ExperiencePageContent: PageSectionProps[] = [
    {
        title: 'Protection in Real-Time',
        description:
            "I pioneered the company's real-time fraud detection of payment services like E-Transfer and Zelle.",
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
        subSections: [
            {
                title: 'Sub-Second Analysis',
                description:
                    'By optimizing our data pipeline, I reduced processing time by 30% and costs by 20%.',
                // content: () => (
                //     <img
                //         className={styles.goldMedal}
                //         src={goldMedal}
                //         alt="Verafin Hackathon Winner"
                //     />
                // ),
            },
            {
                title: 'Rest API',
                description:
                    'I developed a REST API to provide real-time fraud insights to clients, enhancing their ability to respond swiftly.',
                // content: () => (
                //     <img
                //         className={styles.goldMedal}
                //         src={goldMedal}
                //         alt="Verafin Hackathon Winner"
                //     />
                // ),
            },
            {
                title: 'Machine Learning',
                description:
                    'I implemented machine learning models that improved fraud detection accuracy by 25%, significantly reducing false positives.',
                // content: () => (
                //     <img
                //         className={styles.goldMedal}
                //         src={goldMedal}
                //         alt="Verafin Hackathon Winner"
                //     />
                // ),
            },
        ],
    },
    {
        title: 'Big Data for Big Results',
        description:
            "I designed and maintained a big data pipeline to analyze thousands of financial institutions' data for fraud.",
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        title: 'Training Crime Fighters',
        description:
            'I mentored and supervised new software developers to achieve full-time employment and become top performers.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        title: 'Heroism Recognized',
        description:
            'I won the company’s annual hackathon by detecting potential animal trafficking through banking and online data.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        title: 'Commanding the Stage',
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
                description="Catching fraud for the largest institutions in North America."
                buttonLabel="Contact Me"
                buttonAction={scrollToContact}
            />
            <div>
                <h2>Nasdaq Verafin</h2>
            </div>
            <div className={styles.sectionsContainer}>
                {ExperiencePageContent.map(({ title, description, content, subSections }) => (
                    <PageSection
                        key={title}
                        title={title}
                        description={description}
                        content={content}
                        subSections={subSections}
                    />
                ))}
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
