import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import { useNavigate } from 'react-router'

import styles from './EntrepreneurshipPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import mdiumNewspaperHeadshotImage from '@/assets/images/mdium/Mdium_Newspaper_Headshot.png'
import phaunaLogo from '@/assets/images/phauna/Phauna_Logo.png'
import mdiumLogo from '@/assets/images/mdium/Mdium_Logo.png'
import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'

const EntrepreneurshipPage = () => {
    const navigate = useNavigate()

    return (
        <section className={styles.container}>
            <PageIntroduction
                titleStart="An Entrepreneurial"
                titleEnd="Flame"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<img src={mdiumNewspaperHeadshotImage} alt="Entrepreneurship" />}
                description="Turning ideas into live consumer products to solve real problems."
                buttonLabel="Contact Me"
                buttonAction={() => void navigate('/contact-me')}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Software Business Overview</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.pagePreviewsContainer}>
                <PagePreview
                    titleStart="Virtual Veterinary"
                    titleEnd="Care"
                    titleEndDrawing={problemSolverPhraseDrawing}
                    content={<img src={phaunaLogo} alt="Phauna Logo" />}
                    description="A veterinary telemedicine platform with the tools for remote care."
                    buttonLabel={'View Phauna'}
                    buttonAction={() => void navigate('/entrepreneurship/phauna')}
                />
                <PagePreview
                    titleStart="Send Files"
                    titleEnd="Anywhere"
                    titleEndDrawing={problemSolverPhraseDrawing}
                    content={<img src={mdiumLogo} alt="Mdium Logo" />}
                    description="Transfer large files through emails, links, and short-lived codes."
                    buttonLabel={'View Mdium'}
                    buttonAction={() => void navigate('/entrepreneurship/mdium')}
                    contentSide="right"
                />
            </div>
        </section>
    )
}

export default EntrepreneurshipPage
