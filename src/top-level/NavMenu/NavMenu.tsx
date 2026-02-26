import styles from './NavMenu.module.css'
import { useGlobalContext } from '@/common/context/useGlobalContext'

const NavMenu = () => {
  const {
    scrollToIntro,
    scrollToExperience,
    scrollToEntrepreneurship,
    scrollToPersonality,
    scrollToQualifications,
    scrollToContact,
    scrollToResources,
  } = useGlobalContext()

  return (
    <div className={styles.navMenu}>
      <hr className={styles.hr} />
      <button className={styles.navButton} onClick={scrollToIntro}>
        Introduction
      </button>
      <hr className={styles.hr} />
      <button className={styles.navButton} onClick={scrollToExperience}>
        Experience
      </button>
      <hr className={styles.hr} />
      <button className={styles.navButton} onClick={scrollToEntrepreneurship}>
        Entrepreneurship
      </button>
      <hr className={styles.hr} />
      <button className={styles.navButton} onClick={scrollToPersonality}>
        Personality
      </button>
      <hr className={styles.hr} />
      <button className={styles.navButton} onClick={scrollToQualifications}>
        Qualifications
      </button>
      <hr className={styles.hr} />
      <button className={styles.navButton} onClick={scrollToResources}>
        Resources
      </button>
      <hr className={styles.hr} />
      <button className={styles.navButton} onClick={scrollToContact}>
        Contact Me
      </button>
      <hr className={styles.hr} />
    </div>
  )
}

export default NavMenu
