import styles from './TrioAppScreenshots.module.css'

interface TrioAppScreenshot {
    src: string
    alt: string
    width: number
    height: number
}

interface TrioAppScreenshotsProps {
    screenshots: TrioAppScreenshot[]
}

const TrioAppScreenshots = ({ screenshots }: TrioAppScreenshotsProps) => {
    return (
        <div className={styles.screenshotsRow}>
            {screenshots.map(({ src, alt, width, height }) => (
                <img
                    key={alt}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    loading="lazy"
                    decoding="async"
                />
            ))}
        </div>
    )
}

export default TrioAppScreenshots
