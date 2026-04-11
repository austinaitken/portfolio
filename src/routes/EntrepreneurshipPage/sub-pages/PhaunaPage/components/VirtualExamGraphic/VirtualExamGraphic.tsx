import styles from './VirtualExamGraphic.module.css'
import dogTeethImage from '@/assets/images/phauna/Winnie_Teeth_Screenshot.png'

const VirtualExamGraphic = () => {
    return (
        <div className={styles.container}>
            <img className={styles.dogTeethImage} src={dogTeethImage} alt="Dog showing teeth" />
        </div>
    )
}

export default VirtualExamGraphic
