import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AnimatedDrawing, { type AnimatedDrawingData } from '../AnimatedDrawing/AnimatedDrawing'
import { professionalWordDrawing } from '@/common/constants/animated-drawings'

const drawing: AnimatedDrawingData = {
    viewBox: '0 0 100 50',
    paths: [
        { d: 'M0 0 L10 0', duration: 1 },
        { d: 'M10 0 L20 0', duration: 2 },
    ],
}

describe('AnimatedDrawing', () => {
    it('renders one path element per drawing path with the shared viewBox', () => {
        const { container } = render(<AnimatedDrawing drawing={drawing} />)

        const svg = container.querySelector('svg')

        expect(svg).not.toBeNull()
        expect(svg).toHaveAttribute('viewBox', '0 0 100 50')

        const paths = svg?.querySelectorAll('path') ?? []

        expect(paths).toHaveLength(2)
        expect(paths[0]).toHaveAttribute('d', 'M0 0 L10 0')
        expect(paths[1]).toHaveAttribute('d', 'M10 0 L20 0')
    })

    it('applies default stroke styling and a normalized path length', () => {
        const { container } = render(<AnimatedDrawing drawing={drawing} />)

        const path = container.querySelector('path')
        const style = path?.getAttribute('style') ?? ''

        expect(path).toHaveAttribute('pathLength', '1')
        expect(style).toContain('stroke: rgb(0, 182, 134)')
        expect(style).toContain('stroke-width: 15')
        expect(style).toContain('fill: none')
        expect(style).toContain('--stroke-duration: 1s')
    })

    it('enables the fill animation styles when a fill color is provided', () => {
        const { container } = render(
            <AnimatedDrawing drawing={drawing} fillColor="#fff" fillAnimationDuration={0.5} />
        )

        const style = container.querySelector('path')?.getAttribute('style') ?? ''

        expect(style).toContain('fill: rgb(255, 255, 255)')
        expect(style).toContain('fill-opacity: 0')
        expect(style).toContain('--fill-duration: 0.5s')
    })

    it('renders the full production drawing without error', () => {
        const { container } = render(<AnimatedDrawing drawing={professionalWordDrawing} />)

        const paths = container.querySelectorAll('path')

        expect(paths.length).toBe(professionalWordDrawing.paths.length)
        expect(paths.length).toBeGreaterThan(0)
    })
})
