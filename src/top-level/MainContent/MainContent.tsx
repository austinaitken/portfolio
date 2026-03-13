import { Route, Routes } from 'react-router-dom'

import HomePage from '@/routes/HomePage/HomePage'
import ExperiencePage from '@/routes/ExperiencePage/ExperiencePage'
import EntrepreneurshipPage from '@/routes/EntrepreneurshipPage/EntrepreneurshipPage'
import QualificationsPage from '@/routes/QualificationsPage/QualificationsPage'
import PersonalityPage from '@/routes/PersonalityPage/PersonalityPage'

const MainContent = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
                <Route path="/qualifications" element={<QualificationsPage />} />
                <Route path="/personality" element={<PersonalityPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </main>
    )
}

export default MainContent
