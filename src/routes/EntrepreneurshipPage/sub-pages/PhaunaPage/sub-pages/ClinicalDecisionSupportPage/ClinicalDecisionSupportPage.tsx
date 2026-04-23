import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './ClinicalDecisionSupportPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import phaunaLogo from '@/assets/images/phauna/Phauna_Logo.png'

const ClinicalDecisionSupportPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Clinical Decision"
                titleEnd="Support"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<img src={phaunaLogo} alt="Phauna Logo" />}
                description="Turning clinical data into diagnostic and treatment recommendations."
                buttonLabel="Contact Me"
                buttonAction={() => {}}
            />
        </div>
    )
}

export default ClinicalDecisionSupportPage
