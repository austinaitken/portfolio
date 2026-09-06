import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'

import UnknownRoute from '../UnknownRoute'

describe('UnknownRoute', () => {
    it('renders a level-one heading for the missing page', () => {
        render(
            <MemoryRouter>
                <UnknownRoute />
            </MemoryRouter>
        )

        expect(
            screen.getByRole('heading', { level: 1, name: 'Page Not Available' })
        ).toBeInTheDocument()
    })

    it('links back to the overview', () => {
        render(
            <MemoryRouter>
                <UnknownRoute />
            </MemoryRouter>
        )

        expect(screen.getByRole('link', { name: 'Back to Overview' })).toHaveAttribute('href', '/')
    })

    it('sets the document title', () => {
        render(
            <MemoryRouter>
                <UnknownRoute />
            </MemoryRouter>
        )

        expect(document.title).toBe('Page Not Available - Austin Aitken')
    })
})
