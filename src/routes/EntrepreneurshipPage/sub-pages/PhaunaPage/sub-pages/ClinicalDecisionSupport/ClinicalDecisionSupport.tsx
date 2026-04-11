import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './ClinicalDecisionSupport.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import phaunaLogo from '@/assets/images/phauna/Phauna_Logo.png'

const ClinicalDecisionSupportPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Automated"
                titleEnd="Cases"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<img src={phaunaLogo} alt="Phauna Logo" />}
                description="Minimizing the time required for a virtual vet while improving care quality."
                buttonLabel="Contact Me"
                buttonAction={() => {}}
            />
        </div>
    )
}

export default ClinicalDecisionSupportPage
