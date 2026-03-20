import type { ComponentType } from 'react'
import styles from './PageSubSection.module.css'

export interface PageSubSectionProps {
    title: string
    description: string
    content: ComponentType
}

const PageSubSection = ({ title, description, content: Content }: PageSubSectionProps) => {
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p className={`smallDescription ${styles.description}`}>{description}</p>
            <div className={styles.contentContainer}>
                <Content />
            </div>
        </section>
    )
}

export default PageSubSection
