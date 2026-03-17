import { useEffect } from 'react'
import { useGlobalContext } from '@/common/context/useGlobalContext'

import Header from '@/top-level/Header/Header'
import Footer from '@/top-level/Footer/Footer'
import NavMenu from '@/top-level/NavMenu/NavMenu'
import MainContent from '@/top-level/MainContent/MainContent'

import styles from './App.module.css'

const App = () => {
    const { isNavOpen } = useGlobalContext()

    useEffect(() => {
        const { body, documentElement } = document
        const previousBodyOverflow = body.style.overflow
        const previousHtmlOverflow = documentElement.style.overflow

        if (isNavOpen) {
            body.style.overflow = 'hidden'
            documentElement.style.overflow = 'hidden'
        }

        return () => {
            body.style.overflow = previousBodyOverflow
            documentElement.style.overflow = previousHtmlOverflow
        }
    }, [isNavOpen])

    return (
        <div className={`${styles.appContainer} ${isNavOpen ? styles.appContainerNavOpen : ''}`}>
            <Header />
            <div className={styles.contentArea}>
                <MainContent />
                <div className={`${styles.navOverlay} ${isNavOpen ? styles.navOverlayOpen : ''}`}>
                    <NavMenu />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App
