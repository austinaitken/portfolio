import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { APP_ROUTES } from '@/routes/routes'
import HomePage from '@/routes/HomePage/HomePage'

import styles from './MainContent.module.css'

const MainContent = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [pathname])

    return (
        <main className={styles.container}>
            <Routes>
                {APP_ROUTES.map(({ path, component: PageComponent }) => (
                    <Route key={path} path={path} element={<PageComponent />} />
                ))}
                <Route path="*" element={<HomePage />} />
            </Routes>
        </main>
    )
}

export default MainContent
