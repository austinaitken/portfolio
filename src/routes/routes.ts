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
import ContactMePage from './ContactMePage/ContactMePage'
import RealtimePaymentFraudPage from './ExperiencePage/sub-pages/RealtimePaymentFraudPage/RealtimePaymentFraudPage'
import BigDataPipelinePage from './ExperiencePage/sub-pages/BigDataPipelinePage/BigDataPipelinePage'
import SupervisorPage from './ExperiencePage/sub-pages/SupervisorPage/SupervisorPage'
import HackathonWinnerPage from './ExperiencePage/sub-pages/HackathonWinnerPage/HackathonWinnerPage'
import VirtualExamPage from './EntrepreneurshipPage/sub-pages/PhaunaPage/sub-pages/VirtualExamPage/VirtualExamPage'
import ClinicalDecisionSupportPage from './EntrepreneurshipPage/sub-pages/PhaunaPage/sub-pages/ClinicalDecisionSupportPage/ClinicalDecisionSupportPage'
import EvidenceCollectionPage from './EntrepreneurshipPage/sub-pages/PhaunaPage/sub-pages/EvidenceCollectionPage/EvidenceCollectionPage'
import ClinicalDataPage from './EntrepreneurshipPage/sub-pages/PhaunaPage/sub-pages/ClinicalDataPage/ClinicalDataPage'

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
        path: '/experience/real-time-fraud-analysis',
        label: 'Real-Time Fraud Analysis',
        component: RealtimePaymentFraudPage,
        showInNav: false,
    },
    {
        path: '/experience/big-data-pipeline',
        label: 'Big Data Pipeline',
        component: BigDataPipelinePage,
        showInNav: false,
    },
    {
        path: '/experience/supervisorship',
        label: 'Supervisorship',
        component: SupervisorPage,
        showInNav: false,
    },
    {
        path: '/experience/hackathon-winner',
        label: 'Hackathon Winner',
        component: HackathonWinnerPage,
        showInNav: false,
    },
    {
        path: '/entrepreneurship/phauna',
        label: 'Phauna Technologies Inc.',
        component: PhaunaPage,
        showInNav: false,
    },
    {
        path: '/entrepreneurship/phauna/evidence-collection',
        label: 'Evidence Collection',
        component: EvidenceCollectionPage,
        showInNav: false,
    },
    {
        path: '/entrepreneurship/phauna/clinical-decision-support',
        label: 'Clinical Decision Support',
        component: ClinicalDecisionSupportPage,
        showInNav: false,
    },
    {
        path: '/entrepreneurship/phauna/virtual-exams',
        label: 'Virtual Exams',
        component: VirtualExamPage,
        showInNav: false,
    },
    {
        path: '/entrepreneurship/phauna/clinical-data',
        label: 'Clinical Data',
        component: ClinicalDataPage,
        showInNav: false,
    },
    // {
    //     path: '/entrepreneurship/phauna/architecture',
    //     label: 'Architecture',
    //     component: PhaunaPage,
    //     showInNav: false,
    // },
    {
        path: '/entrepreneurship/mdium',
        label: 'Mdium Inc.',
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
    { path: '/contact-me', label: 'Contact Me', component: ContactMePage, showInNav: false },
]

export const NAV_ROUTES = APP_ROUTES.filter((route) => route.showInNav)

export const getRouteByPath = (routePath: string) =>
    APP_ROUTES.find(({ path }) => path === routePath) ?? null

export const getParentRoutePath = (routePath: string) => {
    if (routePath === '/') {
        return null
    }

    const segments = routePath.split('/').filter(Boolean)

    for (let segmentIndex = segments.length - 1; segmentIndex > 0; segmentIndex -= 1) {
        const parentPath = `/${segments.slice(0, segmentIndex).join('/')}`

        if (getRouteByPath(parentPath)) {
            return parentPath
        }
    }

    return null
}

export const getChildRoutes = (parentPath: string) => {
    if (parentPath === '/') {
        return []
    }

    const prefix = `${parentPath}/`

    return APP_ROUTES.filter(({ path }) => {
        if (path === '/contact-me' || path === parentPath || !path.startsWith(prefix)) {
            return false
        }

        return !path.slice(prefix.length).includes('/')
    })
}
