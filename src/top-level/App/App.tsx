import { useState, useRef } from 'react'

import { GlobalContext } from '@/common/context/GlobalContext'
import Header from '@/top-level/Header/Header'
import NavMenu from '@/top-level/NavMenu/NavMenu'
import Body from '@/top-level/Body/Body'
import Footer from '@/top-level/Footer/Footer'

import styles from './App.module.css'

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  const introRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const entrepreneurshipRef = useRef<HTMLDivElement>(null)
  const qualificationsRef = useRef<HTMLDivElement>(null)
  const personalityRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

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
          introRef,
          experienceRef,
          entrepreneurshipRef,
          qualificationsRef,
          personalityRef,
          contactRef,
          resourcesRef
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
