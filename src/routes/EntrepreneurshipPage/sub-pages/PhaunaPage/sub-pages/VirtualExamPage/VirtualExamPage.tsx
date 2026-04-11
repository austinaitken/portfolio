import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './VirtualExamPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import phaunaLogo from '@/assets/images/phauna/Phauna_Logo.png'

const VirtualExamPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Advanced Virtual"
                titleEnd="Examinations"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<img src={phaunaLogo} alt="Phauna Logo" />}
                description="Physical exams are essential for vet care but difficult to perform remotely."
                buttonLabel="Contact Me"
                buttonAction={() => {}}
            />
        </div>
    )
}

export default VirtualExamPage
