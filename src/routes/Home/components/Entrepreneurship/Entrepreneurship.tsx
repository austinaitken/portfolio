import { useEffect, useRef } from 'react'

import { useGlobalContext } from '@/common/context/useGlobalContext'

import entrepreneurshipImage from '@/assets/images/mdium/Mdium_Newspaper_Headshot.png'

import styles from './Entrepreneurship.module.css'

const Entrepreneurship = () => {
    const { entrepreneurshipRef } = useGlobalContext()

    const fLetterStroke1PathRef = useRef<SVGPathElement>(null)
    const fLetterStroke2PathRef = useRef<SVGPathElement>(null)
    const fLetterStroke3PathRef = useRef<SVGPathElement>(null)
    const flameStrokePathRef = useRef<SVGPathElement>(null)

    useEffect(() => {
        const fLetterStroke1Path = fLetterStroke1PathRef.current
        const fLetterStroke2Path = fLetterStroke2PathRef.current
        const fLetterStroke3Path = fLetterStroke3PathRef.current
        const flameStrokePath = flameStrokePathRef.current

        if (fLetterStroke1Path === null) return
        const fLetterStroke1Length = fLetterStroke1Path.getTotalLength()
        console.log('F Letter Stroke 1 Path length:', fLetterStroke1Length)

        if (fLetterStroke2Path === null) return
        const fLetterStroke2Length = fLetterStroke2Path.getTotalLength()
        console.log('F Letter Stroke 2 Path length:', fLetterStroke2Length)

        if (fLetterStroke3Path === null) return
        const fLetterStroke3Length = fLetterStroke3Path.getTotalLength()
        console.log('F Letter Stroke 3 Path length:', fLetterStroke3Length)

        if (flameStrokePath === null) return
        const flameStrokeLength = flameStrokePath.getTotalLength()
        console.log('Flame Stroke Path length:', flameStrokeLength)
    }, [])

    return (
        <section className={styles.container} ref={entrepreneurshipRef}>
            <div className={styles.containerTop}>
                <div className={styles.containerTopLeft}>
                    <h1 className={styles.title}>An Entrepreneural</h1>
                    <div className={styles.nameContainer}>
                        <svg
                            className={styles.flameSvg}
                            viewBox="0 0 1920 768"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className={styles.fLetterStroke1}
                                ref={fLetterStroke1PathRef}
                                d="M432.89 164.754C418.165 174.604 431.148 292.993 428.578 320.507C418.452 428.884 383.65 576.142 316.469 643.55C185.908 774.553 93.8896 545.484 92.2502 545.484C59.4747 545.484 159.841 535.195 187.112 510.872"
                            />
                            <path
                                className={styles.fLetterStroke2}
                                ref={fLetterStroke2PathRef}
                                d="M169.864 170.523C169.864-25.0524 607.84 350.954 674.355 83.9934"
                            />
                            <path
                                className={styles.fLetterStroke3}
                                ref={fLetterStroke3PathRef}
                                d="M346.652 355.119C407.33 314.53 508.063 328.924 575.182 308.97"
                            />
                            <path
                                className={styles.flameStroke}
                                ref={flameStrokePathRef}
                                d="M510.504 684.007C577.303 639.323 885.276 216.264 820.96 130.218C777.447 72.005 564.48 631.533 674.355 660.932C786.867 691.036 840.053 382.388 920.133 435.956C977.4 474.263 706.466 551.083 803.712 655.163C863.511 719.164 937.381 604.851 937.381 534.022C937.381 522.485 937.381 499.41 937.381 499.41C937.381 499.41 965.687 685.663 1014.99 672.469C1075.53 656.272 1086.19 430.923 1135.73 447.493C1174.27 460.384 1205.83 643.626 1165.91 643.626C1159.59 643.626 1188.48 554.386 1191.78 545.559C1210.5 495.481 1243.02 421.975 1295.27 435.956C1336.31 446.937 1329.76 597.477 1329.76 597.477C1329.76 597.477 1363.13 474.206 1403.07 447.493C1502.51 380.97 1471.07 573.078 1493.61 603.246C1560.76 693.08 1777.27 411.128 1679.03 378.269C1623.13 359.573 1557.09 555.889 1610.04 609.014C1721.41 720.764 1733.97 597.477 1834.25 597.477"
                            />
                        </svg>
                    </div>
                </div>
                <div className={styles.containerTopRight}>
                    <img
                        className={styles.entrepreneurshipImage}
                        src={entrepreneurshipImage}
                        alt="Entrepreneurship"
                    />
                </div>
            </div>
            <div className={styles.containerBottom}>
                <p className={`largeDescription ${styles.description}`}>
                    Turned ideas into live consumer products to solve real problems.
                </p>
                <button className={styles.button}>View Entrepreneurship</button>
            </div>
            {/* <Phauna />
            <Mdium /> */}
        </section>
    )
}

export default Entrepreneurship
