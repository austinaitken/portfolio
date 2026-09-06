import { useLocation } from 'react-router'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'

import Header from '../Header/Header'
import { GlobalProvider } from '@/common/context/GlobalContext'
import { useGlobalContext } from '@/common/context/useGlobalContext'

const StateProbe = () => {
    const { isNavOpen } = useGlobalContext()
    const { pathname } = useLocation()

    return (
        <>
            <span data-testid="nav-open">{String(isNavOpen)}</span>
            <span data-testid="pathname">{pathname}</span>
        </>
    )
}

const renderHeader = () =>
    render(
        <GlobalProvider>
            <MemoryRouter>
                <Header />
                <StateProbe />
            </MemoryRouter>
        </GlobalProvider>
    )

describe('Header', () => {
    it('renders the logo and all top-level nav routes', () => {
        renderHeader()

        expect(screen.getByRole('link', { name: 'Austin Aitken profile picture' })).toHaveAttribute(
            'href',
            '/'
        )
        for (const [name, href] of [
            ['Overview', '/'],
            ['Experience', '/experience'],
            ['Entrepreneurship', '/entrepreneurship'],
            ['Qualifications', '/qualifications'],
            ['Personality', '/personality'],
            ['Resources', '/resources'],
        ] as const) {
            expect(screen.getByRole('link', { name })).toHaveAttribute('href', href)
        }
    })

    it('toggles the mobile nav with the hamburger button', async () => {
        const user = userEvent.setup()

        renderHeader()

        const hamburger = screen.getByRole('button', { name: 'Open navigation menu' })

        expect(hamburger).toHaveAttribute('aria-expanded', 'false')
        expect(hamburger).toHaveAttribute('aria-controls', 'mobile-nav-menu')

        await user.click(hamburger)

        expect(screen.getByRole('button', { name: 'Close navigation menu' })).toHaveAttribute(
            'aria-expanded',
            'true'
        )
        expect(screen.getByTestId('nav-open')).toHaveTextContent('true')
    })

    it('navigates to the contact page and closes the nav when Contact Me is clicked', async () => {
        const user = userEvent.setup()

        renderHeader()

        await user.click(screen.getByRole('button', { name: 'Contact Me' }))

        expect(screen.getByTestId('pathname')).toHaveTextContent('/contact-me')
        expect(screen.getByTestId('nav-open')).toHaveTextContent('false')
    })

    it('expands a nav route into its sub-routes and collapses on the second click', async () => {
        const user = userEvent.setup()

        renderHeader()

        await user.click(screen.getByRole('link', { name: 'Experience' }))

        expect(screen.getByRole('link', { name: 'Real-Time Fraud Analysis' })).toBeInTheDocument()
        expect(screen.queryByRole('link', { name: 'Qualifications' })).not.toBeInTheDocument()

        await user.click(screen.getByRole('link', { name: 'Experience' }))

        expect(
            screen.queryByRole('link', { name: 'Real-Time Fraud Analysis' })
        ).not.toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Qualifications' })).toBeInTheDocument()
    })
})
