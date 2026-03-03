import { useEffect, useRef, useState } from 'react'

import YouTubeVideo from '@/common/components/YouTubeVideo/YouTubeVideo'
import TrioAppScreenshots from '@/common/components/TrioAppScreenshots/TrioAppScreenshots'

import mdiumLogoRightText from '@/assets/images/mdium/Mdium_Logo_Right_Text.png'
import mdiumNewspaper from '@/assets/images/mdium/Mdium_Newspaper 3.jpg'
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

const STAR_PATH =
    'M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z'

const Mdium = () => {
    const starsContainerRef = useRef<HTMLDivElement | null>(null)
    const [areStarsVisible, setAreStarsVisible] = useState(false)

    useEffect(() => {
        const target = starsContainerRef.current
        if (!target) {
            return
        }

        if (typeof IntersectionObserver === 'undefined') {
            setAreStarsVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry?.isIntersecting) {
                    setAreStarsVisible(true)
                    observer.unobserve(target)
                }
            },
            { threshold: 0.35 }
        )

        observer.observe(target)

        return () => {
            observer.disconnect()
        }
    }, [])

    const handleNewspaperClick = () => {
        window.open(
            'https://www.saltwire.com/nova-scotia/st-johns-startup-focused-on-secure-online-transfer-of-large-files-545266/',
            '_blank'
        )
    }

    return (
        <div className={styles.container}>
            <img src={mdiumLogoRightText} alt="The Mdium Logo with Right Text" />
            {/* <h2>Send Files Anywhere</h2> */}
            <p className="largeDescription">
                Transfer large files through emails, links, or short-lived codes.
            </p>
            <TrioAppScreenshots screenshots={screenshotItems} />
            <h2 style={{ marginTop: '40px', marginBottom: '10px' }}>Making Headlines</h2>
            <p className="mediumDescription" style={{ marginBottom: '20px' }}>
                From NTV News to the Business front page, Mdium was making waves.
            </p>
            <div className={styles.newsMediaContainer}>
                <img
                    className={`clickable ${styles.newspaper}`}
                    src={mdiumNewspaper}
                    alt="The Mdium Newspaper"
                    onClick={handleNewspaperClick}
                />
                <YouTubeVideo videoId="HqyS-xeRvQw" />
            </div>
            <h2 style={{ marginTop: '40px', marginBottom: '10px' }}>Satisfying Customers</h2>
            <p className="mediumDescription" style={{ marginBottom: '20px' }}>
                Reached over 30k users with 140k+ file transfers achieving an outstanding 4.6/5
                rating.
            </p>
            <div ref={starsContainerRef} className={styles.starsContainer}>
                {[0, 1, 2, 3, 4].map((starIndex) => (
                    <svg
                        key={starIndex}
                        className={styles.starSvg}
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className={`${styles.starFillPath} ${areStarsVisible ? (starIndex === 4 ? styles.starFillAnimatePartial : styles.starFillAnimate) : ''} ${styles[`starFillDelay${starIndex + 1}`]}`}
                            d={STAR_PATH}
                        />
                        <path
                            className={`${styles.starPath} ${areStarsVisible ? styles.starPathAnimate : ''} ${styles[`starDelay${starIndex + 1}`]}`}
                            pathLength="1"
                            d={STAR_PATH}
                        />
                    </svg>
                ))}
            </div>

            {/* <svg
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
            </svg> */}

            {/* <img src={mdiumLogoBeach} alt="The Mdium Logo with Beach" /> */}
        </div>
    )
}

export default Mdium
