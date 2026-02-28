import styles from './Phauna.module.css'

import TrioAppScreenshots from '@/common/components/TrioAppScreenshots/TrioAppScreenshots'

import phaunaLogoRightText from '@/assets/images/phauna/Phauna_Logo_Right_Text_Cropped.png'
import phaunaScreenshot1 from '@/assets/images/App_Screenshot.jpeg'
import phaunaScreenshot2 from '@/assets/images/App_Screenshot.jpeg'
import phaunaScreenshot3 from '@/assets/images/App_Screenshot.jpeg'
import fhirLogo from '@/assets/images/HL7_FHIR_Logo.webp'

const screenshotItems = [
    { src: phaunaScreenshot1, alt: 'Phauna App Screenshot 1' },
    { src: phaunaScreenshot2, alt: 'Phauna App Screenshot 2' },
    { src: phaunaScreenshot3, alt: 'Phauna App Screenshot 3' },
]

const Phauna = () => {
    const handleFhirLogoClick = () => {
        window.open('https://hl7.org/fhir/', '_blank')
    }

    return (
        <div className={styles.container}>
            <img src={phaunaLogoRightText} alt="The Phauna Logo with Right Text" />
            <p>This is a concise and intriguing description of the Phauna app.</p>
            <TrioAppScreenshots screenshots={screenshotItems} />
            <h2>Cases Automated</h2>
            <p></p>
            <h3>Evidence Collection</h3>
            <p></p>
            <h3>Clinical Decision Support</h3>
            <p></p>
            <h2>Virtual Exams Advanced</h2>
            <p>
                Physical exams are essential for veterinary care and often difficult to perform
                remotely.
            </p>
            <h2>Clinical Data Driven</h2>
            <p>
                Physical exams are essential for veterinary care and often difficult to perform
                remotely.
            </p>
            <h3>Interoperability</h3>
            <p></p>
            <img
                className={`clickable ${styles.fhirLogo}`}
                src={fhirLogo}
                alt="HL7 FHIR Logo"
                onClick={handleFhirLogoClick}
            />
            <h3>Auditability</h3>
            <p></p>
        </div>
    )
}

export default Phauna
