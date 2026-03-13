import { Route, Routes } from 'react-router-dom'

import HomePage from '@/routes/HomePage/HomePage'
import { APP_ROUTES } from '@/routes/routes'

const MainContent = () => {
    return (
        <main>
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
