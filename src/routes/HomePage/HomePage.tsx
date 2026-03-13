import PagePreview from '@/common/components/PagePreview/PagePreview'
import type { PagePreviewProps } from '@/common/components/PagePreview/PagePreview'
import GraduationCard from '@/routes/Home2/components/Qualifications/components/GraduationCard/GraduationCard'
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

import styles from './HomePage.module.css'

type HomePreviewKey =
    | 'introduction'
    | 'experience'
    | 'entrepreneurship'
    | 'qualifications'
    | 'personality'

type HomePagePreview = PagePreviewProps & {
    key: HomePreviewKey
}

const PagePreviews: HomePagePreview[] = [
    {
        key: 'introduction',
        titleStart: "Hello, I'm",
        titleEnd: 'Austin',
        titleEndDrawing: problemSolverPhraseDrawing,
        content: <img src={headshotImage} alt="Austin Aitken's profile picture" />,
        description: 'An experienced software developer with an entrepreneurial spirit.',
        buttonLabel: 'Contact Me',
        buttonAction: () => {
            // Navigate to Contact page
        },
    },
    {
        key: 'experience',
        titleStart: 'An Experienced',
        titleEnd: 'Professional',
        titleEndDrawing: problemSolverPhraseDrawing,
        content: <img src={nasdaqLogo} alt="Nasdaq Logo" />,
        description: 'Catching financial fraud for the largest institutions in North America.',
        buttonLabel: 'View Experience',
        buttonAction: () => {
            // Navigate to Experience page
        },
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
        buttonAction: () => {
            // Navigate to Entrepreneurship page
        },
    },
    {
        key: 'qualifications',
        titleStart: 'A Qualified',
        titleEnd: 'Problem Solver',
        titleEndDrawing: problemSolverPhraseDrawing,
        content: <GraduationCard />,
        description: 'A Bachelor of Engineering graduate with academic distinction.',
        buttonLabel: 'View Qualifications',
        buttonAction: () => {
            // Navigate to Qualifications page
        },
    },
    {
        key: 'personality',
        titleStart: 'A Light in the',
        titleEnd: 'Dark',
        titleEndDrawing: problemSolverPhraseDrawing,
        // content: (
        //     <img
        //         className={styles.entrepreneurshipImage}
        //         src={mdiumNewspaperHeadshotImage}
        //         alt="Entrepreneurship"
        //     />
        // ),
        description: 'Crafting joy in the world through humour and software.',
        buttonLabel: 'View Personality',
        buttonAction: () => {
            // Navigate to Personality page
        },
    },
]

const HomePage = () => {
    return (
        <div className={styles.container}>
            {PagePreviews.map((preview) => (
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
    )
}

export default HomePage
