import { useGlobalContext } from '@/common/context/useGlobalContext'
import YouTubeVideo from '@/common/components/YouTubeVideo/YouTubeVideo'

import styles from './Personality.module.css'

const Personality = () => {
    const { personalityRef } = useGlobalContext()

    return (
        <section className={styles.container} ref={personalityRef}>
            <h1>A Light in the Dark</h1>
            <p></p>
            <div>
                <YouTubeVideo videoId="fppS6ddagRo" />
            </div>
            <YouTubeVideo videoId="a5QZmygubM8" />
        </section>
    )
}

export default Personality
