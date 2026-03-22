import type { ComponentType } from 'react'
import PageSubSection, { type PageSubSectionProps } from '../PageSubSection/PageSubSection'
import styles from './PageSection.module.css'

export interface PageSectionProps {
    title: string
    description: string
    content?: ComponentType
    subSections?: PageSubSectionProps[]
}

const PageSection = ({ title, description, content: Content, subSections }: PageSectionProps) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={`mediumDescription ${styles.description}`}>{description}</p>
            {Content && (
                <div className={styles.contentContainer}>
                    <Content />
                </div>
            )}
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
