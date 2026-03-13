import type { ReactNode } from 'react'
import AnimatedDrawing, { type AnimatedDrawingData } from '../AnimatedDrawing/AnimatedDrawing'
import styles from './PagePreview.module.css'

export interface PagePreviewProps {
    titleStart: string
    titleEnd: string
    titleEndDrawing: AnimatedDrawingData
    description: string
    buttonLabel: string
    buttonAction: () => void
    content?: ReactNode
}

const PagePreview = ({
    titleStart,
    titleEnd,
    titleEndDrawing,
    description,
    buttonLabel,
    buttonAction,
    content,
}: PagePreviewProps) => {
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
            <div className={styles.contentContainer}>{content}</div>
            <p className={`largeDescription ${styles.description}`}>{description}</p>
            <button className={styles.button} onClick={buttonAction}>
                {buttonLabel}
            </button>
        </section>
    )
}

export default PagePreview
