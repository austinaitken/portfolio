import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './MdiumPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import mdiumLogo from '@/assets/images/mdium/Mdium_Logo.png'
// import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'
import type { PageSectionProps } from '@/common/components/pages/PageSection/PageSection'
import YouTubeVideo from '@/common/components/YouTubeVideo/YouTubeVideo'
import StarRating from './components/StarRating/StarRating'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import mdiumNewspaperHeadshotImage from '@/assets/images/mdium/Mdium_Newspaper_Headshot.png'
import phaunaScreenshot1 from '@/assets/images/App_Screenshot.jpeg'
import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'

const MdiumPageContent: PageSectionProps[] = [
    {
        titleStart: 'Making',
        titleEnd: 'Headlines',
        titleEndDrawing: problemSolverPhraseDrawing,
        description: 'From NTV News to the Business front page, Mdium was making waves.',
        content: (
            <img
                className={styles.entrepreneurshipImage}
                style={{ borderRadius: '25px' }}
                src={mdiumNewspaperHeadshotImage}
                alt="Entrepreneurship"
            />
        ),
        buttonLabel: 'View Article',
        buttonAction: () => {
            window.open(
                'https://www.saltwire.com/atlantic-canada/news/a-new-way-to-send-files-100716476/',
                '_blank'
            )
        },
    },
    // {
    //     titleStart: 'Making',
    //     titleEnd: 'Headlines2',
    //     titleEndDrawing: problemSolverPhraseDrawing,
    //     description: 'From NTV News to the Business front page, Mdium was making waves.',
    //     content: (
    //         <div className={styles.newsMediaContainer}>
    //             <YouTubeVideo videoId="HqyS-xeRvQw" />
    //         </div>
    //     ),
    //     buttonLabel: 'Watch Segment',
    //     buttonAction: () => {
    //         window.open(
    //             'https://www.saltwire.com/atlantic-canada/news/a-new-way-to-send-files-100716476/',
    //             '_blank'
    //         )
    //     },
    // },
    {
        titleStart: 'Satisfying',
        titleEnd: 'Customers',
        titleEndDrawing: problemSolverPhraseDrawing,
        description: 'Reached 30k+ users with 140k+ transfers achieving an average 4.6/5 rating.',
        content: <StarRating />,
    },
]

const featuredContent = {
    titleStart: 'Experience our',
    titleEnd: 'Demo',
    description: 'Watch Mdium featured on NTV News.',
    buttonLabel: 'Watch Demo',
}

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
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>
                        Mdium Inc.&nbsp;&nbsp;&middot;&nbsp;&nbsp; Technical Co-Founder
                    </p>
                    <p className={styles.experienceDate}>Nov 2023 &mdash; Mar 2026</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.screenshotsContainer}>
                <div className={styles.screenshotContainer}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title} aria-label="Step One">
                            Step
                            <span className={styles.visuallyHidden}> One</span>
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
                    <img
                        className={styles.screenshot}
                        src={phaunaScreenshot1}
                        alt="Mdium Screenshot 1"
                    />
                    <p className="mediumDescription">
                        Add your large files
                        <br />
                        on the Mdium web app.
                    </p>
                </div>
                <p className={styles.stepArrow}>➡</p>
                <div className={styles.screenshotContainer}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title} aria-label="Step Two">
                            Step
                            <span className={styles.visuallyHidden}> Two</span>
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
                    <img
                        className={styles.screenshot}
                        src={phaunaScreenshot1}
                        alt="Mdium Screenshot 2"
                    />
                    <p className="mediumDescription">
                        Choose to share through email,
                        <br />a link, or a short-lived code.
                    </p>
                </div>
                <p className={styles.stepArrow}>➡</p>
                <div className={styles.screenshotContainer}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title} aria-label="Step Three">
                            Step
                            <span className={styles.visuallyHidden}> Three</span>
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
                    <img
                        className={styles.screenshot}
                        src={phaunaScreenshot1}
                        alt="Mdium Screenshot 3"
                    />
                    <p className="mediumDescription">
                        Access the shared files
                        <br />
                        from any device's browser.
                    </p>
                </div>
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
                        <YouTubeVideo videoId="HqyS-xeRvQw" />
                    </div>
                    <p className={`mediumDescription ${styles.description}`}>
                        {featuredContent.description}
                    </p>
                    <button className={`secondaryButton ${styles.button}`} onClick={() => {}}>
                        {featuredContent.buttonLabel}
                    </button>
                </section>
            </div>
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Core Achievements</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.pagePreviewsContainer}>
                {MdiumPageContent.map(
                    (
                        {
                            titleStart,
                            titleEnd,
                            titleEndDrawing,
                            description,
                            content,
                            // subSections,
                            buttonLabel,
                            buttonAction,
                        }: PageSectionProps,
                        index
                    ) => (
                        <PagePreview
                            key={`${titleStart}-${titleEnd}`}
                            titleStart={titleStart}
                            titleEnd={titleEnd}
                            titleEndDrawing={titleEndDrawing}
                            description={description}
                            content={content}
                            buttonLabel={buttonLabel ?? 'Learn More'}
                            buttonAction={buttonAction ?? (() => {})}
                            contentSide={index % 2 === 0 ? 'left' : 'right'}
                        />
                    )
                )}
            </div>
        </section>
    )
}

export default MdiumPage
