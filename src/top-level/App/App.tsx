import { useEffect } from 'react'
import { useGlobalContext } from '@/common/context/useGlobalContext'

import Header from '@/top-level/Header/Header'
import NavMenu from '@/top-level/NavMenu/NavMenu'
import Body from '@/top-level/Body/Body'
import Footer from '@/top-level/Footer/Footer'

import styles from './App.module.css'

const App = () => {
    const { isNavOpen } = useGlobalContext();

    useEffect(() => {
        const previousBodyOverflow = document.body.style.overflow;
        const previousHtmlOverflow = document.documentElement.style.overflow;

        if (isNavOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = previousBodyOverflow;
            document.documentElement.style.overflow = previousHtmlOverflow;
        }

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            document.documentElement.style.overflow = previousHtmlOverflow;
        };
    }, [isNavOpen]);
    
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.contentArea}>
                <Body />
                {isNavOpen && (
                    <div className={styles.navOverlay}>
                        <NavMenu />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;
