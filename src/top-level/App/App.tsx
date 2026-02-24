import { useGlobalContext } from '@/common/context/useGlobalContext'

import Header from '@/top-level/Header/Header'
import NavMenu from '@/top-level/NavMenu/NavMenu'
import Body from '@/top-level/Body/Body'
import Footer from '@/top-level/Footer/Footer'

import styles from './App.module.css'

const App = () => {
    const { isNavOpen } = useGlobalContext();
    
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
