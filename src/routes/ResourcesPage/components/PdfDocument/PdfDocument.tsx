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

type LoadState = 'loading' | 'ready' | 'error'

const PdfDocument = ({ file }: PdfDocumentProps) => {
    const [loadState, setLoadState] = useState<LoadState>('loading')
    const [numPages, setNumPages] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)
    const [containerWidth, setContainerWidth] = useState<number>()
    const [retryCount, setRetryCount] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    // Reset document state during render when the file or a retry changes
    const [previousKey, setPreviousKey] = useState({ file, retryCount })

    if (previousKey.file !== file || previousKey.retryCount !== retryCount) {
        setPreviousKey({ file, retryCount })
        setLoadState('loading')
        setNumPages(0)
        setPageNumber(1)
    }

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

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
        setNumPages(numPages)
        setLoadState('ready')
    }

    const onDocumentLoadError = (): void => {
        setLoadState('error')
    }

    const handleRetry = (): void => {
        setRetryCount((count) => count + 1)
    }

    const previousPage = (): void => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        }
    }

    const nextPage = (): void => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1)
        }
    }

    return (
        <div className={styles.container} ref={containerRef}>
            {loadState === 'error' ? (
                <div className={styles.stateContainer}>
                    <p role="alert">
                        This document failed to load. Please check your connection and try again.
                    </p>
                    <button type="button" onClick={handleRetry} aria-label="Retry loading document">
                        Try Again
                    </button>
                </div>
            ) : (
                <>
                    <Document
                        key={retryCount}
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                    >
                        {loadState === 'ready' && containerWidth ? (
                            <Page pageNumber={pageNumber} width={containerWidth} />
                        ) : null}
                    </Document>
                    {loadState !== 'ready' || !containerWidth ? (
                        <div className={styles.stateContainer} role="status">
                            <p>Loading document...</p>
                        </div>
                    ) : (
                        <>
                            {numPages > 1 && (
                                <p aria-live="polite">
                                    Page {pageNumber} of {numPages}
                                </p>
                            )}
                            {numPages > 1 && (
                                <div className={styles.controls}>
                                    <button
                                        type="button"
                                        onClick={previousPage}
                                        disabled={pageNumber <= 1}
                                        aria-label="Go to previous page"
                                    >
                                        Last Page
                                    </button>
                                    <button
                                        type="button"
                                        onClick={nextPage}
                                        disabled={pageNumber >= numPages}
                                        aria-label="Go to next page"
                                    >
                                        Next Page
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default PdfDocument
