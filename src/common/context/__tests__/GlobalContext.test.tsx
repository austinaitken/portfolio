import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { GlobalProvider } from '../GlobalContext'
import { useGlobalContext } from '../useGlobalContext'

const Probe = () => {
    const { isNavOpen, toggleNav, closeNav } = useGlobalContext()

    return (
        <div>
            <span data-testid="nav-state">{String(isNavOpen)}</span>
            <button type="button" onClick={toggleNav}>
                Toggle Nav
            </button>
            <button type="button" onClick={closeNav}>
                Close Nav
            </button>
        </div>
    )
}

describe('GlobalProvider', () => {
    it('starts with the nav closed', () => {
        render(
            <GlobalProvider>
                <Probe />
            </GlobalProvider>
        )

        expect(screen.getByTestId('nav-state')).toHaveTextContent('false')
    })

    it('opens the nav when toggleNav is called', async () => {
        const user = userEvent.setup()

        render(
            <GlobalProvider>
                <Probe />
            </GlobalProvider>
        )

        await user.click(screen.getByRole('button', { name: 'Toggle Nav' }))

        expect(screen.getByTestId('nav-state')).toHaveTextContent('true')
    })

    it('closes the nav again when toggleNav is called a second time', async () => {
        const user = userEvent.setup()

        render(
            <GlobalProvider>
                <Probe />
            </GlobalProvider>
        )

        await user.click(screen.getByRole('button', { name: 'Toggle Nav' }))
        await user.click(screen.getByRole('button', { name: 'Toggle Nav' }))

        expect(screen.getByTestId('nav-state')).toHaveTextContent('false')
    })

    it('closes the nav when closeNav is called', async () => {
        const user = userEvent.setup()

        render(
            <GlobalProvider>
                <Probe />
            </GlobalProvider>
        )

        await user.click(screen.getByRole('button', { name: 'Toggle Nav' }))
        await user.click(screen.getByRole('button', { name: 'Close Nav' }))

        expect(screen.getByTestId('nav-state')).toHaveTextContent('false')
    })
})

describe('useGlobalContext', () => {
    it('throws when used outside of GlobalProvider', () => {
        expect(() => render(<Probe />)).toThrow(
            'useGlobalContext must be used within a GlobalProvider'
        )
    })
})
