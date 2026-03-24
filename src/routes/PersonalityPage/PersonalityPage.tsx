import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './PersonalityPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import austinBeard from '@/assets/images/AustinBeard.png'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import TrioAppScreenshots from '@/common/components/TrioAppScreenshots/TrioAppScreenshots'

import phaunaScreenshot1 from '@/assets/images/App_Screenshot.jpeg'
import phaunaScreenshot2 from '@/assets/images/App_Screenshot.jpeg'
import phaunaScreenshot3 from '@/assets/images/App_Screenshot.jpeg'

const screenshotItems = [
    { src: phaunaScreenshot1, alt: 'Phauna App Screenshot 1' },
    { src: phaunaScreenshot2, alt: 'Phauna App Screenshot 2' },
    { src: phaunaScreenshot3, alt: 'Phauna App Screenshot 3' },
]

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
            <div className={styles.pagePreviewsContainer}>
                <PagePreview
                    titleStart="Say Hello to"
                    titleEnd="Amello!"
                    titleEndDrawing={problemSolverPhraseDrawing}
                    content={<TrioAppScreenshots screenshots={screenshotItems} />}
                    description="Play interest-based games with new friends on a video call."
                    buttonLabel="View Personality"
                    buttonAction={() => {}}
                />
                <PagePreview
                    titleStart="Experience Life on"
                    titleEnd="DMV Simulator"
                    titleEndDrawing={problemSolverPhraseDrawing}
                    content={<TrioAppScreenshots screenshots={screenshotItems} />}
                    description="Enjoy renewing your license in this humour-based story game."
                    buttonLabel="View Personality"
                    buttonAction={() => {}}
                />
            </div>
        </div>
    )
}

export default PersonalityPage
