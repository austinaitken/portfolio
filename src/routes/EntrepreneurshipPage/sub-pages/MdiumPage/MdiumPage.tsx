import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './MdiumPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import mdiumLogo from '@/assets/images/mdium/Mdium_Logo.png'

const MdiumPage = () => {
    return (
        <section className={styles.container}>
            <PageIntroduction
                titleStart="Send Files"
                titleEnd="Anywhere"
                titleEndDrawing={problemSolverPhraseDrawing}
                // content={<TrioAppScreenshots screenshots={screenshotItems} />}
                content={<img src={mdiumLogo} alt="Mdium Logo" />}
                description="Transfer large files through emails, links, and short-lived codes."
                buttonLabel={'Contact Me'}
                buttonAction={() => {}}
            />
        </section>
    )
}

export default MdiumPage
