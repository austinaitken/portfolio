import { useRef } from 'react'

import { useGlobalContext } from '@/common/context/useGlobalContext'

import verafinLogo from '@/assets/images/verafin/Nasdaq_Verafin_Logo_Lateral2.png'
import goldMedal from '@/assets/images/verafin/Gold_Medal_Only.png'

import styles from './Experience.module.css'
import RealtimePaymentsFraud from './components/RealtimePaymentsFraud/RealtimePaymentsFraud'
import Supervisor from './components/Supervisor/Supervisor'
import BigData from './components/BigData/BigData'

const Experience = () => {
    const { experienceRef } = useGlobalContext()

    const pStroke1PathRef = useRef<SVGPathElement>(null)
    const pStroke2PathRef = useRef<SVGPathElement>(null)
    const professionalStrokePathRef = useRef<SVGPathElement>(null)
    const professionalDotIPathRef = useRef<SVGPathElement>(null)

    // useEffect(() => {
    //     const pStroke1Path = pStroke1PathRef.current
    //     const pStroke2Path = pStroke2PathRef.current
    //     const professionalStrokePath = professionalStrokePathRef.current
    //     const professionalDotIPath = professionalDotIPathRef.current

    //     if (pStroke1Path === null) return
    //     const length1 = pStroke1Path.getTotalLength()
    //     console.log('P Stroke 1 Path length:', length1)

    //     if (pStroke2Path === null) return
    //     const length2 = pStroke2Path.getTotalLength()
    //     console.log('P Stroke 2 Path length:', length2)

    //     if (professionalStrokePath === null) return
    //     const professionalLength = professionalStrokePath.getTotalLength()
    //     console.log('Professional Stroke Path length:', professionalLength)

    //     if (professionalDotIPath === null) return
    //     const dotILength = professionalDotIPath.getTotalLength()
    //     console.log('Professional Dot I Path length:', dotILength)
    // }, [])

    const handleVerafinLogoClick = () => {
        window.open('https://verafin.com/canada/', '_blank')
    }

    return (
        <section className={styles.container} ref={experienceRef}>
            <h1 className={styles.title}>An Experienced</h1>
            <svg
                height="768.0pt"
                viewBox="0 0 1920 768"
                width="1920.0pt"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    maxWidth: '600px',
                    maxHeight: '100px',
                    width: '100%',
                    height: 'auto',
                    marginBottom: '20px',
                }}
            >
                <path
                    className={styles.pLetterStroke1}
                    ref={pStroke1PathRef}
                    d="M163.232 132.809C142.123 144.619 26.2607 490.757 9.76744 546.12"
                />
                <path
                    className={styles.pLetterStroke2}
                    ref={pStroke2PathRef}
                    d="M79.3619 124.822C98.4415 82.1257 323.549 68.0347 327.404 106.852C342.861 262.511 96.1158 313.087 18.6898 382.393"
                />
                <path
                    className={styles.professionalStroke}
                    ref={professionalStrokePathRef}
                    d="M177.508 512.177C174.442 513.892 167.204 523.088 177.508 516.17C217 489.657 222.16 421.631 256.025 396.37C259.701 393.628 303.733 420.224 313.128 422.327C314.39 422.609 345.006 421.48 332.757 412.343C305.99 392.376 306.137 516.188 338.111 520.163C397.593 527.558 401.974 434.56 438.041 410.347C453.529 399.949 505.946 419.279 489.791 428.317C477.493 435.197 372.121 418.608 404.136 502.193C427.287 562.635 545.601 444.656 486.222 400.363C477.094 393.554 473.482 453.252 488.007 466.253C567.683 537.574 764.748 274.904 716.419 166.753C680.13 85.544 555.996 541.224 546.894 570.08C545.034 575.976 512.545 683.891 518.343 683.891C561.967 683.891 654.248 550.992 664.67 510.18C672.172 480.801 637.714 414.551 607.566 448.283C601.591 454.97 663.268 467.804 666.454 468.25C703.188 473.388 731.866 480.687 764.6 456.27C773.363 449.733 798.2 430.143 777.091 418.333C746.327 401.122 683.637 487.373 723.557 514.173C781.514 553.082 829.529 479.606 837.764 424.323C838.008 422.679 836.26 404.357 839.548 404.357C852.661 404.357 894.503 453.831 896.651 468.25C902.409 506.903 860.577 516.17 834.195 516.17C830.824 516.17 802.116 518.026 803.858 512.177C804.366 510.475 892.827 526.76 903.789 522.16C970.649 494.106 938.578 341.7 1009.07 440.297C1019.39 454.724 1023.75 466.693 1021.56 486.22C1017.89 519.103 963.002 517.804 944.832 510.18C941.134 508.629 908.418 511.366 909.142 512.177C939.475 546.117 1068.38 507.964 1091.16 478.233C1111.86 451.204 1125.06 378.4 1125.06 378.4C1125.06 378.4 1046.02 497.46 1085.81 510.18C1155.26 532.385 1189.71 380.621 1224.99 400.363C1298.12 441.274 1260.85 393.644 1226.78 406.353C1180.78 423.508 1168.73 490.683 1210.72 514.173C1244.19 532.897 1289.54 484.208 1294.59 450.28C1304.76 381.992 1189.28 408.83 1248.19 458.267C1323.84 521.747 1362.05 352.052 1399.87 394.373C1429.84 427.906 1370.66 497.462 1382.03 510.18C1383.4 511.719 1396.64 479.067 1398.09 476.237C1411.02 450.906 1428.97 388.153 1462.33 394.373C1519.67 405.065 1455.19 485.756 1455.19 504.19C1455.19 510.939 1477.83 507.5 1480.17 506.187C1510.47 489.237 1522.62 442.725 1546.2 416.337C1556.83 404.44 1603.59 425.366 1605.09 420.33C1611.33 399.368 1485.97 441.628 1521.22 494.207C1561.33 554.048 1651.68 437.782 1617.58 412.343C1598.17 397.865 1617.77 481.929 1640.78 486.22C1738.26 504.398 1744.17 359.12 1754.98 286.553C1755.72 281.622 1772.99 162.714 1758.55 166.753C1720.9 177.284 1698.45 441.593 1724.65 484.223C1766.9 552.997 1853.4 502.932 1910.23 490.213"
                />
                <path
                    className={styles.professionalDotI}
                    ref={professionalDotIPathRef}
                    d="M1126.85 330.48C1121.6 327.542 1122.02 328.954 1128.63 326.486"
                />
            </svg>
            <p className="largeDescription">
                Catching Financial Fraud for the Largest Institutions in North America.
            </p>
            <img
                className="clickable"
                style={{
                    width: '100%',
                    // maxWidth: '300px',
                    margin: '30px auto',
                }}
                src={verafinLogo}
                alt="Verafin Logo"
                onClick={handleVerafinLogoClick}
            />
            {/* <p style={{ marginBottom: '30px' }} className="mediumDescription">
                Catching Financial Fraud for the Largest Institutions in North America
            </p> */}
            <h2 style={{ marginBottom: '10px' }}>Protection in Real-Time</h2>
            <p style={{ marginBottom: '20px' }} className="mediumDescription">
                I pioneered the company's real-time fraud detection of payment services like
                E-Transfer and Zelle.
            </p>
            {/* <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" /> */}
            <RealtimePaymentsFraud />
            <h2 style={{ marginBottom: '10px' }}>Big Data for Big Results</h2>
            <p style={{ marginBottom: '20px' }} className="mediumDescription">
                I designed, implemented, and maintained a production big data pipeline to analyze
                thousands of financial institutions banking data for fraud.
            </p>
            <BigData />
            <h2 style={{ marginBottom: '10px' }}>Training Crime Fighters</h2>
            <p style={{ marginBottom: '20px' }} className="mediumDescription">
                I mentored and supervised new software developers to achieve full-time employment
                and become top performers.
            </p>
            <Supervisor />
            <h2 style={{ marginTop: '30px', marginBottom: '10px' }}>Heroism Recognized</h2>
            <p style={{ marginBottom: '20px' }} className="mediumDescription">
                I won the company's annual hackathon by detecting potential animal trafficking
                through banking and online data.
            </p>
            <img className={styles.goldMedal} src={goldMedal} alt="Verafin Hackathon Winner" />
        </section>
    )
}

export default Experience
