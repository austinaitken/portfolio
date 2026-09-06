import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import PageLoader from '../PageLoader'

describe('PageLoader', () => {
    it('announces loading status to assistive technology', () => {
        render(<PageLoader />)

        expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading page')
    })

    it('renders a spinner element inside the status region', () => {
        const { container } = render(<PageLoader />)

        const status = screen.getByRole('status')

        expect(status.firstElementChild).not.toBeNull()
        expect(container).toContainElement(status)
    })
})
