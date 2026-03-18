import styles from './GraduationCard.module.css'
import graduationCard from '@/assets/images/university/Austin_Aitken_Graduation_Trading_Card.png'

const GraduationCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.scene}>
                <div className={styles.card}>
                    <div className={`${styles.face} ${styles.front}`}>
                        <img
                            className={`${styles.image} ${styles.sceneImage}`}
                            src={graduationCard}
                            alt="Austin Aitken's Graduation Trading Card"
                        />
                    </div>
                    <div className={`${styles.face} ${styles.back}`}>
                        <img
                            className={`${styles.image} ${styles.sceneImage}`}
                            src={graduationCard}
                            alt="Austin Aitken's Graduation Trading Card"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraduationCard
