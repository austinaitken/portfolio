import PagePreview from '@/common/components/PagePreview/PagePreview'

import styles from './ExperiencePage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import nasdaqLogo from '@/assets/images/verafin/NDAQ.svg'
import Supervisor from '../Home2/components/Experience/components/Supervisor/Supervisor'
import BigData from '../Home2/components/Experience/components/BigData/BigData'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'

import RealtimePaymentsFraud from '../Home2/components/Experience/components/RealtimePaymentsFraud/RealtimePaymentsFraud'

const ExperiencePage = () => {
    return (
        <section className={styles.container}>
            <PagePreview
                key="experience"
                titleStart="An Experienced"
                titleEnd="Professional"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<img src={nasdaqLogo} alt="Nasdaq Logo" />}
                description="Catching financial fraud for the largest institutions in North America."
                buttonLabel="Contact Me"
                buttonAction={() => {
                    // Navigate to Experience page
                }}
            />
            <section className={styles.sectionContainer}>
                <h2 style={{ marginBottom: '10px' }}>Protection in Real-Time</h2>
                <p style={{ marginBottom: '20px' }} className="mediumDescription">
                    I pioneered the company's real-time fraud detection of payment services like
                    E-Transfer and Zelle.
                </p>
                <RealtimePaymentsFraud />
            </section>
            <section className={styles.sectionContainer}>
                <h2 style={{ marginBottom: '10px' }}>Big Data for Big Results</h2>
                <p style={{ marginBottom: '20px' }} className="mediumDescription">
                    I designed and maintained a big data pipeline to analyze thousands of financial
                    institutions' data for fraud.
                </p>
                <BigData />
            </section>
            <section className={styles.sectionContainer}>
                <h2 style={{ marginBottom: '10px' }}>Training Crime Fighters</h2>
                <p style={{ marginBottom: '20px' }} className="mediumDescription">
                    I mentored and supervised new software developers to achieve full-time
                    employment and become top performers.
                </p>
                <Supervisor />
            </section>
            <section className={styles.sectionContainer}>
                <h2 style={{ marginBottom: '10px' }}>Heroism Recognized</h2>
                <p style={{ marginBottom: '20px' }} className="mediumDescription">
                    I won the company's annual hackathon by detecting potential animal trafficking
                    through banking and online data.
                </p>
                <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
            </section>
        </section>
    )
}

export default ExperiencePage
