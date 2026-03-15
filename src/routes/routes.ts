import type { ComponentType } from 'react'

import HomePage from '@/routes/HomePage/HomePage'
import ExperiencePage from '@/routes/ExperiencePage/ExperiencePage'
import EntrepreneurshipPage from '@/routes/EntrepreneurshipPage/EntrepreneurshipPage'
import QualificationsPage from '@/routes/QualificationsPage/QualificationsPage'
import PersonalityPage from '@/routes/PersonalityPage/PersonalityPage'
import ResourcesPage from './ResourcesPage/ResourcesPage'

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
        path: '/qualifications',
        label: 'Qualifications',
        component: QualificationsPage,
        showInNav: true,
    },
    { path: '/personality', label: 'Personality', component: PersonalityPage, showInNav: true },
    { path: '/resources', label: 'Resources', component: ResourcesPage, showInNav: true },
]

export const NAV_ROUTES = APP_ROUTES.filter((route) => route.showInNav)
