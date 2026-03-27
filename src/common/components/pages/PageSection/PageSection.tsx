import type { ReactNode } from 'react'
import PageSubSection, { type PageSubSectionProps } from '../PageSubSection/PageSubSection'
import styles from './PageSection.module.css'
import AnimatedDrawing, { type AnimatedDrawingData } from '../../AnimatedDrawing/AnimatedDrawing'

export interface PageSectionProps {
    description: string
    content?: ReactNode
    subSections?: PageSubSectionProps[]
    titleStart: string
    titleEnd: string
    titleEndDrawing: AnimatedDrawingData
}

const PageSection = ({
    titleStart,
    titleEnd,
    titleEndDrawing,
    description,
    content,
    subSections,
}: PageSectionProps) => {
    const fullTitle = `${titleStart} ${titleEnd}`.trim()
    return (
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title} aria-label={fullTitle}>
                    {titleStart}
                    <span className={styles.visuallyHidden}> {titleEnd}</span>
                </h2>
                <div className={styles.titleDrawing}>
                    <AnimatedDrawing
                        drawing={titleEndDrawing}
                        aria-hidden="true"
                        focusable="false"
                        strokeColor={'var(--color-text-primary)'}
                    />
                </div>
            </div>
            {content && <div className={styles.contentContainer}>{content}</div>}
            <p className={`mediumDescription ${styles.description}`}>{description}</p>
            <div className={styles.subSectionsContainer}>
                {subSections?.map((subSection) => (
                    <PageSubSection
                        key={`${subSection.title}-${subSection.description}`}
                        title={subSection.title}
                        description={subSection.description}
                        content={subSection.content}
                    />
                ))}
            </div>
        </section>
    )
}

export default PageSection
