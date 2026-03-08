import type { CSSProperties } from 'react'
import styles from './Arrow.module.css'

interface ArrowProps {
    delaySeconds?: number
}

const Arrow = ({ delaySeconds = 0 }: ArrowProps) => {
    return (
        <div
            className={styles.arrow}
            role="img"
            aria-label="Animated arrow showing flow to the right"
        >
            <div className={styles.track}>
                <span
                    className={styles.highlight}
                    style={{ '--transfer-delay': `${delaySeconds}s` } as CSSProperties}
                />
            </div>
        </div>
    )
}

export default Arrow
