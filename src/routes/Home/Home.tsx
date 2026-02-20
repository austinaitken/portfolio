import styles from './Home.module.css'
import Intro from './components/Intro/Intro'
import Experience from './components/Experience/Experience'
import Entrepreneurship from './components/Entrepreneurship/Entrepreneurship'
import Personality from './components/Personality/Personality'
import Qualifications from './components/Qualifications/Qualifications'
import Contact from './components/Contact/Contact'
import Resources from './components/Resources/Resources'

const Home = () => {

    return (
        <div className={styles.container}>
            <Intro />
            <Experience />
            <Entrepreneurship />
            <Personality />
            <Qualifications />
            <Contact />
            <Resources />
        </div>
    )
}

export default Home