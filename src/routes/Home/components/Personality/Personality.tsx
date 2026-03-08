import { useEffect, useRef } from 'react'

import { useGlobalContext } from '@/common/context/useGlobalContext'

import Amello from './components/Amello/Amello'
import DmvSimulator from './components/DmvSimulator/DmvSimulator'

import styles from './Personality.module.css'

const Personality = () => {
    const { personalityRef } = useGlobalContext()

    const dStrokePathRef = useRef<SVGPathElement>(null)
    const darkStrokePathRef = useRef<SVGPathElement>(null)

    useEffect(() => {
        const dStrokePath = dStrokePathRef.current
        const darkStrokePath = darkStrokePathRef.current

        if (dStrokePath !== null) {
            const dLength = dStrokePath.getTotalLength()
            console.log('D Stroke Path length:', dLength)
        }

        if (darkStrokePath !== null) {
            const darkLength = darkStrokePath.getTotalLength()
            console.log('Dark Stroke Path length:', darkLength)
        }
    }, [])

    return (
        <section className={styles.container} ref={personalityRef}>
            <h1 className={styles.title}>A Light in the</h1>
            <svg
                height="650.0pt"
                viewBox="0 0 1600 650"
                width="1600.0pt"
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: '4.5rem', marginBottom: '30px' }}
            >
                <path
                    className={styles.dLetterStroke}
                    ref={dStrokePathRef}
                    d="M295.737 71.4411C295.737 220.14 218.912 429.83 145.21 549.913C129.592 575.359 37.5946 686.298 47.5719 586.195C57.7652 483.924 216.784 592.956 252.003 595.265C379.843 603.649 510.345 522.305 561.191 390.044C656.176 142.972 299.048 46.7107 155.381 22.6869"
                />
                <path
                    className={styles.darkStroke}
                    ref={darkStrokePathRef}
                    d="M770.07 405.002C701.529 405.002 648.636 444.909 614.725 510.951C608.847 522.397 580.03 567.532 594.508 580.142C628.588 609.822 736.904 485.372 753.046 460.139C762.96 444.641 769.992 427.699 778.582 411.489C778.786 411.105 786.614 395.272 784.966 395.272C777.29 395.272 669.185 595.543 764.75 574.736C823.392 561.968 877.975 514.68 912.648 467.706C917.712 460.846 961.28 390.63 962.656 392.029C983.975 413.69 1027.66 400.515 1054.16 405.002C1054.66 405.086 1062.67 404.942 1062.67 405.002C1062.67 418.697 904.745 562.236 1041.39 571.493C1169.67 580.182 1254.65 416.633 1319.1 329.324C1340.98 299.676 1362.92 270.108 1385.07 240.674C1392.02 231.436 1398.96 222.211 1405.29 212.565C1408.12 208.24 1413.8 194.394 1413.8 199.591C1413.8 230.003 1353.86 284.855 1338.25 305.54C1291.49 367.51 1179.88 491.731 1164.82 568.249C1164.31 570.808 1185.54 545.194 1188.23 541.222C1196.47 529.042 1205.92 517.185 1214.83 505.545C1236.97 476.624 1316.9 397.941 1360.6 420.138C1419.54 450.082 1270.3 483.216 1265.9 483.923C1254.83 485.699 1244.67 488.233 1233.98 491.491C1231.24 492.326 1222.61 492.572 1225.47 492.572C1283.78 492.572 1290.62 549.544 1339.32 565.006C1401.72 584.821 1495.96 545.455 1553.18 522.843"
                />
            </svg>
            <p className="largeDescription" style={{ marginBottom: '40px' }}>
                Enjoy your time while blending humour with technical ability.
            </p>
            <Amello />
            <DmvSimulator />
        </section>
    )
}

export default Personality
