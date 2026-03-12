import styles from './BigData.module.css'
import scalaLogo from '@/assets/images/verafin/Scala_logo.svg'
import sparkLogo from '@/assets/images/verafin/Apache_Spark_logo.png'

const BigData = () => {
    return (
        <div className={styles.container}>
            <img className={styles.scalaLogo} src={scalaLogo} alt="Scala Logo" />
            <img className={styles.sparkLogo} src={sparkLogo} alt="Apache Spark Logo" />
        </div>
    )
}

export default BigData
