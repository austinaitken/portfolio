import type { ReactNode } from 'react'
import PageSubSection, { type PageSubSectionProps } from '../PageSubSection/PageSubSection'
import styles from './PageSection.module.css'

export interface PageSectionProps {
    title: string
    description: string
    content?: ReactNode
    subSections?: PageSubSectionProps[]
}

const PageSection = ({ title, description, content, subSections }: PageSectionProps) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
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
