import type { CSSProperties, SVGProps } from 'react'

import styles from './AnimatedDrawing.module.css'

export interface AnimatedDrawingPath {
    d: string
    duration: number
}

export interface AnimatedDrawingData {
    viewBox: string
    paths: AnimatedDrawingPath[]
}

interface AnimatedDrawingProps extends Omit<
    SVGProps<SVGSVGElement>,
    'children' | 'className' | 'style' | 'xmlns' | 'viewBox'
> {
    drawing: AnimatedDrawingData
    delayBetweenPaths?: number
    strokeColor?: string
    strokeWidth?: number
    fillColor?: string
    fillRule?: SVGProps<SVGPathElement>['fillRule']
    fillAnimationDuration?: number
    fillDelayAfterPathComplete?: number
}

type AnimatedPathStyle = CSSProperties & {
    '--stroke-duration': string
    '--stroke-delay': string
    '--fill-duration'?: string
    '--fill-delay'?: string
}

const AnimatedDrawing = ({
    drawing,
    delayBetweenPaths = 0.1,
    strokeColor = '#00b686',
    strokeWidth = 15,
    fillColor,
    fillRule,
    fillAnimationDuration = 0.3,
    fillDelayAfterPathComplete = 0,
    ...svgProps
}: AnimatedDrawingProps) => {
    const { paths, viewBox } = drawing
    const hasAnimatedFill = Boolean(fillColor) && fillAnimationDuration > 0
    const totalStrokeAnimationDuration =
        paths.reduce((total, path) => total + path.duration, 0) +
        Math.max(paths.length - 1, 0) * delayBetweenPaths

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} {...svgProps}>
            {paths.map((path, index) => {
                const previousDuration = paths
                    .slice(0, index)
                    .reduce((total, previousPath) => total + previousPath.duration, 0)
                const gapDelay = index === 0 ? 0 : index * delayBetweenPaths

                const strokeDelay = previousDuration + gapDelay
                const fillDelay = totalStrokeAnimationDuration + fillDelayAfterPathComplete

                const style: AnimatedPathStyle = {
                    '--stroke-duration': `${path.duration}s`,
                    '--stroke-delay': `${strokeDelay}s`,
                    ...(hasAnimatedFill && {
                        '--fill-duration': `${fillAnimationDuration}s`,
                        '--fill-delay': `${fillDelay}s`,
                    }),
                    fill: fillColor ?? 'none',
                    ...(hasAnimatedFill && { fillOpacity: 0 }),
                    fillRule,
                    stroke: strokeColor,
                    strokeWidth,
                    strokeMiterlimit: 10,
                    strokeLinecap: 'round',
                }

                return (
                    <path
                        key={index}
                        className={`${styles.animatedPath} ${hasAnimatedFill ? styles.animatedPathWithFill : ''}`}
                        d={path.d}
                        pathLength={1}
                        style={style}
                    />
                )
            })}
        </svg>
    )
}

export default AnimatedDrawing
