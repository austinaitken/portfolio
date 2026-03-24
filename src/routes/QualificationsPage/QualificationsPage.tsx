import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './QualificationsPage.module.css'
import GraduationCard from '../Home2/components/Qualifications/components/GraduationCard/GraduationCard'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'

const QualificationsPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="A Qualified"
                titleEnd="Problem Solver"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<GraduationCard />}
                description="A Bachelor of Engineering graduate with academic distinction."
                buttonLabel="Contact Me"
                buttonAction={() => {}}
            />
        </div>
    )
}

export default QualificationsPage
