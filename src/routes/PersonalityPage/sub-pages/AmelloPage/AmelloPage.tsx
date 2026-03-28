import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './AmelloPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import GraduationCard from '@/routes/Home2/components/Qualifications/components/GraduationCard/GraduationCard'

const AmelloPage = () => {
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

export default AmelloPage
