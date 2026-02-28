import { useGlobalContext } from '@/common/context/useGlobalContext'

import Amello from './components/Amello/Amello'
import DmvSimulator from './components/DmvSimulator/DmvSimulator'

import styles from './Personality.module.css'

const Personality = () => {
    const { personalityRef } = useGlobalContext()

    return (
        <section className={styles.container} ref={personalityRef}>
            <h1>A Light in the Dark</h1>
            <Amello />
            <DmvSimulator />
        </section>
    )
}

export default Personality
