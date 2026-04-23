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
        description: 'Landing on the Business front page, Mdium was making waves.',
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
        description:
            'Reached 30k+ users with 140k+ transfers achieving an outstanding 4.6/5 average rating.',
        content: <StarRating />,
    },
]

const featuredContent = {
    titleStart: 'Experience our',
    titleEnd: 'Demo',
    description: 'Watch Mdium featured on NTV News for the Our Time news segment.',
    buttonLabel: 'View on NTV News',
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
            <div style={{ display: 'flex', flexDirection: 'row', height: '450px', width: '100%' }}>
                <div className={styles.screenshotsContainer} style={{ flex: 3 }}>
                    <div className={styles.screenshotContainer}>
                        <div className={styles.titleContainer}>
                            <h3 className={styles.title} aria-label="Step One">
                                Step 1
                            </h3>
                            {/* <div className={styles.titleDrawing}>
                                <AnimatedDrawing
                                    drawing={problemSolverPhraseDrawing}
                                    aria-hidden="true"
                                    focusable="false"
                                    strokeColor={'var(--color-text-primary)'}
                                />
                            </div> */}
                        </div>
                        <img
                            className={styles.screenshot}
                            src={phaunaScreenshot1}
                            alt="Mdium Screenshot 1"
                        />
                        {/* <p className="smallDescription">
                            Add your large files
                            <br />
                            on the Mdium web app.
                        </p> */}
                    </div>
                    <p className={styles.stepArrow}>➡</p>
                    <div className={styles.screenshotContainer}>
                        <div className={styles.titleContainer}>
                            <h3 className={styles.title} aria-label="Step Two">
                                Step 2
                            </h3>
                            {/* <div className={styles.titleDrawing}>
                                <AnimatedDrawing
                                    drawing={problemSolverPhraseDrawing}
                                    aria-hidden="true"
                                    focusable="false"
                                    strokeColor={'var(--color-text-primary)'}
                                />
                            </div> */}
                        </div>
                        <img
                            className={styles.screenshot}
                            src={phaunaScreenshot1}
                            alt="Mdium Screenshot 2"
                        />
                        {/* <p className="smallDescription">
                            Share through email,
                            <br />
                            links, or a short-lived code.
                        </p> */}
                    </div>
                    <p className={styles.stepArrow}>➡</p>
                    <div className={styles.screenshotContainer}>
                        <div className={styles.titleContainer}>
                            <h3 className={styles.title} aria-label="Step Three">
                                Step 3
                            </h3>
                            {/* <div className={styles.titleDrawing}>
                                <AnimatedDrawing
                                    drawing={problemSolverPhraseDrawing}
                                    aria-hidden="true"
                                    focusable="false"
                                    strokeColor={'var(--color-text-primary)'}
                                />
                            </div> */}
                        </div>
                        <img
                            className={styles.screenshot}
                            src={phaunaScreenshot1}
                            alt="Mdium Screenshot 3"
                        />
                        {/* <p className="smallDescription">
                            Access the shared files
                            <br />
                            from any device's browser.
                        </p> */}
                    </div>
                </div>
                <section
                    style={{
                        flex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title} aria-label="Three Easy Steps">
                            Three Easy
                            <span className={styles.visuallyHidden}> Steps</span>
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
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            flex: 1,
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                width: '100%',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: '1.5rem',
                                    margin: 0,
                                    marginRight: '1rem',
                                }}
                            >
                                1.
                            </p>
                            <p
                                style={{ marginRight: '1rem' }}
                                className={`mediumDescription ${styles.description}`}
                            >
                                Add your large files (up to 5TB per file) on the Mdium web app.
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                            }}
                        >
                            <p style={{ fontSize: '1.5rem', margin: 0, marginRight: '1rem' }}>2.</p>
                            <p
                                style={{ marginRight: '1rem' }}
                                className={`mediumDescription ${styles.description}`}
                            >
                                Share through direct links, email, SMS, or a short-lived code.
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                            }}
                        >
                            <p style={{ fontSize: '1.5rem', margin: 0, marginRight: '1rem' }}>3.</p>
                            <p
                                style={{ marginRight: '1rem' }}
                                className={`mediumDescription ${styles.description}`}
                            >
                                Click the direct link, email, SMS, or enter the short-lived code.
                            </p>
                        </div>
                    </div>
                    {/* <button className={`secondaryButton ${styles.button}`} onClick={() => {}}>
                        {featuredContent.buttonLabel}
                    </button> */}
                </section>
            </div>
            {/* <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Core Achievements</p>
                </div>
                <span className={styles.dividerLine} />
            </div> */}
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

            {/* <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Core Achievements</p>
                </div>
                <span className={styles.dividerLine} />
            </div> */}
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
                            buttonLabel={buttonLabel}
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
