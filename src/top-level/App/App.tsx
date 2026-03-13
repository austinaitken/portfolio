import { useGlobalContext } from '@/common/context/useGlobalContext'

import Header from '@/top-level/Header/Header'
import Footer from '@/top-level/Footer/Footer'
import NavMenu from '@/top-level/NavMenu/NavMenu'
import MainContent from '@/top-level/MainContent/MainContent'

import styles from './App.module.css'

const App = () => {
    const { isNavOpen } = useGlobalContext()

    return (
        <div className={styles.appContainer}>
            <Header />
            <div className={styles.contentArea}>
                <MainContent />
            </div>
            <div className={`${styles.navOverlay} ${isNavOpen ? styles.navOverlayOpen : ''}`}>
                <NavMenu />
            </div>
            <Footer />
        </div>
    )
}

export default App
