import styles from './TrioAppScreenshots.module.css'

interface TrioAppScreenshot {
    src: string
    alt: string
}

interface TrioAppScreenshotsProps {
    screenshots: TrioAppScreenshot[]
}

const TrioAppScreenshots = ({ screenshots }: TrioAppScreenshotsProps) => {
    return (
        <div className={styles.screenshotsRow}>
            {screenshots.map(({ src, alt }) => (
                <img key={alt} src={src} alt={alt} />
            ))}
        </div>
    )
}

export default TrioAppScreenshots
