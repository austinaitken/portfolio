import PagePreview from '@/common/components/PagePreview/PagePreview'
import styles from './HomePage.module.css'
import {
    darkWordDrawing,
    firstNameWordDrawing,
    flameWordDrawing,
    problemSolverPhraseDrawing,
    professionalWordDrawing,
} from '@/common/constants/animated-drawings'

const PagePreviews = [
    {
        key: 'introduction',
        titleStart: "Hello, I'm",
        titleEndDrawing: firstNameWordDrawing,
        description: 'An experienced software developer with an entrepreneurial spirit.',
        buttonLabel: 'View Experience',
        buttonAction: () => {
            // Navigate to Experience page
        },
    },
    {
        key: 'experience',
        titleStart: 'An Experienced',
        titleEndDrawing: professionalWordDrawing,
        description: 'Catching financial fraud for the largest institutions in North America.',
        buttonLabel: 'View Experience',
        buttonAction: () => {
            // Navigate to Experience page
        },
    },
    {
        key: 'entrepreneurship',
        titleStart: 'An Entrepreneurial',
        titleEndDrawing: flameWordDrawing,
        description: 'Turning ideas into live consumer products to solve real problems.',
        buttonLabel: 'View Businesses',
        buttonAction: () => {
            // Navigate to Entrepreneurship page
        },
    },
    {
        key: 'qualifications',
        titleStart: 'A Qualified',
        titleEndDrawing: problemSolverPhraseDrawing,
        description: 'A Bachelor of Engineering graduate with academic distinction.',
        buttonLabel: 'View Qualifications',
        buttonAction: () => {
            // Navigate to Qualifications page
        },
    },
    {
        key: 'personality',
        titleStart: 'A Light in the',
        titleEndDrawing: darkWordDrawing,
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
                    titleEndDrawing={preview.titleEndDrawing}
                    description={preview.description}
                    buttonLabel={preview.buttonLabel}
                    buttonAction={preview.buttonAction}
                />
            ))}
        </div>
    )
}

export default HomePage
