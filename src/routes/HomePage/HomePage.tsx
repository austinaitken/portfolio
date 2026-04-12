import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import type { PagePreviewProps } from '@/common/components/pages/PagePreview/PagePreview'
import { useNavigate } from 'react-router-dom'
import GraduationCard from '@/routes/Home2/components/Qualifications/components/GraduationCard/GraduationCard'
import { NAV_ITEMS } from '@/common/constants/navigation'
import {
    // darkWordDrawing,
    // firstNameWordDrawing,
    // flameWordDrawing,
    problemSolverPhraseDrawing,
    // professionalWordDrawing,
} from '@/common/constants/animated-drawings'

import headshotImage from '@/assets/images/ProfilePicNoBackground.png'
// import nasdaqLogo from '@/assets/images/verafin/NDAQ.svg'
import mdiumNewspaperHeadshotImage from '@/assets/images/mdium/Mdium_Newspaper_Headshot.png'
import austinBeard from '@/assets/images/AustinBeard.png'

import styles from './HomePage.module.css'
import ResourcePreviewGraphic from '../ResourcesPage/components/ResourcePreviewGraphic/ResourcePreviewGraphic'
import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import NasdaqVerafinGraphic from './NasdaqVerafinGraphic/NasdaqVerafinGraphic'
import ContactMeGraphic from '../ContactMePage/components/ContactMeGraphic/ContactMeGraphic'

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

const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

const HomePage = () => {
    const navigate = useNavigate()

    const pagePreviews: HomePagePreview[] = [
        // {
        //     key: 'introduction',
        //     titleStart: "Hello, I'm",
        //     titleEnd: 'Austin',
        //     titleEndDrawing: problemSolverPhraseDrawing,
        //     isTopTitle: true,
        //     content: <img src={headshotImage} alt="Austin Aitken's profile picture" />,
        //     description: 'An experienced software developer with an entrepreneurial spirit.',
        //     buttonLabel: 'Contact Me',
        //     buttonAction: scrollToContact,
        // },
        {
            key: 'experience',
            titleStart: 'An Experienced',
            titleEnd: 'Professional',
            titleEndDrawing: problemSolverPhraseDrawing,
            content: <NasdaqVerafinGraphic />,
            description: 'Catching fraud for the largest institutions in North America.',
            buttonLabel: 'View Experience',
            buttonAction: () => navigate(NAV_ITEMS.experience.to),
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
            buttonAction: () => navigate(NAV_ITEMS.entrepreneurship.to),
        },
        {
            key: 'qualifications',
            titleStart: 'A Qualified',
            titleEnd: 'Problem Solver',
            titleEndDrawing: problemSolverPhraseDrawing,
            content: <GraduationCard />,
            description: 'A Bachelor of Engineering graduate with academic distinction.',
            buttonLabel: 'View Qualifications',
            buttonAction: () => navigate(NAV_ITEMS.qualifications.to),
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
            buttonAction: () => navigate(NAV_ITEMS.personality.to),
        },
        {
            key: 'resources',
            titleStart: 'Explore',
            titleEnd: 'Resources',
            titleEndDrawing: problemSolverPhraseDrawing,
            content: <ResourcePreviewGraphic />,
            description: 'View or download resources related to my work and education.',
            buttonLabel: 'View Resources',
            buttonAction: () => navigate(NAV_ITEMS.resources.to),
        },
        {
            key: 'contact',
            titleStart: 'Contact Me',
            titleEnd: 'Today',
            titleEndDrawing: problemSolverPhraseDrawing,
            content: <ContactMeGraphic />,
            description: "Let's discuss the impact I can bring to your team and organization.",
            buttonLabel: 'Contact Me',
            buttonAction: () => navigate(NAV_ITEMS.contact.to),
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
                buttonAction={scrollToContact}
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
