import YouTubeVideo from '@/common/components/YouTubeVideo/YouTubeVideo'
import TrioAppScreenshots from '@/common/components/TrioAppScreenshots/TrioAppScreenshots'

import mdiumLogoRightText from '@/assets/images/mdium/Mdium_Logo_Right_Text.png'
import mdiumNewspaper from '@/assets/images/mdium/Mdium_Newspaper.png'
// import mdiumLogoBeach from '@/assets/images/mdium/Mdium_Logo_Beach.png'
import phaunaScreenshot1 from '@/assets/images/App_Screenshot.jpeg'
import phaunaScreenshot2 from '@/assets/images/App_Screenshot.jpeg'
import phaunaScreenshot3 from '@/assets/images/App_Screenshot.jpeg'

import styles from './Mdium.module.css'

const screenshotItems = [
    { src: phaunaScreenshot1, alt: 'Phauna App Screenshot 1' },
    { src: phaunaScreenshot2, alt: 'Phauna App Screenshot 2' },
    { src: phaunaScreenshot3, alt: 'Phauna App Screenshot 3' },
]

const Mdium = () => {
    return (
        <div className={styles.container}>
            <img src={mdiumLogoRightText} alt="The Mdium Logo with Right Text" />
            <h2>Send Files Anywhere.</h2>
            <p></p>
            <TrioAppScreenshots screenshots={screenshotItems} />
            <h2>Making Headlines.</h2>
            <p>From NTV News to the front page of the Business page, Mdium was making waves.</p>
            <h2>Satisfying Customers.</h2>
            <p></p>
            <img src={mdiumNewspaper} alt="The Mdium Newspaper" />
            <YouTubeVideo videoId='HqyS-xeRvQw' />
            {/* <img src={mdiumLogoBeach} alt="The Mdium Logo with Beach" /> */}
        </div>
    )
}

export default Mdium
