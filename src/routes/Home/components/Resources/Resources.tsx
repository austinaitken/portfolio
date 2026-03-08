import { useGlobalContext } from '@/common/context/useGlobalContext'
import styles from './Resources.module.css'
import { useEffect, useRef } from 'react'

const Resources = () => {
    const { resourcesRef } = useGlobalContext()
    const rLetterStrokePathRef = useRef<SVGPathElement>(null)
    const resourceStrokePathRef = useRef<SVGPathElement>(null)

    useEffect(() => {
        const rStrokePath = rLetterStrokePathRef.current
        const resourcesStrokePath = resourceStrokePathRef.current

        if (rStrokePath !== null) {
            const rLength = rStrokePath.getTotalLength()
            console.log('R Letter Stroke Path length:', rLength)
        }

        if (resourcesStrokePath !== null) {
            const resourcesLength = resourcesStrokePath.getTotalLength()
            console.log('Resources Stroke Path length:', resourcesLength)
        }
    }, [])

    const handleResumeDownload = () => {
        const link = document.createElement('a')
        link.href = '/pdfs/Austin_Aitken_Resume.pdf'
        link.download = 'Austin_Aitken_Resume.pdf'
        link.click()
    }

    const handleTranscriptDownload = () => {
        const link = document.createElement('a')
        link.href = '/pdfs/Austin_Aitken_Transcript.pdf'
        link.download = 'Austin_Aitken_Transcript.pdf'
        link.click()
    }

    const handleGitHubRedirect = () => window.open('https://github.com/austinaitken', '_blank')

    const handleLinkedInRedirect = () =>
        window.open('https://www.linkedin.com/in/austin-aitken', '_blank')

    return (
        <section className={styles.container} ref={resourcesRef}>
            <h1 className={styles.title}>Available</h1>
            <svg
                height="650.0pt"
                viewBox="0 0 2000 650"
                width="2000.0pt"
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: '5rem', marginBottom: '30px' }}
            >
                <path
                    ref={rLetterStrokePathRef}
                    className={styles.rLetterStroke}
                    d="M161.764 27.7854C161.764 20.2216 148.599 77.9895 145.592 89.1856C133.914 132.669 122.589 176.364 112.17 220.251C80.4213 353.99 54.3441 488.93 23.7645 622.895"
                />
                <path
                    ref={resourceStrokePathRef}
                    className={styles.resourcesStroke}
                    d="M153.139 90.3664C256.263 33.8946 411.271 117.356 327.794 254.494C295.89 306.906 241.042 358.391 184.404 374.933C162.989 381.187 139.669 387.921 117.561 387.921C114.658 387.921 80.0149 388.539 81.9829 395.006C83.4262 399.748 201.058 419.832 221.06 450.502C249.341 493.865 217.685 571.516 287.903 579.206C358.68 586.958 449.966 542.809 472.261 464.671C474.951 455.245 484.568 434.95 479.808 424.525C461.06 383.458 303.662 516.99 404.34 572.122C454.604 599.647 546.315 540.954 576.839 500.094C591.133 480.961 607.332 446.785 599.479 420.983C599.253 420.24 593.52 409.798 591.932 411.537C589.755 413.921 622.511 432.897 624.276 433.971C642.922 445.316 672.126 463.667 679.26 487.106C696.512 543.791 583.894 577.917 550.964 550.868C549.524 549.685 542.89 535.807 543.417 535.518C545.712 534.261 570.078 548.239 573.604 549.687C594.643 558.327 629.059 561.688 651.229 557.952C731.613 544.408 728.246 476.922 783.837 436.333C800.338 424.285 819.929 415.079 839.9 415.079C842.125 415.079 873.51 428.274 867.931 422.163C821.653 371.479 714.745 512.981 760.119 562.675C793.134 598.834 939.278 486.135 875.477 416.26C872.153 412.619 867.685 418.367 865.774 420.983C847.469 446.043 854.721 486.367 881.946 501.275C917.378 520.678 966.275 460.888 983.289 433.971C991.272 421.342 998.558 406.43 1004.85 392.644C1005.21 391.857 1006.73 390.283 1005.93 390.283C984.375 390.283 932.12 541.013 989.758 547.325C1037.83 552.59 1084.34 500.922 1100.8 454.044C1102.85 448.213 1123.52 402.359 1114.82 398.548C1111.56 397.12 1109.96 400.914 1108.35 403.271C1094.43 423.602 1056.25 540.329 1094.34 544.964C1148.31 551.533 1189.92 513.137 1198.91 454.044C1200.68 442.434 1211.42 379.656 1226.94 379.656C1239.75 379.656 1196.5 410.309 1222.63 415.079C1240.59 418.357 1264.53 413.898 1283.01 413.898C1291.04 413.898 1314.35 406.392 1306.72 409.175C1273.1 421.449 1261.84 520.526 1299.18 529.614C1435.96 562.904 1410.58 390.507 1492.16 403.271C1496.04 403.878 1464.45 415.909 1455.5 425.706C1439.83 442.876 1415.64 500.123 1435.02 521.348C1469.01 558.577 1655.81 513.993 1644.18 437.514C1633.46 367.098 1548.91 467.124 1591.35 521.348C1606.32 540.484 1633.23 537.879 1653.88 537.879C1730.88 537.879 1776.78 487.946 1776.78 403.271C1776.78 398.451 1778.86 372.483 1775.71 369.029C1774.69 367.915 1774.84 372.492 1775.71 373.752C1785.15 387.536 1795.22 401.042 1805.89 413.898C1825.27 437.241 1870.32 492.597 1845.78 528.433C1816.71 570.882 1727.28 498.19 1763.85 524.891C1771.36 530.374 1778.96 534.738 1787.56 537.879C1798.88 542.01 1799.67 541.93 1812.36 543.783C1826.87 545.901 1835.35 546.9 1850.1 547.325C1864.52 547.741 1884.66 547.12 1898.61 546.145C1924.52 544.333 1950.45 541.138 1976.24 537.879"
                />
            </svg>
            <div className={styles.resourcesContainer}>
                <div className={styles.downloadContainer}>
                    <button onClick={handleResumeDownload}>Resume</button>
                    <button onClick={handleTranscriptDownload}>Transcript</button>
                </div>
                <div className={styles.externalLinkContainer}>
                    <button onClick={handleGitHubRedirect}>GitHub</button>
                    <button onClick={handleLinkedInRedirect}>LinkedIn</button>
                </div>
            </div>
        </section>
    )
}

export default Resources
