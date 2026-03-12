import { useEffect, useRef } from 'react'

import { useGlobalContext } from '@/common/context/useGlobalContext'

// import graduationCard from '@/assets/images/university/Austin_Aitken_Graduation_Trading_Card.png'
// import munLogo from '@/assets/images/university/MUN_Logo.png'
import trophyImage from '@/assets/images/university/Work_Term_Award.png'

import styles from './Qualifications.module.css'
import GraduationCard from './components/GraduationCard/GraduationCard'

const Qualifications = () => {
    const { qualificationsRef } = useGlobalContext()
    const pStroke1PathRef = useRef<SVGPathElement>(null)
    const pStroke2PathRef = useRef<SVGPathElement>(null)
    const problemStrokePathRef = useRef<SVGPathElement>(null)
    const solverStrokePathRef = useRef<SVGPathElement>(null)

    useEffect(() => {
        const pStroke1Path = pStroke1PathRef.current
        const pStroke2Path = pStroke2PathRef.current
        const problemStrokePath = problemStrokePathRef.current
        const solverStrokePath = solverStrokePathRef.current

        if (pStroke1Path !== null) {
            const length1 = pStroke1Path.getTotalLength()
            console.log('P Stroke 1 Path length:', length1)
        }

        if (pStroke2Path !== null) {
            const length2 = pStroke2Path.getTotalLength()
            console.log('P Stroke 2 Path length:', length2)
        }

        if (problemStrokePath !== null) {
            const problemLength = problemStrokePath.getTotalLength()
            console.log('Problem Stroke Path length:', problemLength)
        }

        if (solverStrokePath !== null) {
            const solverLength = solverStrokePath.getTotalLength()
            console.log('Solver Stroke Path length:', solverLength)
        }
    }, [])

    // const handleMunLogoClick = () => {
    //     window.open('https://www.mun.ca/engineering/', '_blank')
    // }

    return (
        <section className={styles.container} ref={qualificationsRef}>
            <h1 className={styles.title}>A Qualified</h1>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '20px',
                }}
            >
                {/* <svg
                    // height="750.0pt"
                    style={{ height: '7rem' }}
                    viewBox="0 0 1600 750"
                    width="1600.0pt"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className={styles.pLetterStroke1}
                        d="M246.512 75.5232C217.668 104.367 197.028 170.635 179.36 206.773C118.384 331.497 78.0648 462.461 23.6919 589.331"
                    />
                    <path
                        className={styles.pLetterStroke2}
                        d="M179.36 56.1918C188.26 38.3919 250.859 40.9302 265.843 40.9302C359.382 40.9302 547.906 111.309 411.337 214.913C386.649 233.642 359.086 246.789 330.959 259.68C297.776 274.889 263.028 288.433 228.198 299.36C173.837 316.415 117.061 323.41 62.3547 339.041"
                    />
                    <path
                        className={styles.problemStroke}
                        d="M194.622 583.227C257.769 551.653 298.245 477.569 345.203 430.61C346.101 429.713 336.471 461.558 339.099 464.186C352.215 477.303 380.175 470.15 384.884 493.692C387.994 509.244 334.791 566.282 380.814 572.035C478.044 584.189 497.549 451.109 568.023 465.203C570.261 465.651 583.206 474.726 578.198 476.395C573.017 478.122 558.226 471.388 550.727 472.326C523.478 475.732 472.141 522.469 482.558 553.721C502.521 613.609 619.097 536.422 590.407 488.605C560.166 438.203 523.418 543.612 603.634 537.442C737.331 527.157 806.278 427.1 850.872 309.535C856.088 295.783 901.029 175.7 868.169 169.128C836.049 162.704 814.869 252.614 806.105 270.872C755.866 375.537 693.801 469.594 655.523 580.174C649.743 596.873 606.72 696.583 636.192 708.372C669.446 721.674 816.037 569.709 790.843 539.477C776.564 522.342 677.907 523.407 677.907 536.424C677.907 561.223 774.898 540.47 784.738 537.442C885.347 506.485 943.368 420.706 1000.44 337.006C1007.18 327.108 1063.99 231.084 1044.19 227.122C1024.92 223.269 993.663 263.016 983.14 274.942C927.176 338.367 902.607 409.052 875.291 487.587C868.641 506.706 845.831 551.58 866.134 568.983C901.494 599.291 1077.8 492.694 1041.13 474.36C988.879 448.233 957 594.767 1058.43 555.756C1095.64 541.443 1105.64 478.863 1151.02 484.535C1175.06 487.54 1188.55 525.465 1178.49 545.581C1177.73 547.106 1175.25 553.838 1172.38 551.686C1149.04 534.178 1218.63 488.295 1232.41 484.535C1253.99 478.651 1274.33 490.216 1277.18 513.023C1277.56 516.069 1273.25 552.844 1269.04 548.634C1244.44 524.034 1315.4 492.109 1330.09 490.64C1373.51 486.298 1359.95 541.969 1395.2 553.721C1446.47 570.809 1531.55 525.792 1576.31 505.901"
                    />
                </svg>
                <svg
                    // height="750.0pt"
                    viewBox="0 0 1600 750"
                    width="1600.0pt"
                    style={{ height: '7rem' }}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className={styles.solverStroke}
                        d="M16.577 702.102C141.432 569.929 240.033 400.953 310.431 229.546C320.188 205.789 354.654 59.6231 304.823 49.0726C237.138 34.7421 234.63 155.535 256.595 192.739C282.488 236.597 337.827 266.86 372.118 303.16C453.251 389.05 521.722 599.459 379.969 667.67C363.973 675.367 201.861 689.636 240.893 637.987C277.511 589.53 382.394 658.889 432.683 652.234C472.929 646.909 492.417 610.524 525.774 592.868C542.641 583.94 569.353 584.924 587.461 588.119C589.445 588.469 602.754 593.077 602.041 589.306C594.69 550.393 462.151 617.846 505.585 691.416C526.641 727.079 651.718 644.616 628.959 596.43C602.046 539.449 559.075 660.982 643.54 651.047C784.295 634.491 845.019 411.005 879.071 294.849C887.279 266.853 926.633 174.546 909.354 144.059C906.173 138.447 900.544 143.463 898.138 146.433C876.314 173.387 858.844 206.657 840.938 236.67C782.791 334.133 752.632 434.045 739.996 547.75C737.965 566.025 730.463 645.259 756.819 652.234C871.436 682.568 888.617 518.492 956.46 528.753C1007.36 536.449 905.325 636.272 946.366 668.857C988.63 702.413 1048.8 585.085 1065.25 556.061C1065.81 555.08 1075.36 540.64 1074.23 539.438C1072.65 537.771 1068.02 549.195 1067.5 550.124C1054.69 572.716 1047.79 587.608 1057.4 613.053C1067.1 638.725 1124.68 648.828 1146.01 640.361C1171.5 630.239 1244.04 548.32 1190.87 537.064C1140.92 526.487 1123.5 653.116 1170.68 659.358C1224.89 666.532 1278.63 625.242 1295.18 572.684C1298.21 563.068 1305.34 523.964 1314.24 519.254C1322.49 514.891 1305.22 554.048 1309.76 557.248C1327.32 569.642 1371.16 546.413 1387.15 554.874C1389.8 556.28 1378.19 568.799 1377.05 570.309C1363.6 588.11 1348.79 606.928 1361.35 630.863C1399.49 703.533 1523.4 689.18 1583.42 684.292"
                    />
                </svg> */}
                <svg
                    height="1000.0pt"
                    viewBox="0 0 4000 1000"
                    width="4000.0pt"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ height: '7rem' }}
                >
                    <path
                        className={styles.pLetterStroke1}
                        ref={pStroke1PathRef}
                        d="M343.05 75.4442C307.241 116.629 281.618 211.25 259.684 262.85C183.983 440.936 133.927 627.934 66.4244 809.086"
                    />
                    <path
                        className={styles.pLetterStroke2}
                        ref={pStroke2PathRef}
                        d="M259.684 47.8419C270.733 22.4263 348.448 26.0506 367.05 26.0506C483.177 26.0506 717.225 126.541 547.678 274.472C517.027 301.214 482.809 319.986 447.89 338.393C406.694 360.109 363.555 379.448 320.314 395.05C252.826 419.401 182.34 429.39 114.423 451.708"
                    />
                    <path
                        className={styles.problemStroke}
                        ref={problemStrokePathRef}
                        d="M278.631 800.369C357.026 755.287 407.276 649.505 465.574 582.456C466.688 581.174 454.732 626.644 457.995 630.397C474.279 649.125 508.991 638.913 514.836 672.527C518.698 694.733 452.647 776.174 509.784 784.389C630.493 801.742 654.708 611.724 742.2 631.849C744.977 632.488 761.049 645.446 754.831 647.83C748.4 650.295 730.037 640.68 720.727 642.019C686.898 646.882 623.164 713.616 636.097 758.239C660.88 843.75 805.607 733.539 769.989 665.263C732.445 593.297 686.824 743.805 786.41 734.995C952.392 720.31 1037.99 577.444 1093.35 409.578C1099.83 389.943 1155.62 218.482 1114.82 209.098C1074.95 199.925 1048.65 328.303 1037.77 354.373C975.402 503.818 898.35 638.118 850.829 796.011C843.653 819.853 790.24 962.225 826.83 979.058C868.114 998.051 1050.1 781.068 1018.83 737.901C1001.1 713.434 878.618 714.955 878.618 733.542C878.618 768.951 999.031 739.318 1011.25 734.995C1136.15 690.794 1208.18 568.314 1279.03 448.802C1287.41 434.67 1357.94 297.561 1333.35 291.905C1309.43 286.403 1270.62 343.155 1257.56 360.184C1188.08 450.746 1157.58 551.674 1123.67 663.81C1115.41 691.109 1087.09 755.182 1112.3 780.03C1156.2 823.307 1375.08 671.102 1329.56 644.924C1264.68 607.618 1225.11 816.847 1351.03 761.145C1397.23 740.708 1409.64 651.353 1465.97 659.452C1495.82 663.742 1512.57 717.895 1500.08 746.617C1499.13 748.793 1496.06 758.407 1492.5 755.334C1463.52 730.334 1549.91 664.821 1567.02 659.452C1593.81 651.051 1619.06 667.564 1622.6 700.129C1623.08 704.477 1617.73 756.988 1612.5 750.975C1581.96 715.85 1670.05 670.266 1688.29 668.168C1742.19 661.969 1725.36 741.459 1769.13 758.239C1832.77 782.638 1938.4 718.36 1993.96 689.96"
                    />
                    <path
                        className={styles.solverStroke}
                        ref={solverStrokePathRef}
                        d="M2144.14 799.128C2288.85 643.716 2403.13 445.032 2484.72 243.488C2496.03 215.554 2535.98 43.6897 2478.22 31.2843C2399.77 14.4342 2396.87 156.465 2422.33 200.21C2452.34 251.778 2516.48 287.362 2556.22 330.045C2650.26 431.036 2729.62 678.439 2565.32 758.642C2546.78 767.692 2358.89 784.47 2404.13 723.74C2446.57 666.764 2568.13 748.317 2626.42 740.493C2673.06 734.231 2695.65 691.449 2734.31 670.689C2753.86 660.191 2784.82 661.348 2805.81 665.104C2808.11 665.516 2823.54 670.934 2822.71 666.5C2814.19 620.745 2660.57 700.059 2710.91 786.563C2735.32 828.496 2880.29 731.534 2853.91 674.877C2822.72 607.878 2772.91 750.778 2870.81 739.096C3033.95 719.629 3104.33 456.851 3143.8 320.273C3153.31 287.354 3198.92 178.818 3178.9 142.971C3175.21 136.372 3168.69 142.27 3165.9 145.763C3140.6 177.455 3120.35 216.574 3099.6 251.865C3032.21 366.463 2997.25 483.941 2982.6 617.638C2980.25 639.126 2971.56 732.291 3002.1 740.493C3134.95 776.16 3154.86 583.236 3233.49 595.3C3292.48 604.351 3174.23 721.724 3221.8 760.038C3270.78 799.493 3340.52 661.537 3359.59 627.41C3360.23 626.257 3371.3 609.277 3369.99 607.865C3368.16 605.905 3362.8 619.336 3362.19 620.43C3347.35 646.994 3339.35 664.504 3350.49 694.422C3361.73 724.608 3428.47 736.487 3453.19 726.532C3482.74 714.63 3566.81 618.308 3505.18 605.073C3447.29 592.637 3427.11 741.529 3481.79 748.869C3544.62 757.304 3606.9 708.755 3626.08 646.955C3629.59 635.649 3637.86 589.67 3648.18 584.132C3657.73 579.001 3637.72 625.044 3642.98 628.806C3663.33 643.379 3714.15 616.066 3732.68 626.014C3735.76 627.668 3722.3 642.387 3720.98 644.163C3705.38 665.094 3688.22 687.22 3702.78 715.363C3746.98 800.81 3890.6 783.934 3960.17 778.187"
                    />
                </svg>
            </div>
            {/* <h2 style={{ marginBottom: '20px' }}>Bachelor of Engineering (Computer)</h2> */}
            {/* <p>
                Graduated with a strong foundation in computer engineering principles and practices.
            </p> */}
            <p className="largeDescription" style={{ marginBottom: '40px' }}>
                Graduated with a Bachelor of Engineering (Computer) with distinction.
            </p>
            <GraduationCard />
            <h2 style={{ marginBottom: '10px' }}>Excellence Awarded</h2>
            <p style={{ marginBottom: '30px' }} className="mediumDescription">
                Achieved an Outstanding with Distinction on all engineering work terms.
            </p>
            <img
                className={styles.trophyImage}
                src={trophyImage}
                alt="The trophy for the Director's Award for Exemplary Work Terms"
            />
            <h2 style={{ marginBottom: '10px' }}>Academically Proven</h2>
            <p style={{ marginBottom: '20px' }} className="mediumDescription">
                A top performer in the most advanced computer engineering courses.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            aspectRatio: '1',
                            // border: '1px solid #32ff95',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '30px',
                        }}
                    >
                        <p style={{ fontSize: '1.8rem', margin: '0px', padding: '0px' }}>91%</p>
                        <p style={{ fontSize: '1rem', margin: '0px', padding: '0px' }}>
                            Real-Time Operating
                            <br />
                            Systems
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            aspectRatio: '1',
                            // border: '1px solid #32ff95',
                            borderRadius: '30px',
                        }}
                    >
                        <p style={{ fontSize: '1.8rem', margin: '0px', padding: '0px' }}>90%</p>
                        <p style={{ fontSize: '1rem', margin: '0px', padding: '0px' }}>
                            Computer
                            <br />
                            Security
                        </p>
                    </div>
                </div>
                {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            border: '1px solid gold',
                        }}
                    >
                        <p style={{ fontSize: '1.6rem', margin: '0px', padding: '0px' }}>87%</p>
                        <p style={{ fontSize: '1rem', margin: '0px', padding: '0px' }}>
                            Concurrent
                            <br />
                            Programming
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            border: '1px solid gold',
                        }}
                    >
                        <p style={{ fontSize: '1.6rem', margin: '0px', padding: '0px' }}>87%</p>
                        <p style={{ fontSize: '1rem', margin: '0px', padding: '0px' }}>
                            Computer
                            <br />
                            Architecture
                        </p>
                    </div>
                </div> */}
            </div>
            {/* <img
                className={`clickable ${styles.munLogo}`}
                src={munLogo}
                alt="Memorial University of Newfoundland Logo"
                onClick={handleMunLogoClick}
            /> */}
        </section>
    )
}

export default Qualifications
