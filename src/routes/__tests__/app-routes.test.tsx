import { Suspense } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { describe, expect, it, vi } from 'vitest'

import { APP_ROUTES } from '../routes'
import UnknownRoute from '@/routes/UnknownRoute/UnknownRoute'

vi.mock('@/routes/ResourcesPage/components/PdfDocument/PdfDocument', () => ({
    default: () => null,
}))

const renderRoute = (path: string) =>
    render(
        <MemoryRouter initialEntries={[path]}>
            <Routes>
                {APP_ROUTES.map((route) => {
                    const PageComponent = route.component

                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <Suspense fallback={null}>
                                    <PageComponent />
                                </Suspense>
                            }
                        />
                    )
                })}
                <Route path="*" element={<UnknownRoute />} />
            </Routes>
        </MemoryRouter>
    )

describe('application routes', () => {
    it.each(APP_ROUTES.map(({ path, label }) => [path, label] as const))(
        'renders %s with its page title and heading',
        async (path, label) => {
            renderRoute(path)

            await waitFor(() => {
                expect(document.title).toBe(`${label} - Austin Aitken`)
            })

            await waitFor(() => {
                expect(screen.getAllByRole('heading', { level: 1 }).length).toBeGreaterThan(0)
            })
        }
    )

    it('renders the UnknownRoute 404 for unmatched paths', async () => {
        renderRoute('/this-route-does-not-exist')

        await waitFor(() => {
            expect(document.title).toBe('Page Not Available - Austin Aitken')
        })

        expect(
            screen.getByRole('heading', { level: 1, name: 'Page Not Available' })
        ).toBeInTheDocument()
    })
})
