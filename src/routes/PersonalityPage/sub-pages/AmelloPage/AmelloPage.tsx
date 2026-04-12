import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './AmelloPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import GraduationCard from '@/routes/Home2/components/Qualifications/components/GraduationCard/GraduationCard'
import type { PageSectionProps } from '@/common/components/pages/PageSection/PageSection'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'
// import PageSection from '@/common/components/pages/PageSection/PageSection'
import YouTubeVideo from '@/common/components/YouTubeVideo/YouTubeVideo'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'

const amelloPageContent: PageSectionProps[] = [
    {
        titleStart: 'Interest-Based',
        titleEnd: 'Matchmaking',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Be matched in a 4-person video call with an active game based on interests such as improv and debate.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    {
        titleStart: 'The Latest',
        titleEnd: 'Technologies',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Built with React, GraphQL, and WebRTC, Amello delivers a seamless and engaging user experience.',
        content: (
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        ),
    },
    // {
    //     titleStart: 'Experience our',
    //     titleEnd: 'Demo',
    //     titleEndDrawing: problemSolverPhraseDrawing,
    //     description:
    //         'Watch the demo that won first place in the M.U.N. computer engineering design competition.',
    //     content: ,
    //     buttonAction: () => {},
    //     buttonLabel: 'Watch Demo',
    // },
]

const featuredContent = {
    titleStart: 'Experience our',
    titleEnd: 'Demo',
    description:
        'Watch the demo that won first place in the M.U.N. computer engineering design competition.',
    buttonLabel: 'Watch Demo',
}

const AmelloPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Say Hello to"
                titleEnd="Amello"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<GraduationCard />}
                description="Play interest-based games with new friends on a video call."
                buttonLabel="Contact Me"
                buttonAction={() => {}}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Amello</p>
                    <p className={styles.experienceDate}>May 2021 - May 2022</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.mainContentContainer}>
                <section className={styles.mainContentLayout}>
                    <div className={styles.titleContainer}>
                        <h2
                            className={styles.title}
                            aria-label={`${featuredContent.titleStart} ${featuredContent.titleEnd}`}
                        >
                            {featuredContent.titleStart}
                            <span className={styles.visuallyHidden}>
                                {' '}
                                {featuredContent.titleEnd}
                            </span>
                        </h2>
                        <div className={styles.titleDrawing}>
                            <AnimatedDrawing
                                drawing={problemSolverPhraseDrawing}
                                aria-hidden="true"
                                focusable="false"
                                strokeColor={'var(--color-text-primary)'}
                            />
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <YouTubeVideo videoId="fppS6ddagRo" />
                    </div>
                    <p className={`mediumDescription ${styles.description}`}>
                        {featuredContent.description}
                    </p>
                    <button className={`secondaryButton ${styles.button}`} onClick={() => {}}>
                        {featuredContent.buttonLabel}
                    </button>
                </section>
            </div>
            {/* <div className={styles.mainContentContainer}>
                <section className={styles.mainContentLayout}>
                    <div className={styles.titleContainer}>
                        <h2
                            className={styles.title}
                            aria-label={`${featuredContent.titleStart} ${featuredContent.titleEnd}`}
                        >
                            {featuredContent.titleStart}
                            <span className={styles.visuallyHidden}>
                                {' '}
                                {featuredContent.titleEnd}
                            </span>
                        </h2>
                        <div className={styles.titleDrawing}>
                            <AnimatedDrawing
                                drawing={problemSolverPhraseDrawing}
                                aria-hidden="true"
                                focusable="false"
                                strokeColor={'var(--color-text-primary)'}
                            />
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <YouTubeVideo videoId="fppS6ddagRo" />
                    </div>
                    <p className={`mediumDescription ${styles.description}`}>
                        {featuredContent.description}
                    </p>
                    <button className={`secondaryButton ${styles.button}`} onClick={() => {}}>
                        {featuredContent.buttonLabel}
                    </button>
                </section>
            </div> */}
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Technical Overview</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.pagePreviewsContainer}>
                {amelloPageContent.map((preview, index) => (
                    <PagePreview
                        key={`${preview.titleStart}-${preview.titleEnd}`}
                        titleStart={preview.titleStart}
                        titleEnd={preview.titleEnd}
                        titleEndDrawing={preview.titleEndDrawing}
                        content={preview.content}
                        description={preview.description}
                        buttonLabel={preview.buttonLabel ?? ''}
                        buttonAction={preview.buttonAction ?? (() => {})}
                        contentSide={index % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </div>
        </div>
    )
}

export default AmelloPage
