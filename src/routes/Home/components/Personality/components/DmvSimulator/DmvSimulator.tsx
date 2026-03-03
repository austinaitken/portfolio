import YouTubeVideo from '@/common/components/YouTubeVideo/YouTubeVideo'
// import TrioAppScreenshots from '@/common/components/TrioAppScreenshots/TrioAppScreenshots'

// import phaunaScreenshot1 from '@/assets/images/App_Screenshot.jpeg'
// import phaunaScreenshot2 from '@/assets/images/App_Screenshot.jpeg'
// import phaunaScreenshot3 from '@/assets/images/App_Screenshot.jpeg'

import styles from './DmvSimulator.module.css'

// const screenshotItems = [
//     { src: phaunaScreenshot1, alt: 'Phauna App Screenshot 1' },
//     { src: phaunaScreenshot2, alt: 'Phauna App Screenshot 2' },
//     { src: phaunaScreenshot3, alt: 'Phauna App Screenshot 3' },
// ]

const DmvSimulator = () => {
    return (
        <div className={styles.container}>
            <h2>Experience life on DMV Simulator</h2>
            <p className="mediumDescription">
                Enjoy renewing your license in this humour-based story game.
            </p>
            <p>3 Alternative Endings</p>
            <p>40 Minutes of Gameplay</p>
            <p>Built with C# on the Unity Engine</p>
            {/* <TrioAppScreenshots screenshots={screenshotItems} /> */}
            <YouTubeVideo videoId="a5QZmygubM8" />
        </div>
    )
}

export default DmvSimulator
