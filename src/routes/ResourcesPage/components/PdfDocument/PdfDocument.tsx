import { useEffect, useRef, useState } from 'react'
import { Document, Page } from 'react-pdf'

import styles from './PdfDocument.module.css'
import { pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString()

interface PdfDocumentProps {
    file: string
}

const PdfDocument = ({ file }: PdfDocumentProps) => {
    const [numPages, setNumPages] = useState<number>()
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [containerWidth, setContainerWidth] = useState<number>()
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = containerRef.current

        if (!element) {
            return
        }

        const resizeObserver = new ResizeObserver(() => {
            setContainerWidth(Math.floor(element.clientWidth))
        })

        setContainerWidth(Math.floor(element.clientWidth))
        resizeObserver.observe(element)

        return () => {
            resizeObserver.disconnect()
        }
    }, [])

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages)
    }

    return (
        <div className={styles.container} ref={containerRef}>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                {containerWidth ? <Page pageNumber={pageNumber} width={containerWidth} /> : null}
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    )
}

export default PdfDocument
