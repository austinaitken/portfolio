import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './EvidenceCollectionPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import phaunaLogo from '@/assets/images/phauna/Phauna_Logo.png'
import { useNavigate } from 'react-router'
import { usePageTitle } from '@/common/hooks/usePageTitle'

const EvidenceCollectionPage = () => {
    usePageTitle('History Collection')

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Automated"
                titleEnd="History Collection"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<img src={phaunaLogo} alt="Phauna Logo" />}
                description="Automating the collection of patient history for virtual veterinary care."
                buttonLabel="Contact Me"
                buttonAction={() => void navigate('/contact-me')}
            />
        </div>
    )
}

export default EvidenceCollectionPage
