import { useGlobalContext } from '@/common/context/useGlobalContext'
import SectionPreview from '@/common/components/PagePreview/PagePreview'
import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'
import { professionalWordDrawing } from '@/common/constants/animated-drawings'

import nasdaqLogo from '@/assets/images/verafin/NDAQ.svg'

import styles from './Experience.module.css'

const Experience = () => {
    const { experienceRef } = useGlobalContext()
    const handleVerafinLogoClick = () => {
        window.open('https://verafin.com/canada/', '_blank')
    }

    return (
        <SectionPreview
            sectionRef={experienceRef}
            containerClassName={styles.container}
            topClassName={styles.containerTop}
            topLeftClassName={styles.containerTopLeft}
            topRightClassName={styles.containerTopRight}
            bottomClassName={styles.containerBottom}
            titleClassName={styles.title}
            animatedWordContainerClassName={styles.nameContainer}
            descriptionClassName={styles.description}
            buttonClassName={styles.button}
            title="An Experienced"
            animatedWord={<AnimatedDrawing drawing={professionalWordDrawing} />}
            graphic={<img className={styles.nasdaqLogo} src={nasdaqLogo} alt="Nasdaq Logo" />}
            description="Catching financial fraud for the largest institutions in North America."
            ctaLabel="View Experience"
            onCtaClick={handleVerafinLogoClick}
        >
            {/* <img
                className={styles.verafinLogo}
                style={{
                    width: '100%',
                    // maxWidth: '300px',
                    // margin: '30px auto',
                    marginTop: '10px',
                    marginBottom: '50px',
                }}
                src={verafinLogo}
                alt="Verafin Logo"
                onClick={handleVerafinLogoClick}
            /> */}
            {/* <h2 style={{ marginBottom: '10px' }}>Protection in Real-Time</h2>
            <p style={{ marginBottom: '20px' }} className="mediumDescription">
                I pioneered the company's real-time fraud detection of payment services like
                E-Transfer and Zelle.
            </p>
            <RealtimePaymentsFraud />
            <h2 style={{ marginBottom: '10px' }}>Big Data for Big Results</h2>
            <p style={{ marginBottom: '20px' }} className="mediumDescription">
                I designed, implemented, and maintained a production big data pipeline to analyze
                thousands of financial institutions banking data for fraud.
            </p>
            <BigData />
            <h2 style={{ marginBottom: '10px' }}>Training Crime Fighters</h2>
            <p style={{ marginBottom: '20px' }} className="mediumDescription">
                I mentored and supervised new software developers to achieve full-time employment
                and become top performers.
            </p>
            <Supervisor />
            <h2 style={{ marginTop: '30px', marginBottom: '10px' }}>Heroism Recognized</h2>
            <p style={{ marginBottom: '20px' }} className="mediumDescription">
                I won the company's annual hackathon by detecting potential animal trafficking
                through banking and online data.
            </p>
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" /> */}
        </SectionPreview>
    )
}

export default Experience
