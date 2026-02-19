import { Link } from 'react-router-dom'
import styles from './NavMenu.module.css'

interface Props {
    toggleNav: () => void
}

const NavMenu = ({
    toggleNav
}: Props) => {
    const goToWebApp = () => {
        window.open('https://app.phauna.io', '_blank')
    }

    const onSignInClick = () => {
        toggleNav()
        goToWebApp()
    }

    return (
        <div className={styles.navMenu}>
            <hr className={styles.hr}/>
            <Link className={styles.link} to='/contact-us' onClick={toggleNav}>Contact Me</Link>
            <hr className={styles.hr}/>
            <Link className={styles.link} to='/' onClick={onSignInClick}>Experience</Link>
            <hr className={styles.hr}/>
            <Link className={styles.link} to='/' onClick={toggleNav}>Entrepreneurship</Link>
            <hr className={styles.hr}/>
            <Link className={styles.link} to='/how-it-works' onClick={toggleNav}>Personality</Link>
            {/* <hr className={styles.hr}/>
            <Link className={styles.link} to='/pricing' onClick={toggleNav}>Pricing</Link>
            <hr className={styles.hr}/>
            <Link className={styles.link} to='/faq' onClick={toggleNav}>FAQ</Link> */}
            {/* <hr className={styles.hr}/>
            <Link className={styles.link} to='/about-us' onClick={toggleNav}>About Us</Link> */}
            <hr className={styles.hr}/>
            <Link className={styles.link} to='/contact-us' onClick={toggleNav}>Qualifications</Link>
            <hr className={styles.hr}/>
            <Link className={styles.link} to='/contact-us' onClick={toggleNav}>Resources</Link>
            <hr className={styles.hr}/>
            {/* <Link className={styles.link} to='/veterinarians' onClick={toggleNav}>Veterinarians</Link>
            <hr className={styles.hr}/> */}
        </div>
    )
}

export default NavMenu