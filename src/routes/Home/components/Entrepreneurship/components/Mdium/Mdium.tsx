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
    const handleNewspaperClick = () => {
        window.open(
            'https://www.saltwire.com/nova-scotia/st-johns-startup-focused-on-secure-online-transfer-of-large-files-545266/',
            '_blank'
        )
    }

    return (
        <div className={styles.container}>
            <img src={mdiumLogoRightText} alt="The Mdium Logo with Right Text" />
            <h2>Send Files Anywhere.</h2>
            <p>
                Transfer large files through emails, links, or short-lived codes. No download or
                accounts needed.
            </p>
            <TrioAppScreenshots screenshots={screenshotItems} />
            <h2>Making Headlines.</h2>
            <p>From NTV News to the front page of the Business page, Mdium was making waves.</p>
            <div className={styles.newsMediaContainer}>
                <img
                    className={`clickable ${styles.newspaper}`}
                    src={mdiumNewspaper}
                    alt="The Mdium Newspaper"
                    onClick={handleNewspaperClick}
                />
                <YouTubeVideo videoId="HqyS-xeRvQw" />
            </div>
            <h2>Satisfying Customers.</h2>
            <p>
                Reaching over 30k users with more than 140k file transfers, customers rated Mdium an
                outstanding 4.6 / 5.
            </p>
            <svg
                width="100%"
                height="100%"
                viewBox="-10.5 -9.45 21 18.9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: 'white' }}
                // className="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"
            >
                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                <g stroke="currentColor" stroke-width="1" fill="none">
                    <ellipse rx="10" ry="4.5"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                </g>
            </svg>

            {/* <img src={mdiumLogoBeach} alt="The Mdium Logo with Beach" /> */}
        </div>
    )
}

export default Mdium
