import styles from './StarRating.module.css'

const STAR_PATH =
    'M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z'

const STAR_ANIMATION_ORDER = [1, 5, 4, 3, 2]

const StarRating = () => {
    return (
        <div className={styles.starsContainer}>
            {[0, 1, 2, 3, 4].map((starIndex) => {
                const delayIndex = STAR_ANIMATION_ORDER[starIndex]
                const isPartialFillStar = delayIndex === 5

                return (
                    <svg
                        key={starIndex}
                        className={`${styles.starSvg} ${styles[`starPosition${starIndex + 1}`]}`}
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className={`${styles.starFillPath} ${isPartialFillStar ? styles.starFillAnimatePartial : styles.starFillAnimate} ${styles[`starFillDelay${delayIndex}`]}`}
                            d={STAR_PATH}
                        />
                        <path
                            className={`${styles.starPath} ${styles.starPathAnimate} ${styles[`starDelay${delayIndex}`]}`}
                            pathLength="1"
                            d={STAR_PATH}
                        />
                    </svg>
                )
            })}
        </div>
    )
}

export default StarRating
