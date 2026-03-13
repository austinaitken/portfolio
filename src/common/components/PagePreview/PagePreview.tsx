import AnimatedDrawing, { type AnimatedDrawingData } from '../AnimatedDrawing/AnimatedDrawing'
import styles from './PagePreview.module.css'

interface PagePreviewProps {
    titleStart: string
    titleEndDrawing: AnimatedDrawingData
    description: string
    buttonLabel: string
    buttonAction: () => void
}

const PagePreview = ({
    titleStart,
    titleEndDrawing,
    description,
    buttonLabel,
    buttonAction,
}: PagePreviewProps) => {
    return (
        <section className={styles.sectionPreviewContainer}>
            <div>
                <h1>{titleStart}</h1>
                <AnimatedDrawing drawing={titleEndDrawing} />
            </div>
            <div>
                <p>{description}</p>
                <button onClick={buttonAction}>{buttonLabel}</button>
            </div>
        </section>
    )
}

export default PagePreview
