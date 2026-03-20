import AnimatedDrawing, { type AnimatedDrawingData } from '../../AnimatedDrawing/AnimatedDrawing'
import styles from './PageIntroduction.module.css'

export interface PageIntroductionProps {
    titleStart: string
    titleEnd: string
    titleEndDrawing: AnimatedDrawingData
    description: string
    buttonLabel: string
    buttonAction: () => void
}

const PageIntroduction = ({
    titleStart,
    titleEnd,
    titleEndDrawing,
    description,
    buttonLabel,
    buttonAction,
}: PageIntroductionProps) => {
    const fullTitle = `${titleStart} ${titleEnd}`.trim()

    return (
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title} aria-label={fullTitle}>
                    {titleStart}
                    <span className={styles.visuallyHidden}> {titleEnd}</span>
                </h1>
                <div className={styles.titleDrawing}>
                    <AnimatedDrawing
                        drawing={titleEndDrawing}
                        aria-hidden="true"
                        focusable="false"
                    />
                </div>
            </div>
            <p className={`largeDescription ${styles.description}`}>{description}</p>
            <button className={styles.button} onClick={buttonAction}>
                {buttonLabel}
            </button>
        </section>
    )
}

export default PageIntroduction
