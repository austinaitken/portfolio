import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

const HomePage = lazy(() => import('@/routes/HomePage/HomePage'))
const ExperiencePage = lazy(() => import('@/routes/ExperiencePage/ExperiencePage'))
const EntrepreneurshipPage = lazy(
    () => import('@/routes/EntrepreneurshipPage/EntrepreneurshipPage')
)
const QualificationsPage = lazy(() => import('@/routes/QualificationsPage/QualificationsPage'))
const PersonalityPage = lazy(() => import('@/routes/PersonalityPage/PersonalityPage'))
const ResourcesPage = lazy(() => import('@/routes/ResourcesPage/ResourcesPage'))
const MdiumPage = lazy(() => import('@/routes/EntrepreneurshipPage/sub-pages/MdiumPage/MdiumPage'))
const PhaunaPage = lazy(
    () => import('@/routes/EntrepreneurshipPage/sub-pages/PhaunaPage/PhaunaPage')
)
const AmelloPage = lazy(() => import('@/routes/PersonalityPage/sub-pages/AmelloPage/AmelloPage'))
const DmvSimulatorPage = lazy(
    () => import('@/routes/PersonalityPage/sub-pages/DmvSimulatorPage/DmvSimulatorPage')
)
const ContactMePage = lazy(() => import('@/routes/ContactMePage/ContactMePage'))
const RealtimePaymentFraudPage = lazy(
    () =>
        import('@/routes/ExperiencePage/sub-pages/RealtimePaymentFraudPage/RealtimePaymentFraudPage')
)
const BigDataPipelinePage = lazy(
    () => import('@/routes/ExperiencePage/sub-pages/BigDataPipelinePage/BigDataPipelinePage')
)
const SupervisorPage = lazy(
    () => import('@/routes/ExperiencePage/sub-pages/SupervisorPage/SupervisorPage')
)
const HackathonWinnerPage = lazy(
    () => import('@/routes/ExperiencePage/sub-pages/HackathonWinnerPage/HackathonWinnerPage')
)
const VirtualExamPage = lazy(
    () =>
        import('@/routes/EntrepreneurshipPage/sub-pages/PhaunaPage/sub-pages/VirtualExamPage/VirtualExamPage')
)
const ClinicalDecisionSupportPage = lazy(
    () =>
        import('@/routes/EntrepreneurshipPage/sub-pages/PhaunaPage/sub-pages/ClinicalDecisionSupportPage/ClinicalDecisionSupportPage')
)
const EvidenceCollectionPage = lazy(
    () =>
        import('@/routes/EntrepreneurshipPage/sub-pages/PhaunaPage/sub-pages/EvidenceCollectionPage/EvidenceCollectionPage')
)
const ClinicalDataPage = lazy(
    () =>
        import('@/routes/EntrepreneurshipPage/sub-pages/PhaunaPage/sub-pages/ClinicalDataPage/ClinicalDataPage')
)

export type AppRoute = {
    path: string
    label: string
    component: LazyExoticComponent<ComponentType>
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
        label: 'History Collection',
        component: EvidenceCollectionPage,
        showInNav: false,
    },
    {
        path: '/entrepreneurship/phauna/virtual-exams',
        label: 'Virtual Exams',
        component: VirtualExamPage,
        showInNav: false,
    },
    {
        path: '/entrepreneurship/phauna/clinical-decision-support',
        label: 'Clinical Decision Support',
        component: ClinicalDecisionSupportPage,
        showInNav: false,
    },
    {
        path: '/entrepreneurship/phauna/clinical-data',
        label: 'Clinical Data',
        component: ClinicalDataPage,
        showInNav: false,
    },
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
    // { path: '/personality', label: 'Personality', component: PersonalityPage, showInNav: true },
    // {
    //     path: '/personality/amello',
    //     label: 'Amello',
    //     component: AmelloPage,
    //     showInNav: false,
    // },
    // {
    //     path: '/personality/dmv-simulator',
    //     label: 'DMV Simulator',
    //     component: DmvSimulatorPage,
    //     showInNav: false,
    // },
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
        if (path === parentPath || !path.startsWith(prefix)) {
            return false
        }

        return !path.slice(prefix.length).includes('/')
    })
}
