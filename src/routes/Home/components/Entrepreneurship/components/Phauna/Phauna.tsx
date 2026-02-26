import styles from './Phauna.module.css'

import TrioAppScreenshots from '@/common/components/TrioAppScreenshots/TrioAppScreenshots'

import phaunaLogoRightText from '@/assets/images/phauna/Phauna_Logo_Right_Text.png'
import phaunaScreenshot1 from '@/assets/images/App_Screenshot.jpeg'
import phaunaScreenshot2 from '@/assets/images/App_Screenshot.jpeg'
import phaunaScreenshot3 from '@/assets/images/App_Screenshot.jpeg'
import fhirLogo from '@/assets/images/Hl7_FHIR_Logo.webp'

const screenshotItems = [
    { src: phaunaScreenshot1, alt: 'Phauna App Screenshot 1' },
    { src: phaunaScreenshot2, alt: 'Phauna App Screenshot 2' },
    { src: phaunaScreenshot3, alt: 'Phauna App Screenshot 3' },
]

const Phauna = () => {
    return (
        <div className={styles.container}>
            <img src={phaunaLogoRightText} alt="The Phauna Logo with Right Text" />
            <p>Veterinary Telemedicine Reimagined.</p>
            <TrioAppScreenshots screenshots={screenshotItems} />
            <h2>AI Potential Maximized.</h2>
            <h2>Virtual Exams Reinvented.</h2>
            <h2>Clinical Data Driven.</h2>
            <img src={fhirLogo} alt="HL7 FHIR Logo" />
        </div>
    )
}

export default Phauna
