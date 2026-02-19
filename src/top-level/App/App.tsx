import Header from '@/top-level/Header/Header'
import styles from './App.module.css'
import { useState } from 'react'
import NavMenu from '@/top-level/NavMenu/NavMenu'
import Body from '@/top-level/Body/Body'
import Footer from '@/top-level/Footer/Footer'
import { GlobalContext } from '@/common/context/GlobalContext'

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  const [isVet, setIsVet] = useState<boolean>(false)

  const toggleNav = () => {
      setIsNavOpen(prevNav => !prevNav)
  }

  const setNavOpen = (openNav: boolean = false) => {
      setIsNavOpen(openNav)
  }

  return (
    <div className={styles.app}>
      <GlobalContext.Provider
        value={{
          isVet,
          setIsVet
        }}
      >
        <Header
          isNavOpen={isNavOpen}
          toggleNav={toggleNav}
          setNavOpen={setNavOpen}
        />
        {
          isNavOpen ?
          <NavMenu toggleNav={toggleNav}/>
          :
          <Body />
        }
        <Footer setNavOpen={setNavOpen}/>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
