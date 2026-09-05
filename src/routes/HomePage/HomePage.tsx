import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import type { PagePreviewProps } from '@/common/components/pages/PagePreview/PagePreview'
import { useNavigate } from 'react-router'
import GraduationCard from '@/common/components/GraduationCard/GraduationCard'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'

import headshotImage from '@/assets/images/ProfilePicNoBackground.png'
import mdiumNewspaperHeadshotImage from '@/assets/images/mdium/Mdium_Newspaper_Headshot.png'
import austinBeard from '@/assets/images/AustinBeard.png'

import styles from './HomePage.module.css'
import ResourcePreviewGraphic from '@/routes/ResourcesPage/components/ResourcePreviewGraphic/ResourcePreviewGraphic'
import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import NasdaqVerafinGraphic from './NasdaqVerafinGraphic/NasdaqVerafinGraphic'
import ContactMeGraphic from '@/routes/ContactMePage/components/ContactMeGraphic/ContactMeGraphic'

type HomePreviewKey =
    | 'introduction'
    | 'experience'
    | 'entrepreneurship'
    | 'qualifications'
    | 'personality'
    | 'resources'
    | 'contact'

type HomePagePreview = PagePreviewProps & {
    key: HomePreviewKey
}

const HomePage = () => {
    const navigate = useNavigate()

    const pagePreviews: HomePagePreview[] = [
        {
            key: 'experience',
            titleStart: 'An Experienced',
            titleEnd: 'Professional',
            titleEndDrawing: problemSolverPhraseDrawing,
            content: <NasdaqVerafinGraphic />,
            description: 'Catching fraud for the largest institutions in North America.',
            buttonLabel: 'View Experience',
            buttonAction: () => void navigate('/experience'),
        },
        {
            key: 'entrepreneurship',
            titleStart: 'An Entrepreneurial',
            titleEnd: 'Flame',
            titleEndDrawing: problemSolverPhraseDrawing,
            content: (
                <img
                    className={styles.entrepreneurshipImage}
                    style={{ borderRadius: '25px' }}
                    src={mdiumNewspaperHeadshotImage}
                    alt="Entrepreneurship"
                />
            ),
            description: 'Turning ideas into live consumer products to solve real problems.',
            buttonLabel: 'View Businesses',
            buttonAction: () => void navigate('/entrepreneurship'),
        },
        {
            key: 'qualifications',
            titleStart: 'A Qualified',
            titleEnd: 'Problem Solver',
            titleEndDrawing: problemSolverPhraseDrawing,
            content: <GraduationCard />,
            description: 'A Bachelor of Engineering graduate with academic distinction.',
            buttonLabel: 'View Qualifications',
            buttonAction: () => void navigate('/qualifications'),
        },
        {
            key: 'personality',
            titleStart: 'A Light in the',
            titleEnd: 'Dark',
            titleEndDrawing: problemSolverPhraseDrawing,
            content: (
                <img
                    style={{ borderRadius: '25px' }}
                    src={austinBeard}
                    alt="Austin Aitken's profile picture"
                />
            ),
            description: 'Crafting joy in the world through humour and software.',
            buttonLabel: 'View Personality',
            buttonAction: () => void navigate('/personality'),
        },
        {
            key: 'resources',
            titleStart: 'Explore',
            titleEnd: 'Resources',
            titleEndDrawing: problemSolverPhraseDrawing,
            content: <ResourcePreviewGraphic />,
            description: 'View or download resources related to my work and education.',
            buttonLabel: 'View Resources',
            buttonAction: () => void navigate('/resources'),
        },
        {
            key: 'contact',
            titleStart: 'Contact Me',
            titleEnd: 'Today',
            titleEndDrawing: problemSolverPhraseDrawing,
            content: <ContactMeGraphic />,
            description: "Let's discuss the impact I can bring to your team and organization.",
            buttonLabel: 'Contact Me',
            buttonAction: () => void navigate('/contact-me'),
        },
    ]

    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Hello, I'm"
                titleEnd="Austin Aitken"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={
                    <img
                        style={{ borderRadius: '25px' }}
                        src={headshotImage}
                        alt="Austin Aitken's profile picture"
                    />
                }
                description="An experienced software developer with an entrepreneurial spirit."
                buttonLabel="Contact Me"
                buttonAction={() => void navigate('/contact-me')}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Portfolio Overview</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.pagePreviewsContainer}>
                {pagePreviews.map((preview, index) => (
                    <PagePreview
                        key={preview.key}
                        titleStart={preview.titleStart}
                        titleEnd={preview.titleEnd}
                        titleEndDrawing={preview.titleEndDrawing}
                        content={preview.content}
                        description={preview.description}
                        buttonLabel={preview.buttonLabel}
                        buttonAction={preview.buttonAction}
                        contentSide={index % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomePage
