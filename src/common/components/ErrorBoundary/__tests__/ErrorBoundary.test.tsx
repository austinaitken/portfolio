import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { afterEach, describe, expect, it, vi } from 'vitest'

import ErrorBoundary from '../ErrorBoundary'

const Throw = () => {
    throw new Error('boom')
}

afterEach(() => {
    vi.restoreAllMocks()
})

describe('ErrorBoundary', () => {
    it('renders its children when no error is thrown', () => {
        vi.spyOn(console, 'error').mockImplementation(() => {})

        render(
            <MemoryRouter>
                <ErrorBoundary>
                    <p>All good</p>
                </ErrorBoundary>
            </MemoryRouter>
        )

        expect(screen.getByText('All good')).toBeInTheDocument()
        expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })

    it('shows the fallback UI when a child throws', () => {
        vi.spyOn(console, 'error').mockImplementation(() => {})

        render(
            <MemoryRouter>
                <ErrorBoundary>
                    <Throw />
                </ErrorBoundary>
            </MemoryRouter>
        )

        expect(screen.getByRole('alert')).toHaveTextContent('Something went wrong')
        expect(screen.getByRole('link', { name: 'Back to Overview' })).toHaveAttribute('href', '/')
        expect(screen.queryByText('All good')).not.toBeInTheDocument()
    })

    it('recovers when a fresh instance renders healthy children', () => {
        vi.spyOn(console, 'error').mockImplementation(() => {})

        const { unmount } = render(
            <MemoryRouter>
                <ErrorBoundary>
                    <Throw />
                </ErrorBoundary>
            </MemoryRouter>
        )

        expect(screen.getByRole('alert')).toBeInTheDocument()

        unmount()

        render(
            <MemoryRouter>
                <ErrorBoundary>
                    <p>Recovered</p>
                </ErrorBoundary>
            </MemoryRouter>
        )

        expect(screen.getByText('Recovered')).toBeInTheDocument()
        expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })
})
