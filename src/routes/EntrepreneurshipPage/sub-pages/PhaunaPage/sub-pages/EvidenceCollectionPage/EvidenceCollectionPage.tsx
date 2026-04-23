import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './EvidenceCollectionPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import phaunaLogo from '@/assets/images/phauna/Phauna_Logo.png'

const EvidenceCollectionPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Automated"
                titleEnd="Evidence Collection"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<img src={phaunaLogo} alt="Phauna Logo" />}
                description="Automating the collection of clinical evidence for virtual veterinary care."
                buttonLabel="Contact Me"
                buttonAction={() => {}}
            />
        </div>
    )
}

export default EvidenceCollectionPage
