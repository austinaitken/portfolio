import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './PersonalityPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import austinBeard from '@/assets/images/AustinBeard.png?format=webp'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import TrioAppScreenshots from '@/common/components/TrioAppScreenshots/TrioAppScreenshots'

import phaunaScreenshot1 from '@/assets/images/App_Screenshot.jpeg?format=webp'
import phaunaScreenshot2 from '@/assets/images/App_Screenshot.jpeg?format=webp'
import phaunaScreenshot3 from '@/assets/images/App_Screenshot.jpeg?format=webp'
import { useNavigate } from 'react-router'
import { usePageTitle } from '@/common/hooks/usePageTitle'

const screenshotItems = [
    { src: phaunaScreenshot1, alt: 'Phauna App Screenshot 1', width: 1170, height: 2532 },
    { src: phaunaScreenshot2, alt: 'Phauna App Screenshot 2', width: 1170, height: 2532 },
    { src: phaunaScreenshot3, alt: 'Phauna App Screenshot 3', width: 1170, height: 2532 },
]

const PersonalityPage = () => {
    usePageTitle('Personality')

    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="A Light in the"
                titleEnd="Dark"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={
                    <img
                        src={austinBeard}
                        width={1489}
                        height={1364}
                        alt="Austin Aitken's profile picture"
                    />
                }
                description="Crafting joy in the world through humour and software."
                buttonLabel="View Personality"
                buttonAction={() => {}}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Funny Projects Overview</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.pagePreviewsContainer}>
                <PagePreview
                    titleStart="Say Hello to"
                    titleEnd="Amello!"
                    titleEndDrawing={problemSolverPhraseDrawing}
                    content={<TrioAppScreenshots screenshots={screenshotItems} />}
                    description="Play interest-based games with new friends on a video call."
                    buttonLabel="View Amello"
                    buttonAction={() => void navigate('/personality/amello')}
                />
                <PagePreview
                    titleStart="Experience Life on"
                    titleEnd="DMV Simulator"
                    titleEndDrawing={problemSolverPhraseDrawing}
                    content={<TrioAppScreenshots screenshots={screenshotItems} />}
                    description="Enjoy renewing your license in this humour-based story game."
                    buttonLabel="View Simulator"
                    buttonAction={() => void navigate('/personality/dmv-simulator')}
                    contentSide="right"
                />
            </div>
        </div>
    )
}

export default PersonalityPage
