import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { CONTACT_INFO } from '@/common/constants/contact'

import ContactMePage from '../ContactMePage'

describe('ContactMePage', () => {
    it('renders a call anchor to the contact number', () => {
        render(<ContactMePage />)

        expect(screen.getByRole('link', { name: /call/i })).toHaveAttribute(
            'href',
            `tel:${CONTACT_INFO.phone}`
        )
    })

    it('renders a message anchor to the contact number', () => {
        render(<ContactMePage />)

        expect(screen.getByRole('link', { name: /message/i })).toHaveAttribute(
            'href',
            `sms:${CONTACT_INFO.phone}`
        )
    })

    it('renders an email anchor to the contact address', () => {
        render(<ContactMePage />)

        expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute(
            'href',
            `mailto:${CONTACT_INFO.email}`
        )
    })

    it('renders a LinkedIn anchor to the profile', () => {
        render(<ContactMePage />)

        expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
            'href',
            CONTACT_INFO.linkedin
        )
    })

    it('renders the intro button without a dead handler', () => {
        render(<ContactMePage />)

        expect(screen.getByRole('button', { name: 'Call Me' })).toBeInTheDocument()
    })

    it('sets the document title', () => {
        render(<ContactMePage />)

        expect(document.title).toBe('Contact Me - Austin Aitken')
    })
})
