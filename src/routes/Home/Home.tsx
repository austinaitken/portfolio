import { useGlobalContext } from '@/common/context/GlobalContext'

import styles from './Home.module.css'
import Intro from './components/Intro/Intro'
import Experience from './components/Experience/Experience'
import Entrepreneurship from './components/Entrepreneurship/Entrepreneurship'
import Personality from './components/Personality/Personality'
import Qualifications from './components/Qualifications/Qualifications'
import Contact from './components/Contact/Contact'
import Resources from './components/Resources/Resources'



const Home = () => {
    const {
        introRef,
        experienceRef,
        entrepreneurshipRef,
        personalityRef,
        qualificationsRef,
        contactRef,
        resourcesRef,
    } = useGlobalContext()

    return (
        <div className={styles.container}>
            <section ref={introRef}>
                <Intro />
            </section>
            <section ref={experienceRef}>
                <Experience />
            </section>
            <section ref={entrepreneurshipRef}>
                <Entrepreneurship />
            </section>
            <section ref={personalityRef}>
                <Personality />
            </section>
            <section ref={qualificationsRef}>
                <Qualifications />
            </section>
            <section ref={contactRef}>
                <Contact />
            </section>
            <section ref={resourcesRef}>
                <Resources />
            </section>
        </div>
    )
}

export default Home