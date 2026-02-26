import { useGlobalContext } from '@/common/context/useGlobalContext'

import styles from './Entrepreneurship.module.css'
import Phauna from './components/Phauna/Phauna'
import Mdium from './components/Mdium/Mdium'

const Entrepreneurship = () => {
    const { entrepreneurshipRef } = useGlobalContext()
    return (
        <section className={styles.container} ref={entrepreneurshipRef}>
            <h1>An Entrepreneural Flame</h1>
            <Phauna />
            <Mdium />
        </section>
    )
}

export default Entrepreneurship
