import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// vitest globals are not enabled, so register RTL cleanup explicitly
// (the same effect as RTL's auto-cleanup when a global afterEach exists)
afterEach(() => {
    cleanup()
})

// jsdom has no scroll implementations
window.scrollTo = vi.fn()
Element.prototype.scrollIntoView = vi.fn()

// jsdom has no ResizeObserver (PdfDocument constructs one in an effect)
globalThis.ResizeObserver = class ResizeObserverMock {
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
} as unknown as typeof ResizeObserver
