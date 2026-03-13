import styles from './Supervisor.module.css'

import superHeroHead from '@/assets/images/verafin/AustinPaymentSender.png'
import superHeroBody from '@/assets/images/verafin/superheroBody.png'
import sideKickBody from '@/assets/images/verafin/SideKickBody.png'

const Supervisor = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sideKickFigure} style={{ transform: 'scaleX(-1)' }}>
                <img className={styles.sideKickHead} src={superHeroHead} alt="Sidekick head" />
                <img className={styles.sidekickBody} src={sideKickBody} alt="Sidekick body" />
            </div>
            <div className={styles.figure}>
                <img className={styles.superHeroHead} src={superHeroHead} alt="Superhero head" />
                <img className={styles.superheroBody} src={superHeroBody} alt="Superhero body" />
            </div>
            <div className={styles.sideKickFigure}>
                <img className={styles.sideKickHead} src={superHeroHead} alt="Sidekick head" />
                <img className={styles.sidekickBody} src={sideKickBody} alt="Sidekick body" />
            </div>
        </div>
    )
}

export default Supervisor
