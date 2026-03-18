import styles from './ExperiencePage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'

import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'

const ExperiencePage = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className={styles.container}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                }}
            >
                <div className={styles.titleContainer}>
                    <h1 className={styles.title} aria-label="An Experienced Professional">
                        An Experienced
                        <span className={styles.visuallyHidden}> Professional</span>
                    </h1>
                    <div className={styles.titleDrawing}>
                        <AnimatedDrawing
                            drawing={problemSolverPhraseDrawing}
                            aria-hidden="true"
                            focusable="false"
                        />
                    </div>
                </div>
                <p className={`largeDescription ${styles.description}`}>
                    Catching financial fraud for the largest institutions in North America.
                </p>
                <button className={styles.button} onClick={scrollToContact}>
                    Contact Me
                </button>
            </div>
            <section className={styles.bodyContainer}>
                <h1 style={{ margin: '0px', padding: '0px' }}>Nasdaq Verafin</h1>
                <section className={styles.sectionContainer}>
                    <div className={styles.sectionTitleContainer}>
                        <h2>Protection in Real-Time</h2>
                        <p className="mediumDescription">
                            I pioneered the company's real-time fraud detection of payment services
                            like E-Transfer and Zelle.
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
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                    </div>
                    <div className={styles.subSectionTitleContainer}>
                        <h3>Rest API</h3>
                        <p className="smallDescription">
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                    </div>
                    <div className={styles.subSectionTitleContainer}>
                        <h3>Machine Learning</h3>
                        <p className="smallDescription">
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                    </div>
                </section>
                <section className={styles.sectionContainer}>
                    <div className={styles.sectionTitleContainer}>
                        <h2>Big Data for Big Results</h2>
                        <p className="mediumDescription">
                            I designed and maintained a big data pipeline to analyze thousands of
                            financial institutions' data for fraud.
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
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                    </div>
                    <div className={styles.subSectionTitleContainer}>
                        <h3>Latest Technologies</h3>
                        <p className="smallDescription">
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                    </div>
                    <div className={styles.subSectionTitleContainer}>
                        <h3>Scalable Solutions</h3>
                        <p className="smallDescription">
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
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
            </section>
        </section>
    )
}

export default ExperiencePage
