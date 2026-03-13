import YouTubeVideo from '@/common/components/YouTubeVideo/YouTubeVideo'
// import TrioAppScreenshots from '@/common/components/TrioAppScreenshots/TrioAppScreenshots'

// import phaunaScreenshot1 from '@/assets/images/App_Screenshot.jpeg'
// import phaunaScreenshot2 from '@/assets/images/App_Screenshot.jpeg'
// import phaunaScreenshot3 from '@/assets/images/App_Screenshot.jpeg'

import styles from './Amello.module.css'

// const screenshotItems = [
//     { src: phaunaScreenshot1, alt: 'Phauna App Screenshot 1' },
//     { src: phaunaScreenshot2, alt: 'Phauna App Screenshot 2' },
//     { src: phaunaScreenshot3, alt: 'Phauna App Screenshot 3' },
// ]

const Amello = () => {
    return (
        <div className={styles.container}>
            <h2>Say Hello to Amello!</h2>
            <p className="mediumDescription">Play interest-based games with new friends.</p>
            <p>Interest-based Matching</p>
            <p>Peer-to-Peer WebRTC Video Calls</p>
            <p>Custom Interest-Based Games.</p>
            {/* <TrioAppScreenshots screenshots={screenshotItems} /> */}
            <YouTubeVideo videoId="fppS6ddagRo" />
        </div>
    )
}

export default Amello
