import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import { useNavigate } from 'react-router-dom'

import styles from './EntrepreneurshipPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
// import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'
import mdiumNewspaperHeadshotImage from '@/assets/images/mdium/Mdium_Newspaper_Headshot.png'
import phaunaLogo from '@/assets/images/phauna/Phauna_Logo.png'
import mdiumLogo from '@/assets/images/mdium/Mdium_Logo.png'

// import YouTubeVideo from '@/common/components/YouTubeVideo/YouTubeVideo'

// import mdiumNewspaper from '@/assets/images/mdium/Mdium_Newspaper 3.jpg'
// import { useEffect, useRef, useState } from 'react'
// import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'
import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'

// const STAR_PATH =
//     'M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z'

const EntrepreneurshipPage = () => {
    const navigate = useNavigate()

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
    // const starsContainerRef = useRef<HTMLDivElement | null>(null)
    // const [areStarsVisible, setAreStarsVisible] = useState(false)

    // useEffect(() => {
    //     const target = starsContainerRef.current
    //     if (!target) {
    //         return
    //     }

    //     if (typeof IntersectionObserver === 'undefined') {
    //         setAreStarsVisible(true)
    //         return
    //     }

    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             const entry = entries[0]
    //             if (entry?.isIntersecting) {
    //                 setAreStarsVisible(true)
    //                 observer.unobserve(target)
    //             }
    //         },
    //         { threshold: 0.35 }
    //     )

    //     observer.observe(target)

    //     return () => {
    //         observer.disconnect()
    //     }
    // }, [])

    return (
        <section className={styles.container}>
            <PageIntroduction
                titleStart="An Entrepreneurial"
                titleEnd="Flame"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<img src={mdiumNewspaperHeadshotImage} alt="Entrepreneurship" />}
                description="Turning ideas into live consumer products to solve real problems."
                buttonLabel="Contact Me"
                buttonAction={scrollToContact}
            />
            <div className={styles.previewRow}>
                <PagePreview
                    titleStart="Virtual Veterinary"
                    titleEnd="Care"
                    titleEndDrawing={problemSolverPhraseDrawing}
                    // content={<TrioAppScreenshots screenshots={screenshotItems} />}
                    content={<img src={phaunaLogo} alt="Phauna Logo" />}
                    description="A veterinary telemedicine platform with the tools for remote care."
                    buttonLabel={'View Phauna'}
                    buttonAction={() => navigate('/entrepreneurship/phauna')}
                />
                <PagePreview
                    titleStart="Send Files"
                    titleEnd="Anywhere"
                    titleEndDrawing={problemSolverPhraseDrawing}
                    content={<img src={mdiumLogo} alt="Mdium Logo" />}
                    // content={<TrioAppScreenshots screenshots={screenshotItems} />}
                    description="Transfer large files through emails, links, and short-lived codes."
                    buttonLabel={'View Mdium'}
                    buttonAction={() => navigate('/entrepreneurship/mdium')}
                />
            </div>
            {/* <section className={styles.bodyContainer}>
                <section className={styles.sectionContainer}>
                    <div className={styles.sectionTitleContainer}>
                        <h2>Driven by Clinical Data</h2>
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
                        <h3>Interoperability</h3>
                        <p className="smallDescription">
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                    </div>
                    <div className={styles.subSectionTitleContainer}>
                        <h3>Auditability</h3>
                        <p className="smallDescription">
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                    </div>
                    <div className={styles.subSectionTitleContainer}>
                        <h3>Comprehensive</h3>
                        <p className="smallDescription">
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                    </div>
                </section>
                <section className={styles.sectionContainer}>
                    <div className={styles.sectionTitleContainer}>
                        <h2>Solving Virtual Exams</h2>
                        <p className="mediumDescription">
                            I designed and maintained a big data pipeline to analyze thousands of
                            financial institutions' data for fraud.
                        </p>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                    </div>

                    <div className={styles.subSectionTitleContainer}>
                        <h3>Morphology & Physiology</h3>
                        <p className="smallDescription">
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                    </div>
                    <div className={styles.subSectionTitleContainer}>
                        <h3>Latest Technologies</h3>
                        <p className="smallDescription">
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                    </div>
                    <div className={styles.subSectionTitleContainer}>
                        <h3>Scalable Solutions</h3>
                        <p className="smallDescription">
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                    </div>
                </section>
                <section className={styles.sectionContainer}>
                    <h2>Automated Care</h2>
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
            </section> */}
            {/* <section className={styles.bodyContainer}>
                <section className={styles.sectionContainer}>
                    <div className={styles.sectionTitleContainer}>
                        <h2>Making Headlines</h2>
                        <p className="mediumDescription">
                            From NTV News to the Business front page, Mdium was making waves.
                        </p>
                        <div className={styles.newsMediaContainer}>
                            <img
                                className={`clickable ${styles.newspaper}`}
                                src={mdiumNewspaper}
                                alt="The Mdium Newspaper"
                                onClick={() => {}}
                            />
                            <YouTubeVideo videoId="HqyS-xeRvQw" />
                        </div>
                    </div>
                </section>
                <section className={styles.sectionContainer}>
                    <div className={styles.sectionTitleContainer}>
                        <h2>Satisfying Customers</h2>
                        <p className="mediumDescription">
                            Reached over 30k users with 140k+ file transfers achieving an
                            outstanding rating of 4.6/5.
                        </p>
                        <div ref={starsContainerRef} className={styles.starsContainer}>
                            {[0, 1, 2, 3, 4].map((starIndex) => (
                                <svg
                                    key={starIndex}
                                    className={styles.starSvg}
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        className={`${styles.starFillPath} ${areStarsVisible ? (starIndex === 4 ? styles.starFillAnimatePartial : styles.starFillAnimate) : ''} ${styles[`starFillDelay${starIndex + 1}`]}`}
                                        d={STAR_PATH}
                                    />
                                    <path
                                        className={`${styles.starPath} ${areStarsVisible ? styles.starPathAnimate : ''} ${styles[`starDelay${starIndex + 1}`]}`}
                                        pathLength="1"
                                        d={STAR_PATH}
                                    />
                                </svg>
                            ))}
                        </div>
                    </div>

                    <div className={styles.subSectionTitleContainer}>
                        <h3>Morphology & Physiology</h3>
                        <p className="smallDescription">
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                    </div>
                    <div className={styles.subSectionTitleContainer}>
                        <h3>Latest Technologies</h3>
                        <p className="smallDescription">
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                    </div>
                    <div className={styles.subSectionTitleContainer}>
                        <h3>Scalable Solutions</h3>
                        <p className="smallDescription">
                            By optimizing our data pipeline, I reduced processing time by 30% and
                            costs by 20%.
                        </p>
                        <img
                            className={styles.goldMedal}
                            src={goldMedal}
                            alt="Verafin Hackathon Winner"
                        />
                    </div>
                </section>
                <section className={styles.sectionContainer}>
                    <h2>Automated Care</h2>
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
            </section> */}
        </section>
    )
}

export default EntrepreneurshipPage
