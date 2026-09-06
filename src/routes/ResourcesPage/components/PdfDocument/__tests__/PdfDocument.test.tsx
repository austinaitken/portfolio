import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import PdfDocument from '../PdfDocument'

// Drive react-pdf's callbacks directly so load states are deterministic in jsdom.
let mockLoadSuccess: ((info: { numPages: number }) => void) | undefined
let mockLoadError: (() => void) | undefined

vi.mock('react-pdf', () => ({
    Document: ({
        onLoadSuccess,
        onLoadError,
    }: {
        onLoadSuccess?: (info: { numPages: number }) => void
        onLoadError?: () => void
    }) => {
        mockLoadSuccess = onLoadSuccess
        mockLoadError = onLoadError

        return null
    },
    Page: () => null,
    pdfjs: { GlobalWorkerOptions: {} },
}))

beforeEach(() => {
    mockLoadSuccess = undefined
    mockLoadError = undefined

    vi.spyOn(Element.prototype, 'clientWidth', 'get').mockReturnValue(800)
})

afterEach(() => {
    vi.restoreAllMocks()
})

describe('PdfDocument', () => {
    it('shows a loading state before the document resolves', () => {
        render(<PdfDocument file="resume.pdf" />)

        const status = screen.getByRole('status')

        expect(status).toHaveTextContent('Loading document...')
    })

    it('renders page controls once the document loads', () => {
        render(<PdfDocument file="resume.pdf" />)

        act(() => {
            mockLoadSuccess?.({ numPages: 2 })
        })

        expect(screen.getByText('Page 1 of 2')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Go to previous page' })).toBeDisabled()
        expect(screen.getByRole('button', { name: 'Go to next page' })).toBeEnabled()
    })

    it('moves between pages with the control buttons', async () => {
        const user = userEvent.setup()

        render(<PdfDocument file="resume.pdf" />)

        act(() => {
            mockLoadSuccess?.({ numPages: 2 })
        })

        await user.click(screen.getByRole('button', { name: 'Go to next page' }))
        expect(screen.getByText('Page 2 of 2')).toBeInTheDocument()

        await user.click(screen.getByRole('button', { name: 'Go to previous page' }))
        expect(screen.getByText('Page 1 of 2')).toBeInTheDocument()
    })

    it('hides page controls for single-page documents', () => {
        render(<PdfDocument file="one-pager.pdf" />)

        act(() => {
            mockLoadSuccess?.({ numPages: 1 })
        })

        expect(screen.queryByText(/Page \d+ of \d+/)).not.toBeInTheDocument()
        expect(screen.queryByRole('button', { name: 'Go to next page' })).not.toBeInTheDocument()
    })

    it('shows an error state when the document fails to load', () => {
        render(<PdfDocument file="broken.pdf" />)

        act(() => {
            mockLoadError?.()
        })

        expect(screen.getByRole('alert')).toHaveTextContent('This document failed to load.')
        expect(screen.getByRole('button', { name: 'Retry loading document' })).toBeInTheDocument()
    })

    it('returns to the loading state when the retry action is used', async () => {
        const user = userEvent.setup()

        render(<PdfDocument file="broken.pdf" />)

        act(() => {
            mockLoadError?.()
        })

        await user.click(screen.getByRole('button', { name: 'Retry loading document' }))

        expect(screen.getByRole('status')).toHaveTextContent('Loading document...')
    })
})
