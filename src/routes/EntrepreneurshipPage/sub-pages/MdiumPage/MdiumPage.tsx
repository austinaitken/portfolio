import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './MdiumPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import mdiumLogo from '@/assets/images/mdium/Mdium_Logo.png'
// import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'
import type { PageSectionProps } from '@/common/components/pages/PageSection/PageSection'
import PageSection from '@/common/components/pages/PageSection/PageSection'
import mdiumNewspaper from '@/assets/images/mdium/Mdium_Newspaper 3.jpg'
import YouTubeVideo from '@/common/components/YouTubeVideo/YouTubeVideo'
import StarRating from './components/StarRating/StarRating'

const MdiumPageContent: PageSectionProps[] = [
    {
        titleStart: 'Making',
        titleEnd: 'Headlines',
        titleEndDrawing: problemSolverPhraseDrawing,
        description: 'From NTV News to the Business front page, Mdium was making waves.',
        content: (
            <img
                className={`clickable ${styles.newspaper}`}
                src={mdiumNewspaper}
                alt="The Mdium Newspaper"
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
    {
        titleStart: 'Making',
        titleEnd: 'Headlines',
        titleEndDrawing: problemSolverPhraseDrawing,
        description: 'From NTV News to the Business front page, Mdium was making waves.',
        content: (
            <div className={styles.newsMediaContainer}>
                <YouTubeVideo videoId="HqyS-xeRvQw" />
            </div>
        ),
        buttonLabel: 'Watch Segment',
        buttonAction: () => {
            window.open(
                'https://www.saltwire.com/atlantic-canada/news/a-new-way-to-send-files-100716476/',
                '_blank'
            )
        },
    },
    {
        titleStart: 'Satisfying',
        titleEnd: 'Customers',
        titleEndDrawing: problemSolverPhraseDrawing,
        description:
            'Reached over 30k users with 140k+ file transfers achieving an outstanding 4.6/5 rating.',
        content: <StarRating />,
    },
]

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
            <div className={styles.sectionsContainer}>
                {MdiumPageContent.map(
                    ({
                        titleStart,
                        titleEnd,
                        titleEndDrawing,
                        description,
                        content,
                        subSections,
                        buttonLabel,
                        buttonAction,
                    }: PageSectionProps) => (
                        <PageSection
                            key={`${titleStart}-${titleEnd}`}
                            titleStart={titleStart}
                            titleEnd={titleEnd}
                            titleEndDrawing={titleEndDrawing}
                            description={description}
                            content={content}
                            subSections={subSections}
                            buttonLabel={buttonLabel}
                            buttonAction={buttonAction}
                        />
                    )
                )}
            </div>
        </section>
    )
}

export default MdiumPage
