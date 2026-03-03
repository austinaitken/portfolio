import styles from './Phauna.module.css'

// import TrioAppScreenshots from '@/common/components/TrioAppScreenshots/TrioAppScreenshots'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'

import phaunaLogoRightText from '@/assets/images/phauna/Phauna_Logo_Right_Text_Cropped.png'
// import phaunaScreenshot1 from '@/assets/images/App_Screenshot.jpeg'
// import phaunaScreenshot2 from '@/assets/images/App_Screenshot.jpeg'
// import phaunaScreenshot3 from '@/assets/images/App_Screenshot.jpeg'
import phaunaVirtualExamImage from '@/assets/images/phauna/Winnie_Teeth_Screenshot.png'
import fhirLogo from '@/assets/images/HL7_FHIR_Logo.webp'

// const screenshotItems = [
//     { src: phaunaScreenshot1, alt: 'Phauna App Screenshot 1' },
//     { src: phaunaScreenshot2, alt: 'Phauna App Screenshot 2' },
//     { src: phaunaScreenshot3, alt: 'Phauna App Screenshot 3' },
// ]

const Phauna = () => {
    const handleFhirLogoClick = () => {
        window.open('https://hl7.org/fhir/', '_blank')
    }

    return (
        <div className={styles.container}>
            <img
                style={{
                    maxWidth: '400px',
                    maxHeight: '100px',
                    height: 'auto',
                    width: 'auto',
                    marginBottom: '40px',
                }}
                src={phaunaLogoRightText}
                alt="The Phauna Logo with Right Text"
            />
            <p className="mediumDescription" style={{ marginBottom: '20px' }}>
                Advancing Virtual Veterinary Care with Phauna.
            </p>
            {/* <TrioAppScreenshots screenshots={screenshotItems} /> */}
            {/* <h2>Cases Automated</h2>
            <p className="mediumDescription"></p> */}
            <h2 style={{ marginBottom: '10px' }}>Evidence Collection</h2>
            <p className="mediumDescription" style={{ marginBottom: '20px' }}>
                Collecting comprehensive evidence to support clinical decisions is difficult and
                time-consuming in a virtual environment. Phauna streamlines this process by
                automating data collection and analysis.
            </p>
            <img
                className={styles.goldMedal}
                src={goldMedal}
                alt="Verafin Hackathon Winner"
                style={{ marginBottom: '30px' }}
            />
            <h2 style={{ marginBottom: '10px' }}>Clinical Decision Support</h2>
            <p className="mediumDescription" style={{ marginBottom: '20px' }}>
                Phauna utilizes its comprehensive clinical data to advise diagnostic and therapeutic
                decisions.
            </p>
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
            <h2 style={{ marginBottom: '10px' }}>Virtual Exams Advanced</h2>
            <p className="mediumDescription" style={{ marginBottom: '20px' }}>
                Physical exams are essential for veterinary care and often difficult to perform
                remotely.
            </p>
            <img
                alt="Phauna Virtual Exam Feature"
                src={phaunaVirtualExamImage}
                style={{ marginBottom: '30px' }}
            />
            <h2 style={{ marginBottom: '10px' }}>Clinical Data Driven</h2>
            <p className="mediumDescription" style={{ marginBottom: '20px' }}>
                Physical exams are essential for veterinary care and often difficult to perform
                remotely.
            </p>
            <h3 style={{ marginBottom: '10px' }}>Interoperability</h3>
            <p className="mediumDescription" style={{ marginBottom: '20px' }}>
                Clinical data and clinical decisions are only as useful as their ability to be
                shared. This is essential for virtual veterinary care where clinical evidence and
                decisions will be provided to in-person clinics for further treatment.
            </p>
            <img
                className={`clickable ${styles.fhirLogo}`}
                src={fhirLogo}
                alt="HL7 FHIR Logo"
                onClick={handleFhirLogoClick}
            />
            <h3 style={{ marginBottom: '10px' }}>Auditability</h3>
            <p className="mediumDescription" style={{ marginBottom: '20px' }}>
                Clinical data is the backbone of Phauna and may be corrected or updated. Phauna's
                clinical data model is bi-temporal
            </p>
        </div>
    )
}

export default Phauna
