import { describe, expect, it } from 'vitest'

import {
    APP_ROUTES,
    getChildRoutes,
    getRouteByPath,
    getParentRoutePath,
    NAV_ROUTES,
} from '../routes'

describe('APP_ROUTES', () => {
    it('defines all application routes', () => {
        const paths = APP_ROUTES.map(({ path }) => path).sort()

        expect(paths).toEqual(
            [
                '/',
                '/contact-me',
                '/entrepreneurship',
                '/entrepreneurship/mdium',
                '/entrepreneurship/phauna',
                '/entrepreneurship/phauna/clinical-data',
                '/entrepreneurship/phauna/clinical-decision-support',
                '/entrepreneurship/phauna/evidence-collection',
                '/entrepreneurship/phauna/virtual-exams',
                '/experience',
                '/experience/big-data-pipeline',
                '/experience/hackathon-winner',
                '/experience/real-time-fraud-analysis',
                '/experience/supervisorship',
                '/personality',
                '/personality/amello',
                '/personality/dmv-simulator',
                '/qualifications',
                '/resources',
            ].sort()
        )
    })

    it('has unique paths', () => {
        const paths = APP_ROUTES.map(({ path }) => path)

        expect(new Set(paths).size).toBe(paths.length)
    })

    it('gives every route a label and a component', () => {
        for (const route of APP_ROUTES) {
            expect(route.label).toBeTruthy()
            expect(route.component).toBeTruthy()
        }
    })

    it('limits navigation routes to the six top-level sections', () => {
        const navPaths = NAV_ROUTES.map(({ path }) => path)

        expect(navPaths).toEqual([
            '/',
            '/experience',
            '/entrepreneurship',
            '/qualifications',
            '/personality',
            '/resources',
        ])
    })
})

describe('getRouteByPath', () => {
    it('finds a route by its path', () => {
        expect(getRouteByPath('/experience')?.label).toBe('Experience')
    })

    it('finds the contact route', () => {
        expect(getRouteByPath('/contact-me')?.label).toBe('Contact Me')
    })

    it('returns null for unknown paths', () => {
        expect(getRouteByPath('/does-not-exist')).toBeNull()
    })
})

describe('getParentRoutePath', () => {
    it('returns null for home', () => {
        expect(getParentRoutePath('/')).toBeNull()
    })

    it('returns null for top-level routes', () => {
        expect(getParentRoutePath('/experience')).toBeNull()
        expect(getParentRoutePath('/contact-me')).toBeNull()
    })

    it('returns the direct parent for sub-pages', () => {
        expect(getParentRoutePath('/experience/supervisorship')).toBe('/experience')
        expect(getParentRoutePath('/personality/amello')).toBe('/personality')
    })

    it('returns the nearest ancestor route for nested pages', () => {
        expect(getParentRoutePath('/entrepreneurship/phauna/clinical-data')).toBe(
            '/entrepreneurship/phauna'
        )
    })
})

describe('getChildRoutes', () => {
    it('returns no children for home', () => {
        expect(getChildRoutes('/')).toHaveLength(0)
    })

    it('returns only direct children for experience', () => {
        const children = getChildRoutes('/experience').map(({ path }) => path)

        expect(children).toEqual([
            '/experience/real-time-fraud-analysis',
            '/experience/big-data-pipeline',
            '/experience/supervisorship',
            '/experience/hackathon-winner',
        ])
    })

    it('returns only direct children for entrepreneurship', () => {
        const children = getChildRoutes('/entrepreneurship').map(({ path }) => path)

        expect(children).toEqual(['/entrepreneurship/phauna', '/entrepreneurship/mdium'])
    })

    it('returns only direct children for phauna', () => {
        const children = getChildRoutes('/entrepreneurship/phauna').map(({ path }) => path)

        expect(children).toEqual([
            '/entrepreneurship/phauna/evidence-collection',
            '/entrepreneurship/phauna/virtual-exams',
            '/entrepreneurship/phauna/clinical-decision-support',
            '/entrepreneurship/phauna/clinical-data',
        ])
    })

    it('returns no children for leaf routes', () => {
        expect(getChildRoutes('/qualifications')).toHaveLength(0)
        expect(getChildRoutes('/contact-me')).toHaveLength(0)
    })
})
