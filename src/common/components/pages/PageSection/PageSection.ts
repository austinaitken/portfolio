import type { ComponentType, ReactNode } from 'react'
import type { AnimatedDrawingData } from '@/common/components/AnimatedDrawing/AnimatedDrawing'

export interface PageSubSectionProps {
    title: string
    description: string
    content?: ComponentType
}

export interface PageSectionProps {
    description: string
    content?: ReactNode
    subSections?: PageSubSectionProps[]
    titleStart: string
    titleEnd: string
    titleEndDrawing: AnimatedDrawingData
    buttonLabel?: string
    buttonAction?: () => void
}
