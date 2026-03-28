import AnimatedDrawing, {
    type AnimatedDrawingData,
} from '@/common/components/AnimatedDrawing/AnimatedDrawing'
import styles from './NasdaqVerafinGraphic.module.css'

// import nasdaqLogo from '@/assets/images/verafin/NDAQ.svg'

const nasdaqDrawing: AnimatedDrawingData = {
    viewBox: '0 0 1550 1325',
    paths: [
        {
            d: 'm1178.4 1l-344.6 948.7c-8.4 23.3-29.6 40.4-55.4 43.1v0.6h364.3c28.5 0 52.8-18.3 62-43.7l344.6-948.7zm-429.6 977.7c20.9 0 39.5-10.2 50.9-26.3 1.2-1.5 5.4-7.5 8.1-15.3l126.4-348.1-74-203.4c-9.3-22.5-31.4-38.3-57.5-38.3-21 0-39.6 10.5-50.9 26.3-1.2 1.5-6 9-8.1 15.3l-126.5 348.1 74.3 204c9.6 22.1 31.5 37.7 57.3 37.7zm-403.3-602.4l-344.6 948.7h370.9l344.6-948.7c8.7-24.5 32.1-42.2 59.3-43.4v-0.3h-368.2c-28.5 0-52.7 18.3-62 43.7z',
            duration: 2.5,
        },
    ],
}

const NasdaqVerafinGraphic = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.logoWrapper}>
                <img className={styles.logo} src={nasdaqLogo} alt="Nasdaq Logo" />
            </div> */}
            <AnimatedDrawing
                strokeColor="#0090ba"
                fillColor="#0090ba"
                fillRule="evenodd"
                drawing={nasdaqDrawing}
            />

            {/* <p className={styles.label}>Nasdaq Verafin</p> */}
            {/* <img src={nasdaqTextLogo} alt="Nasdaq Text Logo" /> */}
        </div>
    )
}

export default NasdaqVerafinGraphic
