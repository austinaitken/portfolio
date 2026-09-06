import { render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { usePageTitle } from '../usePageTitle'

const TitleProbe = ({ title }: { title: string }) => {
    usePageTitle(title)

    return <p>{title}</p>
}

afterEach(() => {
    document.title = ''
})

describe('usePageTitle', () => {
    it('sets the document title with the site suffix', () => {
        render(<TitleProbe title="Experience" />)

        expect(document.title).toBe('Experience - Austin Aitken')
    })

    it('restores the base site title on unmount', () => {
        const { unmount } = render(<TitleProbe title="Contact Me" />)

        expect(document.title).toBe('Contact Me - Austin Aitken')

        unmount()

        expect(document.title).toBe('Austin Aitken - Software Developer & Founder')
    })
})
