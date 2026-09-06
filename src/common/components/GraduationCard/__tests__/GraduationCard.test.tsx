import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import GraduationCard from '../GraduationCard'

vi.mock('@/assets/images/university/Austin_Aitken_Graduation_Trading_Card.png?format=webp', () => ({
    default: 'https://example.com/graduation-trading-card.webp',
}))

describe('GraduationCard', () => {
    it('renders both faces of the trading card', () => {
        render(<GraduationCard />)

        const faces = screen.getAllByAltText("Austin Aitken's Graduation Trading Card")

        expect(faces).toHaveLength(2)
        expect(faces[0]).toHaveAttribute('src', 'https://example.com/graduation-trading-card.webp')
        expect(faces[1]).toHaveAttribute('src', 'https://example.com/graduation-trading-card.webp')
    })

    it('marks the front and back faces for assistive technology', () => {
        render(<GraduationCard />)

        const faces = screen.getAllByAltText("Austin Aitken's Graduation Trading Card")

        faces.forEach((face) => {
            expect(face).toHaveAttribute('width', '1235')
            expect(face).toHaveAttribute('height', '1733')
            expect(face).toHaveAttribute('loading', 'lazy')
            expect(face).toHaveAttribute('decoding', 'async')
        })
    })
})
