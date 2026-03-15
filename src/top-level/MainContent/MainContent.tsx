import { Route, Routes } from 'react-router-dom'

import HomePage from '@/routes/HomePage/HomePage'
import { APP_ROUTES } from '@/routes/routes'
import ContactMe from '@/routes/ContactMe/ContactMe'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'

const MainContent = () => {
    return (
        <main style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Routes>
                {APP_ROUTES.map(({ path, component: PageComponent }) => (
                    <Route key={path} path={path} element={<PageComponent />} />
                ))}
                <Route path="*" element={<HomePage />} />
            </Routes>
            <ContactMe
                titleStart="Contact Me"
                titleEnd="Today"
                titleEndDrawing={problemSolverPhraseDrawing}
            />
        </main>
    )
}

export default MainContent
