import { useGlobalContext } from '@/common/context/useGlobalContext'

import Amello from './components/Amello/Amello'
import DmvSimulator from './components/DmvSimulator/DmvSimulator'

import styles from './Personality.module.css'

const Personality = () => {
    const { personalityRef } = useGlobalContext()

    return (
        <section className={styles.container} ref={personalityRef}>
            <h1>
                A Light in the
                <br />
                Dark
            </h1>
            <p className="largeDescription" style={{ marginBottom: '40px' }}>
                Enjoy your time while blending humour with technical ability.
            </p>
            <Amello />
            <DmvSimulator />
        </section>
    )
}

export default Personality
