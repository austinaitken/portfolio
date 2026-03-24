import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './PersonalityPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import austinBeard from '@/assets/images/AustinBeard.png'

const PersonalityPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="A Light in the"
                titleEnd="Dark"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<img src={austinBeard} alt="Austin Aitken's profile picture" />}
                description="Crafting joy in the world through humour and software."
                buttonLabel="View Personality"
                buttonAction={() => {}}
            />
        </div>
    )
}

export default PersonalityPage
