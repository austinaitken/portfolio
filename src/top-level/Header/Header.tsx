import { Link, useNavigate } from 'react-router-dom'
import logo from '@/assets/images/logo.jpg'

import styles from './Header.module.css'

interface Props {
    toggleNav: () => void,
    setNavOpen: (openNav: boolean) => void,
    isNavOpen: boolean
}

const Header = ({ isNavOpen, toggleNav, setNavOpen }: Props) => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        setNavOpen(false)
        navigate('/')
    }

    const getStarted = () => {
        setNavOpen(false)
    }

    return (
        <header className={styles.header}>
            <div className={styles.innerHeaderContainer}>
                <div className={styles.leftButtonContainer}>
                    <button
                        className={styles.logoButton}
                        onClick={handleClick}
                    >
                        {/* <img className={styles.logo} src={logo} alt='Austin Aitken profile picture'/> */}
                        <p className={styles.name}>Austin Aitken</p>
                    </button>
                </div>
                {/* <Link
                    className={styles.link}
                    to='/'
                    onClick={() => {setNavOpen(false)}}
                >
                    Overview
                </Link> */}
                <Link
                    className={styles.link}
                    to='/how-it-works'
                    onClick={() => {setNavOpen(false)}}
                >
                    Experience
                </Link>

                <Link
                    className={styles.link}
                    to='/how-it-works'
                    onClick={() => {setNavOpen(false)}}
                >
                    Entrepreneurship
                </Link>
                
                <Link
                    className={styles.link}
                    onClick={() => {setNavOpen(false)}}
                    to='/contact-us'
                >
                    Personality
                </Link>

                <Link
                    className={styles.link}
                    onClick={() => {setNavOpen(false)}}
                    to='/contact-us'
                >
                    Qualifications
                </Link>

                <Link
                    className={styles.link}
                    onClick={() => {setNavOpen(false)}}
                    to='/contact-us'
                >
                    Resources
                </Link>
                
                <div className={styles.rightButtonContainer}>
                    <button
                        className={styles.getStartedButton}
                        onClick={getStarted}
                    >
                        Contact Me
                    </button>
                    <button
                        className={styles.navButton}
                        style={{ transform: isNavOpen ? 'rotate(90deg)' : 'none' }}
                        onClick={toggleNav}
                    >
                        <p>|||</p>
                    </button>
                </div>
                
               
            </div>
        </header>
    )
}

export default Header