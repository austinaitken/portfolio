import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'

import NavMenu from '../NavMenu/NavMenu'
import { GlobalProvider } from '@/common/context/GlobalContext'
import { useGlobalContext } from '@/common/context/useGlobalContext'

const NavStateProbe = () => {
    const { isNavOpen, toggleNav } = useGlobalContext()

    return (
        <>
            <span data-testid="nav-open">{String(isNavOpen)}</span>
            <button type="button" onClick={toggleNav}>
                Toggle Nav
            </button>
        </>
    )
}

const renderNav = () =>
    render(
        <GlobalProvider>
            <MemoryRouter>
                <NavMenu />
                <NavStateProbe />
            </MemoryRouter>
        </GlobalProvider>
    )

describe('NavMenu', () => {
    it('renders all top-level nav routes plus the contact link', () => {
        renderNav()

        for (const [name, href] of [
            ['Overview', '/'],
            ['Experience', '/experience'],
            ['Entrepreneurship', '/entrepreneurship'],
            ['Qualifications', '/qualifications'],
            ['Personality', '/personality'],
            ['Resources', '/resources'],
            ['Contact Me', '/contact-me'],
        ] as const) {
            expect(screen.getByRole('link', { name })).toHaveAttribute('href', href)
        }
    })

    it('closes the nav when a leaf route is clicked', async () => {
        const user = userEvent.setup()

        renderNav()

        expect(screen.getByTestId('nav-open')).toHaveTextContent('false')

        await user.click(screen.getByRole('button', { name: 'Toggle Nav' }))
        expect(screen.getByTestId('nav-open')).toHaveTextContent('true')

        await user.click(screen.getByRole('link', { name: 'Qualifications' }))

        expect(screen.getByTestId('nav-open')).toHaveTextContent('false')
    })

    it('expands a parent route into an Overview link and its sub-routes', async () => {
        const user = userEvent.setup()

        renderNav()

        await user.click(screen.getByRole('link', { name: 'Experience' }))

        expect(screen.getByText('Experience', { selector: 'p' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Overview' })).toHaveAttribute(
            'href',
            '/experience'
        )
        expect(screen.getByRole('link', { name: 'Real-Time Fraud Analysis' })).toHaveAttribute(
            'href',
            '/experience/real-time-fraud-analysis'
        )
        expect(screen.getByRole('link', { name: 'Big Data Pipeline' })).toHaveAttribute(
            'href',
            '/experience/big-data-pipeline'
        )
        expect(screen.getByRole('link', { name: 'Supervisorship' })).toHaveAttribute(
            'href',
            '/experience/supervisorship'
        )
        expect(screen.getByRole('link', { name: 'Hackathon Winner' })).toHaveAttribute(
            'href',
            '/experience/hackathon-winner'
        )

        // The other top-level routes collapse away while a parent is expanded
        expect(screen.queryByRole('link', { name: 'Qualifications' })).not.toBeInTheDocument()
        expect(screen.queryByRole('link', { name: 'Resources' })).not.toBeInTheDocument()
    })

    it('collapses back to the top-level list when the Overview link is clicked', async () => {
        const user = userEvent.setup()

        renderNav()

        // Open the menu first: closing it through the Overview link is what
        // resets the expanded list via the render-phase nav-close reset.
        await user.click(screen.getByRole('button', { name: 'Toggle Nav' }))
        await user.click(screen.getByRole('link', { name: 'Experience' }))
        await user.click(screen.getByRole('link', { name: 'Overview' }))

        expect(screen.getByRole('link', { name: 'Qualifications' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Resources' })).toBeInTheDocument()
        expect(screen.queryByRole('link', { name: 'Supervisorship' })).not.toBeInTheDocument()
        expect(screen.getByTestId('nav-open')).toHaveTextContent('false')
    })
})
