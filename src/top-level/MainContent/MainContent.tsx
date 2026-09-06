import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'

import PageLoader from '@/common/components/PageLoader/PageLoader'
import { APP_ROUTES } from '@/routes/routes'

import styles from './MainContent.module.css'

const UnknownRoute = lazy(() => import('@/routes/UnknownRoute/UnknownRoute'))

const MainContent = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [pathname])

    return (
        <main className={styles.container}>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {APP_ROUTES.map(({ path, component: PageComponent }) => (
                        <Route key={path} path={path} element={<PageComponent />} />
                    ))}
                    <Route path="*" element={<UnknownRoute />} />
                </Routes>
            </Suspense>
        </main>
    )
}

export default MainContent
