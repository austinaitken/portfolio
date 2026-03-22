import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './PhaunaPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import phaunaLogo from '@/assets/images/phauna/Phauna_Logo.png'

const PhaunaPage = () => {
    return (
        <section className={styles.container}>
            <PageIntroduction
                titleStart="Virtual Veterinary"
                titleEnd="Care"
                titleEndDrawing={problemSolverPhraseDrawing}
                // content={<TrioAppScreenshots screenshots={screenshotItems} />}
                content={<img src={phaunaLogo} alt="Phauna Logo" />}
                description="A veterinary telemedicine platform with the tools for remote care."
                buttonLabel={'Contact Me'}
                buttonAction={() => {}}
            />
        </section>
    )
}

export default PhaunaPage
