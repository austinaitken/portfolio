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
import nasdaqLogo from '@/assets/images/verafin/NDAQ.svg'
import mdiumNewspaperHeadshotImage from '@/assets/images/mdium/Mdium_Newspaper_Headshot.png'
import austinBeard from '@/assets/images/AustinBeard.png'

import styles from './HomePage.module.css'
import ResourcePreviewGraphic from '../ResourcesPage/components/ResourcePreviewGraphic/ResourcePreviewGraphic'
import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'

type HomePreviewKey =
    | 'introduction'
    | 'experience'
    | 'entrepreneurship'
    | 'qualifications'
    | 'personality'
    | 'resources'

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
            content: <img src={nasdaqLogo} alt="Nasdaq Logo" />,
            description: 'Catching financial fraud for the largest institutions in North America.',
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
            content: <img src={austinBeard} alt="Austin Aitken's profile picture" />,
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
    ]

    return (
        <div className={styles.container}>
            <section className={styles.introContainer}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title} aria-label="Hello, I'm Austin Aitken">
                        Hello, I'm
                        <span className={styles.visuallyHidden}> Austin Aitken</span>
                    </h1>

                    <div className={styles.titleDrawing}>
                        <AnimatedDrawing
                            drawing={problemSolverPhraseDrawing}
                            aria-hidden="true"
                            focusable="false"
                        />
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <img src={headshotImage} alt="Austin Aitken's profile picture" />
                </div>
                <p className={`largeDescription ${styles.description}`}>
                    An experienced software developer with an entrepreneurial spirit.
                </p>
                <button className={styles.button} onClick={scrollToContact}>
                    Contact Me
                </button>
            </section>
            <div className={styles.pagePreviewsContainer}>
                {pagePreviews.map((preview) => (
                    <PagePreview
                        key={preview.key}
                        titleStart={preview.titleStart}
                        titleEnd={preview.titleEnd}
                        titleEndDrawing={preview.titleEndDrawing}
                        content={preview.content}
                        description={preview.description}
                        buttonLabel={preview.buttonLabel}
                        buttonAction={preview.buttonAction}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomePage
