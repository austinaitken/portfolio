import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './ClinicalDecisionSupportPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import phaunaLogo from '@/assets/images/phauna/Phauna_Logo.png'
import { useNavigate } from 'react-router'
import { usePageTitle } from '@/common/hooks/usePageTitle'

const ClinicalDecisionSupportPage = () => {
    usePageTitle('Clinical Decision Support')

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Clinical Decision"
                titleEnd="Support"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<img src={phaunaLogo} alt="Phauna Logo" />}
                description="Turning clinical data into diagnostic and treatment recommendations."
                buttonLabel="Contact Me"
                buttonAction={() => void navigate('/contact-me')}
            />
        </div>
    )
}

export default ClinicalDecisionSupportPage
