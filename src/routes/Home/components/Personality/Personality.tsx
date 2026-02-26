import { useGlobalContext } from '@/common/context/useGlobalContext'
import YouTubeVideo from '@/common/components/YouTubeVideo/YouTubeVideo'

import styles from './Personality.module.css'

const Personality = () => {
    const { personalityRef } = useGlobalContext()

    return (
        <section className={styles.container} ref={personalityRef}>
            <h1>A Light in the Dark</h1>
            <p>Tagline</p>
            <p>This is a very long description about the personality traits and characteristics.</p>
            <YouTubeVideo videoId="fppS6ddagRo" />
            <YouTubeVideo videoId="a5QZmygubM8" />
        </section>
    )
}

export default Personality
