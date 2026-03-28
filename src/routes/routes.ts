import type { ComponentType } from 'react'

import HomePage from '@/routes/HomePage/HomePage'
import ExperiencePage from '@/routes/ExperiencePage/ExperiencePage'
import EntrepreneurshipPage from '@/routes/EntrepreneurshipPage/EntrepreneurshipPage'
import QualificationsPage from '@/routes/QualificationsPage/QualificationsPage'
import PersonalityPage from '@/routes/PersonalityPage/PersonalityPage'
import ResourcesPage from './ResourcesPage/ResourcesPage'
import MdiumPage from './EntrepreneurshipPage/sub-pages/MdiumPage/MdiumPage'
import PhaunaPage from './EntrepreneurshipPage/sub-pages/PhaunaPage/PhaunaPage'
import AmelloPage from './PersonalityPage/sub-pages/AmelloPage/AmelloPage'
import DmvSimulatorPage from './PersonalityPage/sub-pages/DmvSimulatorPage/DmvSimulatorPage'

export type AppRoute = {
    path: string
    label: string
    component: ComponentType
    showInNav: boolean
}

export const APP_ROUTES: readonly AppRoute[] = [
    { path: '/', label: 'Overview', component: HomePage, showInNav: true },
    { path: '/experience', label: 'Experience', component: ExperiencePage, showInNav: true },
    {
        path: '/entrepreneurship',
        label: 'Entrepreneurship',
        component: EntrepreneurshipPage,
        showInNav: true,
    },
    {
        path: '/entrepreneurship/phauna',
        label: 'Phauna',
        component: PhaunaPage,
        showInNav: false,
    },
    {
        path: '/entrepreneurship/mdium',
        label: 'Mdium',
        component: MdiumPage,
        showInNav: false,
    },
    {
        path: '/qualifications',
        label: 'Qualifications',
        component: QualificationsPage,
        showInNav: true,
    },
    { path: '/personality', label: 'Personality', component: PersonalityPage, showInNav: true },
    {
        path: '/personality/amello',
        label: 'Amello',
        component: AmelloPage,
        showInNav: false,
    },
    {
        path: '/personality/dmv-simulator',
        label: 'DMV Simulator',
        component: DmvSimulatorPage,
        showInNav: false,
    },
    { path: '/resources', label: 'Resources', component: ResourcesPage, showInNav: true },
]

export const NAV_ROUTES = APP_ROUTES.filter((route) => route.showInNav)
